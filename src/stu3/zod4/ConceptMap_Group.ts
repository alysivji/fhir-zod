// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString, fhirUri } from "../../shared/fhir-primitives-zod4";
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
	/** An absolute URI that identifies the Code System (if the source is a value set that crosses more than one code system). */
	source?: string;
	/** Extensions for source */
	_source?: Element;
	/** The specific version of the code system, as determined by the code system authority. */
	sourceVersion?: string;
	/** Extensions for sourceVersion */
	_sourceVersion?: Element;
	/** An absolute URI that identifies the code system of the target code (if the target is a value set that cross code systems). */
	target?: string;
	/** Extensions for target */
	_target?: Element;
	/** The specific version of the code system, as determined by the code system authority. */
	targetVersion?: string;
	/** Extensions for targetVersion */
	_targetVersion?: Element;
	/** What to do when there is no match in the mappings in the group. */
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
		source: fhirUri().optional(),
		_source: z.lazy(getElementSchema).optional(),
		sourceVersion: fhirString().optional(),
		_sourceVersion: z.lazy(getElementSchema).optional(),
		target: fhirUri().optional(),
		_target: z.lazy(getElementSchema).optional(),
		targetVersion: fhirString().optional(),
		_targetVersion: z.lazy(getElementSchema).optional(),
		unmapped: z.lazy(getConceptMap_Group_UnmappedSchema).optional(),
	}).strict();

export const ConceptMap_GroupSchema =
	ConceptMap_GroupSchemaInternal as z.ZodType<ConceptMap_Group>;
