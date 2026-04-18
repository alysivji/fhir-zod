// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { fhirDate } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";

/** Payment details for the claim if the claim has been paid. */
export interface ClaimResponse_Payment extends BackboneElement {
  /** Adjustment to the payment of this transaction which is not related to adjudication of this transaction. */
  adjustment?: Money;
  /** Reason for the payment adjustment. */
  adjustmentReason?: CodeableConcept;
  /** Payable less any payment adjustment. */
  amount?: Money;
  /** Estimated payment data. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Payment identifier. */
  identifier?: Identifier;
  /** Whether this represents partial or complete payment of the claim. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const ClaimResponse_PaymentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    adjustment: z.lazy(getMoneySchema).optional(),
    adjustmentReason: z.lazy(getCodeableConceptSchema).optional(),
    amount: z.lazy(getMoneySchema).optional(),
    date: fhirDate().optional(),
    _date: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const ClaimResponse_PaymentSchema =
  ClaimResponse_PaymentSchemaInternal as z.ZodType<ClaimResponse_Payment>;
