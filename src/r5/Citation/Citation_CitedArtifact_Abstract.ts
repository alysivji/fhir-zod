// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** The abstract may be used to convey article-contained abstracts, externally-created abstracts, or other descriptive summaries. */
export interface Citation_CitedArtifact_Abstract extends BackboneElement {
	/** Copyright notice for the abstract. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** Used to express the specific language of the abstract. */
	language?: CodeableConcept;
	/** Abstract content. */
	text: string;
	/** Extensions for text */
	_text?: Element;
	/** Used to express the reason for or classification of the abstract. */
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
			.regex(/^[\s\S]+$/)
			.optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		language: z.lazy(getCodeableConceptSchema).optional(),
		text: z.string().regex(/^[\s\S]+$/),
		_text: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const Citation_CitedArtifact_AbstractSchema =
	Citation_CitedArtifact_AbstractSchemaInternal as z.ZodType<Citation_CitedArtifact_Abstract>;
