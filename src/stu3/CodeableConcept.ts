// Profile: http://hl7.org/fhir/StructureDefinition/CodeableConcept
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for CodeableConcept Type */
export interface CodeableConcept extends Element {
	/** A reference to a code defined by a terminology system. */
	coding?: Array<Coding>;
	/** A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user. */
	text?: string;
	/** Extensions for text */
	_text?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const CodeableConceptSchemaInternal = z
	.object({
		coding: z.lazy(getCodingSchema).array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		text: fhirString().optional(),
		_text: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const CodeableConceptSchema =
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
