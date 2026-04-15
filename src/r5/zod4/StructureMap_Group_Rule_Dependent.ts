// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirId } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Which other rules to apply in the context of this rule. */
export interface StructureMap_Group_Rule_Dependent extends BackboneElement {
	/** Name of a rule or group to apply. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** Parameter to pass to the rule or group. */
	parameter: Array<unknown>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureMap_Group_Rule_DependentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		name: fhirId(),
		_name: z.lazy(getElementSchema).optional(),
		parameter: z.custom<unknown>((value) => value !== undefined).array(),
	}).strict();

export const StructureMap_Group_Rule_DependentSchema =
	StructureMap_Group_Rule_DependentSchemaInternal as z.ZodType<StructureMap_Group_Rule_Dependent>;
