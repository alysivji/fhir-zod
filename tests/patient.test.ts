import { Patient } from "@fhir-zod/core/r4";
import { describe, expect, it } from "vitest";

describe("Patient", () => {
	it("parses a basic patient resource", () => {
		const result = Patient.parse({
			resourceType: "Patient",
			id: "123",
		});

		expect(result).toEqual({
			resourceType: "Patient",
			id: "123",
		});
	});
});
