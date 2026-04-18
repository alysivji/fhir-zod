// Profile: http://hl7.org/fhir/StructureDefinition/PaymentReconciliation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

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
import type { PaymentReconciliation_Detail } from "./PaymentReconciliation_Detail";
import { PaymentReconciliation_DetailSchemaInternal } from "./PaymentReconciliation_Detail";
import type { PaymentReconciliation_ProcessNote } from "./PaymentReconciliation_ProcessNote";
import { PaymentReconciliation_ProcessNoteSchemaInternal } from "./PaymentReconciliation_ProcessNote";

/** Base StructureDefinition for PaymentReconciliation Resource */
export interface PaymentReconciliation extends DomainResource {
  /** The date when the enclosed suite of services were performed or completed. */
  created?: string;
  /** Extensions for created */
  _created?: Element;
  /** List of individual settlement amounts and the corresponding transaction. */
  detail?: Array<PaymentReconciliation_Detail>;
  /** A description of the status of the adjudication. */
  disposition?: string;
  /** Extensions for disposition */
  _disposition?: Element;
  /** The form to be used for printing the content. */
  form?: CodeableConcept;
  /** The Response business identifier. */
  identifier?: Array<Identifier>;
  /** The Insurer who produced this adjudicated response. */
  organization?: Reference;
  /** Transaction status: error, complete. */
  outcome?: CodeableConcept;
  /** The period of time for which payments have been gathered into this bulk payment for settlement. */
  period?: Period;
  /** Suite of notes. */
  processNote?: Array<PaymentReconciliation_ProcessNote>;
  /** Original request resource reference. */
  request?: Reference;
  /** The organization which is responsible for the services rendered to the patient. */
  requestOrganization?: Reference;
  /** The practitioner who is responsible for the services rendered to the patient. */
  requestProvider?: Reference;
  /** This is a PaymentReconciliation resource. */
  resourceType: "PaymentReconciliation";
  /** The status of the resource instance. */
  status?: "active" | "cancelled" | "draft" | "entered-in-error";
  /** Extensions for status */
  _status?: Element;
  /** Total payment amount. */
  total?: Money;
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
const getPaymentReconciliation_DetailSchema =
  (): z.ZodType<PaymentReconciliation_Detail> =>
    PaymentReconciliation_DetailSchemaInternal as z.ZodType<PaymentReconciliation_Detail>;
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
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    created: fhirDateTime().optional(),
    _created: z.lazy(getElementSchema).optional(),
    detail: z.lazy(getPaymentReconciliation_DetailSchema).array().optional(),
    disposition: fhirString().optional(),
    _disposition: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    form: z.lazy(getCodeableConceptSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    organization: z.lazy(getReferenceSchema).optional(),
    outcome: z.lazy(getCodeableConceptSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
    processNote: z
      .lazy(getPaymentReconciliation_ProcessNoteSchema)
      .array()
      .optional(),
    request: z.lazy(getReferenceSchema).optional(),
    requestOrganization: z.lazy(getReferenceSchema).optional(),
    requestProvider: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("PaymentReconciliation"),
    status: z
      .enum(["active", "cancelled", "draft", "entered-in-error"])
      .optional(),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    total: z.lazy(getMoneySchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.organization,
      "organization",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.request,
      "request",
      ["http://hl7.org/fhir/StructureDefinition/ProcessRequest"],
      ["ProcessRequest"],
      ctx,
    );
    validateReferenceTarget(
      record.requestOrganization,
      "requestOrganization",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.requestProvider,
      "requestProvider",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
      ctx,
    );
  });

export const PaymentReconciliationSchema =
  PaymentReconciliationSchemaInternal as z.ZodType<PaymentReconciliation>;
