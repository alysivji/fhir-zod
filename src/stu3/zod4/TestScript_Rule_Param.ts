// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Each rule template can take one or more parameters for rule evaluation. */
export interface TestScript_Rule_Param extends BackboneElement {
	/** Descriptive name for this parameter that matches the external assert rule parameter name. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** The explicit or dynamic value for the parameter that will be passed on to the external rule template. */
	value?: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestScript_Rule_ParamSchemaInternal =
	BackboneElementSchemaInternal.extend({
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		value: fhirString().optional(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestScript_Rule_ParamSchema =
	TestScript_Rule_ParamSchemaInternal as z.ZodType<TestScript_Rule_Param>;
