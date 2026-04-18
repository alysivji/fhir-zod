import { PatientSchema } from "fhir-zod/r4/Patient";
import { describe, expect, it } from "vitest";

describe("Patient", () => {
	it("parses a basic patient resource", () => {
		const result = PatientSchema.parse({
			active: true,
			birthDate: "1980-01-01",
			gender: "female",
			resourceType: "Patient",
			id: "123",
			identifier: [
				{
					system: "http://hospital.example/patients",
					value: "MRN-123",
				},
			],
			name: [
				{
					family: "Doe",
					given: ["Jane"],
					use: "official",
				},
			],
		});

		expect(result).toEqual({
			active: true,
			birthDate: "1980-01-01",
			gender: "female",
			resourceType: "Patient",
			id: "123",
			identifier: [
				{
					system: "http://hospital.example/patients",
					value: "MRN-123",
				},
			],
			name: [
				{
					family: "Doe",
					given: ["Jane"],
					use: "official",
				},
			],
		});
	});

	it("validates contained resources against the full resource dispatcher", () => {
		expect(
			PatientSchema.safeParse({
				contained: [{ resourceType: "Patient" }],
				resourceType: "Patient",
			}).success,
		).toBe(true);

		expect(
			PatientSchema.safeParse({
				contained: [
					{
						code: { text: "Example observation" },
						resourceType: "Observation",
						status: "final",
					},
				],
				resourceType: "Patient",
			}).success,
		).toBe(true);
	});

	it("rejects an invalid nested patient shape", () => {
		expect(() =>
			PatientSchema.parse({
				resourceType: "Patient",
				identifier: [
					{
						system: "http://hospital.example/patients",
						value: 123,
					},
				],
			}),
		).toThrow();
	});

	it("rejects unknown top-level patient fields", () => {
		expect(() =>
			PatientSchema.parse({
				resourceType: "Patient",
				unexpected: true,
			}),
		).toThrow();
	});

	it("rejects the OpenAPI-only top-level animal field", () => {
		expect(() =>
			PatientSchema.parse({
				animal: {
					species: {
						text: "dog",
					},
				},
				resourceType: "Patient",
			}),
		).toThrow();
	});

	it("rejects a Patient.gender value outside the required SD binding", () => {
		expect(() =>
			PatientSchema.parse({
				gender: "nonspecific",
				resourceType: "Patient",
			}),
		).toThrow();
	});

	it("rejects a Patient.link.type value outside the required SD binding", () => {
		expect(() =>
			PatientSchema.parse({
				link: [
					{
						other: {
							reference: "Patient/example",
						},
						type: "invalid-link-type",
					},
				],
				resourceType: "Patient",
			}),
		).toThrow();
	});

	it("accepts references that include an allowed target resource type", () => {
		const result = PatientSchema.parse({
			generalPractitioner: [
				{
					reference: "Practitioner/example",
				},
			],
			resourceType: "Patient",
		});

		expect(result.generalPractitioner).toEqual([
			{
				reference: "Practitioner/example",
			},
		]);
	});

	it("accepts recognizable absolute FHIR URLs for constrained references", () => {
		const result = PatientSchema.parse({
			generalPractitioner: [
				{
					reference: "https://example.org/fhir/Practitioner/example",
				},
			],
			resourceType: "Patient",
		});

		expect(result.generalPractitioner).toEqual([
			{
				reference: "https://example.org/fhir/Practitioner/example",
			},
		]);
	});

	it("accepts internal references when type is allowed", () => {
		const result = PatientSchema.parse({
			managingOrganization: {
				reference: "#org1",
				type: "http://hl7.org/fhir/StructureDefinition/Organization",
			},
			resourceType: "Patient",
		});

		expect(result.managingOrganization).toEqual({
			reference: "#org1",
			type: "http://hl7.org/fhir/StructureDefinition/Organization",
		});
	});

	it("allows ambiguous references without type", () => {
		const result = PatientSchema.parse({
			managingOrganization: {
				reference: "urn:uuid:12345678-1234-1234-1234-123456789abc",
			},
			resourceType: "Patient",
		});

		expect(result.managingOrganization).toEqual({
			reference: "urn:uuid:12345678-1234-1234-1234-123456789abc",
		});
	});

	it("allows opaque absolute references without type", () => {
		const result = PatientSchema.parse({
			managingOrganization: {
				reference: "https://example.org/not-a-fhir-path",
			},
			resourceType: "Patient",
		});

		expect(result.managingOrganization).toEqual({
			reference: "https://example.org/not-a-fhir-path",
		});
	});

	it("rejects references that use the wrong target resource type", () => {
		const result = PatientSchema.safeParse({
			managingOrganization: {
				reference: "Patient/example",
			},
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
		if (result.success) {
			throw new Error("Expected validation failure");
		}
		expect(result.error.issues).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					message: expect.stringContaining(
						"Expected managingOrganization to reference one of: Organization",
					),
					path: ["managingOrganization", "reference"],
				}),
			]),
		);
	});

	it("rejects link.other references outside the allowed targets", () => {
		const result = PatientSchema.safeParse({
			link: [
				{
					other: {
						reference: "Organization/example",
					},
					type: "seealso",
				},
			],
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
		if (result.success) {
			throw new Error("Expected validation failure");
		}
		expect(result.error.issues).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					message: expect.stringContaining(
						"Expected other to reference one of: Patient, RelatedPerson",
					),
					path: ["link", 0, "other", "reference"],
				}),
			]),
		);
	});

	it("rejects invalid reference.type values for constrained references", () => {
		const result = PatientSchema.safeParse({
			generalPractitioner: [
				{
					type: "http://hl7.org/fhir/StructureDefinition/Patient",
				},
			],
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
		if (result.success) {
			throw new Error("Expected validation failure");
		}
		expect(result.error.issues).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					message: expect.stringContaining(
						"Expected generalPractitioner.type to be one of: Organization, Practitioner, PractitionerRole",
					),
					path: ["generalPractitioner", 0, "type"],
				}),
			]),
		);
	});

	it("accepts bare resource names in reference.type", () => {
		const result = PatientSchema.parse({
			managingOrganization: {
				reference: "Organization/example",
				type: "Organization",
			},
			resourceType: "Patient",
		});

		expect(result.managingOrganization).toEqual({
			reference: "Organization/example",
			type: "Organization",
		});
	});

	it("rejects when reference.type and reference disagree", () => {
		const result = PatientSchema.safeParse({
			managingOrganization: {
				reference: "Patient/example",
				type: "http://hl7.org/fhir/StructureDefinition/Organization",
			},
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
		if (result.success) {
			throw new Error("Expected validation failure");
		}
		expect(result.error.issues).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					message: expect.stringContaining(
						"Reference.type and reference disagree for managingOrganization",
					),
					path: ["managingOrganization", "reference"],
				}),
			]),
		);
	});

	describe("deceased[x]", () => {
		it("accepts a single choice", () => {
			const result = PatientSchema.safeParse({
				deceasedBoolean: true,
				resourceType: "Patient",
			});

			expect(result.success).toBe(true);
		});

		it("rejects multiple choices", () => {
			const result = PatientSchema.safeParse({
				deceasedBoolean: true,
				deceasedDateTime: "2020-01-01T00:00:00Z",
				resourceType: "Patient",
			});

			expect(result.success).toBe(false);
		});
	});

	it("parses a minimal patient resource", () => {
		expect(PatientSchema.safeParse({ resourceType: "Patient" }).success).toBe(
			true,
		);
	});

	it("rejects references that use the wrong target resource type", () => {
		const result = PatientSchema.safeParse({
			managingOrganization: {
				reference: "Patient/example",
			},
			resourceType: "Patient",
		});

		expect(result.success).toBe(false);
		if (result.success) {
			throw new Error("Expected validation failure");
		}
		expect(result.error.issues).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					code: "custom",
					message: expect.stringContaining(
						"Expected managingOrganization to reference one of: Organization",
					),
					path: ["managingOrganization", "reference"],
				}),
			]),
		);
	});

	describe("multipleBirth[x]", () => {
		it("accepts a single choice", () => {
			const result = PatientSchema.safeParse({
				multipleBirthInteger: 2,
				resourceType: "Patient",
			});

			expect(result.success).toBe(true);
		});

		it("rejects multiple choices", () => {
			const result = PatientSchema.safeParse({
				multipleBirthBoolean: true,
				multipleBirthInteger: 2,
				resourceType: "Patient",
			});

			expect(result.success).toBe(false);
		});
	});
});
