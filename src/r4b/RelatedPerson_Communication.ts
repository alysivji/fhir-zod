// Profile: http://hl7.org/fhir/StructureDefinition/RelatedPerson
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A language which may be used to communicate with about the patient's health. */
export interface RelatedPerson_Communication extends BackboneElement {
	/** The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English. */
	language: CodeableConcept;
	/** Indicates whether or not the patient prefers this language (over other languages he masters up a certain level). */
	preferred?: boolean;
	/** Extensions for preferred */
	_preferred?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const RelatedPerson_CommunicationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		language: z.lazy(getCodeableConceptSchema),
		preferred: z.boolean().optional(),
		_preferred: z.lazy(getElementSchema).optional(),
	}).strict();

export const RelatedPerson_CommunicationSchema =
	RelatedPerson_CommunicationSchemaInternal as z.ZodType<RelatedPerson_Communication>;
