import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, relative, resolve } from "node:path";
import * as r4DataTypeSchemas from "fhir-zod/r4";
import * as r4bSchemas from "fhir-zod/r4b";
import * as r5Schemas from "fhir-zod/r5";
import * as stu3Schemas from "fhir-zod/stu3";

const distR4Dir = fileURLToPath(new URL("../dist/r4/", import.meta.url));
const r4FolderNames = readdirSync(distR4Dir, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name);
const r4FolderModules = await Promise.all(
	r4FolderNames.map((name) => import(`../dist/r4/${name}/index.js`)),
);
const r4Schemas = Object.assign(
	{},
	r4DataTypeSchemas,
	...r4FolderModules,
);

const expectedFailureGroups = {
	stu3: new Map(),
	r4: new Map([
		[
			"DeviceMetric/devicemetric-example.json",
			"Official example references DeviceDefinition in parent, but the base R4 DeviceMetric constraint allows only Device.",
		],
		[
			"DeviceUseStatement/deviceusestatement-example.json",
			"Official example references Procedure in reasonReference, but the base R4 DeviceUseStatement constraint excludes Procedure.",
		],
		[
			"MedicationRequest/medicationrequest0301.json",
			"Official example uses Practitioner for dispenseRequest.performer, but the base R4 MedicationRequest constraint allows only Organization.",
		],
		[
			"Observation/observation-example-clinical-gender.json",
			"Official example uses Encounter as performer, but the base R4 Observation performer targets exclude Encounter.",
		],
	]),
	r4b: new Map([
		[
			"DeviceMetric/devicemetric-example.json",
			"Official example references DeviceDefinition in parent, but the base R4B DeviceMetric constraint allows only Device.",
		],
		[
			"EvidenceVariable/evidencevariable-example-Wardlaw2014Analysis1.16.3EvidenceSet.json",
			"Official example references Evidence in characteristic.definitionReference, but the base R4B EvidenceVariable constraint allows only EvidenceVariable or Group.",
		],
		[
			"Observation/observation-example-clinical-gender.json",
			"Official example uses Encounter as performer, but the base R4B Observation performer targets exclude Encounter.",
		],
		[
			"StructureDefinition/structuredefinition-example-composition.json",
			"Official example contains differential element IDs that do not match the base R4B id primitive regex.",
		],
		[
			"StructureDefinition/structuredefinition-example-section-library.json",
			"Official example contains differential element IDs that do not match the base R4B id primitive regex.",
		],
	]),
	r5: new Map([
		[
			"BiologicallyDerivedProduct/biologicallyderivedproduct-example-allogeneicHCT.json",
			"Official example references BiologicallyDerivedProduct in request, but the base R5 constraint allows only ServiceRequest.",
		],
		[
			"BiologicallyDerivedProduct/biologicallyderivedproduct-example-autologousHCT.json",
			"Official example references BiologicallyDerivedProduct in request, but the base R5 constraint allows only ServiceRequest.",
		],
		[
			"DocumentReference/documentreference-example-xray.json",
			"Official example references DocumentReference in context, but the base R5 constraint allows only Appointment, Encounter, or EpisodeOfCare.",
		],
		[
			"Encounter/encounter-example.json",
			"Official example references Encounter in careTeam, but the base R5 constraint allows only CareTeam.",
		],
		[
			"QuestionnaireResponse/questionnaireresponse-example-f201-lifelines.json",
			"Official example omits questionnaire, but the base R5 QuestionnaireResponse definition requires it.",
		],
		[
			"Transport/transport-example.json",
			"Official example references Transport in locations, but the base R5 constraint allows only Location.",
		],
	]),
};

const suites = [
	{
		fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "stu3"),
		label: "STU3",
		expectedFailures: expectedFailureGroups.stu3,
		schemas: stu3Schemas,
	},
	{
		fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "r4"),
		label: "R4",
		expectedFailures: expectedFailureGroups.r4,
		schemas: r4Schemas,
	},
	{
		fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "r4b"),
		label: "R4B",
		expectedFailures: expectedFailureGroups.r4b,
		schemas: r4bSchemas,
	},
	{
		fixturesRoot: resolve(process.cwd(), "tests", "fixtures", "r5"),
		label: "R5",
		expectedFailures: expectedFailureGroups.r5,
		schemas: r5Schemas,
	},
];

const failures = [];
let parsedCount = 0;
let expectedFailureCount = 0;

for (const suite of suites) {
	const resourceDirs = readdirSync(suite.fixturesRoot, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.sort((left, right) => left.name.localeCompare(right.name));

	for (const resourceEntry of resourceDirs) {
		const resourceDir = join(suite.fixturesRoot, resourceEntry.name);
		const entries = readdirSync(resourceDir, { withFileTypes: true });

		for (const entry of entries.sort((left, right) =>
			left.name.localeCompare(right.name),
		)) {
			if (!entry.isFile() || !entry.name.endsWith(".json")) {
				continue;
			}

			const fixturePath = join(resourceDir, entry.name);
			const fixtureKey = relative(suite.fixturesRoot, fixturePath);
			const expectedFailure = suite.expectedFailures.get(fixtureKey);
			const input = JSON.parse(readFileSync(fixturePath, "utf8"));
			const result = validateResourcePayload(input, fixtureKey, suite.schemas);

			if (expectedFailure) {
				if (result.success) {
					failures.push(
						`${suite.label} ${fixtureKey} parsed successfully but is still listed as an expected failure: ${expectedFailure}`,
					);
				} else {
					expectedFailureCount += 1;
				}

				continue;
			}

			if (!result.success) {
				failures.push(
					`${suite.label} ${fixtureKey} failed unexpectedly:\n${formatError(
						result.error,
					)}`,
				);
				continue;
			}

			parsedCount += 1;
		}
	}
}

if (failures.length > 0) {
	throw new Error(failures.join("\n\n"));
}

console.log(
	`Runtime official examples passed: ${parsedCount} parsed, ${expectedFailureCount} expected failures`,
);

function validateResourcePayload(input, fixtureLabel, schemas) {
	if (!isRecord(input) || typeof input.resourceType !== "string") {
		return {
			success: false,
			error: new Error(`${fixtureLabel} is missing a resourceType.`),
		};
	}

	if (input.resourceType === "Bundle") {
		if (
			"entry" in input &&
			input.entry !== undefined &&
			!Array.isArray(input.entry)
		) {
			return {
				success: false,
				error: new Error(`${fixtureLabel} bundle is missing entry[].`),
			};
		}

		const bundleEntries = Array.isArray(input.entry) ? input.entry : [];

		for (const [index, entry] of bundleEntries.entries()) {
			if (!isRecord(entry)) {
				return {
					success: false,
					error: new Error(`${fixtureLabel} bundle entry ${index} is invalid.`),
				};
			}

			if (!("resource" in entry) || entry.resource === undefined) {
				continue;
			}

			const result = validateResourcePayload(
				entry.resource,
				`${fixtureLabel}#entry[${index}]`,
				schemas,
			);

			if (!result.success) {
				return result;
			}
		}
	}

	const schema = schemas[`${input.resourceType}Schema`];

	if (!schema || typeof schema.safeParse !== "function") {
		return {
			success: false,
			error: new Error(
				`${fixtureLabel} uses ${input.resourceType}, but no exported schema was found.`,
			),
		};
	}

	return schema.safeParse(input);
}

function isRecord(value) {
	return typeof value === "object" && value !== null;
}

function formatError(error) {
	if (error instanceof Error) {
		return error.message;
	}

	return JSON.stringify(error, null, 2);
}
