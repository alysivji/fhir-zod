// Profile: http://hl7.org/fhir/StructureDefinition/MedicationAdministration
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Indicates who or what performed the medication administration and how they were involved. */
export interface MedicationAdministration_Performer extends BackboneElement {
	/** Indicates who or what performed the medication administration. */
	actor: Reference;
	/** Distinguishes the type of involvement of the performer in the medication administration. */
	function?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationAdministration_PerformerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		actor: z.lazy(getReferenceSchema),
		function: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.actor,
				"actor",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
		});

export const MedicationAdministration_PerformerSchema =
	MedicationAdministration_PerformerSchemaInternal as z.ZodType<MedicationAdministration_Performer>;
