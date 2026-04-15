// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";

/** The list of medical reasons that are expected to be addressed during the episode of care. */
export interface Encounter_Reason extends BackboneElement {
	/** What the reason value should be used as e.g. Chief Complaint, Health Concern, Health Maintenance (including screening). */
	use?: Array<CodeableConcept>;
	/** Reason the encounter takes place, expressed as a code or a reference to another resource. For admissions, this can be used for a coded admission diagnosis. */
	value?: Array<CodeableReference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const Encounter_ReasonSchemaInternal =
	BackboneElementSchemaInternal.extend({
		use: z.lazy(getCodeableConceptSchema).array().optional(),
		value: z.lazy(getCodeableReferenceSchema).array().optional(),
	}).strict();

export const Encounter_ReasonSchema =
	Encounter_ReasonSchemaInternal as z.ZodType<Encounter_Reason>;
