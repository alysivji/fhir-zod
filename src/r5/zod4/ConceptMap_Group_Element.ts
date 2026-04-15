// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import {
	fhirCanonical,
	fhirCode,
	fhirString,
} from "../../shared/fhir-primitives-zod4";
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
	/** If noMap = true this indicates that no mapping to a target concept exists for this source concept. */
	noMap?: boolean;
	/** Extensions for noMap */
	_noMap?: Element;
	/** A concept from the target value set that this concept maps to. */
	target?: Array<ConceptMap_Group_Element_Target>;
	/** The set of concepts from the ConceptMap.group.source code system which are all being mapped to the target as part of this mapping rule. */
	valueSet?: string;
	/** Extensions for valueSet */
	_valueSet?: Element;
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
		noMap: z.boolean().optional(),
		_noMap: z.lazy(getElementSchema).optional(),
		target: z.lazy(getConceptMap_Group_Element_TargetSchema).array().optional(),
		valueSet: fhirCanonical().optional(),
		_valueSet: z.lazy(getElementSchema).optional(),
	}).strict();

export const ConceptMap_Group_ElementSchema =
	ConceptMap_Group_ElementSchemaInternal as z.ZodType<ConceptMap_Group_Element>;
