// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirCode, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A property defines an additional slot through which additional information can be provided about a concept. */
export interface ValueSet_Expansion_Property extends BackboneElement {
	/** A code that is used to identify the property. The code is used in ValueSet.expansion.contains.property.code. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system. */
	uri?: string;
	/** Extensions for uri */
	_uri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ValueSet_Expansion_PropertySchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		uri: fhirUri().optional(),
		_uri: z.lazy(getElementSchema).optional(),
	}).strict();

export const ValueSet_Expansion_PropertySchema =
	ValueSet_Expansion_PropertySchemaInternal as z.ZodType<ValueSet_Expansion_Property>;
