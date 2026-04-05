import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { repoRoot as defaultRepoRoot } from "../generator/shared.ts";

type SpecVersion = "stu3" | "r4" | "r4b" | "r5";

export type SpecManifest = {
	packageRoot: string;
};

export class MissingSpecPackageError extends Error {
	readonly packageRoot: string;
	readonly version: SpecVersion;

	constructor(options: {
		detail?: string;
		packageRoot: string;
		version: SpecVersion;
	}) {
		const detailSuffix = options.detail ? ` ${options.detail}` : "";

		super(
			[
				`Missing extracted FHIR spec inputs for ${options.version} at ${options.packageRoot}.`,
				"This repo commits pinned manifests, not extracted package contents.",
				`Run \`npm run fetch-spec${options.version === "r4" ? "" : ` -- ${options.version}`}\` to populate ${relativePackageRoot(options.version)}.${detailSuffix}`,
			].join(" "),
		);

		this.name = "MissingSpecPackageError";
		this.packageRoot = options.packageRoot;
		this.version = options.version;
	}
}

export function resolveRequiredSpecPackageRoot(
	version: SpecVersion,
	options?: {
		manifest?: SpecManifest;
		repoRoot?: string;
	},
): string {
	const manifest =
		options?.manifest ?? loadManifest(version, options?.repoRoot);
	const resolvedRepoRoot = options?.repoRoot ?? defaultRepoRoot;
	const packageRoot = resolve(resolvedRepoRoot, manifest.packageRoot);

	if (!existsSync(packageRoot)) {
		throw new MissingSpecPackageError({
			packageRoot,
			version,
		});
	}

	const structureDefinitionFiles = readdirSync(packageRoot).filter(
		(filename) =>
			filename.startsWith("StructureDefinition-") && filename.endsWith(".json"),
	);

	if (structureDefinitionFiles.length === 0) {
		throw new MissingSpecPackageError({
			detail:
				"The extracted package root exists but does not contain any StructureDefinition-*.json files.",
			packageRoot,
			version,
		});
	}

	return packageRoot;
}

function loadManifest(
	version: SpecVersion,
	repoRoot = defaultRepoRoot,
): SpecManifest {
	const manifestPath = join(repoRoot, "src", "spec", version, "manifest.json");
	return JSON.parse(readFileSync(manifestPath, "utf8")) as SpecManifest;
}

function relativePackageRoot(version: SpecVersion): string {
	return `.local/spec-cache/${version}/package`;
}
