import { execFileSync } from "node:child_process";
import {
	existsSync,
	mkdirSync,
	readdirSync,
	rmSync,
	writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
	type FhirRelease,
	type FhirVersionId,
	getFhirRelease,
} from "../src/generator/versions.ts";

type SupportedVersion = FhirVersionId;

export type ExampleLink = {
	filename: string;
	id: string;
	url: string;
};

export type FetchExamplesOptions = {
	delayMs: number;
	forceRefresh: boolean;
	limit: number | null;
	requestedResources: string[];
	version: SupportedVersion;
};

export type FetchExamplesDependencies = {
	execFileSync: typeof execFileSync;
	existsSync: typeof existsSync;
	getRelease: (version: string) => FhirRelease | null;
	log: (message: string) => void;
	mkdirSync: typeof mkdirSync;
	readdirSync: typeof readdirSync;
	rmSync: typeof rmSync;
	warn: (message: string) => void;
	writeFileSync: typeof writeFileSync;
};

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, "..");
const fetchMaxBufferBytes = 64 * 1024 * 1024;

const defaultDependencies: FetchExamplesDependencies = {
	execFileSync,
	existsSync,
	getRelease: getFhirRelease,
	log: console.log,
	mkdirSync,
	readdirSync,
	rmSync,
	warn: console.warn,
	writeFileSync,
};

