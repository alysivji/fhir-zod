// Profile: http://hl7.org/fhir/StructureDefinition/EffectEvidenceSynthesis
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";

/** A description of a component of the overall certainty. */
export interface EffectEvidenceSynthesis_Certainty_CertaintySubcomponent
	extends BackboneElement {
	/** A human-readable string to clarify or explain concepts about the resource. */
	note?: Array<Annotation>;
	/** A rating of a subcomponent of rating certainty. */
	rating?: Array<CodeableConcept>;
	/** Type of subcomponent of certainty rating. */
	type?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const EffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		note: z.lazy(getAnnotationSchema).array().optional(),
		rating: z.lazy(getCodeableConceptSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const EffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchema =
	EffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchemaInternal as z.ZodType<EffectEvidenceSynthesis_Certainty_CertaintySubcomponent>;
