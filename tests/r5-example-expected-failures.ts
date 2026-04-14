// Keep this empty unless a specific official R5 example is confirmed to be
// incompatible with the current structural validation scope.
//
// Expected failures are still executed with Vitest's it.fails. If one starts
// passing unexpectedly, remove it from this map and investigate whether the
// schema behavior changed intentionally.
// Each entry is also surfaced as a skipped tracking test in
// official-example-expected-failures.test.ts so this investigation debt remains
// visible in test summaries.
//
// Current expected failures are all mirrored from the official HL7 R5 example
// pages, but they conflict with constraints emitted by this generator from the
// pinned R5 StructureDefinitions. These are documented here so future work can
// trace whether each mismatch comes from:
// - an inconsistency between the official examples and the base definitions
// - a generator bug while extracting enum or targetProfile constraints
// - a deliberate decision to accept a broader compatibility surface than the
//   base structural rules currently enforce
export const r5ExampleExpectedFailures = new Map<string, string>([
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
]);
