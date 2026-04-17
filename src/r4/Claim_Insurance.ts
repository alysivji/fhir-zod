// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Financial instruments for reimbursement for the health care products and services specified on the claim. */
export interface Claim_Insurance extends BackboneElement {
  /** A business agreement number established between the provider and the insurer for special business processing purposes. */
  businessArrangement?: string;
  /** Extensions for businessArrangement */
  _businessArrangement?: Element;
  /** The result of the adjudication of the line items for the Coverage specified in this insurance. */
  claimResponse?: Reference;
  /** Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system. */
  coverage: Reference;
  /** A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true. */
  focal: boolean;
  /** Extensions for focal */
  _focal?: Element;
  /** The business identifier to be used when the claim is sent for adjudication against this insurance policy. */
  identifier?: Identifier;
  /** Reference numbers previously provided by the insurer to the provider to be quoted on subsequent claims containing services or products related to the prior authorization. */
  preAuthRef?: Array<string | null>;
  /** Extensions for preAuthRef */
  _preAuthRef?: Array<Element | null>;
  /** A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order. */
  sequence: number;
  /** Extensions for sequence */
  _sequence?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Claim_InsuranceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    businessArrangement: fhirString().optional(),
    _businessArrangement: z.lazy(getElementSchema).optional(),
    claimResponse: z.lazy(getReferenceSchema).optional(),
    coverage: z.lazy(getReferenceSchema),
    focal: z.boolean(),
    _focal: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    preAuthRef: fhirString().nullable().array().optional(),
    _preAuthRef: z.lazy(getElementSchema).nullable().array().optional(),
    sequence: z.number().int().positive(),
    _sequence: z.lazy(getElementSchema).optional(),
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
        record.claimResponse,
        "claimResponse",
        ["http://hl7.org/fhir/StructureDefinition/ClaimResponse"],
        ["ClaimResponse"],
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

export const Claim_InsuranceSchema =
  Claim_InsuranceSchemaInternal as z.ZodType<Claim_Insurance>;
