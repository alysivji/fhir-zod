// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Used to record a display of the author/contributor list without separate data element for each list member. */
export interface Citation_CitedArtifact_Contributorship_Summary
	extends BackboneElement {
	/** Used to code the producer or rule for creating the display string. */
	source?: CodeableConcept;
	/** The format for the display string, such as author last name with first letter capitalized followed by forename initials. */
	style?: CodeableConcept;
	/** Used most commonly to express an author list or a contributorship statement. */
	type?: CodeableConcept;
	/** The display string for the author list, contributor list, or contributorship statement. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Citation_CitedArtifact_Contributorship_SummarySchemaInternal =
	BackboneElementSchemaInternal.extend({
		source: z.lazy(getCodeableConceptSchema).optional(),
		style: z.lazy(getCodeableConceptSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		value: z.string().regex(/^[\s\S]+$/),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const Citation_CitedArtifact_Contributorship_SummarySchema =
	Citation_CitedArtifact_Contributorship_SummarySchemaInternal as z.ZodType<Citation_CitedArtifact_Contributorship_Summary>;
