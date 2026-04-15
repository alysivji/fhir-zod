import {
	ExtensionSchema,
	ObservationSchema,
	Parameters_ParameterSchema,
} from "fhir-zod/r4";
import {
	minimalExtension,
	minimalObservation,
	minimalParameter,
} from "./helpers/r4-contract-fixtures.ts";
import { choiceContract } from "./helpers/schema-contracts.ts";

choiceContract({
	name: "Observation.effective[x]",
	schema: ObservationSchema,
	base: minimalObservation,
	valid: [
		{
			name: "effectiveDateTime",
			patch: { effectiveDateTime: "2020-01-01T00:00:00Z" },
		},
		{
			name: "effectivePeriod",
			patch: { effectivePeriod: { start: "2020-01-01" } },
		},
		{
			name: "primitive metadata companion",
			patch: {
				effectiveDateTime: "2020-01-01T00:00:00Z",
				_effectiveDateTime: { id: "effective-metadata" },
			},
		},
	],
	invalid: [
		{
			name: "two variants",
			patch: {
				effectiveDateTime: "2020-01-01T00:00:00Z",
				effectivePeriod: { start: "2020-01-01" },
			},
			messageIncludes: "effective[x]",
		},
	],
});

choiceContract({
	name: "Observation.value[x]",
	schema: ObservationSchema,
	base: minimalObservation,
	valid: [
		{
			name: "valueString",
			patch: { valueString: "positive" },
		},
		{
			name: "valueQuantity",
			patch: { valueQuantity: { value: 1, unit: "mg" } },
		},
		{
			name: "primitive metadata companion",
			patch: {
				valueString: "positive",
				_valueString: { id: "value-metadata" },
			},
		},
	],
	invalid: [
		{
			name: "two variants",
			patch: {
				valueString: "positive",
				valueBoolean: true,
			},
			messageIncludes: "value[x]",
		},
	],
});

choiceContract({
	name: "Extension.value[x]",
	schema: ExtensionSchema,
	base: minimalExtension,
	valid: [
		{
			name: "valueString",
			patch: { valueString: "hello" },
		},
		{
			name: "primitive metadata companion",
			patch: {
				valueString: "hello",
				_valueString: { id: "value-metadata" },
			},
		},
	],
	invalid: [
		{
			name: "two variants",
			patch: {
				valueString: "hello",
				valueBoolean: true,
			},
			messageIncludes: "value[x]",
		},
	],
});

choiceContract({
	name: "Parameters_Parameter.value[x]",
	schema: Parameters_ParameterSchema,
	base: minimalParameter,
	valid: [
		{
			name: "valueString",
			patch: { valueString: "hello" },
		},
		{
			name: "primitive metadata companion",
			patch: {
				valueString: "hello",
				_valueString: { id: "value-metadata" },
			},
		},
	],
	invalid: [
		{
			name: "two variants",
			patch: {
				valueString: "hello",
				valueBoolean: true,
			},
			messageIncludes: "value[x]",
		},
	],
});
