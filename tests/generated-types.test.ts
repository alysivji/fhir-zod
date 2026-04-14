import type {
	Account,
	Bundle,
	Encounter,
	HumanName,
	Observation,
	Patient,
	Practitioner,
	ValueSet,
} from "@fhir-zod/core/r4";
import {
	AccountSchema,
	BundleSchema,
	EncounterSchema,
	ObservationSchema,
	PatientSchema,
	PractitionerSchema,
	ValueSetSchema,
} from "@fhir-zod/core/r4";
import type { Patient as R4BPatient } from "@fhir-zod/core/r4b";
import { PatientSchema as R4BPatientSchema } from "@fhir-zod/core/r4b";
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

	it("exports representative core resources as model types with separate schemas", () => {
		const patient: Patient = PatientSchema.parse({
			resourceType: "Patient",
		});
		const account: Account = AccountSchema.parse({
			resourceType: "Account",
			status: "active",
		});
		const observation: Observation = ObservationSchema.parse({
			code: {
				text: "Example observation",
			},
			resourceType: "Observation",
			status: "final",
		});
		const encounter: Encounter = EncounterSchema.parse({
			class: {
				code: "AMB",
			},
			resourceType: "Encounter",
			status: "finished",
		});
		const practitioner: Practitioner = PractitionerSchema.parse({
			resourceType: "Practitioner",
		});
		const bundle: Bundle = BundleSchema.parse({
			entry: [
				{
					resource: patient,
				},
			],
			resourceType: "Bundle",
			type: "collection",
		});
		const valueSet: ValueSet = ValueSetSchema.parse({
			resourceType: "ValueSet",
			status: "active",
		});

		expect(account.resourceType).toBe("Account");
		expect(observation.resourceType).toBe("Observation");
		expect(encounter.resourceType).toBe("Encounter");
		expect(practitioner.resourceType).toBe("Practitioner");
		expect(bundle.entry?.[0]?.resource).toEqual(patient);
		expect(valueSet.resourceType).toBe("ValueSet");
	});

	it("exports R4B model types with separate schemas", () => {
		const patient: R4BPatient = R4BPatientSchema.parse({
			resourceType: "Patient",
		});

		expect(patient.resourceType).toBe("Patient");
	});
});
