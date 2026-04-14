// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirCanonical } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ConceptMap_Group_Element } from "./ConceptMap_Group_Element";
import { ConceptMap_Group_ElementSchemaInternal } from "./ConceptMap_Group_Element";
import type { ConceptMap_Group_Unmapped } from "./ConceptMap_Group_Unmapped";
import { ConceptMap_Group_UnmappedSchemaInternal } from "./ConceptMap_Group_Unmapped";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A group of mappings that all have the same source and target system. */
export interface ConceptMap_Group extends BackboneElement {
	/** Mappings for an individual concept in the source to one or more concepts in the target. */
	element: Array<ConceptMap_Group_Element>;
	/** An absolute URI that identifies the source system where the concepts to be mapped are defined. */
	source?: string;
	/** Extensions for source */
	_source?: Element;
	/** An absolute URI that identifies the target system that the concepts will be mapped to. */
	target?: string;
	/** Extensions for target */
	_target?: Element;
	/** What to do when there is no mapping to a target concept from the source concept and ConceptMap.group.element.noMap is not true. This provides the "default" to be applied when there is no target concept mapping specified or the expansion of ConceptMap.group.element.target.valueSet is empty. */
	unmapped?: ConceptMap_Group_Unmapped;
}

const getConceptMap_Group_ElementSchema =
	(): z.ZodType<ConceptMap_Group_Element> =>
		ConceptMap_Group_ElementSchemaInternal as z.ZodType<ConceptMap_Group_Element>;
const getConceptMap_Group_UnmappedSchema =
	(): z.ZodType<ConceptMap_Group_Unmapped> =>
		ConceptMap_Group_UnmappedSchemaInternal as z.ZodType<ConceptMap_Group_Unmapped>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ConceptMap_GroupSchemaInternal =
	BackboneElementSchemaInternal.extend({
		element: z.lazy(getConceptMap_Group_ElementSchema).array(),
		source: fhirCanonical().optional(),
		_source: z.lazy(getElementSchema).optional(),
		target: fhirCanonical().optional(),
		_target: z.lazy(getElementSchema).optional(),
		unmapped: z.lazy(getConceptMap_Group_UnmappedSchema).optional(),
	}).strict();

export const ConceptMap_GroupSchema =
	ConceptMap_GroupSchemaInternal as z.ZodType<ConceptMap_Group>;
