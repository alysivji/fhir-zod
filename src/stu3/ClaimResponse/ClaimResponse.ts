// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
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
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
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
import type { ClaimResponse_AddItem } from "./ClaimResponse_AddItem";
import { ClaimResponse_AddItemSchemaInternal } from "./ClaimResponse_AddItem";
import type { ClaimResponse_Error } from "./ClaimResponse_Error";
import { ClaimResponse_ErrorSchemaInternal } from "./ClaimResponse_Error";
import type { ClaimResponse_Insurance } from "./ClaimResponse_Insurance";
import { ClaimResponse_InsuranceSchemaInternal } from "./ClaimResponse_Insurance";
import type { ClaimResponse_Item } from "./ClaimResponse_Item";
import { ClaimResponse_ItemSchemaInternal } from "./ClaimResponse_Item";
import type { ClaimResponse_Payment } from "./ClaimResponse_Payment";
import { ClaimResponse_PaymentSchemaInternal } from "./ClaimResponse_Payment";
import type { ClaimResponse_ProcessNote } from "./ClaimResponse_ProcessNote";
import { ClaimResponse_ProcessNoteSchemaInternal } from "./ClaimResponse_ProcessNote";

/** Base StructureDefinition for ClaimResponse Resource */
export interface ClaimResponse extends DomainResource {
  /** The first tier service adjudications for payor added services. */
  addItem?: Array<ClaimResponse_AddItem>;
  /** Request for additional supporting or authorizing information, such as: documents, images or resources. */
  communicationRequest?: Array<Reference>;
  /** The date when the enclosed suite of services were performed or completed. */
  created?: string;
  /** Extensions for created */
  _created?: Element;
  /** A description of the status of the adjudication. */
  disposition?: string;
  /** Extensions for disposition */
  _disposition?: Element;
  /** Mutually exclusive with Services Provided (Item). */
  error?: Array<ClaimResponse_Error>;
  /** The form to be used for printing the content. */
  form?: CodeableConcept;
  /** The Response business identifier. */
  identifier?: Array<Identifier>;
  /** Financial instrument by which payment information for health care. */
  insurance?: Array<ClaimResponse_Insurance>;
  /** The Insurer who produced this adjudicated response. */
  insurer?: Reference;
  /** The first tier service adjudications for submitted services. */
  item?: Array<ClaimResponse_Item>;
  /** Processing outcome errror, partial or complete processing. */
  outcome?: CodeableConcept;
  /** Patient Resource. */
  patient?: Reference;
  /** Party to be reimbursed: Subscriber, provider, other. */
  payeeType?: CodeableConcept;
  /** Payment details for the claim if the claim has been paid. */
  payment?: ClaimResponse_Payment;
  /** Note text. */
  processNote?: Array<ClaimResponse_ProcessNote>;
  /** Original request resource referrence. */
  request?: Reference;
  /** The organization which is responsible for the services rendered to the patient. */
  requestOrganization?: Reference;
  /** The practitioner who is responsible for the services rendered to the patient. */
  requestProvider?: Reference;
  /** Status of funds reservation (For provider, for Patient, None). */
  reserved?: Coding;
  /** This is a ClaimResponse resource. */
  resourceType: "ClaimResponse";
  /** The status of the resource instance. */
  status?: "active" | "cancelled" | "draft" | "entered-in-error";
  /** Extensions for status */
  _status?: Element;
  /** Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductible). */
  totalBenefit?: Money;
  /** The total cost of the services reported. */
  totalCost?: Money;
  /** The amount of deductible applied which was not allocated to any particular service line. */
  unallocDeductable?: Money;
}

const getClaimResponse_AddItemSchema = (): z.ZodType<ClaimResponse_AddItem> =>
  ClaimResponse_AddItemSchemaInternal as z.ZodType<ClaimResponse_AddItem>;
const getClaimResponse_ErrorSchema = (): z.ZodType<ClaimResponse_Error> =>
  ClaimResponse_ErrorSchemaInternal as z.ZodType<ClaimResponse_Error>;
const getClaimResponse_InsuranceSchema =
  (): z.ZodType<ClaimResponse_Insurance> =>
    ClaimResponse_InsuranceSchemaInternal as z.ZodType<ClaimResponse_Insurance>;
const getClaimResponse_ItemSchema = (): z.ZodType<ClaimResponse_Item> =>
  ClaimResponse_ItemSchemaInternal as z.ZodType<ClaimResponse_Item>;
const getClaimResponse_PaymentSchema = (): z.ZodType<ClaimResponse_Payment> =>
  ClaimResponse_PaymentSchemaInternal as z.ZodType<ClaimResponse_Payment>;
const getClaimResponse_ProcessNoteSchema =
  (): z.ZodType<ClaimResponse_ProcessNote> =>
    ClaimResponse_ProcessNoteSchemaInternal as z.ZodType<ClaimResponse_ProcessNote>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
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
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ClaimResponseSchemaInternal = z
  .object({
    addItem: z.lazy(getClaimResponse_AddItemSchema).array().optional(),
    communicationRequest: z.lazy(getReferenceSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    created: fhirDateTime().optional(),
    _created: z.lazy(getElementSchema).optional(),
    disposition: fhirString().optional(),
    _disposition: z.lazy(getElementSchema).optional(),
    error: z.lazy(getClaimResponse_ErrorSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    form: z.lazy(getCodeableConceptSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    insurance: z.lazy(getClaimResponse_InsuranceSchema).array().optional(),
    insurer: z.lazy(getReferenceSchema).optional(),
    item: z.lazy(getClaimResponse_ItemSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    outcome: z.lazy(getCodeableConceptSchema).optional(),
    patient: z.lazy(getReferenceSchema).optional(),
    payeeType: z.lazy(getCodeableConceptSchema).optional(),
    payment: z.lazy(getClaimResponse_PaymentSchema).optional(),
    processNote: z.lazy(getClaimResponse_ProcessNoteSchema).array().optional(),
    request: z.lazy(getReferenceSchema).optional(),
    requestOrganization: z.lazy(getReferenceSchema).optional(),
    requestProvider: z.lazy(getReferenceSchema).optional(),
    reserved: z.lazy(getCodingSchema).optional(),
    resourceType: z.literal("ClaimResponse"),
    status: z
      .enum(["active", "cancelled", "draft", "entered-in-error"])
      .optional(),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    totalBenefit: z.lazy(getMoneySchema).optional(),
    totalCost: z.lazy(getMoneySchema).optional(),
    unallocDeductable: z.lazy(getMoneySchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.communicationRequest,
      "communicationRequest",
      ["http://hl7.org/fhir/StructureDefinition/CommunicationRequest"],
      ["CommunicationRequest"],
      ctx,
    );
    validateReferenceTarget(
      record.insurer,
      "insurer",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.patient,
      "patient",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
    validateReferenceTarget(
      record.request,
      "request",
      ["http://hl7.org/fhir/StructureDefinition/Claim"],
      ["Claim"],
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

export const ClaimResponseSchema =
  ClaimResponseSchemaInternal as z.ZodType<ClaimResponse>;
