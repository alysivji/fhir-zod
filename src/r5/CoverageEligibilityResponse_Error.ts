// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Errors encountered during the processing of the request. */
export interface CoverageEligibilityResponse_Error extends BackboneElement {
  /** An error code,from a specified code system, which details why the eligibility check could not be performed. */
  code: CodeableConcept;
  /** A [simple subset of FHIRPath](fhirpath.html#simple) limited to element names, repetition indicators and the default child accessor that identifies one of the elements in the resource that caused this issue to be raised. */
  expression?: Array<string | null>;
  /** Extensions for expression */
  _expression?: Array<Element | null>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const CoverageEligibilityResponse_ErrorSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    expression: fhirString().nullable().array().optional(),
    _expression: z.lazy(getElementSchema).nullable().array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.expression,
        record._expression,
        "expression",
        "_expression",
        ctx,
      );
    });

export const CoverageEligibilityResponse_ErrorSchema =
  CoverageEligibilityResponse_ErrorSchemaInternal as z.ZodType<CoverageEligibilityResponse_Error>;
