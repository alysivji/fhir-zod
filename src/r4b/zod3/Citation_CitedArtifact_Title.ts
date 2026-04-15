// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The title details of the article or artifact. */
export interface Citation_CitedArtifact_Title extends BackboneElement {
	/** Used to express the specific language. */
	language?: CodeableConcept;
	/** The title of the article or artifact. */
	text: string;
	/** Extensions for text */
	_text?: Element;
	/** Used to express the reason or specific aspect for the title. */
	type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Citation_CitedArtifact_TitleSchemaInternal =
	BackboneElementSchemaInternal.extend({
		language: z.lazy(getCodeableConceptSchema).optional(),
		text: z.string().regex(/[ \r\n\t\S]+/),
		_text: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).array().optional(),
	}).strict();

export const Citation_CitedArtifact_TitleSchema =
	Citation_CitedArtifact_TitleSchemaInternal as z.ZodType<Citation_CitedArtifact_Title>;
