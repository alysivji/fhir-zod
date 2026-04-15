// Profile: http://hl7.org/fhir/StructureDefinition/Evidence
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Assessment of certainty, confidence in the estimates, or quality of the evidence. */
export interface Evidence_Certainty extends BackboneElement {
	/** Textual description of certainty. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Footnotes and/or explanatory notes. */
	note?: Array<Annotation>;
	/** Individual or group who did the rating. */
	rater?: string;
	/** Extensions for rater */
	_rater?: Element;
	/** Assessment or judgement of the aspect. */
	rating?: CodeableConcept;
	/** A domain or subdomain of certainty. */
	subcomponent?: Array<unknown>;
	/** Aspect of certainty being rated. */
	type?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Evidence_CertaintySchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		rater: fhirString().optional(),
		_rater: z.lazy(getElementSchema).optional(),
		rating: z.lazy(getCodeableConceptSchema).optional(),
		subcomponent: z.unknown().array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const Evidence_CertaintySchema =
	Evidence_CertaintySchemaInternal as z.ZodType<Evidence_Certainty>;
