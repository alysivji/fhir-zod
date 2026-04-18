// Source: https://hl7.org/fhir/R5/terminologycapabilities-definitions.html#TerminologyCapabilities.codeSystem.version.filter
// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirCode } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Filter Properties supported. */
export interface TerminologyCapabilities_CodeSystem_Version_Filter
  extends BackboneElement {
  /** Code of the property supported. */
  code: string;
  /** Extensions for code */
  _code?: Element;
  /** Operations supported for the property. */
  op: Array<string | null>;
  /** Extensions for op */
  _op?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TerminologyCapabilities_CodeSystem_Version_FilterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: fhirCode(),
    _code: z.lazy(getElementSchema).optional(),
    op: fhirCode().nullable().array(),
    _op: z.lazy(getElementSchema).nullable().array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(record.op, record._op, "op", "_op", ctx);
    });

export const TerminologyCapabilities_CodeSystem_Version_FilterSchema =
  TerminologyCapabilities_CodeSystem_Version_FilterSchemaInternal as z.ZodType<TerminologyCapabilities_CodeSystem_Version_Filter>;
