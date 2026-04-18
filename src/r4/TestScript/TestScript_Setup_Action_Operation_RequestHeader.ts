// Source: https://hl7.org/fhir/R4/testscript-definitions.html#TestScript.setup.action.operation.requestHeader
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

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
