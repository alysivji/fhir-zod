import { execFileSync } from "node:child_process";
import {
	existsSync,
	mkdirSync,
	readdirSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { listR4CoreResourceNames } from "../src/generator/targets/r4.ts";
import { listR4BCoreResourceNames } from "../src/generator/targets/r4b.ts";
import { listR5CoreResourceNames } from "../src/generator/targets/r5.ts";

type SupportedVersion = "r4" | "r4b" | "r5";

type ExampleLink = {
	filename: string;
	id: string;
	url: string;
};

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const args = process.argv.slice(2);
const positionalArgs = collectPositionalArgs(args);
const requestedVersion = parseVersion(positionalArgs[0]);
const version: SupportedVersion = requestedVersion ?? "r4";
const resourceArgs = requestedVersion
	? positionalArgs.slice(1)
	: positionalArgs;
const fixturesRoot = join(repoRoot, "tests", "fixtures", version);
const knownResourceNames =
	version === "r4"
		? listR4CoreResourceNames()
		: version === "r4b"
			? listR4BCoreResourceNames()
			: listR5CoreResourceNames();
const forceRefresh = hasFlag("--force");
const delayMs = parseNumberFlag("--delay-ms") ?? 1000;
const limit = parseNumberFlag("--limit");
const requestedResources = selectResourceNames(resourceArgs);
const fetchMaxBufferBytes = 64 * 1024 * 1024;

let requestCount = 0;

function parseVersion(value: string | undefined): SupportedVersion | null {
	if (value === "r4" || value === "r4b" || value === "r5") {
		return value;
	}

	return null;
}

function parseFlag(name: string): string | null {
	const directMatch = args.find((arg) => arg.startsWith(`${name}=`));

	if (directMatch) {
		return directMatch.slice(name.length + 1);
	}

	const flagIndex = args.indexOf(name);

	if (flagIndex === -1) {
		return null;
	}

	return args[flagIndex + 1] ?? null;
}

function parseNumberFlag(name: string): number | null {
	const raw = parseFlag(name);

	if (raw === null) {
		return null;
	}

	const value = Number(raw);

	if (!Number.isInteger(value) || value < 0) {
		throw new Error(
			`Expected ${name} to be a non-negative integer, got "${raw}".`,
		);
	}

	return value;
}

function hasFlag(name: string): boolean {
	return args.includes(name);
}

function collectPositionalArgs(argv: string[]): string[] {
	const positional: string[] = [];
	const flagsWithValues = new Set(["--delay-ms", "--limit"]);

	for (let index = 0; index < argv.length; index += 1) {
		const arg = argv[index];

		if (arg.startsWith("--")) {
			const [flagName] = arg.split("=", 1);

			if (flagsWithValues.has(flagName) && !arg.includes("=")) {
				index += 1;
			}

			continue;
		}

		positional.push(arg);
	}

	return positional;
}

function sleep(milliseconds: number): void {
	if (milliseconds <= 0) {
		return;
	}

	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function fetchText(url: string): string {
	if (requestCount > 0) {
		sleep(delayMs);
	}

	requestCount += 1;

	return execFileSync("curl", ["-L", "-sS", url], {
		cwd: repoRoot,
		encoding: "utf8",
		maxBuffer: fetchMaxBufferBytes,
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
	return `https://hl7.org/fhir/${version.toUpperCase()}/${resourceName.toLowerCase()}-examples.html`;
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
				`Unknown ${version.toUpperCase()} resource "${resourceName}". Known resources: ${knownResourceNames.join(", ")}.`,
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

function hasFetchedFixtures(resourceName: string): boolean {
	const outputDir = join(fixturesRoot, resourceName);

	if (!existsSync(outputDir)) {
		return false;
	}

	return readdirSync(outputDir).some((entry) => entry.endsWith(".json"));
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
		console.warn(
			`No JSON examples discovered for ${version.toUpperCase()} ${resourceName} on ${pageUrl}; leaving fixtures unchanged.`,
		);
		return false;
	}

	const outputDir = clearFixtureDirectory(resourceName);

	for (const example of discoveredExamples) {
		const json = fetchText(example.url);
		const outputPath = join(outputDir, example.filename);

		writeFileSync(outputPath, normalizeTextFileContent(json), "utf8");
		console.log(
			`Fetched ${version.toUpperCase()} ${resourceName} example ${example.id} -> ${outputPath}`,
		);
	}

	return true;
}

function main(): void {
	mkdirSync(fixturesRoot, { recursive: true });
	const failures: string[] = [];
	const skipped: string[] = [];
	const fetched: string[] = [];
	const noExamples: string[] = [];
	const selectedResources =
		limit === null ? requestedResources : requestedResources.slice(0, limit);

	for (const resourceName of selectedResources) {
		if (!forceRefresh && hasFetchedFixtures(resourceName)) {
			skipped.push(resourceName);
			console.log(
				`Skipping ${version.toUpperCase()} ${resourceName}; fixtures already exist.`,
			);
			continue;
		}

		try {
			if (fetchResourceExamples(resourceName)) {
				fetched.push(resourceName);
			} else {
				noExamples.push(resourceName);
			}
		} catch (error) {
			const detail =
				error instanceof Error
					? error.message
					: "Unknown example fetch failure.";

			if (detail.includes("Human verification blocked automated fetches")) {
				const remainingResources = selectedResources.slice(
					selectedResources.indexOf(resourceName),
				);

				console.warn(
					`Stopped at ${version.toUpperCase()} ${resourceName}; ${detail}\nFetched ${fetched.length} resources this run, skipped ${skipped.length}. Resume later with:\n` +
						`npm run fetch-examples -- ${version} ${remainingResources
							.slice(0, limit ?? remainingResources.length)
							.join(" ")}`,
				);
				break;
			}

			failures.push(`${resourceName}: ${detail}`);
		}
	}

	if (failures.length > 0) {
		throw new Error(
			`Unable to fetch fixtures for ${failures.length} ${version.toUpperCase()} resources.\n${failures.join("\n")}`,
		);
	}

	console.log(
		`Finished ${version.toUpperCase()} example fetch. fetched=${fetched.length} skipped=${skipped.length} noExamples=${noExamples.length} requests=${requestCount}`,
	);
}

main();
