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

/** Summary of the article or artifact. */
export interface Citation_CitedArtifact_Abstract extends BackboneElement {
	/** Copyright notice for the abstract. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** Used to express the specific language. */
	language?: CodeableConcept;
	/** Abstract content. */
	text: string;
	/** Extensions for text */
	_text?: Element;
	/** Used to express the reason or specific aspect for the abstract. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Citation_CitedArtifact_AbstractSchemaInternal =
	BackboneElementSchemaInternal.extend({
		copyright: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		language: z.lazy(getCodeableConceptSchema).optional(),
		text: z.string().regex(/[ \r\n\t\S]+/),
		_text: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const Citation_CitedArtifact_AbstractSchema =
	Citation_CitedArtifact_AbstractSchemaInternal as z.ZodType<Citation_CitedArtifact_Abstract>;
