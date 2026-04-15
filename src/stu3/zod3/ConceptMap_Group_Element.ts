// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirCode, fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ConceptMap_Group_Element_Target } from "./ConceptMap_Group_Element_Target";
import { ConceptMap_Group_Element_TargetSchemaInternal } from "./ConceptMap_Group_Element_Target";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Mappings for an individual concept in the source to one or more concepts in the target. */
export interface ConceptMap_Group_Element extends BackboneElement {
	/** Identity (code or path) or the element/item being mapped. */
	code?: string;
	/** Extensions for code */
	_code?: Element;
	/** The display for the code. The display is only provided to help editors when editing the concept map. */
	display?: string;
	/** Extensions for display */
	_display?: Element;
	/** A concept from the target value set that this concept maps to. */
	target?: Array<ConceptMap_Group_Element_Target>;
}

const getConceptMap_Group_Element_TargetSchema =
	(): z.ZodType<ConceptMap_Group_Element_Target> =>
		ConceptMap_Group_Element_TargetSchemaInternal as z.ZodType<ConceptMap_Group_Element_Target>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ConceptMap_Group_ElementSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode().optional(),
		_code: z.lazy(getElementSchema).optional(),
		display: fhirString().optional(),
		_display: z.lazy(getElementSchema).optional(),
		target: z.lazy(getConceptMap_Group_Element_TargetSchema).array().optional(),
	}).strict();

export const ConceptMap_Group_ElementSchema =
	ConceptMap_Group_ElementSchemaInternal as z.ZodType<ConceptMap_Group_Element>;
