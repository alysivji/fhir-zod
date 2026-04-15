// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** The assignment to an organizing scheme. */
export interface Citation_Classification extends BackboneElement {
	/** The specific classification value. */
	classifier?: Array<CodeableConcept>;
	/** The kind of classifier (e.g. publication type, keyword). */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const Citation_ClassificationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		classifier: z.lazy(getCodeableConceptSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const Citation_ClassificationSchema =
	Citation_ClassificationSchemaInternal as z.ZodType<Citation_Classification>;
