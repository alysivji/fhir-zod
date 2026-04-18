import { configureFhirString } from "fhir-zod";

function assert(condition, message) {
	if (!condition) {
		throw new Error(message);
	}
}

function assertParseSuccess(schema, input, label) {
	const result = schema.safeParse(input);
	assert(result.success, `${label} should parse`);
	return result.data;
}

function assertParseFailure(schema, input, label) {
	const result = schema.safeParse(input);
	assert(!result.success, `${label} should fail`);
}

assert(
	typeof configureFhirString === "function",
	"root package should export configureFhirString",
);

configureFhirString({ allowEmpty: true });

const { HumanNameSchema: R4HumanNameSchema } = await import("fhir-zod/r4");
const { BundleSchema: R4BundleSchema } = await import("fhir-zod/r4/Bundle");
const { ObservationSchema: R4ObservationSchema } = await import(
	"fhir-zod/r4/Observation"
);
const { PatientSchema: R4PatientSchema } = await import("fhir-zod/r4/Patient");
const { PatientSchema: R4BPatientSchema } = await import(
	"fhir-zod/r4b/Patient"
);
const { PatientSchema: R5PatientSchema } = await import("fhir-zod/r5/Patient");
const { PatientSchema: STU3PatientSchema } = await import(
	"fhir-zod/stu3/Patient"
);

assertParseSuccess(
	R4HumanNameSchema,
	{ family: "" },
	"R4 HumanName should allow an empty string after configuration",
);

const patient = assertParseSuccess(
	R4PatientSchema,
	{
		resourceType: "Patient",
		id: "runtime-smoke",
		active: true,
		name: [{ family: "Lovelace", given: ["Ada"] }],
	},
	"R4 Patient",
);

assert(
	patient.resourceType === "Patient",
	"R4 Patient should keep resourceType",
);

assertParseSuccess(
	R4ObservationSchema,
	{
		resourceType: "Observation",
		status: "final",
		code: { text: "Runtime smoke" },
		subject: { reference: "Patient/runtime-smoke" },
		valueString: "ok",
	},
	"R4 Observation with one value[x]",
);

assertParseFailure(
	R4ObservationSchema,
	{
		resourceType: "Observation",
		status: "final",
		code: { text: "Runtime smoke" },
		valueString: "ok",
		valueBoolean: true,
	},
	"R4 Observation with multiple value[x] fields",
);

assertParseSuccess(
	R4BundleSchema,
	{
		resourceType: "Bundle",
		type: "collection",
		entry: [{ resource: patient }],
	},
	"R4 Bundle",
);

for (const [label, schema] of [
	["STU3", STU3PatientSchema],
	["R4B", R4BPatientSchema],
	["R5", R5PatientSchema],
]) {
	assertParseSuccess(
		schema,
		{
			resourceType: "Patient",
			id: `runtime-smoke-${label.toLowerCase()}`,
		},
		`${label} Patient`,
	);
}

console.log("Runtime smoke test passed");
