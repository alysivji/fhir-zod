// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study. */
export interface ResearchStudy_Objective extends BackboneElement {
	/** Free text description of the objective of the study.  This is what the study is trying to achieve rather than how it is going to achieve it (see ResearchStudy.description). */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Unique, human-readable label for this objective of the study. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The kind of study objective. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ResearchStudy_ObjectiveSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const ResearchStudy_ObjectiveSchema =
	ResearchStudy_ObjectiveSchemaInternal as z.ZodType<ResearchStudy_Objective>;
