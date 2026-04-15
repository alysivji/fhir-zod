import {
	AccountSchema,
	BundleSchema,
	EncounterSchema,
	ObservationSchema,
	QuantitySchema,
} from "fhir-zod/r4";
import {
	minimalAccount,
	minimalBundle,
	minimalEncounter,
	minimalObservation,
	minimalQuantity,
} from "./helpers/r4-contract-fixtures.ts";
import {
	requiredFieldContract,
	runSchemaContract,
} from "./helpers/schema-contracts.ts";

runSchemaContract({
	name: "Observation inherits DomainResource fields",
	schema: ObservationSchema,
	base: minimalObservation,
	valid: [
		{
			name: "text and extension",
			patch: {
				text: {
					status: "generated",
					div: '<div xmlns="http://www.w3.org/1999/xhtml">Example</div>',
				},
				extension: [
					{
						url: "http://example.test/fhir/StructureDefinition/observation-note",
						valueString: "base extension",
					},
				],
			},
		},
	],
	invalid: [
		{
			name: "unknown field",
			patch: { unexpectedBaseField: true },
			messageIncludes: "Unrecognized key",
		},
	],
});

runSchemaContract({
	name: "Bundle inherits Resource fields",
	schema: BundleSchema,
	base: minimalBundle,
	valid: [
		{
			name: "id, meta, and language",
			patch: {
				id: "bundle-1",
				meta: {
					profile: [
						"http://example.test/fhir/StructureDefinition/bundle-profile",
					],
				},
				language: "en",
			},
		},
	],
	invalid: [
		{
			name: "unknown field",
			patch: { unexpected: true },
			messageIncludes: "Unrecognized key",
		},
	],
});

runSchemaContract({
	name: "Quantity inherits Element fields",
	schema: QuantitySchema,
	base: minimalQuantity,
	valid: [
		{
			name: "id, extension, and own fields",
			patch: {
				id: "quantity-1",
				extension: [
					{
						url: "http://example.test/fhir/StructureDefinition/quantity-note",
						valueString: "metadata",
					},
				],
				value: 1.23,
				unit: "mg",
			},
		},
	],
	invalid: [
		{
			name: "unknown field",
			patch: { unexpected: true },
			messageIncludes: "Unrecognized key",
		},
	],
});

requiredFieldContract({
	name: "Observation required fields",
	schema: ObservationSchema,
	base: minimalObservation,
	invalid: [
		{
			name: "missing status",
			omit: ["status"],
			path: ["status"],
		},
		{
			name: "missing code",
			omit: ["code"],
			path: ["code"],
		},
	],
});

requiredFieldContract({
	name: "Encounter required fields",
	schema: EncounterSchema,
	base: minimalEncounter,
	invalid: [
		{
			name: "missing status",
			omit: ["status"],
			path: ["status"],
		},
		{
			name: "missing class",
			omit: ["class"],
			path: ["class"],
		},
	],
});

requiredFieldContract({
	name: "Account required fields",
	schema: AccountSchema,
	base: minimalAccount,
	invalid: [
		{
			name: "missing status",
			omit: ["status"],
			path: ["status"],
		},
	],
});

runSchemaContract({
	name: "Required enum bindings",
	schema: ObservationSchema,
	base: minimalObservation,
	invalid: [
		{
			name: "Observation invalid status",
			patch: { status: "not-a-status" },
			path: ["status"],
		},
	],
});

runSchemaContract({
	name: "Encounter required enum bindings",
	schema: EncounterSchema,
	base: minimalEncounter,
	invalid: [
		{
			name: "Encounter invalid status",
			patch: { status: "not-a-status" },
			path: ["status"],
		},
	],
});

runSchemaContract({
	name: "Account required enum bindings",
	schema: AccountSchema,
	base: minimalAccount,
	invalid: [
		{
			name: "Account invalid status",
			patch: { status: "not-a-status" },
			path: ["status"],
		},
	],
});

runSchemaContract({
	name: "Bundle required enum bindings",
	schema: BundleSchema,
	base: minimalBundle,
	invalid: [
		{
			name: "Bundle invalid type",
			patch: { type: "not-a-bundle-type" },
			path: ["type"],
		},
	],
});

runSchemaContract({
	name: "Encounter required backbone child",
	schema: EncounterSchema,
	base: minimalEncounter,
	invalid: [
		{
			name: "missing location reference",
			patch: {
				location: [
					{
						status: "active",
					},
				],
			},
			pathEndsWith: ["location", 0, "location"],
		},
	],
});
