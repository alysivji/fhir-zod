// Source: https://hl7.org/fhir/R5/coverage-definitions.html#Coverage.paymentBy
// Profile: http://hl7.org/fhir/StructureDefinition/Coverage
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Link to the paying party and optionally what specifically they will be responsible to pay. */
export interface Coverage_PaymentBy extends BackboneElement {
  /** The list of parties providing non-insurance payment for the treatment costs. */
  party: Reference;
  /**  Description of the financial responsibility. */
  responsibility?: string;
  /** Extensions for responsibility */
  _responsibility?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Coverage_PaymentBySchemaInternal =
  BackboneElementSchemaInternal.extend({
    party: z.lazy(getReferenceSchema),
    responsibility: fhirString().optional(),
    _responsibility: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.party,
        "party",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        ["Organization", "Patient", "RelatedPerson"],
        ctx,
      );
    });

export const Coverage_PaymentBySchema =
  Coverage_PaymentBySchemaInternal as z.ZodType<Coverage_PaymentBy>;
