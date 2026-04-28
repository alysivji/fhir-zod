import {
	mkdirSync,
	readFileSync,
	readdirSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import {
	type FhirRelease,
	getFhirRelease,
	supportedFhirVersions,
} from "../src/generator/versions.ts";
import { repoRoot as defaultRepoRoot } from "../src/generator/shared.ts";
import { MissingSpecPackageError } from "../src/spec/spec-cache.ts";

const docsVersionOrder = [...supportedFhirVersions].reverse();

export type SupportedResourcesDocEntry = {
	description: string | null;
	importPath: string;
	name: string;
	resourceUrl: string;
};

export type SupportedResourcesDocSection = {
	label: string;
	resources: SupportedResourcesDocEntry[];
	source: "generated-output" | "spec-cache";
	specHomeUrl: string;
	version: string;
};

export function collectSupportedResourcesSections(
	options: {
		getRelease?: (version: string) => FhirRelease | null;
		repoRoot?: string;
		versions?: readonly string[];
	} = {},
): SupportedResourcesDocSection[] {
	const getRelease = options.getRelease ?? getFhirRelease;
	const repoRoot = options.repoRoot ?? defaultRepoRoot;
	const versions = options.versions ?? docsVersionOrder;

	return versions.map((version) => {
		const release = getRelease(version);

		if (!release) {
			throw new Error(`Unknown FHIR release "${version}" for docs generation.`);
		}

		const { resources, source } = loadCoreResources(release, repoRoot);

		return {
			label: release.label,
			resources,
			source,
			specHomeUrl: release.specHomeUrl(),
			version: release.id,
		};
	});
}

export function renderSupportedResourcesDoc(
	sections: SupportedResourcesDocSection[],
): string {
	const lines = [
		"---",
		"title: FHIR Versions",
		"description: Supported FHIR releases, versioned import paths, and the generated resource inventory for each version.",
		"---",
		"",
		"# FHIR Versions & Resources",
		"",
		"`fhir-zod` supports all four major FHIR releases through explicit versioned entry points. Each release is independent — pick one for a given model flow and keep your types and schemas on that path.",
		"",
		"## Import paths",
		"",
		"| FHIR release | Version entry point | Resource entry points | HL7 spec |",
		"| --- | --- | --- | --- |",
	];

	for (const section of sections) {
		lines.push(
			`| ${section.label} | \`fhir-zod/${section.version}\` | \`fhir-zod/${section.version}/<Resource>\` | [HL7 ${section.label}](${section.specHomeUrl}) |`,
		);
	}

	lines.push(
		"",
		"Use `fhir-zod/<release>/<Resource>` for concrete resources; use `fhir-zod/<release>` for shared datatypes and release-level exports.",
		"",
		"Import concrete resources from their resource entry point:",
		"",
		"```ts",
		'import { PatientSchema, type Patient } from "fhir-zod/r4/Patient";',
		"```",
		"",
		"Import shared datatypes from the version entry point when needed:",
		"",
		"```ts",
		'import { HumanNameSchema, type HumanName } from "fhir-zod/r4";',
		"```",
		"",
		"Don't mix releases in a single flow unless you're explicitly translating between them:",
		"",
		"```ts",
		'import type { Patient as R4Patient } from "fhir-zod/r4/Patient";',
		'import type { Patient as R5Patient } from "fhir-zod/r5/Patient";',
		"```",
		"",
		"## Resource inventory",
		"",
		"Browse generated core resources by release. Each resource links back to the canonical HL7 docs for semantics beyond the package shape.",
		"",
	);

	for (const section of sections) {
		lines.push(`- [${section.label}](/versions/${section.version})`);
	}

	lines.push(
		"",
		"## Support status",
		"",
		"R5, R4B, R4, and STU3 are fully supported. The package is pre-release, so package shape and generated output may change between versions. For the full semantic meaning of any resource, refer to the official HL7 FHIR specification for that release.",
		"",
	);

	return `${lines.join("\n")}`;
}

export function renderSupportedResourcesReleaseDoc(
	section: SupportedResourcesDocSection,
): string {
	const lines = [
		"---",
		`title: ${section.label} Supported Resources`,
		`description: Generated core-resource inventory for ${section.label}.`,
		"---",
		"",
		`# ${section.label} Supported Resources`,
		"",
		"[Back to FHIR Versions](/versions/)",
		"",
		`Canonical HL7 docs: [${section.label}](${section.specHomeUrl})`,
		"",
		`Inventory source for this build: ${section.source === "spec-cache" ? "extracted pinned spec inputs" : "committed generated output fallback"}`,
		"",
		"| Resource | Import path | HL7 docs |",
		"| --- | --- | --- |",
	];

	for (const resource of section.resources) {
		const resourceLabel = renderResourceLabel(resource);
		lines.push(
			`| ${resourceLabel} | \`${resource.importPath}\` | [HL7](${resource.resourceUrl}) |`,
		);
	}

	lines.push("");

	return `${lines.join("\n")}`;
}

export function writeSupportedResourcesDocs(
	options: {
		getRelease?: (version: string) => FhirRelease | null;
		outputDir?: string;
		repoRoot?: string;
		versions?: readonly string[];
	} = {},
): string[] {
	const repoRoot = options.repoRoot ?? defaultRepoRoot;
	const outputDir =
		options.outputDir ?? join(repoRoot, "docs", "versions");
	const sections = collectSupportedResourcesSections({
		getRelease: options.getRelease,
		repoRoot,
		versions: options.versions,
	});
	const outputPaths: string[] = [];

	rmSync(join(repoRoot, "docs", "supported-resources.md"), { force: true });
	mkdirSync(outputDir, { recursive: true });

	const landingPath = join(outputDir, "index.md");
	writeFileSync(landingPath, renderSupportedResourcesDoc(sections), "utf8");
	outputPaths.push(landingPath);

	for (const section of sections) {
		const releasePath = join(outputDir, `${section.version}.md`);
		writeFileSync(
			releasePath,
			renderSupportedResourcesReleaseDoc(section),
			"utf8",
		);
		outputPaths.push(releasePath);
	}

	return outputPaths;
}

function loadCoreResources(
	release: FhirRelease,
	repoRoot: string,
): {
	resources: SupportedResourcesDocEntry[];
	source: "generated-output" | "spec-cache";
} {
	try {
		return {
			resources: release
				.loadTargetEntries()
				.filter((entry) => entry.category === "core-resource")
				.map((entry) => ({
					description: normalizeDescription(entry.description),
					importPath: `fhir-zod/${release.id}/${entry.name}`,
					name: entry.name,
					resourceUrl: release.resourcePageUrl(entry.name),
				})),
			source: "spec-cache",
		};
	} catch (error) {
		if (!(error instanceof MissingSpecPackageError)) {
			throw error;
		}

		return {
			resources: loadCoreResourcesFromGeneratedOutput(release, repoRoot),
			source: "generated-output",
		};
	}
}

function loadCoreResourcesFromGeneratedOutput(
	release: FhirRelease,
	repoRoot: string,
): SupportedResourcesDocEntry[] {
	return readdirSync(join(repoRoot, "src", release.id), {
		withFileTypes: true,
	})
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name)
		.sort((left, right) => left.localeCompare(right))
		.map((name) => ({
			description: loadGeneratedResourceDescription(release.id, name, repoRoot),
			importPath: `fhir-zod/${release.id}/${name}`,
			name,
			resourceUrl: release.resourcePageUrl(name),
		}));
}

