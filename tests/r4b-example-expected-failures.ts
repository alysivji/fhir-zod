// Keep this empty unless a specific official R4B example is confirmed to be
// incompatible with the current structural validation scope.
//
// Expected failures are still executed with Vitest's it.fails. If one starts
// passing unexpectedly, remove it from this map and investigate whether the
// schema behavior changed intentionally.
// Each entry is also surfaced as a skipped tracking test in
// official-example-expected-failures.test.ts so this investigation debt remains
// visible in test summaries.
export const r4bExampleExpectedFailures = new Map<string, string>([
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
]);
