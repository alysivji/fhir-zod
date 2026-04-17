// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Financial instrument by which payment information for health care. */
export interface ExplanationOfBenefit_Insurance extends BackboneElement {
  /** Reference to the program or plan identification, underwriter or payor. */
  coverage?: Reference;
  /** A list of references from the Insurer to which these services pertain. */
  preAuthRef?: Array<string | null>;
  /** Extensions for preAuthRef */
  _preAuthRef?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_InsuranceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    coverage: z.lazy(getReferenceSchema).optional(),
    preAuthRef: fhirString().nullable().array().optional(),
    _preAuthRef: z.lazy(getElementSchema).nullable().array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.preAuthRef,
        record._preAuthRef,
        "preAuthRef",
        "_preAuthRef",
        ctx,
      );
      validateReferenceTarget(
        record.coverage,
        "coverage",
        ["http://hl7.org/fhir/StructureDefinition/Coverage"],
        ["Coverage"],
        ctx,
      );
    });

export const ExplanationOfBenefit_InsuranceSchema =
  ExplanationOfBenefit_InsuranceSchemaInternal as z.ZodType<ExplanationOfBenefit_Insurance>;
