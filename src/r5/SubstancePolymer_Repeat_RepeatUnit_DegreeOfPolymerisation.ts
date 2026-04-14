// Profile: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described. */
export interface SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation
	extends BackboneElement {
	/** An average amount of polymerisation. */
	average?: number;
	/** Extensions for average */
	_average?: Element;
	/** A high expected limit of the amount. */
	high?: number;
	/** Extensions for high */
	_high?: Element;
	/** A low expected limit of the amount. */
	low?: number;
	/** Extensions for low */
	_low?: Element;
	/** The type of the degree of polymerisation shall be described, e.g. SRU/Polymer Ratio. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		average: z.number().int().optional(),
		_average: z.lazy(getElementSchema).optional(),
		high: z.number().int().optional(),
		_high: z.lazy(getElementSchema).optional(),
		low: z.number().int().optional(),
		_low: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchema =
	SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchemaInternal as z.ZodType<SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation>;
