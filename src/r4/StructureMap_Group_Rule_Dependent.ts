// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:26:21.962Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
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
	/** Variable to pass to the rule or group. */
	variable: Array<string>;
	/** Extensions for variable */
	_variable?: Array<Element>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureMap_Group_Rule_DependentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		name: fhirId(),
		_name: z.lazy(getElementSchema).optional(),
		variable: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array(),
		_variable: z.lazy(getElementSchema).array().optional(),
	}).strict();

export const StructureMap_Group_Rule_DependentSchema =
	StructureMap_Group_Rule_DependentSchemaInternal as z.ZodType<StructureMap_Group_Rule_Dependent>;
