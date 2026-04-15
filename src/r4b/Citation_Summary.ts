// Profile: http://hl7.org/fhir/StructureDefinition/Citation
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

/** A human-readable display of the citation. */
export interface Citation_Summary extends BackboneElement {
	/** Format for display of the citation. */
	style?: CodeableConcept;
	/** The human-readable display of the citation. */
	text: string;
	/** Extensions for text */
	_text?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Citation_SummarySchemaInternal =
	BackboneElementSchemaInternal.extend({
		style: z.lazy(getCodeableConceptSchema).optional(),
		text: z.string(),
		_text: z.lazy(getElementSchema).optional(),
	}).strict();

export const Citation_SummarySchema =
	Citation_SummarySchemaInternal as z.ZodType<Citation_Summary>;
