// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A note that describes or explains adjudication results in a human readable form. */
export interface ExplanationOfBenefit_ProcessNote extends BackboneElement {
	/** A code to define the language used in the text of the note. */
	language?: CodeableConcept;
	/** A number to uniquely identify a note entry. */
	number?: number;
	/** Extensions for number */
	_number?: Element;
	/** The explanation or description associated with the processing. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
	/** The business purpose of the note text. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExplanationOfBenefit_ProcessNoteSchemaInternal =
	BackboneElementSchemaInternal.extend({
		language: z.lazy(getCodeableConceptSchema).optional(),
		number: z.number().int().positive().optional(),
		_number: z.lazy(getElementSchema).optional(),
		text: fhirString().optional(),
		_text: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const ExplanationOfBenefit_ProcessNoteSchema =
	ExplanationOfBenefit_ProcessNoteSchemaInternal as z.ZodType<ExplanationOfBenefit_ProcessNote>;
