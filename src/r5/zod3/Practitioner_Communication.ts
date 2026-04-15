// Profile: http://hl7.org/fhir/StructureDefinition/Practitioner
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A language which may be used to communicate with the practitioner, often for correspondence/administrative purposes.The `PractitionerRole.communication` property should be used for publishing the languages that a practitioner is able to communicate with patients (on a per Organization/Role basis). */
export interface Practitioner_Communication extends BackboneElement {
	/** The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-AU" for Australian English. */
	language: CodeableConcept;
	/** Indicates whether or not the person prefers this language (over other languages he masters up a certain level). */
	preferred?: boolean;
	/** Extensions for preferred */
	_preferred?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Practitioner_CommunicationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		language: z.lazy(getCodeableConceptSchema),
		preferred: z.boolean().optional(),
		_preferred: z.lazy(getElementSchema).optional(),
	}).strict();

export const Practitioner_CommunicationSchema =
	Practitioner_CommunicationSchemaInternal as z.ZodType<Practitioner_Communication>;
