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
import type { SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation } from "./SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation";
import { SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchemaInternal } from "./SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation";
import type { SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation } from "./SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation";
import { SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchemaInternal } from "./SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation";

/** An SRU - Structural Repeat Unit. */
export interface SubstancePolymer_Repeat_RepeatUnit extends BackboneElement {
	/** Number of repeats of this unit. */
	amount?: number;
	/** Extensions for amount */
	_amount?: Element;
	/** Applies to homopolymer and block co-polymers where the degree of polymerisation within a block can be described. */
	degreeOfPolymerisation?: Array<SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation>;
	/** The orientation of the polymerisation, e.g. head-tail, head-head, random. */
	orientation?: CodeableConcept;
	/** A graphical structure for this SRU. */
	structuralRepresentation?: Array<SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation>;
	/** Structural repeat units are essential elements for defining polymers. */
	unit?: string;
	/** Extensions for unit */
	_unit?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getSubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchema =
	(): z.ZodType<SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation> =>
		SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchemaInternal as z.ZodType<SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation>;
const getSubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchema =
	(): z.ZodType<SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation> =>
		SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchemaInternal as z.ZodType<SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation>;

/** @internal */
export const SubstancePolymer_Repeat_RepeatUnitSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.number().int().optional(),
		_amount: z.lazy(getElementSchema).optional(),
		degreeOfPolymerisation: z
			.lazy(getSubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchema)
			.array()
			.optional(),
		orientation: z.lazy(getCodeableConceptSchema).optional(),
		structuralRepresentation: z
			.lazy(
				getSubstancePolymer_Repeat_RepeatUnit_StructuralRepresentationSchema,
			)
			.array()
			.optional(),
		unit: fhirString().optional(),
		_unit: z.lazy(getElementSchema).optional(),
	}).strict();

export const SubstancePolymer_Repeat_RepeatUnitSchema =
	SubstancePolymer_Repeat_RepeatUnitSchemaInternal as z.ZodType<SubstancePolymer_Repeat_RepeatUnit>;