export function parseFlag(args: string[], name: string): string | null {
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

export function parseNumberFlag(args: string[], name: string): number | null {
	const raw = parseFlag(args, name);

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

function hasFlag(args: string[], name: string): boolean {
	return args.includes(name);
}

export function collectPositionalArgs(argv: string[]): string[] {
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

export function parseFetchExamplesOptions(
	argv: string[],
	deps: Pick<FetchExamplesDependencies, "getRelease"> = defaultDependencies,
): FetchExamplesOptions {
	const positionalArgs = collectPositionalArgs(argv);
	const requestedVersion =
		positionalArgs[0] && deps.getRelease(positionalArgs[0])
			? (positionalArgs[0] as SupportedVersion)
			: null;
	const version: SupportedVersion = requestedVersion ?? "r4";
	const release = deps.getRelease(version);

	if (!release) {
		throw new Error(`Unknown FHIR version "${version}".`);
	}

	const resourceArgs = requestedVersion
		? positionalArgs.slice(1)
		: positionalArgs;

	return {
		delayMs: parseNumberFlag(argv, "--delay-ms") ?? 1000,
		forceRefresh: hasFlag(argv, "--force"),
		limit: parseNumberFlag(argv, "--limit"),
		requestedResources: selectResourceNames(
			resourceArgs,
			release.listCoreResourceNames(),
			version,
		),
		version,
	};
}

export function sleep(milliseconds: number): void {
	if (milliseconds <= 0) {
		return;
	}

	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function fetchText(
	url: string,
	context: {
		deps: FetchExamplesDependencies;
		delayMs: number;
		repoRoot: string;
		requestCount: number;
	},
): string {
	if (context.requestCount > 0) {
		sleep(context.delayMs);
	}

	return context.deps.execFileSync("curl", ["-L", "-sS", url], {
		cwd: context.repoRoot,
		encoding: "utf8",
		maxBuffer: fetchMaxBufferBytes,
	});
}

export function normalizeTextFileContent(content: string): string {
	return content.replace(/\r\n/g, "\n").replace(/\n*$/, "\n");
}

export function decodeHtmlEntities(value: string): string {
	return value
		.replaceAll("&amp;", "&")
		.replaceAll("&quot;", '"')
		.replaceAll("&#39;", "'")
		.replaceAll("&lt;", "<")
		.replaceAll("&gt;", ">");
}

function resourceExamplesPageUrl(
	release: FhirRelease,
	resourceName: string,
): string {
	return release.exampleResourcePageUrl(resourceName);
}

export function discoverJsonExamples(
	release: FhirRelease,
	resourceName: string,
	pageHtml: string,
): ExampleLink[] {
	const pageUrl = resourceExamplesPageUrl(release, resourceName);
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

export function selectResourceNames(
	requested: string[],
	knownResourceNames: string[],
	version: SupportedVersion,
): string[] {
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

function clearFixtureDirectory(
	resourceName: string,
	fixturesRoot: string,
	deps: FetchExamplesDependencies,
): string {
	const outputDir = join(fixturesRoot, resourceName);

	deps.rmSync(outputDir, { force: true, recursive: true });
	deps.mkdirSync(outputDir, { recursive: true });

	return outputDir;
}

function hasFetchedFixtures(
	resourceName: string,
	fixturesRoot: string,
	deps: FetchExamplesDependencies,
): boolean {
	const outputDir = join(fixturesRoot, resourceName);

	if (!deps.existsSync(outputDir)) {
		return false;
	}

	return deps.readdirSync(outputDir).some((entry) => entry.endsWith(".json"));
}

export function assertNotHumanVerification(
	pageHtml: string,
	pageUrl: string,
): void {
	if (
		pageHtml.includes("<title>Human Verification</title>") ||
		pageHtml.includes('id="captcha-container"')
	) {
		throw new Error(
			`Human verification blocked automated fetches for ${pageUrl}.`,
		);
	}
}

function fetchResourceExamples(
	resourceName: string,
	context: {
		deps: FetchExamplesDependencies;
		fixturesRoot: string;
		release: FhirRelease;
		repoRoot: string;
		requestCount: number;
		version: SupportedVersion;
		delayMs: number;
	},
): { fetched: boolean; requestCount: number } {
	const pageUrl = resourceExamplesPageUrl(context.release, resourceName);
	const pageHtml = fetchText(pageUrl, context);
	let requestCount = context.requestCount + 1;

	assertNotHumanVerification(pageHtml, pageUrl);
	const discoveredExamples = discoverJsonExamples(
		context.release,
		resourceName,
		pageHtml,
	);

	if (discoveredExamples.length === 0) {
		context.deps.warn(
			`No JSON examples discovered for ${context.version.toUpperCase()} ${resourceName} on ${pageUrl}; leaving fixtures unchanged.`,
		);
		return { fetched: false, requestCount };
	}

	const outputDir = clearFixtureDirectory(
		resourceName,
		context.fixturesRoot,
		context.deps,
	);

	for (const example of discoveredExamples) {
		const json = fetchText(example.url, {
			...context,
			requestCount,
		});
		requestCount += 1;
		const outputPath = join(outputDir, example.filename);

		context.deps.writeFileSync(
			outputPath,
			normalizeTextFileContent(json),
			"utf8",
		);
		context.deps.log(
			`Fetched ${context.version.toUpperCase()} ${resourceName} example ${example.id} -> ${outputPath}`,
		);
	}

	return { fetched: true, requestCount };
}

export function runFetchExamplesCli(
	argv = process.argv.slice(2),
	options: {
		deps?: Partial<FetchExamplesDependencies>;
		repoRoot?: string;
	} = {},
): void {
	const deps = { ...defaultDependencies, ...options.deps };
	const root = options.repoRoot ?? repoRoot;
	const parsedOptions = parseFetchExamplesOptions(argv, deps);
	const release = deps.getRelease(parsedOptions.version);

	if (!release) {
		throw new Error(`Unknown FHIR version "${parsedOptions.version}".`);
	}

	const fixturesRoot = join(root, "tests", "fixtures", parsedOptions.version);
	let requestCount = 0;

	deps.mkdirSync(fixturesRoot, { recursive: true });
	const failures: string[] = [];
	const skipped: string[] = [];
	const fetched: string[] = [];
	const noExamples: string[] = [];
	const selectedResources =
		parsedOptions.limit === null
			? parsedOptions.requestedResources
			: parsedOptions.requestedResources.slice(0, parsedOptions.limit);

	for (const resourceName of selectedResources) {
		if (
			!parsedOptions.forceRefresh &&
			hasFetchedFixtures(resourceName, fixturesRoot, deps)
		) {
			skipped.push(resourceName);
			deps.log(
				`Skipping ${parsedOptions.version.toUpperCase()} ${resourceName}; fixtures already exist.`,
			);
			continue;
		}

		try {
			const result = fetchResourceExamples(resourceName, {
				delayMs: parsedOptions.delayMs,
				deps,
				fixturesRoot,
				release,
				repoRoot: root,
				requestCount,
				version: parsedOptions.version,
			});
			requestCount = result.requestCount;

			if (result.fetched) {
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

				deps.warn(
					`Stopped at ${parsedOptions.version.toUpperCase()} ${resourceName}; ${detail}\nFetched ${fetched.length} resources this run, skipped ${skipped.length}. Resume later with:\n` +
						`npm run fetch-examples -- ${parsedOptions.version} ${remainingResources
							.slice(0, parsedOptions.limit ?? remainingResources.length)
							.join(" ")}`,
				);
				break;
			}

			failures.push(`${resourceName}: ${detail}`);
		}
	}

	if (failures.length > 0) {
		throw new Error(
			`Unable to fetch fixtures for ${failures.length} ${parsedOptions.version.toUpperCase()} resources.\n${failures.join("\n")}`,
		);
	}

	deps.log(
		`Finished ${parsedOptions.version.toUpperCase()} example fetch. fetched=${fetched.length} skipped=${skipped.length} noExamples=${noExamples.length} requests=${requestCount}`,
	);
}

if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(process.argv[1]).href
) {
	runFetchExamplesCli();
}
