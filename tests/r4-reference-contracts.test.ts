import { ObservationSchema } from "fhir-zod/r4";
import { minimalObservation } from "./helpers/r4-contract-fixtures.ts";
import { referenceContract } from "./helpers/schema-contracts.ts";

referenceContract({
	name: "Observation.encounter constrained reference",
	schema: ObservationSchema,
	base: minimalObservation,
	valid: [
		{
			name: "relative allowed reference",
			patch: { encounter: { reference: "Encounter/example" } },
		},
		{
			name: "absolute allowed FHIR URL",
			patch: {
				encounter: { reference: "https://example.test/fhir/Encounter/example" },
			},
		},
		{
			name: "history URL",
			patch: { encounter: { reference: "Encounter/example/_history/1" } },
		},
		{
			name: "internal reference without type",
			patch: { encounter: { reference: "#enc1" } },
		},
		{
			name: "internal reference with allowed canonical type",
			patch: {
				encounter: {
					reference: "#enc1",
					type: "http://hl7.org/fhir/StructureDefinition/Encounter",
				},
			},
		},
		{
			name: "URN reference without type",
			patch: {
				encounter: {
					reference: "urn:uuid:12345678-1234-1234-1234-123456789abc",
				},
			},
		},
		{
			name: "bare allowed type without reference",
			patch: { encounter: { type: "Encounter" } },
		},
		{
			name: "canonical allowed type without reference",
			patch: {
				encounter: {
					type: "http://hl7.org/fhir/StructureDefinition/Encounter",
				},
			},
		},
	],
	invalid: [
		{
			name: "disallowed relative reference",
			patch: { encounter: { reference: "Patient/example" } },
			messageIncludes: "Expected encounter to reference one of: Encounter",
			path: ["encounter", "reference"],
		},
		{
			name: "disallowed absolute FHIR URL",
			patch: {
				encounter: { reference: "https://example.test/fhir/Patient/example" },
			},
			messageIncludes: "Expected encounter to reference one of: Encounter",
		},
		{
			name: "disallowed history URL",
			patch: { encounter: { reference: "Patient/example/_history/1" } },
			messageIncludes: "Expected encounter to reference one of: Encounter",
		},
		{
			name: "internal reference with disallowed canonical type",
			patch: {
				encounter: {
					reference: "#enc1",
					type: "http://hl7.org/fhir/StructureDefinition/Patient",
				},
			},
			messageIncludes: "Expected encounter.type to be one of: Encounter",
			path: ["encounter", "type"],
		},
		{
			name: "URN reference with disallowed type",
			patch: {
				encounter: {
					reference: "urn:uuid:12345678-1234-1234-1234-123456789abc",
					type: "Patient",
				},
			},
			messageIncludes: "Expected encounter.type to be one of: Encounter",
		},
		{
			name: "bare disallowed type",
			patch: { encounter: { type: "Patient" } },
			messageIncludes: "Expected encounter.type to be one of: Encounter",
		},
		{
			name: "reference/type mismatch",
			patch: {
				encounter: {
					reference: "Encounter/example",
					type: "Patient",
				},
			},
			messageIncludes: "Reference.type and reference disagree for encounter",
			path: ["encounter", "reference"],
		},
	],
});

referenceContract({
	name: "Observation.focus Resource target short-circuit",
	schema: ObservationSchema,
	base: minimalObservation,
	valid: [
		{
			name: "Patient focus",
			patch: { focus: [{ reference: "Patient/example" }] },
		},
		{
			name: "Organization focus",
			patch: { focus: [{ reference: "Organization/example" }] },
		},
		{
			name: "unrecognized type accepted because target is Resource",
			patch: {
				focus: [
					{
						reference: "Patient/example",
						type: "http://example.test/StructureDefinition/NotFHIR",
					},
				],
			},
		},
	],
});
