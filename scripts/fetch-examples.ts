import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { listR4CoreResourceNames } from "../src/generator/targets/r4.ts";

type ExampleLink = {
	filename: string;
	id: string;
	url: string;
};

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const fixturesRoot = join(repoRoot, "tests", "fixtures", "r4");
const knownResourceNames = listR4CoreResourceNames();
const requestedResources = selectResourceNames(process.argv.slice(2));

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

function resourceExamplesPageUrl(resourceName: string): string {
	return `https://hl7.org/fhir/R4/${resourceName.toLowerCase()}-examples.html`;
}

function discoverJsonExamples(
	resourceName: string,
	pageHtml: string,
): ExampleLink[] {
	const pageUrl = resourceExamplesPageUrl(resourceName);
	const resourceSlug = resourceName.toLowerCase();
	const discovered = new Map<string, ExampleLink>();
	const linkPattern = new RegExp(
		`href="([^"]*${resourceSlug}[^"]*\\.json\\.html)"`,
		"gi",
	);

	for (const match of pageHtml.matchAll(linkPattern)) {
		const href = match[1];

		if (!href) {
			continue;
		}

		const decodedHref = decodeHtmlEntities(href);
		const htmlUrl = new URL(decodedHref, pageUrl).toString();
		const url = htmlUrl.replace(/\.html$/, "");
		const filename = new URL(url).pathname.split("/").at(-1);

		if (!filename) {
			throw new Error(`Unable to derive filename from ${url}.`);
		}

		const id = filename.replace(/\.json$/, "");

		discovered.set(filename, {
			filename,
			id,
			url,
		});
	}

	return [...discovered.values()].sort((left, right) =>
		left.filename.localeCompare(right.filename),
	);
}

function selectResourceNames(requested: string[]): string[] {
	if (requested.length === 0) {
		return knownResourceNames;
	}

	const availableByLowerName = new Map(
		knownResourceNames.map((resourceName) => [
			resourceName.toLowerCase(),
			resourceName,
		]),
	);

	return requested.map((resourceName) => {
		const matchedName = availableByLowerName.get(resourceName.toLowerCase());

		if (!matchedName) {
			throw new Error(
				`Unknown R4 core resource "${resourceName}". Known resources: ${knownResourceNames.join(", ")}.`,
			);
		}

		return matchedName;
	});
}

function clearFixtureDirectory(resourceName: string): string {
	const outputDir = join(fixturesRoot, resourceName);

	rmSync(outputDir, { force: true, recursive: true });
	mkdirSync(outputDir, { recursive: true });

	return outputDir;
}

function assertNotHumanVerification(pageHtml: string, pageUrl: string): void {
	if (
		pageHtml.includes("<title>Human Verification</title>") ||
		pageHtml.includes('id="captcha-container"')
	) {
		throw new Error(
			`Human verification blocked automated fetches for ${pageUrl}.`,
		);
	}
}

function fetchResourceExamples(resourceName: string): boolean {
	const pageUrl = resourceExamplesPageUrl(resourceName);
	const pageHtml = fetchText(pageUrl);

	assertNotHumanVerification(pageHtml, pageUrl);
	const discoveredExamples = discoverJsonExamples(resourceName, pageHtml);

	if (discoveredExamples.length === 0) {
		throw new Error(
			`No JSON examples discovered on ${pageUrl}. Page structure may have changed.`,
		);
	}

	const outputDir = clearFixtureDirectory(resourceName);

	for (const example of discoveredExamples) {
		const json = fetchText(example.url);
		const outputPath = join(outputDir, example.filename);

		writeFileSync(outputPath, normalizeTextFileContent(json), "utf8");
		console.log(
			`Fetched R4 ${resourceName} example ${example.id} -> ${outputPath}`,
		);
	}

	return true;
}

function main(): void {
	mkdirSync(fixturesRoot, { recursive: true });
	const failures: string[] = [];

	for (const resourceName of requestedResources) {
		try {
			fetchResourceExamples(resourceName);
		} catch (error) {
			const outputDir = join(fixturesRoot, resourceName);
			const detail =
				error instanceof Error
					? error.message
					: "Unknown example fetch failure.";

			if (existsSync(outputDir)) {
				console.warn(
					`Skipped refetching R4 ${resourceName}; keeping existing fixtures. ${detail}`,
				);
				continue;
			}

			failures.push(`${resourceName}: ${detail}`);
		}
	}

	if (failures.length > 0) {
		throw new Error(
			`Unable to fetch fixtures for ${failures.length} R4 resources.\n${failures.join("\n")}`,
		);
	}
}

main();
