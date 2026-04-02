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
import { fileURLToPath } from "node:url";

type SpecManifest = {
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
const specRoot = join(repoRoot, "src", "spec");
const requestedVersions = new Set(process.argv.slice(2));
const defaultVersions = new Set(["r4"]);

function loadManifests(): Array<{
	version: string;
	manifestPath: string;
	manifest: SpecManifest;
}> {
	return readdirSync(specRoot, { withFileTypes: true })
		.filter((entry: Dirent) => entry.isDirectory())
		.map((entry) => ({
			version: entry.name,
			manifestPath: join(specRoot, entry.name, "manifest.json"),
		}))
		.filter(({ manifestPath, version }) => {
			if (!existsSync(manifestPath)) {
				return false;
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
					readFileSync(manifestPath, "utf8"),
				) as SpecManifest,
			}),
		);
}

function ensurePackage(
	version: string,
	manifestPath: string,
	manifest: SpecManifest,
): void {
	const packageDir = resolve(repoRoot, manifest.packageRoot);
	const packageParentDir = dirname(packageDir);
	const downloadDir = join(repoRoot, ".local", "spec-cache", "downloads");
	const archivePath = join(
		downloadDir,
		`${manifest.packageName}-${manifest.packageVersion}.tgz`,
	);
	const packageReady = isPackageReady(packageDir, manifest);

	mkdirSync(downloadDir, { recursive: true });
	mkdirSync(packageParentDir, { recursive: true });

	if (!packageReady) {
		console.log(
			`spec-fetch[${version}]: cache miss for extracted package, downloading ${manifest.packageName}@${manifest.packageVersion}.`,
		);
		rmSync(packageDir, { recursive: true, force: true });

		execFileSync("curl", ["-L", manifest.sourceUrl, "-o", archivePath], {
			cwd: repoRoot,
			stdio: "inherit",
		});

		execFileSync("tar", ["-xzf", archivePath, "-C", packageParentDir], {
			cwd: repoRoot,
			stdio: "inherit",
		});
	} else {
		console.log(
			`spec-fetch[${version}]: using extracted package cache for ${manifest.packageName}@${manifest.packageVersion}.`,
		);
	}

	ensureJsonSchema(downloadDir, manifest);

	console.log(
		`Fetched ${version}: ${manifest.packageName}@${manifest.packageVersion} for ${manifest.fhirVersion} using ${manifestPath}.`,
	);
}

function isPackageReady(packageDir: string, manifest: SpecManifest): boolean {
	if (!existsSync(packageDir)) {
		return false;
	}

	const structureDefinitionPath = join(
		packageDir,
		"StructureDefinition-Patient.json",
	);

	if (!existsSync(structureDefinitionPath)) {
		return false;
	}

	if (manifest.jsonSchemaOutputPath) {
		const jsonSchemaPath = resolve(repoRoot, manifest.jsonSchemaOutputPath);

		if (!existsSync(jsonSchemaPath)) {
			return false;
		}
	}

	return true;
}

function ensureJsonSchema(downloadDir: string, manifest: SpecManifest): void {
	if (
		!manifest.jsonSchemaSourceUrl ||
		!manifest.jsonSchemaArchiveEntry ||
		!manifest.jsonSchemaOutputPath
	) {
		return;
	}

	const outputPath = resolve(repoRoot, manifest.jsonSchemaOutputPath);

	if (existsSync(outputPath)) {
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

	execFileSync(
		"curl",
		["-L", manifest.jsonSchemaSourceUrl, "-o", archivePath],
		{
			cwd: repoRoot,
			stdio: "inherit",
		},
	);

	mkdirSync(dirname(outputPath), { recursive: true });
	execFileSync(
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
			cwd: repoRoot,
			stdio: "inherit",
		},
	);
}

function basenameFromUrl(url: string): string {
	return url.split("/").at(-1) ?? "download";
}

for (const { version, manifestPath, manifest } of loadManifests()) {
	ensurePackage(version, manifestPath, manifest);
}
