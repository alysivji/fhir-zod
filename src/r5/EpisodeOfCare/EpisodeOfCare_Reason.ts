// Profile: http://hl7.org/fhir/StructureDefinition/EpisodeOfCare
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";

/** The list of medical reasons that are expected to be addressed during the episode of care. */
export interface EpisodeOfCare_Reason extends BackboneElement {
	/** What the reason value should be used as e.g. Chief Complaint, Health Concern, Health Maintenance (including screening). */
	use?: CodeableConcept;
	/** The medical reason that is expected to be addressed during the episode of care, expressed as a text, code or a reference to another resource. */
	value?: Array<CodeableReference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const EpisodeOfCare_ReasonSchemaInternal =
	BackboneElementSchemaInternal.extend({
		use: z.lazy(getCodeableConceptSchema).optional(),
		value: z.lazy(getCodeableReferenceSchema).array().optional(),
	}).strict();

export const EpisodeOfCare_ReasonSchema =
	EpisodeOfCare_ReasonSchemaInternal as z.ZodType<EpisodeOfCare_Reason>;