function loadGeneratedResourceDescription(
	version: string,
	resourceName: string,
	repoRoot: string,
): string | null {
	const resourcePath = join(
		repoRoot,
		"src",
		version,
		resourceName,
		`${resourceName}.ts`,
	);
	const source = readFileSync(resourcePath, "utf8");
	const match = source.match(/\/\*\*\s*([\s\S]*?)\s*\*\/\s*export interface\b/);

	if (!match) {
		return null;
	}

	return normalizeDescription(
		match[1]
			.split("\n")
			.map((line) => line.replace(/^\s*\*\s?/, "").trim())
			.join(" "),
	);
}

function normalizeDescription(description: string | null | undefined): string | null {
	if (!description) {
		return null;
	}

	const normalized = sanitizeDescriptionMarkdown(description)
		.replace(/\s+/g, " ")
		.trim();
	return normalized.length > 0 ? normalized : null;
}

function sanitizeDescriptionMarkdown(value: string): string {
	return value
		.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
		.replace(/\[\[\[([^\]]+)\]\]\]/g, "$1");
}

function escapeTableCell(value: string): string {
	return value.replace(/\|/g, "\\|");
}

function renderResourceLabel(resource: SupportedResourcesDocEntry): string {
	if (!resource.description) {
		return escapeTableCell(resource.name);
	}

	const name = escapeHtmlAttribute(resource.name);
	const description = escapeHtmlAttribute(resource.description);
	return `<span class="resource-name-tooltip" tabindex="0">${name}<span class="resource-name-tooltip__bubble">${description}</span></span>`;
}

function escapeHtmlAttribute(value: string): string {
	return escapeTableCell(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(process.argv[1]).href
) {
	writeSupportedResourcesDocs();
}
