import { HumanName, Patient } from "@fhir-zod/core/r4";
import { describe, expect, it } from "vitest";

describe("generated type aliases", () => {
	it("allows using a schema export as both a runtime validator and a type", () => {
		const patient: Patient = Patient.parse({
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
