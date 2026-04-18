import type { FhirResource, HumanName } from "fhir-zod/r4";
import type { Account } from "fhir-zod/r4/Account";
import { AccountSchema } from "fhir-zod/r4/Account";
import type { Bundle } from "fhir-zod/r4/Bundle";
import { BundleSchema } from "fhir-zod/r4/Bundle";
import type { Encounter } from "fhir-zod/r4/Encounter";
import { EncounterSchema } from "fhir-zod/r4/Encounter";
import type { Observation } from "fhir-zod/r4/Observation";
import { ObservationSchema } from "fhir-zod/r4/Observation";
import type { Practitioner } from "fhir-zod/r4/Practitioner";
import { PractitionerSchema } from "fhir-zod/r4/Practitioner";
import type { ValueSet } from "fhir-zod/r4/ValueSet";
import { ValueSetSchema } from "fhir-zod/r4/ValueSet";
import type { Patient } from "fhir-zod/r4/Patient";
import { PatientSchema } from "fhir-zod/r4/Patient";
import type {
	FhirResource as R4BFhirResource,
	Patient as R4BPatient,
	Timing as R4BTiming,
} from "fhir-zod/r4b";
import {
	PatientSchema as R4BPatientSchema,
	TimingSchema as R4BTimingSchema,
} from "fhir-zod/r4b";
import type {
	FhirResource as R5FhirResource,
	Patient as R5Patient,
} from "fhir-zod/r5";
import { PatientSchema as R5PatientSchema } from "fhir-zod/r5";
import type {
	FhirResource as STU3FhirResource,
	Patient as STU3Patient,
} from "fhir-zod/stu3";
import { PatientSchema as STU3PatientSchema } from "fhir-zod/stu3";
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
		const resource: FhirResource = patient;
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
		expect(resource.resourceType).toBe("Patient");
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
		const resource: R4BFhirResource = patient;

		expect(patient.resourceType).toBe("Patient");
		expect(resource.resourceType).toBe("Patient");
	});

	it("exports R5 model types with separate schemas", () => {
		const patient: R5Patient = R5PatientSchema.parse({
			resourceType: "Patient",
		});
		const resource: R5FhirResource = patient;

		expect(patient.resourceType).toBe("Patient");
		expect(resource.resourceType).toBe("Patient");
	});

	it("exports STU3 model types with separate schemas", () => {
		const patient: STU3Patient = STU3PatientSchema.parse({
			resourceType: "Patient",
		});
		const resource: STU3FhirResource = patient;

		expect(patient.resourceType).toBe("Patient");
		expect(resource.resourceType).toBe("Patient");
	});

	it("types FHIR primitive array null placeholders", () => {
		const timing: R4BTiming = R4BTimingSchema.parse({
			_event: [
				{
					extension: [
						{
							url: "http://example.test/fhir/StructureDefinition/computed-event",
							valueString: "computed",
						},
					],
				},
			],
			event: [null],
		});

		expect(timing.event?.[0]).toBeNull();
		expect(timing._event?.[0]?.extension?.[0]?.valueString).toBe("computed");
	});
});
