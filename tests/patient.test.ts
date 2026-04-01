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
