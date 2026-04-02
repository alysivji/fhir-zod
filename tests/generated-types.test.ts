import type { HumanName, Patient } from "@fhir-zod/core/r4";
import { PatientSchema } from "@fhir-zod/core/r4";
import { describe, expect, it } from "vitest";

describe("generated model types", () => {
	it("allows using a model type separately from its runtime validator", () => {
		const patient: Patient = PatientSchema.parse({
			active: true,
			name: [
				{
					family: "Doe",
					given: ["Jane"],
				},
			],
			resourceType: "Patient",
		});

		const humanName: HumanName = patient.name?.[0] ?? {
			family: "Fallback",
			given: ["Patient"],
		};

		expect(patient.resourceType).toBe("Patient");
		expect(humanName.family).toBe("Doe");
	});
});
