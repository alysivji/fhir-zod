import { execFileSync } from "node:child_process";
import {
	type Dirent,
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export type SpecManifest = {
	fhirVersion: string;
	jsonSchemaArchiveEntry?: string;
	jsonSchemaOutputPath?: string;
	jsonSchemaSourceUrl?: string;
	packageName: string;
	packageVersion: string;
	sourceUrl: string;
	packageRoot: string;
	structureDefinitionGlob: string;
};

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const allVersionsSelector = "all";
const defaultVersions = new Set(["r4"]);

export type FetchSpecDependencies = {
	execFileSync: typeof execFileSync;
	existsSync: typeof existsSync;
	mkdirSync: typeof mkdirSync;
	readdirSync: typeof readdirSync;
	readFileSync: typeof readFileSync;
	rmSync: typeof rmSync;
};

const defaultDependencies: FetchSpecDependencies = {
	execFileSync,
	existsSync,
	mkdirSync,
	readdirSync,
	readFileSync,
	rmSync,
};

export function loadManifests(
	options: {
		deps?: FetchSpecDependencies;
		repoRoot?: string;
		requestedVersions?: Iterable<string>;
	} = {},
): Array<{
	version: string;
	manifestPath: string;
	manifest: SpecManifest;
}> {
	const deps = options.deps ?? defaultDependencies;
	const root = options.repoRoot ?? repoRoot;
	const specRoot = join(root, "src", "spec");
	const requestedVersions = new Set(options.requestedVersions ?? []);
	const includeAllVersions = requestedVersions.has(allVersionsSelector);

	return deps
		.readdirSync(specRoot, { withFileTypes: true })
		.filter((entry: Dirent) => entry.isDirectory())
		.sort((left, right) => left.name.localeCompare(right.name))
		.map((entry) => ({
			version: entry.name,
			manifestPath: join(specRoot, entry.name, "manifest.json"),
		}))
		.filter(({ manifestPath, version }) => {
			if (!deps.existsSync(manifestPath)) {
				return false;
			}

			if (includeAllVersions) {
				return true;
			}

			if (requestedVersions.size === 0) {
				return defaultVersions.has(version);
			}

			return requestedVersions.has(version);
		})
		.map(
			({
				version,
				manifestPath,
			}: {
				version: string;
				manifestPath: string;
			}) => ({
				version,
				manifestPath,
				manifest: JSON.parse(
					deps.readFileSync(manifestPath, "utf8"),
				) as SpecManifest,
			}),
		);
}

export function ensurePackage(
	version: string,
	manifestPath: string,
	manifest: SpecManifest,
	options: {
		deps?: FetchSpecDependencies;
		repoRoot?: string;
	} = {},
): void {
	const deps = options.deps ?? defaultDependencies;
	const root = options.repoRoot ?? repoRoot;
	const packageDir = resolve(root, manifest.packageRoot);
	const packageParentDir = dirname(packageDir);
	const downloadDir = join(root, ".local", "spec-cache", "downloads");
	const archivePath = join(
		downloadDir,
		`${manifest.packageName}-${manifest.packageVersion}.tgz`,
	);
	const packageReady = isPackageReady(packageDir, manifest, {
		deps,
		repoRoot: root,
	});

	deps.mkdirSync(downloadDir, { recursive: true });
	deps.mkdirSync(packageParentDir, { recursive: true });

	if (!packageReady) {
		console.log(
			`spec-fetch[${version}]: cache miss for extracted package, downloading ${manifest.packageName}@${manifest.packageVersion}.`,
		);
		deps.rmSync(packageDir, { recursive: true, force: true });

		deps.execFileSync("curl", ["-L", manifest.sourceUrl, "-o", archivePath], {
			cwd: root,
			stdio: "inherit",
		});

		deps.execFileSync("tar", ["-xzf", archivePath, "-C", packageParentDir], {
			cwd: root,
			stdio: "inherit",
		});
	} else {
		console.log(
			`spec-fetch[${version}]: using extracted package cache for ${manifest.packageName}@${manifest.packageVersion}.`,
		);
	}

	ensureJsonSchema(downloadDir, manifest, { deps, repoRoot: root });

	console.log(
		`Fetched ${version}: ${manifest.packageName}@${manifest.packageVersion} for ${manifest.fhirVersion} using ${manifestPath}.`,
	);
}

export function isPackageReady(
	packageDir: string,
	manifest: SpecManifest,
	options: {
		deps?: Pick<FetchSpecDependencies, "existsSync">;
		repoRoot?: string;
	} = {},
): boolean {
	const deps = options.deps ?? defaultDependencies;
	const root = options.repoRoot ?? repoRoot;

	if (!deps.existsSync(packageDir)) {
		return false;
	}

	const structureDefinitionPath = join(
		packageDir,
		"StructureDefinition-Patient.json",
	);

	if (!deps.existsSync(structureDefinitionPath)) {
		return false;
	}

	if (manifest.jsonSchemaOutputPath) {
		const jsonSchemaPath = resolve(root, manifest.jsonSchemaOutputPath);

		if (!deps.existsSync(jsonSchemaPath)) {
			return false;
		}
	}

	return true;
}

export function ensureJsonSchema(
	downloadDir: string,
	manifest: SpecManifest,
	options: {
		deps?: FetchSpecDependencies;
		repoRoot?: string;
	} = {},
): void {
	if (
		!manifest.jsonSchemaSourceUrl ||
		!manifest.jsonSchemaArchiveEntry ||
		!manifest.jsonSchemaOutputPath
	) {
		return;
	}

	const deps = options.deps ?? defaultDependencies;
	const root = options.repoRoot ?? repoRoot;
	const outputPath = resolve(root, manifest.jsonSchemaOutputPath);

	if (deps.existsSync(outputPath)) {
		console.log(
			`spec-fetch: using cached JSON schema at ${manifest.jsonSchemaOutputPath}.`,
		);
		return;
	}

	const archivePath = join(
		downloadDir,
		basenameFromUrl(manifest.jsonSchemaSourceUrl),
	);

	console.log(
		`spec-fetch: downloading JSON schema from ${manifest.jsonSchemaSourceUrl}.`,
	);

	deps.execFileSync(
		"curl",
		["-L", manifest.jsonSchemaSourceUrl, "-o", archivePath],
		{
			cwd: root,
			stdio: "inherit",
		},
	);

	deps.mkdirSync(dirname(outputPath), { recursive: true });
	deps.execFileSync(
		"sh",
		[
			"-c",
			`unzip -p "$1" "$2" > "$3"`,
			"sh",
			archivePath,
			manifest.jsonSchemaArchiveEntry,
			outputPath,
		],
		{
			cwd: root,
			stdio: "inherit",
		},
	);
}

export function basenameFromUrl(url: string): string {
	return url.split("/").at(-1) ?? "download";
}

export function runFetchSpecCli(
	argv = process.argv.slice(2),
	options: {
		deps?: FetchSpecDependencies;
		repoRoot?: string;
	} = {},
): void {
	const deps = options.deps ?? defaultDependencies;
	const root = options.repoRoot ?? repoRoot;

	for (const { version, manifestPath, manifest } of loadManifests({
		deps,
		repoRoot: root,
		requestedVersions: argv,
	})) {
		ensurePackage(version, manifestPath, manifest, { deps, repoRoot: root });
	}
}

if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(process.argv[1]).href
) {
	runFetchSpecCli();
}
