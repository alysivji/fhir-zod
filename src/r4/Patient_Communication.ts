// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import type { Element } from "./Element";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import { ElementSchemaInternal } from "./Element";

export interface Patient_Communication extends BackboneElement {
	language: CodeableConcept;
	preferred?: boolean;
	_preferred?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;

/** @internal */
export const Patient_CommunicationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		language: z
			.lazy(getCodeableConceptSchema)
			.describe(
				'The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.',
			),
		preferred: z
			.boolean()
			.optional()
			.describe(
				"Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).",
			),
		_preferred: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for preferred"),
	}).strict();

export const Patient_CommunicationSchema: z.ZodType<Patient_Communication> =
	Patient_CommunicationSchemaInternal;
