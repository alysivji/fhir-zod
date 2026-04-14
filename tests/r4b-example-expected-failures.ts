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
		"ActivityDefinition/activitydefinition-administer-zika-virus-exposure-assessment.json",
		"Official example uses null in timingTiming.event[0], but the base R4B Timing.event definition requires dateTime strings.",
	],
	[
		"ActivityDefinition/activitydefinition-example.json",
		"Official example uses null in timingTiming.event[0], but the base R4B Timing.event definition requires dateTime strings.",
	],
	[
		"ActivityDefinition/activitydefinition-order-serum-dengue-virus-igm.json",
		"Official example uses null in timingTiming.event[0], but the base R4B Timing.event definition requires dateTime strings.",
	],
	[
		"ActivityDefinition/activitydefinition-order-serum-zika-dengue-virus-igm.json",
		"Official example uses null in timingTiming.event[0], but the base R4B Timing.event definition requires dateTime strings.",
	],
	[
		"ActivityDefinition/activitydefinition-predecessor-example.json",
		"Official example uses null in timingTiming.event[0], but the base R4B Timing.event definition requires dateTime strings.",
	],
	[
		"ActivityDefinition/activitydefinition-provide-mosquito-prevention-advice.json",
		"Official example uses null in timingTiming.event[0], but the base R4B Timing.event definition requires dateTime strings.",
	],
	[
		"ActivityDefinition/activitydefinition-servicerequest-example.json",
		"Official example uses null in timingTiming.event[0], but the base R4B Timing.event definition requires dateTime strings.",
	],
	[
		"DeviceMetric/devicemetric-example.json",
		"Official example references DeviceDefinition in parent, but the base R4B DeviceMetric constraint allows only Device.",
	],
	[
		"EvidenceVariable/evidencevariable-example-Wardlaw2014Analysis1.16.3EvidenceSet.json",
		"Official example references Evidence in characteristic.definitionReference, but the base R4B EvidenceVariable constraint allows only EvidenceVariable or Group.",
	],
	[
		"Library/library-fhir-model-definition.json",
		"Official example currently overflows the recursive generated Library validation graph.",
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
