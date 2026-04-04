// Profile: http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis
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
import type { RiskEvidenceSynthesis_Certainty_CertaintySubcomponent } from "./RiskEvidenceSynthesis_Certainty_CertaintySubcomponent";
import { RiskEvidenceSynthesis_Certainty_CertaintySubcomponentSchemaInternal } from "./RiskEvidenceSynthesis_Certainty_CertaintySubcomponent";

/** A description of the certainty of the risk estimate. */
export interface RiskEvidenceSynthesis_Certainty extends BackboneElement {
	/** A description of a component of the overall certainty. */
	certaintySubcomponent?: Array<RiskEvidenceSynthesis_Certainty_CertaintySubcomponent>;
	/** A human-readable string to clarify or explain concepts about the resource. */
	note?: Array<Annotation>;
	/** A rating of the certainty of the effect estimate. */
	rating?: Array<CodeableConcept>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getRiskEvidenceSynthesis_Certainty_CertaintySubcomponentSchema =
	(): z.ZodType<RiskEvidenceSynthesis_Certainty_CertaintySubcomponent> =>
		RiskEvidenceSynthesis_Certainty_CertaintySubcomponentSchemaInternal as z.ZodType<RiskEvidenceSynthesis_Certainty_CertaintySubcomponent>;

/** @internal */
export const RiskEvidenceSynthesis_CertaintySchemaInternal =
	BackboneElementSchemaInternal.extend({
		certaintySubcomponent: z
			.lazy(getRiskEvidenceSynthesis_Certainty_CertaintySubcomponentSchema)
			.array()
			.optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		rating: z.lazy(getCodeableConceptSchema).array().optional(),
	}).strict();

export const RiskEvidenceSynthesis_CertaintySchema =
	RiskEvidenceSynthesis_CertaintySchemaInternal as z.ZodType<RiskEvidenceSynthesis_Certainty>;
