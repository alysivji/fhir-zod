// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Description of the semantic space the Value Set Expansion is intended to cover and should further clarify the text in ValueSet.description. */
export interface ValueSet_Scope extends BackboneElement {
	/** Criteria describing which concepts or codes should be excluded and why. */
	exclusionCriteria?: string;
	/** Extensions for exclusionCriteria */
	_exclusionCriteria?: Element;
	/** Criteria describing which concepts or codes should be included and why. */
	inclusionCriteria?: string;
	/** Extensions for inclusionCriteria */
	_inclusionCriteria?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ValueSet_ScopeSchemaInternal =
	BackboneElementSchemaInternal.extend({
		exclusionCriteria: fhirString().optional(),
		_exclusionCriteria: z.lazy(getElementSchema).optional(),
		inclusionCriteria: fhirString().optional(),
		_inclusionCriteria: z.lazy(getElementSchema).optional(),
	}).strict();

export const ValueSet_ScopeSchema =
	ValueSet_ScopeSchemaInternal as z.ZodType<ValueSet_Scope>;
