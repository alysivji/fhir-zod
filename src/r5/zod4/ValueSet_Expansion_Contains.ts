// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import {
	fhirCode,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ValueSet_Expansion_Contains_Property } from "./ValueSet_Expansion_Contains_Property";
import { ValueSet_Expansion_Contains_PropertySchemaInternal } from "./ValueSet_Expansion_Contains_Property";

/** The codes that are contained in the value set expansion. */
export interface ValueSet_Expansion_Contains extends BackboneElement {
	/** If true, this entry is included in the expansion for navigational purposes, and the user cannot select the code directly as a proper value. */
	abstract?: boolean;
	/** Extensions for abstract */
	_abstract?: Element;
	/** The code for this item in the expansion hierarchy. If this code is missing the entry in the hierarchy is a place holder (abstract) and does not represent a valid code in the value set. */
	code?: string;
	/** Extensions for code */
	_code?: Element;
	/** Other codes and entries contained under this entry in the hierarchy. */
	contains?: Array<unknown>;
	/** Additional representations for this item - other languages, aliases, specialized purposes, used for particular purposes, etc. These are relevant when the conditions of the expansion do not fix to a single correct representation. */
	designation?: Array<unknown>;
	/** The recommended display for this item in the expansion. */
	display?: string;
	/** Extensions for display */
	_display?: Element;
	/** If the concept is inactive in the code system that defines it. Inactive codes are those that are no longer to be used, but are maintained by the code system for understanding legacy data. It might not be known or specified whether a concept is inactive (and it may depend on the context of use). */
	inactive?: boolean;
	/** Extensions for inactive */
	_inactive?: Element;
	/** A property value for this concept. */
	property?: Array<ValueSet_Expansion_Contains_Property>;
	/** An absolute URI which is the code system in which the code for this item in the expansion is defined. */
	system?: string;
	/** Extensions for system */
	_system?: Element;
	/** The version of the code system from this code was taken. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getValueSet_Expansion_Contains_PropertySchema =
	(): z.ZodType<ValueSet_Expansion_Contains_Property> =>
		ValueSet_Expansion_Contains_PropertySchemaInternal as z.ZodType<ValueSet_Expansion_Contains_Property>;

/** @internal */
export const ValueSet_Expansion_ContainsSchemaInternal =
	BackboneElementSchemaInternal.extend({
		abstract: z.boolean().optional(),
		_abstract: z.lazy(getElementSchema).optional(),
		code: fhirCode().optional(),
		_code: z.lazy(getElementSchema).optional(),
		contains: z.unknown().array().optional(),
		designation: z.unknown().array().optional(),
		display: fhirString().optional(),
		_display: z.lazy(getElementSchema).optional(),
		inactive: z.boolean().optional(),
		_inactive: z.lazy(getElementSchema).optional(),
		property: z
			.lazy(getValueSet_Expansion_Contains_PropertySchema)
			.array()
			.optional(),
		system: fhirUri().optional(),
		_system: z.lazy(getElementSchema).optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const ValueSet_Expansion_ContainsSchema =
	ValueSet_Expansion_ContainsSchemaInternal as z.ZodType<ValueSet_Expansion_Contains>;
