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

/** Header elements would be used to set HTTP headers. */
export interface TestScript_Setup_Action_Operation_RequestHeader
	extends BackboneElement {
	/** The HTTP header field e.g. "Accept". */
	field: string;
	/** Extensions for field */
	_field?: Element;
	/** The value of the header e.g. "application/fhir+xml". */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestScript_Setup_Action_Operation_RequestHeaderSchemaInternal =
	BackboneElementSchemaInternal.extend({
		field: fhirString(),
		_field: z.lazy(getElementSchema).optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const TestScript_Setup_Action_Operation_RequestHeaderSchema =
	TestScript_Setup_Action_Operation_RequestHeaderSchemaInternal as z.ZodType<TestScript_Setup_Action_Operation_RequestHeader>;
