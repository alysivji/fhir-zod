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
import type { SubstanceAmount } from "./SubstanceAmount";
import { SubstanceAmountSchemaInternal } from "./SubstanceAmount";
import type { SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation } from "./SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation";
import { SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchemaInternal } from "./SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation";
import type { SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation } from "./SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation";
import { SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchemaInternal } from "./SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation";

/** Todo. */
export interface SubstancePolymer_Repeat_RepeatUnit extends BackboneElement {
	/** Todo. */
	amount?: SubstanceAmount;
	/** Todo. */
	degreeOfPolymerisation?: Array<SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation>;
	/** Todo. */
	orientationOfPolymerisation?: CodeableConcept;
	/** Todo. */
	repeatUnit?: string;
	/** Extensions for repeatUnit */
	_repeatUnit?: Element;
	/** Todo. */
	structuralRepresentation?: Array<SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getSubstanceAmountSchema = (): z.ZodType<SubstanceAmount> =>
	SubstanceAmountSchemaInternal as z.ZodType<SubstanceAmount>;
const getSubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchema =
	(): z.ZodType<SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation> =>
		SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchemaInternal as z.ZodType<SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation>;
const getSubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchema =
	(): z.ZodType<SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation> =>
		SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchemaInternal as z.ZodType<SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation>;

/** @internal */
export const SubstancePolymer_Repeat_RepeatUnitSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getSubstanceAmountSchema).optional(),
		degreeOfPolymerisation: z
			.lazy(getSubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchema)
			.array()
			.optional(),
		orientationOfPolymerisation: z.lazy(getCodeableConceptSchema).optional(),
		repeatUnit: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_repeatUnit: z.lazy(getElementSchema).optional(),
		structuralRepresentation: z
			.lazy(
				getSubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchema,
			)
			.array()
			.optional(),
	}).strict();

export const SubstancePolymer_Repeat_RepeatUnitSchema =
	SubstancePolymer_Repeat_RepeatUnitSchemaInternal as z.ZodType<SubstancePolymer_Repeat_RepeatUnit>;
