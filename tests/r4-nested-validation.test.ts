import { BundleSchema, PatientSchema } from "fhir-zod/r4";
import { describe, expect, it } from "vitest";

// Target-behavior tests for nested resource validation.
//
// - `Bundle_Entry.resource` and `DomainResource.contained` currently accept
//   any `{ resourceType: string, ... }` via `.passthrough()`, so bad nested
//   data slips through.
// - Cases marked `it.fails` assert the desired strict behavior. They pass
//   today only because the inner schema fails — once nested validation is
//   implemented, flip them to plain `it(...)`.

describe("Bundle entry.resource nested validation", () => {
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

	it.fails(
		"rejects a Bundle entry whose Patient has an invalid gender code",
		() => {
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
		},
	);

	it.fails(
		"rejects a Bundle entry whose Patient has a wrong-typed field",
		() => {
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
		},
	);

	it.fails(
		"rejects a Bundle entry whose Patient has an unknown field",
		() => {
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
		},
	);

	it.fails(
		"rejects a Bundle entry whose resourceType is not a known FHIR resource",
		() => {
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
		},
	);

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
});

describe("Patient contained[] nested validation", () => {
	it("accepts a Patient with a valid contained Organization", () => {
		const result = PatientSchema.safeParse({
			resourceType: "Patient",
			contained: [
				{
					resourceType: "Organization",
					id: "org1",
					name: "Acme Hospital",
					active: true,
				},
			],
			managingOrganization: { reference: "#org1" },
		});

		expect(result.success).toBe(true);
	});

	it.fails(
		"rejects a Patient whose contained Organization has a wrong-typed field",
		() => {
			const result = PatientSchema.safeParse({
				resourceType: "Patient",
				contained: [
					{
						resourceType: "Organization",
						id: "org1",
						active: "yes",
					},
				],
			});

			expect(result.success).toBe(false);
		},
	);

	it.fails(
		"rejects a Patient whose contained Patient has an invalid gender code",
		() => {
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
		},
	);

	it.fails(
		"rejects a Patient whose contained resource has an unknown field",
		() => {
			const result = PatientSchema.safeParse({
				resourceType: "Patient",
				contained: [
					{
						resourceType: "Organization",
						id: "org1",
						notAnOrgField: true,
					},
				],
			});

			expect(result.success).toBe(false);
		},
	);

	it.fails(
		"rejects a Patient whose contained resourceType is not a known FHIR resource",
		() => {
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
		},
	);

	it("rejects a Patient whose contained resource is missing resourceType", () => {
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
