// Keep this empty unless a specific official example is confirmed to be
// incompatible with the current structural validation scope.
//
// Expected failures are still executed with Vitest's it.fails. If one starts
// passing unexpectedly, remove it from this map and investigate whether the
// schema behavior changed intentionally.
// Each entry is also surfaced as a skipped tracking test in
// official-example-expected-failures.test.ts so this investigation debt remains
// visible in test summaries.
//
// Current expected failures are all mirrored from the official HL7 R4 example
// pages, but they reference resource types outside the base target constraints
// emitted by this generator from the pinned R4 StructureDefinitions. These are
// documented here so future work can trace whether the mismatch comes from:
// - an inconsistency between the official examples and the base definitions
// - a generator bug while extracting targetProfile constraints
// - a deliberate decision to accept a broader compatibility surface than the
//   base structural rules currently enforce
export const r4ExampleExpectedFailures = new Map<string, string>([
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
]);
