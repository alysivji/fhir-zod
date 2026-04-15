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
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Number of samples in the statistic. */
export interface Evidence_Statistic_SampleSize extends BackboneElement {
	/** Human-readable summary of population sample size. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Number of participants with known results for measured variables. */
	knownDataCount?: number;
	/** Extensions for knownDataCount */
	_knownDataCount?: Element;
	/** Footnote or explanatory note about the sample size. */
	note?: Array<Annotation>;
	/** A human-readable string to clarify or explain concepts about the sample size. */
	numberOfParticipants?: number;
	/** Extensions for numberOfParticipants */
	_numberOfParticipants?: Element;
	/** Number of participants in the population. */
	numberOfStudies?: number;
	/** Extensions for numberOfStudies */
	_numberOfStudies?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Evidence_Statistic_SampleSizeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		knownDataCount: z.number().int().nonnegative().optional(),
		_knownDataCount: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		numberOfParticipants: z.number().int().nonnegative().optional(),
		_numberOfParticipants: z.lazy(getElementSchema).optional(),
		numberOfStudies: z.number().int().nonnegative().optional(),
		_numberOfStudies: z.lazy(getElementSchema).optional(),
	}).strict();

export const Evidence_Statistic_SampleSizeSchema =
	Evidence_Statistic_SampleSizeSchemaInternal as z.ZodType<Evidence_Statistic_SampleSize>;
