// Profile: http://hl7.org/fhir/StructureDefinition/MedicationAdministration
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";

/** The performer of the medication treatment.  For devices this is the device that performed the administration of the medication.  An IV Pump would be an example of a device that is performing the administration. Both the IV Pump and the practitioner that set the rate or bolus on the pump can be listed as performers. */
export interface MedicationAdministration_Performer extends BackboneElement {
	/** Indicates who or what performed the medication administration. */
	actor: CodeableReference;
	/** Distinguishes the type of involvement of the performer in the medication administration. */
	function?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const MedicationAdministration_PerformerSchemaInternal =
	BackboneElementSchemaInternal.extend({
		actor: z.lazy(getCodeableReferenceSchema),
		function: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const MedicationAdministration_PerformerSchema =
	MedicationAdministration_PerformerSchemaInternal as z.ZodType<MedicationAdministration_Performer>;
