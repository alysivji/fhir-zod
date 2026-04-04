// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T20:28:54.953Z

import * as z from "zod";
import { fhirCanonical, fhirString, fhirUri } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A set of additional dependencies for this mapping to hold. This mapping is only applicable if the specified element can be resolved, and it has the specified value. */
export interface ConceptMap_Group_Element_Target_DependsOn
	extends BackboneElement {
	/** The display for the code. The display is only provided to help editors when editing the concept map. */
	display?: string;
	/** Extensions for display */
	_display?: Element;
	/** A reference to an element that holds a coded value that corresponds to a code system property. The idea is that the information model carries an element somewhere that is labeled to correspond with a code system property. */
	property: string;
	/** Extensions for property */
	_property?: Element;
	/** An absolute URI that identifies the code system of the dependency code (if the source/dependency is a value set that crosses code systems). */
	system?: string;
	/** Extensions for system */
	_system?: Element;
	/** Identity (code or path) or the element/item/ValueSet/text that the map depends on / refers to. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ConceptMap_Group_Element_Target_DependsOnSchemaInternal =
	BackboneElementSchemaInternal.extend({
		display: fhirString().optional(),
		_display: z.lazy(getElementSchema).optional(),
		property: fhirUri(),
		_property: z.lazy(getElementSchema).optional(),
		system: fhirCanonical().optional(),
		_system: z.lazy(getElementSchema).optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const ConceptMap_Group_Element_Target_DependsOnSchema =
	ConceptMap_Group_Element_Target_DependsOnSchemaInternal as z.ZodType<ConceptMap_Group_Element_Target_DependsOn>;
