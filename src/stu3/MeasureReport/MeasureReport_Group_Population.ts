// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The populations that make up the population group, one for each type of population appropriate for the measure. */
export interface MeasureReport_Group_Population extends BackboneElement {
	/** The type of the population. */
	code?: CodeableConcept;
	/** The number of members of the population. */
	count?: number;
	/** Extensions for count */
	_count?: Element;
	/** The identifier of the population being reported, as defined by the population element of the measure. */
	identifier?: Identifier;
	/** This element refers to a List of patient level MeasureReport resources, one for each patient in this population. */
	patients?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MeasureReport_Group_PopulationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		count: z.number().int().optional(),
		_count: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		patients: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.patients,
				"patients",
				["http://hl7.org/fhir/StructureDefinition/List"],
				["List"],
				ctx,
			);
		});

export const MeasureReport_Group_PopulationSchema =
	MeasureReport_Group_PopulationSchemaInternal as z.ZodType<MeasureReport_Group_Population>;
