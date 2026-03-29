import { execFileSync } from "node:child_process";
import {
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
		.filter((entry) => entry.isDirectory())
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
		.map(({ version, manifestPath }) => ({
			version,
			manifestPath,
			manifest: JSON.parse(readFileSync(manifestPath, "utf8")) as SpecManifest,
		}));
}

function ensurePackage(
	version: string,
	manifestPath: string,
	manifest: SpecManifest,
): void {
	const packageDir = resolve(repoRoot, manifest.packageRoot);
	const packageParentDir = dirname(packageDir);
	const downloadDir = join(repoRoot, ".context", "spec-cache", "downloads");
	const archivePath = join(
		downloadDir,
		`${manifest.packageName}-${manifest.packageVersion}.tgz`,
	);

	mkdirSync(downloadDir, { recursive: true });
	mkdirSync(packageParentDir, { recursive: true });
	rmSync(packageDir, { recursive: true, force: true });

	execFileSync("curl", ["-L", manifest.sourceUrl, "-o", archivePath], {
		cwd: repoRoot,
		stdio: "inherit",
	});

	execFileSync("tar", ["-xzf", archivePath, "-C", packageParentDir], {
		cwd: repoRoot,
		stdio: "inherit",
	});

	console.log(
		`Fetched ${version}: ${manifest.packageName}@${manifest.packageVersion} for ${manifest.fhirVersion} using ${manifestPath}.`,
	);
}

for (const { version, manifestPath, manifest } of loadManifests()) {
	ensurePackage(version, manifestPath, manifest);
}
