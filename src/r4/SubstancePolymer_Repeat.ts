// Profile: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { SubstancePolymer_Repeat_RepeatUnit } from "./SubstancePolymer_Repeat_RepeatUnit";
import { SubstancePolymer_Repeat_RepeatUnitSchemaInternal } from "./SubstancePolymer_Repeat_RepeatUnit";

/** Todo. */
export interface SubstancePolymer_Repeat extends BackboneElement {
	/** Todo. */
	averageMolecularFormula?: string;
	/** Extensions for averageMolecularFormula */
	_averageMolecularFormula?: Element;
	/** Todo. */
	numberOfUnits?: number;
	/** Extensions for numberOfUnits */
	_numberOfUnits?: Element;
	/** Todo. */
	repeatUnit?: Array<SubstancePolymer_Repeat_RepeatUnit>;
	/** Todo. */
	repeatUnitAmountType?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getSubstancePolymer_Repeat_RepeatUnitSchema =
	(): z.ZodType<SubstancePolymer_Repeat_RepeatUnit> =>
		SubstancePolymer_Repeat_RepeatUnitSchemaInternal as z.ZodType<SubstancePolymer_Repeat_RepeatUnit>;

/** @internal */
export const SubstancePolymer_RepeatSchemaInternal =
	BackboneElementSchemaInternal.extend({
		averageMolecularFormula: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_averageMolecularFormula: z.lazy(getElementSchema).optional(),
		numberOfUnits: z.number().int().optional(),
		_numberOfUnits: z.lazy(getElementSchema).optional(),
		repeatUnit: z
			.lazy(getSubstancePolymer_Repeat_RepeatUnitSchema)
			.array()
			.optional(),
		repeatUnitAmountType: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstancePolymer_RepeatSchema =
	SubstancePolymer_RepeatSchemaInternal as z.ZodType<SubstancePolymer_Repeat>;
