// Source: https://hl7.org/fhir/R4/invoice.html
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
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
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Invoice_LineItem } from "./Invoice_LineItem";
import { Invoice_LineItemSchemaInternal } from "./Invoice_LineItem";
import type { Invoice_Participant } from "./Invoice_Participant";
import { Invoice_ParticipantSchemaInternal } from "./Invoice_Participant";

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface Invoice extends DomainResource {
  /** Account which is supposed to be balanced with this Invoice. */
  account?: Reference;
  /** In case of Invoice cancellation a reason must be given (entered in error, superseded by corrected invoice etc.). */
  cancelledReason?: string;
  /** Extensions for cancelledReason */
  _cancelledReason?: Element;
  /** Date/time(s) of when this Invoice was posted. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments. */
  identifier?: Array<Identifier>;
  /** The organizationissuing the Invoice. */
  issuer?: Reference;
  /** Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource. */
  lineItem?: Array<Invoice_LineItem>;
  /** Comments made about the invoice by the issuer, subject, or other participants. */
  note?: Array<Annotation>;
  /** Indicates who or what performed or participated in the charged service. */
  participant?: Array<Invoice_Participant>;
  /** Payment details such as banking details, period of payment, deductibles, methods of payment. */
  paymentTerms?: string;
  /** Extensions for paymentTerms */
  _paymentTerms?: Element;
  /** The individual or Organization responsible for balancing of this invoice. */
  recipient?: Reference;
  /** This is a Invoice resource. */
  resourceType: "Invoice";
  /** The current state of the Invoice. */
  status: "balanced" | "cancelled" | "draft" | "entered-in-error" | "issued";
  /** Extensions for status */
  _status?: Element;
  /** The individual or set of individuals receiving the goods and services billed in this invoice. */
  subject?: Reference;
  /** Invoice total, tax included. */
  totalGross?: Money;
  /** Invoice total , taxes excluded. */
  totalNet?: Money;
  /** The total amount for the Invoice may be calculated as the sum of the line items with surcharges/deductions that apply in certain conditions.  The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the total price was calculated. */
  totalPriceComponent?: Array<unknown>;
  /** Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary). */
  type?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getInvoice_LineItemSchema = (): z.ZodType<Invoice_LineItem> =>
  Invoice_LineItemSchemaInternal as z.ZodType<Invoice_LineItem>;
const getInvoice_ParticipantSchema = (): z.ZodType<Invoice_Participant> =>
  Invoice_ParticipantSchemaInternal as z.ZodType<Invoice_Participant>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const InvoiceSchemaInternal = z
  .object({
    account: z.lazy(getReferenceSchema).optional(),
    cancelledReason: fhirString().optional(),
    _cancelledReason: z.lazy(getElementSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    issuer: z.lazy(getReferenceSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    lineItem: z.lazy(getInvoice_LineItemSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    participant: z.lazy(getInvoice_ParticipantSchema).array().optional(),
    paymentTerms: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _paymentTerms: z.lazy(getElementSchema).optional(),
    recipient: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("Invoice"),
    status: z.enum([
      "balanced",
      "cancelled",
      "draft",
      "entered-in-error",
      "issued",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    totalGross: z.lazy(getMoneySchema).optional(),
    totalNet: z.lazy(getMoneySchema).optional(),
    totalPriceComponent: z.unknown().array().optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.account,
      "account",
      ["http://hl7.org/fhir/StructureDefinition/Account"],
      ["Account"],
      ctx,
    );
    validateReferenceTarget(
      record.issuer,
      "issuer",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.recipient,
      "recipient",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Organization", "Patient", "RelatedPerson"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Group", "Patient"],
      ctx,
    );
  });

export const InvoiceSchema = InvoiceSchemaInternal as z.ZodType<Invoice>;
