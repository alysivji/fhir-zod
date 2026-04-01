import { Patient } from "@fhir-zod/core/r4";
import { describe, expect, it } from "vitest";

describe("Patient", () => {
	it("parses a basic patient resource", () => {
		const result = Patient.parse({
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

	it("rejects an invalid nested patient shape", () => {
		expect(() =>
			Patient.parse({
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
			Patient.parse({
				resourceType: "Patient",
				unexpected: true,
			}),
		).toThrow();
	});

	it("rejects the OpenAPI-only top-level animal field", () => {
		expect(() =>
			Patient.parse({
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
			Patient.parse({
				gender: "nonspecific",
				resourceType: "Patient",
			}),
		).toThrow();
	});

	it("rejects a Patient.link.type value outside the required SD binding", () => {
		expect(() =>
			Patient.parse({
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
		const result = Patient.parse({
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
		const result = Patient.parse({
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
		const result = Patient.parse({
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
		const result = Patient.parse({
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
		const result = Patient.parse({
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
		const result = Patient.safeParse({
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
		const result = Patient.safeParse({
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
		const result = Patient.safeParse({
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

	it("rejects when reference.type and reference disagree", () => {
		const result = Patient.safeParse({
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
			const result = Patient.safeParse({
				deceasedBoolean: true,
				resourceType: "Patient",
			});

			expect(result.success).toBe(true);
		});

		it("rejects multiple choices", () => {
			const result = Patient.safeParse({
				deceasedBoolean: true,
				deceasedDateTime: "2020-01-01T00:00:00Z",
				resourceType: "Patient",
			});

			expect(result.success).toBe(false);
		});
	});

	describe("multipleBirth[x]", () => {
		it("accepts a single choice", () => {
			const result = Patient.safeParse({
				multipleBirthInteger: 2,
				resourceType: "Patient",
			});

			expect(result.success).toBe(true);
		});

		it("rejects multiple choices", () => {
			const result = Patient.safeParse({
				multipleBirthBoolean: true,
				multipleBirthInteger: 2,
				resourceType: "Patient",
			});

			expect(result.success).toBe(false);
		});
	});
});
