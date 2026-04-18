// Profile: http://hl7.org/fhir/StructureDefinition/PaymentNotice
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirDate, fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** This resource provides the status of the payment for goods and services rendered, and the request and response resource references. */
export interface PaymentNotice extends DomainResource {
  /** The amount sent to the payee. */
  amount: Money;
  /** The date when this resource was created. */
  created: string;
  /** Extensions for created */
  _created?: Element;
  /** A unique identifier assigned to this payment notice. */
  identifier?: Array<Identifier>;
  /** The party who will receive or has received payment that is the subject of this notification. */
  payee?: Reference;
  /** A reference to the payment which is the subject of this notice. */
  payment: Reference;
  /** The date when the above payment action occurred. */
  paymentDate?: string;
  /** Extensions for paymentDate */
  _paymentDate?: Element;
  /** A code indicating whether payment has been sent or cleared. */
  paymentStatus?: CodeableConcept;
  /** The practitioner who is responsible for the services rendered to the patient. */
  provider?: Reference;
  /** The party who is notified of the payment status. */
  recipient: Reference;
  /** Reference of resource for which payment is being made. */
  request?: Reference;
  /** This is a PaymentNotice resource. */
  resourceType: "PaymentNotice";
  /** Reference of response to resource for which payment is being made. */
  response?: Reference;
  /** The status of the resource instance. */
  status: "active" | "cancelled" | "draft" | "entered-in-error";
  /** Extensions for status */
  _status?: Element;
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
export const PaymentNoticeSchemaInternal = DomainResourceSchemaInternal.extend({
  amount: z.lazy(getMoneySchema),
  created: fhirDateTime(),
  _created: z.lazy(getElementSchema).optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  payee: z.lazy(getReferenceSchema).optional(),
  payment: z.lazy(getReferenceSchema),
  paymentDate: fhirDate().optional(),
  _paymentDate: z.lazy(getElementSchema).optional(),
  paymentStatus: z.lazy(getCodeableConceptSchema).optional(),
  provider: z.lazy(getReferenceSchema).optional(),
  recipient: z.lazy(getReferenceSchema),
  request: z.lazy(getReferenceSchema).optional(),
  resourceType: z.literal("PaymentNotice"),
  response: z.lazy(getReferenceSchema).optional(),
  status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
  _status: z.lazy(getElementSchema).optional(),
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
      record.payment,
      "payment",
      ["http://hl7.org/fhir/StructureDefinition/PaymentReconciliation"],
      ["PaymentReconciliation"],
      ctx,
    );
    validateReferenceTarget(
      record.provider,
      "provider",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Organization", "Practitioner", "PractitionerRole"],
      ctx,
    );
    validateReferenceTarget(
      record.recipient,
      "recipient",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
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
  });

export const PaymentNoticeSchema =
  PaymentNoticeSchemaInternal as z.ZodType<PaymentNotice>;
