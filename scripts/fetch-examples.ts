import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

type ExampleLink = {
	id: string;
	filename: string;
	url: string;
};

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const requestedExamples = new Set(process.argv.slice(2));

const patientExamplesPageUrl = "https://hl7.org/fhir/R4/patient-examples.html";
const outputDir = join(repoRoot, "tests", "fixtures", "r4", "Patient");

function fetchText(url: string): string {
	return execFileSync("curl", ["-L", "-sS", url], {
		cwd: repoRoot,
		encoding: "utf8",
	});
}

function normalizeTextFileContent(content: string): string {
	return content.replace(/\r\n/g, "\n").replace(/\n*$/, "\n");
}

function decodeHtmlEntities(value: string): string {
	return value
		.replaceAll("&amp;", "&")
		.replaceAll("&quot;", '"')
		.replaceAll("&#39;", "'")
		.replaceAll("&lt;", "<")
		.replaceAll("&gt;", ">");
}

function discoverPatientJsonExamples(pageHtml: string): ExampleLink[] {
	const discovered = new Map<string, ExampleLink>();
	const linkPattern = /href="([^"]*patient-[^"]+\.json\.html)"/g;

	for (const match of pageHtml.matchAll(linkPattern)) {
		const href = match[1];

		if (!href) {
			continue;
		}

		const decodedHref = decodeHtmlEntities(href);
		const htmlUrl = new URL(decodedHref, patientExamplesPageUrl).toString();
		const url = htmlUrl.replace(/\.html$/, "");
		const filename = new URL(url).pathname.split("/").at(-1);

		if (!filename) {
			throw new Error(`Unable to derive filename from ${url}.`);
		}

		const id = filename.replace(/^patient-/, "").replace(/\.json$/, "");

		discovered.set(id, {
			id,
			filename,
			url,
		});
	}

	return [...discovered.values()].sort((a, b) => a.id.localeCompare(b.id));
}

function selectExamples(exampleLinks: ExampleLink[]): ExampleLink[] {
	if (requestedExamples.size === 0) {
		return exampleLinks;
	}

	const available = new Map(
		exampleLinks.map((example) => [example.id, example]),
	);

	return [...requestedExamples].map((exampleId) => {
		const example = available.get(exampleId);

		if (!example) {
			throw new Error(
				`Unknown R4 Patient example "${exampleId}". Known examples: ${exampleLinks
					.map((candidate) => candidate.id)
					.join(", ")}.`,
			);
		}

		return example;
	});
}

function fetchJsonExample(example: ExampleLink): void {
	const json = fetchText(example.url);
	const outputPath = join(outputDir, example.filename);

	writeFileSync(outputPath, normalizeTextFileContent(json), "utf8");
	console.log(`Fetched R4 Patient example ${example.id} -> ${outputPath}`);
}

function main(): void {
	mkdirSync(outputDir, { recursive: true });

	const pageHtml = fetchText(patientExamplesPageUrl);
	const discoveredExamples = discoverPatientJsonExamples(pageHtml);

	if (discoveredExamples.length === 0) {
		throw new Error(
			`No JSON examples discovered on ${patientExamplesPageUrl}. Page structure may have changed.`,
		);
	}

	const selectedExamples = selectExamples(discoveredExamples);

	for (const example of selectedExamples) {
		fetchJsonExample(example);
	}
}

main();
