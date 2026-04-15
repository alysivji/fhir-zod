// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The populations that make up the stratum, one for each type of population appropriate to the measure. */
export interface MeasureReport_Group_Stratifier_Stratum_Population
	extends BackboneElement {
	/** The type of the population. */
	code?: CodeableConcept;
	/** The number of members of the population in this stratum. */
	count?: number;
	/** Extensions for count */
	_count?: Element;
	/** This element refers to a List of subject level MeasureReport resources, one for each subject in this population in this stratum. */
	subjectResults?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MeasureReport_Group_Stratifier_Stratum_PopulationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		count: z.number().int().optional(),
		_count: z.lazy(getElementSchema).optional(),
		subjectResults: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.subjectResults,
				"subjectResults",
				["http://hl7.org/fhir/StructureDefinition/List"],
				["List"],
				ctx,
			);
		});

export const MeasureReport_Group_Stratifier_Stratum_PopulationSchema =
	MeasureReport_Group_Stratifier_Stratum_PopulationSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum_Population>;
