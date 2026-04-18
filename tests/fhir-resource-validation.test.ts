import type { FhirResource as R4FhirResource } from "fhir-zod/r4";
import { BundleSchema as R4BundleSchema } from "fhir-zod/r4/Bundle";
import { PatientSchema as R4PatientSchema } from "fhir-zod/r4/Patient";
import type { FhirResource as R4BFhirResource } from "fhir-zod/r4b";
import { BundleSchema as R4BBundleSchema } from "fhir-zod/r4b/Bundle";
import { PatientSchema as R4BPatientSchema } from "fhir-zod/r4b/Patient";
import type { FhirResource as R5FhirResource } from "fhir-zod/r5";
import { BundleSchema as R5BundleSchema } from "fhir-zod/r5/Bundle";
import { PatientSchema as R5PatientSchema } from "fhir-zod/r5/Patient";
import type { FhirResource as STU3FhirResource } from "fhir-zod/stu3";
import { BundleSchema as STU3BundleSchema } from "fhir-zod/stu3/Bundle";
import { PatientSchema as STU3PatientSchema } from "fhir-zod/stu3/Patient";
import { describe, expect, it } from "vitest";
import type { z } from "zod";

type VersionCase = {
	BundleSchema: z.ZodTypeAny;
	PatientSchema: z.ZodTypeAny;
	label: string;
};

const fhirResourceTypeSmoke: [
	STU3FhirResource,
	R4FhirResource,
	R4BFhirResource,
	R5FhirResource,
] = [
	{ resourceType: "Patient" },
	{ resourceType: "Patient" },
	{ resourceType: "Patient" },
	{ resourceType: "Patient" },
];

const versions: VersionCase[] = [
	{
		BundleSchema: STU3BundleSchema,
		PatientSchema: STU3PatientSchema,
		label: "STU3",
	},
	{
		BundleSchema: R4BundleSchema,
		PatientSchema: R4PatientSchema,
		label: "R4",
	},
	{
		BundleSchema: R4BBundleSchema,
		PatientSchema: R4BPatientSchema,
		label: "R4B",
	},
	{
		BundleSchema: R5BundleSchema,
		PatientSchema: R5PatientSchema,
		label: "R5",
	},
];

describe("FHIR resource validation", () => {
	it("exports FhirResource as a public resource union type", () => {
		expect(
			fhirResourceTypeSmoke.map((resource) => resource.resourceType),
		).toEqual(["Patient", "Patient", "Patient", "Patient"]);
	});

	for (const { BundleSchema, PatientSchema, label } of versions) {
		describe(label, () => {
			it("accepts a Bundle whose entry contains a valid Patient", () => {
				const result = BundleSchema.safeParse({
					resourceType: "Bundle",
					type: "collection",
					entry: [
						{
							resource: {
								resourceType: "Patient",
								id: "p1",
								gender: "female",
							},
						},
					],
				});

				expect(result.success).toBe(true);
			});

			it("rejects a Bundle entry whose Patient has an invalid gender code", () => {
				const result = BundleSchema.safeParse({
					resourceType: "Bundle",
					type: "collection",
					entry: [
						{
							resource: {
								resourceType: "Patient",
								gender: "not-a-real-gender",
							},
						},
					],
				});

				expect(result.success).toBe(false);
			});

			it("rejects a Bundle entry whose Patient has a wrong-typed field", () => {
				const result = BundleSchema.safeParse({
					resourceType: "Bundle",
					type: "collection",
					entry: [
						{
							resource: {
								resourceType: "Patient",
								active: "yes",
							},
						},
					],
				});

				expect(result.success).toBe(false);
			});

			it("rejects a Bundle entry whose Patient has an unknown field", () => {
				const result = BundleSchema.safeParse({
					resourceType: "Bundle",
					type: "collection",
					entry: [
						{
							resource: {
								resourceType: "Patient",
								notAPatientField: true,
							},
						},
					],
				});

				expect(result.success).toBe(false);
			});

			it("rejects a Bundle entry whose resourceType is not known", () => {
				const result = BundleSchema.safeParse({
					resourceType: "Bundle",
					type: "collection",
					entry: [
						{
							resource: {
								resourceType: "NotARealResource",
								id: "x",
							},
						},
					],
				});

				expect(result.success).toBe(false);
			});

			it("rejects a Bundle entry whose resource is missing resourceType", () => {
				const result = BundleSchema.safeParse({
					resourceType: "Bundle",
					type: "collection",
					entry: [
						{
							resource: {
								id: "x",
							},
						},
					],
				});

				expect(result.success).toBe(false);
			});

			it("accepts a Patient with a valid contained Patient", () => {
				const result = PatientSchema.safeParse({
					resourceType: "Patient",
					contained: [
						{
							resourceType: "Patient",
							id: "inner",
							gender: "female",
						},
					],
				});

				expect(result.success).toBe(true);
			});

			it("rejects a contained Patient with an invalid gender code", () => {
				const result = PatientSchema.safeParse({
					resourceType: "Patient",
					contained: [
						{
							resourceType: "Patient",
							id: "inner",
							gender: "not-a-real-gender",
						},
					],
				});

				expect(result.success).toBe(false);
			});

			it("rejects a contained resourceType that is not known", () => {
				const result = PatientSchema.safeParse({
					resourceType: "Patient",
					contained: [
						{
							resourceType: "NotARealResource",
							id: "x",
						},
					],
				});

				expect(result.success).toBe(false);
			});

			it("rejects a contained resource missing resourceType", () => {
				const result = PatientSchema.safeParse({
					resourceType: "Patient",
					contained: [
						{
							id: "x",
						},
					],
				});

				expect(result.success).toBe(false);
			});
		});
	}
});
