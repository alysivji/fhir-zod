// Profile: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { SubstancePolymer_Repeat_RepeatUnit } from "./SubstancePolymer_Repeat_RepeatUnit";
import { SubstancePolymer_Repeat_RepeatUnitSchemaInternal } from "./SubstancePolymer_Repeat_RepeatUnit";

/** Specifies and quantifies the repeated units and their configuration. */
export interface SubstancePolymer_Repeat extends BackboneElement {
	/** A representation of an (average) molecular formula from a polymer. */
	averageMolecularFormula?: string;
	/** Extensions for averageMolecularFormula */
	_averageMolecularFormula?: Element;
	/** An SRU - Structural Repeat Unit. */
	repeatUnit?: Array<SubstancePolymer_Repeat_RepeatUnit>;
	/** How the quantitative amount of Structural Repeat Units is captured (e.g. Exact, Numeric, Average). */
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
		averageMolecularFormula: fhirString().optional(),
		_averageMolecularFormula: z.lazy(getElementSchema).optional(),
		repeatUnit: z
			.lazy(getSubstancePolymer_Repeat_RepeatUnitSchema)
			.array()
			.optional(),
		repeatUnitAmountType: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstancePolymer_RepeatSchema =
	SubstancePolymer_RepeatSchemaInternal as z.ZodType<SubstancePolymer_Repeat>;
