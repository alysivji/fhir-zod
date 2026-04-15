// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Reasons why a vaccine was or was not administered. */
export interface Immunization_Explanation extends BackboneElement {
	/** Reasons why a vaccine was administered. */
	reason?: Array<CodeableConcept>;
	/** Reason why a vaccine was not administered. */
	reasonNotGiven?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const Immunization_ExplanationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		reason: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonNotGiven: z.lazy(getCodeableConceptSchema).array().optional(),
	}).strict();

export const Immunization_ExplanationSchema =
	Immunization_ExplanationSchemaInternal as z.ZodType<Immunization_Explanation>;
