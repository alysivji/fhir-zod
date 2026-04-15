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
import type { ConceptMap_Group_Element_Target_DependsOn } from "./ConceptMap_Group_Element_Target_DependsOn";
import { ConceptMap_Group_Element_Target_DependsOnSchemaInternal } from "./ConceptMap_Group_Element_Target_DependsOn";
import type { ConceptMap_Group_Element_Target_Property } from "./ConceptMap_Group_Element_Target_Property";
import { ConceptMap_Group_Element_Target_PropertySchemaInternal } from "./ConceptMap_Group_Element_Target_Property";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A concept from the target value set that this concept maps to. */
export interface ConceptMap_Group_Element_Target extends BackboneElement {
	/** Identity (code or path) or the element/item that the map refers to. */
	code?: string;
	/** Extensions for code */
	_code?: Element;
	/** A description of status/issues in mapping that conveys additional information not represented in  the structured data. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified data attribute can be resolved, and it has the specified value. */
	dependsOn?: Array<ConceptMap_Group_Element_Target_DependsOn>;
	/** The display for the code. The display is only provided to help editors when editing the concept map. */
	display?: string;
	/** Extensions for display */
	_display?: Element;
	/** Product is the output of a ConceptMap that provides additional values that go in other attributes / data elemnts of the target data. */
	product?: Array<unknown>;
	/** A property value for this source -> target mapping. */
	property?: Array<ConceptMap_Group_Element_Target_Property>;
	/** The relationship between the source and target concepts. The relationship is read from source to target (e.g. source-is-narrower-than-target). */
	relationship:
		| "equivalent"
		| "not-related-to"
		| "related-to"
		| "source-is-broader-than-target"
		| "source-is-narrower-than-target";
	/** Extensions for relationship */
	_relationship?: Element;
	/** The set of concepts from the ConceptMap.group.target code system which are all being mapped to as part of this mapping rule. The effect of using this data element is the same as having multiple ConceptMap.group.element.target elements with one for each concept in the ConceptMap.group.element.target.valueSet value set. */
	valueSet?: string;
	/** Extensions for valueSet */
	_valueSet?: Element;
}

const getConceptMap_Group_Element_Target_DependsOnSchema =
	(): z.ZodType<ConceptMap_Group_Element_Target_DependsOn> =>
		ConceptMap_Group_Element_Target_DependsOnSchemaInternal as z.ZodType<ConceptMap_Group_Element_Target_DependsOn>;
const getConceptMap_Group_Element_Target_PropertySchema =
	(): z.ZodType<ConceptMap_Group_Element_Target_Property> =>
		ConceptMap_Group_Element_Target_PropertySchemaInternal as z.ZodType<ConceptMap_Group_Element_Target_Property>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ConceptMap_Group_Element_TargetSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode().optional(),
		_code: z.lazy(getElementSchema).optional(),
		comment: fhirString().optional(),
		_comment: z.lazy(getElementSchema).optional(),
		dependsOn: z
			.lazy(getConceptMap_Group_Element_Target_DependsOnSchema)
			.array()
			.optional(),
		display: fhirString().optional(),
		_display: z.lazy(getElementSchema).optional(),
		product: z.unknown().array().optional(),
		property: z
			.lazy(getConceptMap_Group_Element_Target_PropertySchema)
			.array()
			.optional(),
		relationship: z.enum([
			"equivalent",
			"not-related-to",
			"related-to",
			"source-is-broader-than-target",
			"source-is-narrower-than-target",
		]),
		_relationship: z.lazy(getElementSchema).optional(),
		valueSet: fhirCanonical().optional(),
		_valueSet: z.lazy(getElementSchema).optional(),
	}).strict();

export const ConceptMap_Group_Element_TargetSchema =
	ConceptMap_Group_Element_TargetSchemaInternal as z.ZodType<ConceptMap_Group_Element_Target>;
