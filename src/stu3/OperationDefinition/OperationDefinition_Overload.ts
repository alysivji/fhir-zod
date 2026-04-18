// Source: https://hl7.org/fhir/STU3/operationdefinition-definitions.html#OperationDefinition.overload
// Profile: http://hl7.org/fhir/StructureDefinition/OperationDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Defines an appropriate combination of parameters to use when invoking this operation, to help code generators when generating overloaded parameter sets for this operation. */
export interface OperationDefinition_Overload extends BackboneElement {
  /** Comments to go on overload. */
  comment?: string;
  /** Extensions for comment */
  _comment?: Element;
  /** Name of parameter to include in overload. */
  parameterName?: Array<string | null>;
  /** Extensions for parameterName */
  _parameterName?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const OperationDefinition_OverloadSchemaInternal =
  BackboneElementSchemaInternal.extend({
    comment: fhirString().optional(),
    _comment: z.lazy(getElementSchema).optional(),
    parameterName: fhirString().nullable().array().optional(),
    _parameterName: z.lazy(getElementSchema).nullable().array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.parameterName,
        record._parameterName,
        "parameterName",
        "_parameterName",
        ctx,
      );
    });

export const OperationDefinition_OverloadSchema =
  OperationDefinition_OverloadSchemaInternal as z.ZodType<OperationDefinition_Overload>;
