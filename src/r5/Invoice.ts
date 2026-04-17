// Profile: http://hl7.org/fhir/StructureDefinition/Invoice
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirDate, fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Invoice_LineItem } from "./Invoice_LineItem";
import { Invoice_LineItemSchemaInternal } from "./Invoice_LineItem";
import type { Invoice_Participant } from "./Invoice_Participant";
import { Invoice_ParticipantSchemaInternal } from "./Invoice_Participant";
import type { MonetaryComponent } from "./MonetaryComponent";
import { MonetaryComponentSchemaInternal } from "./MonetaryComponent";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface Invoice extends DomainResource {
  /** Account which is supposed to be balanced with this Invoice. */
  account?: Reference;
  /** In case of Invoice cancellation a reason must be given (entered in error, superseded by corrected invoice etc.). */
  cancelledReason?: string;
  /** Extensions for cancelledReason */
  _cancelledReason?: Element;
  /** Date/time(s) of when this Invoice was posted. */
  creation?: string;
  /** Extensions for creation */
  _creation?: Element;
  /** Depricared by the element below. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Identifier of this Invoice, often used for reference in correspondence about this invoice or for tracking of payments. */
  identifier?: Array<Identifier>;
  /** The organizationissuing the Invoice. */
  issuer?: Reference;
  /** Each line item represents one charge for goods and services rendered. Details such.ofType(date), code and amount are found in the referenced ChargeItem resource. */
  lineItem?: Array<Invoice_LineItem>;
  /** Comments made about the invoice by the issuer, subject, or other participants. */
  note?: Array<Annotation>;
  /** Indicates who or what performed or participated in the charged service. */
  participant?: Array<Invoice_Participant>;
  /** Payment details such as banking details, period of payment, deductibles, methods of payment. */
  paymentTerms?: string;
  /** Extensions for paymentTerms */
  _paymentTerms?: Element;
  /** Date/time(s) range of services included in this invoice. */
  periodDate?: string;
  /** Extensions for periodDate */
  _periodDate?: Element;
  /** Date/time(s) range of services included in this invoice. */
  periodPeriod?: Period;
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
  totalPriceComponent?: Array<MonetaryComponent>;
  /** Type of Invoice depending on domain, realm an usage (e.g. internal/external, dental, preliminary). */
  type?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getInvoice_LineItemSchema = (): z.ZodType<Invoice_LineItem> =>
  Invoice_LineItemSchemaInternal as z.ZodType<Invoice_LineItem>;
const getInvoice_ParticipantSchema = (): z.ZodType<Invoice_Participant> =>
  Invoice_ParticipantSchemaInternal as z.ZodType<Invoice_Participant>;
const getMonetaryComponentSchema = (): z.ZodType<MonetaryComponent> =>
  MonetaryComponentSchemaInternal as z.ZodType<MonetaryComponent>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const InvoiceSchemaInternal = DomainResourceSchemaInternal.extend({
  account: z.lazy(getReferenceSchema).optional(),
  cancelledReason: fhirString().optional(),
  _cancelledReason: z.lazy(getElementSchema).optional(),
  creation: fhirDateTime().optional(),
  _creation: z.lazy(getElementSchema).optional(),
  date: fhirDateTime().optional(),
  _date: z.lazy(getElementSchema).optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  issuer: z.lazy(getReferenceSchema).optional(),
  lineItem: z.lazy(getInvoice_LineItemSchema).array().optional(),
  note: z.lazy(getAnnotationSchema).array().optional(),
  participant: z.lazy(getInvoice_ParticipantSchema).array().optional(),
  paymentTerms: z
    .string()
    .regex(/^[\s\S]+$/)
    .optional(),
  _paymentTerms: z.lazy(getElementSchema).optional(),
  periodDate: fhirDate().optional(),
  _periodDate: z.lazy(getElementSchema).optional(),
  periodPeriod: z.lazy(getPeriodSchema).optional(),
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
  totalGross: z.lazy(getMoneySchema).optional(),
  totalNet: z.lazy(getMoneySchema).optional(),
  totalPriceComponent: z.lazy(getMonetaryComponentSchema).array().optional(),
  type: z.lazy(getCodeableConceptSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const period_x_Present = ["periodDate", "periodPeriod"].filter(
      (field) => record[field] !== undefined,
    );
    if (period_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of periodDate, periodPeriod may be present for period[x]",
        path: [period_x_Present[0]],
      });
    }
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
