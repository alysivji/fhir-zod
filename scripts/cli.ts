import { pathToFileURL } from "node:url";
import { Command } from "commander";
import { runFetchExamplesCli } from "./fetch-examples.ts";
import { runFetchSpecCli } from "./fetch-spec.ts";
import { runGenerateCli } from "./generate.ts";
import { runInspectChoiceGroupsCli } from "./inspect-choice-groups.ts";
import { runListTargetsCli } from "./list-targets.ts";

type FetchExamplesOptions = {
	delayMs?: string;
	force?: boolean;
	limit?: string;
};

type ListTargetsOptions = {
	category?: string;
	namesOnly?: boolean;
	summary?: boolean;
};

function appendFlag(
	args: string[],
	name: string,
	value: string | undefined,
): void {
	if (value !== undefined) {
		args.push(`${name}=${value}`);
	}
}

function fetchExamplesArgs(
	args: string[],
	options: FetchExamplesOptions,
): string[] {
	const argv = [...args];

	if (options.force) {
		argv.push("--force");
	}

	appendFlag(argv, "--delay-ms", options.delayMs);
	appendFlag(argv, "--limit", options.limit);

	return argv;
}

function listTargetsArgs(
	version: string | undefined,
	options: ListTargetsOptions,
): string[] {
	const argv: string[] = [];

	if (version) {
		argv.push(version);
	}

	appendFlag(argv, "--category", options.category);

	if (options.summary) {
		argv.push("--summary");
	}

	if (options.namesOnly) {
		argv.push("--names-only");
	}

	return argv;
}

function addFetchSpecCommand(program: Command, name: string): Command {
	return program
		.command(name)
		.description("Download pinned HL7 FHIR package artifacts into .local.")
		.argument("[versions...]", "FHIR versions to fetch, or all")
		.addHelpText(
			"after",
			[
				"",
				"Examples:",
				"  $ npm run cli -- fetch-spec",
				"  $ npm run cli -- fetch-spec all",
				"  $ npm run cli -- spec fetch stu3 r4b r5",
			].join("\n"),
		)
		.action((versions: string[]) => {
			runFetchSpecCli(versions);
		});
}

function addFetchExamplesCommand(program: Command, name: string): Command {
	return program
		.command(name)
		.description("Refresh official FHIR example fixtures from the HL7 site.")
		.argument("[args...]", "FHIR version followed by optional resource names")
		.option("--force", "Replace existing fixture directories.")
		.option("--delay-ms <milliseconds>", "Delay between HL7 requests.")
		.option("--limit <count>", "Limit the number of selected resources.")
		.addHelpText(
			"after",
			[
				"",
				"Examples:",
				"  $ npm run cli -- fetch-examples",
				"  $ npm run cli -- examples fetch r5 Patient Observation --force --limit=2",
			].join("\n"),
		)
		.action((args: string[], options: FetchExamplesOptions) => {
			runFetchExamplesCli(fetchExamplesArgs(args, options));
		});
}

function addListTargetsCommand(program: Command, name: string): Command {
	return program
		.command(name)
		.description("Inspect the target inventory for a FHIR release.")
		.argument("[version]", "FHIR version to inspect")
		.option("--category <category>", "Filter by target category.")
		.option("--summary", "Print summary JSON instead of full inventory JSON.")
		.option("--names-only", "Print only target names.")
		.addHelpText(
			"after",
			[
				"",
				"Examples:",
				"  $ npm run cli -- list-targets r4 --summary",
				"  $ npm run cli -- targets list r5 --category=core-resource --names-only",
			].join("\n"),
		)
		.action((version: string | undefined, options: ListTargetsOptions) => {
			runListTargetsCli(undefined, {
				argv: listTargetsArgs(version, options),
			});
		});
}

export function createCli(): Command {
	const program = new Command();

	program
		.name("npm run cli --")
		.description("fhir-zod developer tools")
		.showHelpAfterError()
		.showSuggestionAfterError();

	program
		.command("generate")
		.description("Generate versioned TypeScript models and Zod schemas.")
		.argument("[versions...]", "FHIR versions to generate")
		.addHelpText(
			"after",
			[
				"",
				"Examples:",
				"  $ npm run cli -- generate",
				"  $ npm run cli -- generate stu3 r4b r5",
			].join("\n"),
		)
		.action((versions: string[]) => {
			runGenerateCli(versions);
		});

	addFetchSpecCommand(program, "fetch-spec");
	addFetchExamplesCommand(program, "fetch-examples");
	addListTargetsCommand(program, "list-targets");

	program
		.command("inspect-choice-groups")
		.description(
			"Print generated choice-type groups discovered from R4 inputs.",
		)
		.argument("[filter]", "Resource or choice group name filter")
		.addHelpText(
			"after",
			[
				"",
				"Examples:",
				"  $ npm run cli -- inspect-choice-groups",
				"  $ npm run cli -- choice-groups inspect Observation",
			].join("\n"),
		)
		.action((filter: string | undefined) => {
			runInspectChoiceGroupsCli(filter ? [filter] : []);
		});

	const spec = program.command("spec").description("Spec input commands.");
	addFetchSpecCommand(spec, "fetch");

	const examples = program
		.command("examples")
		.description("Official example fixture commands.");
	addFetchExamplesCommand(examples, "fetch");

	const targets = program
		.command("targets")
		.description("Target inventory commands.");
	addListTargetsCommand(targets, "list");

	const choiceGroups = program
		.command("choice-groups")
		.description("Choice group diagnostic commands.");
	choiceGroups
		.command("inspect")
		.description(
			"Print generated choice-type groups discovered from R4 inputs.",
		)
		.argument("[filter]", "Resource or choice group name filter")
		.action((filter: string | undefined) => {
			runInspectChoiceGroupsCli(filter ? [filter] : []);
		});

	return program;
}

export async function runFhirZodCli(
	argv = process.argv.slice(2),
): Promise<void> {
	await createCli().parseAsync(argv, { from: "user" });
}

if (
	process.argv[1] &&
	import.meta.url === pathToFileURL(process.argv[1]).href
) {
	await runFhirZodCli();
}
