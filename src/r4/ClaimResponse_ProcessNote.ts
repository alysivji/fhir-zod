// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
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

/** A note that describes or explains adjudication results in a human readable form. */
export interface ClaimResponse_ProcessNote extends BackboneElement {
	/** A code to define the language used in the text of the note. */
	language?: CodeableConcept;
	/** A number to uniquely identify a note entry. */
	number?: number;
	/** Extensions for number */
	_number?: Element;
	/** The explanation or description associated with the processing. */
	text: string;
	/** Extensions for text */
	_text?: Element;
	/** The business purpose of the note text. */
	type?: "display" | "print" | "printoper";
	/** Extensions for type */
	_type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ClaimResponse_ProcessNoteSchemaInternal =
	BackboneElementSchemaInternal.extend({
		language: z.lazy(getCodeableConceptSchema).optional(),
		number: z.number().int().positive().optional(),
		_number: z.lazy(getElementSchema).optional(),
		text: z.string().regex(/[ \r\n\t\S]+/),
		_text: z.lazy(getElementSchema).optional(),
		type: z.enum(["display", "print", "printoper"]).optional(),
		_type: z.lazy(getElementSchema).optional(),
	}).strict();

export const ClaimResponse_ProcessNoteSchema =
	ClaimResponse_ProcessNoteSchemaInternal as z.ZodType<ClaimResponse_ProcessNote>;
