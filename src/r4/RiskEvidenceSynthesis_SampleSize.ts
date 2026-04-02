// Profile: http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A description of the size of the sample involved in the synthesis. */
export interface RiskEvidenceSynthesis_SampleSize extends BackboneElement {
	/** Human-readable summary of sample size. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Number of participants included in this evidence synthesis. */
	numberOfParticipants?: number;
	/** Extensions for numberOfParticipants */
	_numberOfParticipants?: Element;
	/** Number of studies included in this evidence synthesis. */
	numberOfStudies?: number;
	/** Extensions for numberOfStudies */
	_numberOfStudies?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const RiskEvidenceSynthesis_SampleSizeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		numberOfParticipants: z.number().int().optional(),
		_numberOfParticipants: z.lazy(getElementSchema).optional(),
		numberOfStudies: z.number().int().optional(),
		_numberOfStudies: z.lazy(getElementSchema).optional(),
	}).strict();

export const RiskEvidenceSynthesis_SampleSizeSchema =
	RiskEvidenceSynthesis_SampleSizeSchemaInternal as z.ZodType<RiskEvidenceSynthesis_SampleSize>;
