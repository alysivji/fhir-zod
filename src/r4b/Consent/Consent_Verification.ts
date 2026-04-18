// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Whether a treatment instruction (e.g. artificial respiration yes or no) was verified with the patient, his/her family or another authorized person. */
export interface Consent_Verification extends BackboneElement {
  /** Date verification was collected. */
  verificationDate?: string;
  /** Extensions for verificationDate */
  _verificationDate?: Element;
  /** Has the instruction been verified. */
  verified: boolean;
  /** Extensions for verified */
  _verified?: Element;
  /** Who verified the instruction (Patient, Relative or other Authorized Person). */
  verifiedWith?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Consent_VerificationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    verificationDate: fhirDateTime().optional(),
    _verificationDate: z.lazy(getElementSchema).optional(),
    verified: z.boolean(),
    _verified: z.lazy(getElementSchema).optional(),
    verifiedWith: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.verifiedWith,
        "verifiedWith",
        [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        ["Patient", "RelatedPerson"],
        ctx,
      );
    });

export const Consent_VerificationSchema =
  Consent_VerificationSchemaInternal as z.ZodType<Consent_Verification>;
