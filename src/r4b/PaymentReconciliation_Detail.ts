// Profile: http://hl7.org/fhir/StructureDefinition/PaymentReconciliation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirDate } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Distribution of the payment amount for a previously acknowledged payable. */
export interface PaymentReconciliation_Detail extends BackboneElement {
  /** The monetary amount allocated from the total payment to the payable. */
  amount?: Money;
  /** The date from the response resource containing a commitment to pay. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Unique identifier for the current payment item for the referenced payable. */
  identifier?: Identifier;
  /** The party which is receiving the payment. */
  payee?: Reference;
  /** Unique identifier for the prior payment item for the referenced payable. */
  predecessor?: Identifier;
  /** A resource, such as a Claim, the evaluation of which could lead to payment. */
  request?: Reference;
  /** A resource, such as a ClaimResponse, which contains a commitment to payment. */
  response?: Reference;
  /** A reference to the individual who is responsible for inquiries regarding the response and its payment. */
  responsible?: Reference;
  /** The party which submitted the claim or financial transaction. */
  submitter?: Reference;
  /** Code to indicate the nature of the payment. */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PaymentReconciliation_DetailSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amount: z.lazy(getMoneySchema).optional(),
    date: fhirDate().optional(),
    _date: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    payee: z.lazy(getReferenceSchema).optional(),
    predecessor: z.lazy(getIdentifierSchema).optional(),
    request: z.lazy(getReferenceSchema).optional(),
    response: z.lazy(getReferenceSchema).optional(),
    responsible: z.lazy(getReferenceSchema).optional(),
    submitter: z.lazy(getReferenceSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.payee,
        "payee",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        ["Organization", "Practitioner", "PractitionerRole"],
        ctx,
      );
      validateReferenceTarget(
        record.request,
        "request",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
      validateReferenceTarget(
        record.response,
        "response",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
      validateReferenceTarget(
        record.responsible,
        "responsible",
        ["http://hl7.org/fhir/StructureDefinition/PractitionerRole"],
        ["PractitionerRole"],
        ctx,
      );
      validateReferenceTarget(
        record.submitter,
        "submitter",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        ["Organization", "Practitioner", "PractitionerRole"],
        ctx,
      );
    });

export const PaymentReconciliation_DetailSchema =
  PaymentReconciliation_DetailSchemaInternal as z.ZodType<PaymentReconciliation_Detail>;
