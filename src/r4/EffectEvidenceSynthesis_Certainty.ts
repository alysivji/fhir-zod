// Profile: http://hl7.org/fhir/StructureDefinition/EffectEvidenceSynthesis
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { EffectEvidenceSynthesis_Certainty_CertaintySubcomponent } from "./EffectEvidenceSynthesis_Certainty_CertaintySubcomponent";
import { EffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchemaInternal } from "./EffectEvidenceSynthesis_Certainty_CertaintySubcomponent";

/** A description of the certainty of the effect estimate. */
export interface EffectEvidenceSynthesis_Certainty extends BackboneElement {
	/** A description of a component of the overall certainty. */
	certaintySubcomponent?: Array<EffectEvidenceSynthesis_Certainty_CertaintySubcomponent>;
	/** A human-readable string to clarify or explain concepts about the resource. */
	note?: Array<Annotation>;
	/** A rating of the certainty of the effect estimate. */
	rating?: Array<CodeableConcept>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getEffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchema =
	(): z.ZodType<EffectEvidenceSynthesis_Certainty_CertaintySubcomponent> =>
		EffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchemaInternal as z.ZodType<EffectEvidenceSynthesis_Certainty_CertaintySubcomponent>;

/** @internal */
export const EffectEvidenceSynthesis_CertaintySchemaInternal =
	BackboneElementSchemaInternal.extend({
		certaintySubcomponent: z
			.lazy(getEffectEvidenceSynthesis_Certainty_CertaintySubcomponentSchema)
			.array()
			.optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		rating: z.lazy(getCodeableConceptSchema).array().optional(),
	}).strict();

export const EffectEvidenceSynthesis_CertaintySchema =
	EffectEvidenceSynthesis_CertaintySchemaInternal as z.ZodType<EffectEvidenceSynthesis_Certainty>;
