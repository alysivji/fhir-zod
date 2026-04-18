// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirCode, fhirString, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** An additionalAttribute defines an additional data element found in the source or target data model where the data will come from or be mapped to. Some mappings are based on data in addition to the source data element, where codes in multiple fields are combined to a single field (or vice versa). */
export interface ConceptMap_AdditionalAttribute extends BackboneElement {
	/** A code that is used to identify this additional data attribute. The code is used internally in ConceptMap.group.element.target.dependsOn.attribute and ConceptMap.group.element.target.product.attribute. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** A description of the additional attribute and/or the data element it refers to - why it is defined, and how the value might be used in mappings, and a discussion of issues associated with the use of the data element. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The type of the source data contained in this concept map for this data element. */
	type: "boolean" | "code" | "Coding" | "Quantity" | "string";
	/** Extensions for type */
	_type?: Element;
	/** Reference to the formal definition of the source/target data element. For elements defined by the FHIR specification, or using a FHIR logical model, the correct format is {canonical-url}#{element-id}. */
	uri?: string;
	/** Extensions for uri */
	_uri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ConceptMap_AdditionalAttributeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		type: z.enum(["boolean", "code", "Coding", "Quantity", "string"]),
		_type: z.lazy(getElementSchema).optional(),
		uri: fhirUri().optional(),
		_uri: z.lazy(getElementSchema).optional(),
	}).strict();

export const ConceptMap_AdditionalAttributeSchema =
	ConceptMap_AdditionalAttributeSchemaInternal as z.ZodType<ConceptMap_AdditionalAttribute>;
