// Source: https://hl7.org/fhir/R5/paymentreconciliation.html
// Profile: http://hl7.org/fhir/StructureDefinition/PaymentReconciliation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import {
  fhirCode,
  fhirDate,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { PaymentReconciliation_Allocation } from "./PaymentReconciliation_Allocation";
import { PaymentReconciliation_AllocationSchemaInternal } from "./PaymentReconciliation_Allocation";
import type { PaymentReconciliation_ProcessNote } from "./PaymentReconciliation_ProcessNote";
import { PaymentReconciliation_ProcessNoteSchemaInternal } from "./PaymentReconciliation_ProcessNote";

/** This resource provides the details including amount of a payment and allocates the payment items being paid. */
export interface PaymentReconciliation extends DomainResource {
  /** A portion of the account number, often the last 4 digits, used for verification not charging purposes. */
  accountNumber?: string;
  /** Extensions for accountNumber */
  _accountNumber?: Element;
  /** Distribution of the payment amount for a previously acknowledged payable. */
  allocation?: Array<PaymentReconciliation_Allocation>;
  /** Total payment amount as indicated on the financial instrument. */
  amount: Money;
  /** An alphanumeric issued by the processor to confirm the successful issuance of payment. */
  authorization?: string;
  /** Extensions for authorization */
  _authorization?: Element;
  /** The card brand such as debit, Visa, Amex etc. used if a card is the method of payment. */
  cardBrand?: string;
  /** Extensions for cardBrand */
  _cardBrand?: Element;
  /** The date when the resource was created. */
  created: string;
  /** Extensions for created */
  _created?: Element;
  /** The date of payment as indicated on the financial instrument. */
  date: string;
  /** Extensions for date */
  _date?: Element;
  /** A human readable description of the status of the request for the reconciliation. */
  disposition?: string;
  /** Extensions for disposition */
  _disposition?: Element;
  /** Payment enterer if not the actual payment issuer. */
  enterer?: Reference;
  /** The year and month (YYYY-MM) when the instrument, typically card, expires. */
  expirationDate?: string;
  /** Extensions for expirationDate */
  _expirationDate?: Element;
  /** A code for the form to be used for printing the content. */
  formCode?: CodeableConcept;
  /** A unique identifier assigned to this payment reconciliation. */
  identifier?: Array<Identifier>;
  /** The type of the source such as patient or insurance. */
  issuerType?: CodeableConcept;
  /** The workflow or activity which gave rise to or during which the payment ocurred such as a kiosk, deposit on account, periodic payment etc. */
  kind?: CodeableConcept;
  /** The location of the site or device for electronic transfers or physical location for cash payments. */
  location?: Reference;
  /** The means of payment such as check, card cash, or electronic funds transfer. */
  method?: CodeableConcept;
  /** The outcome of a request for a reconciliation. */
  outcome?: "complete" | "error" | "partial" | "queued";
  /** Extensions for outcome */
  _outcome?: Element;
  /** Issuer's unique identifier for the payment instrument. */
  paymentIdentifier?: Identifier;
  /** The party who generated the payment. */
  paymentIssuer?: Reference;
  /** The period of time for which payments have been gathered into this bulk payment for settlement. */
  period?: Period;
  /** A note that describes or explains the processing in a human readable form. */
  processNote?: Array<PaymentReconciliation_ProcessNote>;
  /** The name of the card processor, etf processor, bank for checks. */
  processor?: string;
  /** Extensions for processor */
  _processor?: Element;
  /** The check number, eft reference, car processor reference. */
  referenceNumber?: string;
  /** Extensions for referenceNumber */
  _referenceNumber?: Element;
  /** Original request resource reference. */
  request?: Reference;
  /** The practitioner who is responsible for the services rendered to the patient. */
  requestor?: Reference;
  /** This is a PaymentReconciliation resource. */
  resourceType: "PaymentReconciliation";
  /** The amount returned by the receiver which is excess to the amount payable, often referred to as 'change'. */
  returnedAmount?: Money;
  /** The status of the resource instance. */
  status: "active" | "cancelled" | "draft" | "entered-in-error";
  /** Extensions for status */
  _status?: Element;
  /** The amount offered by the issuer, typically applies to cash when the issuer provides an amount in bank note denominations equal to or excess of the amount actually being paid. */
  tenderedAmount?: Money;
  /** Code to indicate the nature of the payment such as payment, adjustment. */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPaymentReconciliation_AllocationSchema =
  (): z.ZodType<PaymentReconciliation_Allocation> =>
    PaymentReconciliation_AllocationSchemaInternal as z.ZodType<PaymentReconciliation_Allocation>;
const getPaymentReconciliation_ProcessNoteSchema =
  (): z.ZodType<PaymentReconciliation_ProcessNote> =>
    PaymentReconciliation_ProcessNoteSchemaInternal as z.ZodType<PaymentReconciliation_ProcessNote>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const PaymentReconciliationSchemaInternal = z
  .object({
    accountNumber: fhirString().optional(),
    _accountNumber: z.lazy(getElementSchema).optional(),
    allocation: z
      .lazy(getPaymentReconciliation_AllocationSchema)
      .array()
      .optional(),
    amount: z.lazy(getMoneySchema),
    authorization: fhirString().optional(),
    _authorization: z.lazy(getElementSchema).optional(),
    cardBrand: fhirString().optional(),
    _cardBrand: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    created: fhirDateTime(),
    _created: z.lazy(getElementSchema).optional(),
    date: fhirDate(),
    _date: z.lazy(getElementSchema).optional(),
    disposition: fhirString().optional(),
    _disposition: z.lazy(getElementSchema).optional(),
    enterer: z.lazy(getReferenceSchema).optional(),
    expirationDate: fhirDate().optional(),
    _expirationDate: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    formCode: z.lazy(getCodeableConceptSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    issuerType: z.lazy(getCodeableConceptSchema).optional(),
    kind: z.lazy(getCodeableConceptSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    location: z.lazy(getReferenceSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    method: z.lazy(getCodeableConceptSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    outcome: z.enum(["complete", "error", "partial", "queued"]).optional(),
    _outcome: z.lazy(getElementSchema).optional(),
    paymentIdentifier: z.lazy(getIdentifierSchema).optional(),
    paymentIssuer: z.lazy(getReferenceSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
    processNote: z
      .lazy(getPaymentReconciliation_ProcessNoteSchema)
      .array()
      .optional(),
    processor: fhirString().optional(),
    _processor: z.lazy(getElementSchema).optional(),
    referenceNumber: fhirString().optional(),
    _referenceNumber: z.lazy(getElementSchema).optional(),
    request: z.lazy(getReferenceSchema).optional(),
    requestor: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("PaymentReconciliation"),
    returnedAmount: z.lazy(getMoneySchema).optional(),
    status: z.enum(["active", "cancelled", "draft", "entered-in-error"]),
    _status: z.lazy(getElementSchema).optional(),
    tenderedAmount: z.lazy(getMoneySchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.enterer,
      "enterer",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Organization", "Practitioner", "PractitionerRole"],
      ctx,
    );
    validateReferenceTarget(
      record.location,
      "location",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
      ctx,
    );
    validateReferenceTarget(
      record.paymentIssuer,
      "paymentIssuer",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Organization", "Patient", "RelatedPerson"],
      ctx,
    );
    validateReferenceTarget(
      record.request,
      "request",
      ["http://hl7.org/fhir/StructureDefinition/Task"],
      ["Task"],
      ctx,
    );
    validateReferenceTarget(
      record.requestor,
      "requestor",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Organization", "Practitioner", "PractitionerRole"],
      ctx,
    );
  });

export const PaymentReconciliationSchema =
  PaymentReconciliationSchemaInternal as z.ZodType<PaymentReconciliation>;
