// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
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
import type { ExplanationOfBenefit_Accident } from "./ExplanationOfBenefit_Accident";
import { ExplanationOfBenefit_AccidentSchemaInternal } from "./ExplanationOfBenefit_Accident";
import type { ExplanationOfBenefit_AddItem } from "./ExplanationOfBenefit_AddItem";
import { ExplanationOfBenefit_AddItemSchemaInternal } from "./ExplanationOfBenefit_AddItem";
import type { ExplanationOfBenefit_BenefitBalance } from "./ExplanationOfBenefit_BenefitBalance";
import { ExplanationOfBenefit_BenefitBalanceSchemaInternal } from "./ExplanationOfBenefit_BenefitBalance";
import type { ExplanationOfBenefit_CareTeam } from "./ExplanationOfBenefit_CareTeam";
import { ExplanationOfBenefit_CareTeamSchemaInternal } from "./ExplanationOfBenefit_CareTeam";
import type { ExplanationOfBenefit_Diagnosis } from "./ExplanationOfBenefit_Diagnosis";
import { ExplanationOfBenefit_DiagnosisSchemaInternal } from "./ExplanationOfBenefit_Diagnosis";
import type { ExplanationOfBenefit_Information } from "./ExplanationOfBenefit_Information";
import { ExplanationOfBenefit_InformationSchemaInternal } from "./ExplanationOfBenefit_Information";
import type { ExplanationOfBenefit_Insurance } from "./ExplanationOfBenefit_Insurance";
import { ExplanationOfBenefit_InsuranceSchemaInternal } from "./ExplanationOfBenefit_Insurance";
import type { ExplanationOfBenefit_Item } from "./ExplanationOfBenefit_Item";
import { ExplanationOfBenefit_ItemSchemaInternal } from "./ExplanationOfBenefit_Item";
import type { ExplanationOfBenefit_Payee } from "./ExplanationOfBenefit_Payee";
import { ExplanationOfBenefit_PayeeSchemaInternal } from "./ExplanationOfBenefit_Payee";
import type { ExplanationOfBenefit_Payment } from "./ExplanationOfBenefit_Payment";
import { ExplanationOfBenefit_PaymentSchemaInternal } from "./ExplanationOfBenefit_Payment";
import type { ExplanationOfBenefit_Procedure } from "./ExplanationOfBenefit_Procedure";
import { ExplanationOfBenefit_ProcedureSchemaInternal } from "./ExplanationOfBenefit_Procedure";
import type { ExplanationOfBenefit_ProcessNote } from "./ExplanationOfBenefit_ProcessNote";
import { ExplanationOfBenefit_ProcessNoteSchemaInternal } from "./ExplanationOfBenefit_ProcessNote";
import type { ExplanationOfBenefit_Related } from "./ExplanationOfBenefit_Related";
import { ExplanationOfBenefit_RelatedSchemaInternal } from "./ExplanationOfBenefit_Related";

/** Base StructureDefinition for ExplanationOfBenefit Resource */
export interface ExplanationOfBenefit extends DomainResource {
  /** An accident which resulted in the need for healthcare services. */
  accident?: ExplanationOfBenefit_Accident;
  /** The first tier service adjudications for payor added services. */
  addItem?: Array<ExplanationOfBenefit_AddItem>;
  /** Balance by Benefit Category. */
  benefitBalance?: Array<ExplanationOfBenefit_BenefitBalance>;
  /** The billable period for which charges are being submitted. */
  billablePeriod?: Period;
  /** The members of the team who provided the overall service as well as their role and whether responsible and qualifications. */
  careTeam?: Array<ExplanationOfBenefit_CareTeam>;
  /** The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number. */
  claim?: Reference;
  /** The business identifier for the instance: invoice number, claim number, pre-determination or pre-authorization number. */
  claimResponse?: Reference;
  /** The date when the EOB was created. */
  created?: string;
  /** Extensions for created */
  _created?: Element;
  /** Ordered list of patient diagnosis for which care is sought. */
  diagnosis?: Array<ExplanationOfBenefit_Diagnosis>;
  /** A description of the status of the adjudication. */
  disposition?: string;
  /** Extensions for disposition */
  _disposition?: Element;
  /** The start and optional end dates of when the patient was precluded from working due to the treatable condition(s). */
  employmentImpacted?: Period;
  /** The person who created the explanation of benefit. */
  enterer?: Reference;
  /** Facility where the services were provided. */
  facility?: Reference;
  /** The form to be used for printing the content. */
  form?: CodeableConcept;
  /** The start and optional end dates of when the patient was confined to a treatment center. */
  hospitalization?: Period;
  /** The EOB Business Identifier. */
  identifier?: Array<Identifier>;
  /** Additional information codes regarding exceptions, special considerations, the condition, situation, prior or concurrent issues. Often there are mutiple jurisdiction specific valuesets which are required. */
  information?: Array<ExplanationOfBenefit_Information>;
  /** Financial instrument by which payment information for health care. */
  insurance?: ExplanationOfBenefit_Insurance;
  /** The insurer which is responsible for the explanation of benefit. */
  insurer?: Reference;
  /** First tier of goods and services. */
  item?: Array<ExplanationOfBenefit_Item>;
  /** The provider which is responsible for the claim. */
  organization?: Reference;
  /** Original prescription which has been superceded by this prescription to support the dispensing of pharmacy services, medications or products. For example, a physician may prescribe a medication which the pharmacy determines is contraindicated, or for which the patient has an intolerance, and therefor issues a new precription for an alternate medication which has the same theraputic intent. The prescription from the pharmacy becomes the 'prescription' and that from the physician becomes the 'original prescription'. */
  originalPrescription?: Reference;
  /** Processing outcome errror, partial or complete processing. */
  outcome?: CodeableConcept;
  /** Patient Resource. */
  patient?: Reference;
  /** The party to be reimbursed for the services. */
  payee?: ExplanationOfBenefit_Payee;
  /** Payment details for the claim if the claim has been paid. */
  payment?: ExplanationOfBenefit_Payment;
  /** Precedence (primary, secondary, etc.). */
  precedence?: number;
  /** Extensions for precedence */
  _precedence?: Element;
  /** Prescription to support the dispensing of Pharmacy or Vision products. */
  prescription?: Reference;
  /** Ordered list of patient procedures performed to support the adjudication. */
  procedure?: Array<ExplanationOfBenefit_Procedure>;
  /** Note text. */
  processNote?: Array<ExplanationOfBenefit_ProcessNote>;
  /** The provider which is responsible for the claim. */
  provider?: Reference;
  /** The referral resource which lists the date, practitioner, reason and other supporting information. */
  referral?: Reference;
  /** Other claims which are related to this claim such as prior claim versions or for related services. */
  related?: Array<ExplanationOfBenefit_Related>;
  /** This is a ExplanationOfBenefit resource. */
  resourceType: "ExplanationOfBenefit";
  /** The status of the resource instance. */
  status?: "active" | "cancelled" | "draft" | "entered-in-error";
  /** Extensions for status */
  _status?: Element;
  /** A finer grained suite of claim subtype codes which may convey Inpatient vs Outpatient and/or a specialty service. In the US the BillType. */
  subType?: Array<CodeableConcept>;
  /** Total amount of benefit payable (Equal to sum of the Benefit amounts from all detail lines and additions less the Unallocated Deductable). */
  totalBenefit?: Money;
  /** The total cost of the services reported. */
  totalCost?: Money;
  /** The category of claim, eg, oral, pharmacy, vision, insitutional, professional. */
  type?: CodeableConcept;
  /** The amount of deductable applied which was not allocated to any particular service line. */
  unallocDeductable?: Money;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExplanationOfBenefit_AccidentSchema =
  (): z.ZodType<ExplanationOfBenefit_Accident> =>
    ExplanationOfBenefit_AccidentSchemaInternal as z.ZodType<ExplanationOfBenefit_Accident>;
const getExplanationOfBenefit_AddItemSchema =
  (): z.ZodType<ExplanationOfBenefit_AddItem> =>
    ExplanationOfBenefit_AddItemSchemaInternal as z.ZodType<ExplanationOfBenefit_AddItem>;
const getExplanationOfBenefit_BenefitBalanceSchema =
  (): z.ZodType<ExplanationOfBenefit_BenefitBalance> =>
    ExplanationOfBenefit_BenefitBalanceSchemaInternal as z.ZodType<ExplanationOfBenefit_BenefitBalance>;
const getExplanationOfBenefit_CareTeamSchema =
  (): z.ZodType<ExplanationOfBenefit_CareTeam> =>
    ExplanationOfBenefit_CareTeamSchemaInternal as z.ZodType<ExplanationOfBenefit_CareTeam>;
const getExplanationOfBenefit_DiagnosisSchema =
  (): z.ZodType<ExplanationOfBenefit_Diagnosis> =>
    ExplanationOfBenefit_DiagnosisSchemaInternal as z.ZodType<ExplanationOfBenefit_Diagnosis>;
const getExplanationOfBenefit_InformationSchema =
  (): z.ZodType<ExplanationOfBenefit_Information> =>
    ExplanationOfBenefit_InformationSchemaInternal as z.ZodType<ExplanationOfBenefit_Information>;
const getExplanationOfBenefit_InsuranceSchema =
  (): z.ZodType<ExplanationOfBenefit_Insurance> =>
    ExplanationOfBenefit_InsuranceSchemaInternal as z.ZodType<ExplanationOfBenefit_Insurance>;
const getExplanationOfBenefit_ItemSchema =
  (): z.ZodType<ExplanationOfBenefit_Item> =>
    ExplanationOfBenefit_ItemSchemaInternal as z.ZodType<ExplanationOfBenefit_Item>;
const getExplanationOfBenefit_PayeeSchema =
  (): z.ZodType<ExplanationOfBenefit_Payee> =>
    ExplanationOfBenefit_PayeeSchemaInternal as z.ZodType<ExplanationOfBenefit_Payee>;
const getExplanationOfBenefit_PaymentSchema =
  (): z.ZodType<ExplanationOfBenefit_Payment> =>
    ExplanationOfBenefit_PaymentSchemaInternal as z.ZodType<ExplanationOfBenefit_Payment>;
const getExplanationOfBenefit_ProcedureSchema =
  (): z.ZodType<ExplanationOfBenefit_Procedure> =>
    ExplanationOfBenefit_ProcedureSchemaInternal as z.ZodType<ExplanationOfBenefit_Procedure>;
const getExplanationOfBenefit_ProcessNoteSchema =
  (): z.ZodType<ExplanationOfBenefit_ProcessNote> =>
    ExplanationOfBenefit_ProcessNoteSchemaInternal as z.ZodType<ExplanationOfBenefit_ProcessNote>;
const getExplanationOfBenefit_RelatedSchema =
  (): z.ZodType<ExplanationOfBenefit_Related> =>
    ExplanationOfBenefit_RelatedSchemaInternal as z.ZodType<ExplanationOfBenefit_Related>;
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
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ExplanationOfBenefitSchemaInternal = z
  .object({
    accident: z.lazy(getExplanationOfBenefit_AccidentSchema).optional(),
    addItem: z.lazy(getExplanationOfBenefit_AddItemSchema).array().optional(),
    benefitBalance: z
      .lazy(getExplanationOfBenefit_BenefitBalanceSchema)
      .array()
      .optional(),
    billablePeriod: z.lazy(getPeriodSchema).optional(),
    careTeam: z.lazy(getExplanationOfBenefit_CareTeamSchema).array().optional(),
    claim: z.lazy(getReferenceSchema).optional(),
    claimResponse: z.lazy(getReferenceSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    created: fhirDateTime().optional(),
    _created: z.lazy(getElementSchema).optional(),
    diagnosis: z
      .lazy(getExplanationOfBenefit_DiagnosisSchema)
      .array()
      .optional(),
    disposition: fhirString().optional(),
    _disposition: z.lazy(getElementSchema).optional(),
    employmentImpacted: z.lazy(getPeriodSchema).optional(),
    enterer: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    facility: z.lazy(getReferenceSchema).optional(),
    form: z.lazy(getCodeableConceptSchema).optional(),
    hospitalization: z.lazy(getPeriodSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    information: z
      .lazy(getExplanationOfBenefit_InformationSchema)
      .array()
      .optional(),
    insurance: z.lazy(getExplanationOfBenefit_InsuranceSchema).optional(),
    insurer: z.lazy(getReferenceSchema).optional(),
    item: z.lazy(getExplanationOfBenefit_ItemSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    organization: z.lazy(getReferenceSchema).optional(),
    originalPrescription: z.lazy(getReferenceSchema).optional(),
    outcome: z.lazy(getCodeableConceptSchema).optional(),
    patient: z.lazy(getReferenceSchema).optional(),
    payee: z.lazy(getExplanationOfBenefit_PayeeSchema).optional(),
    payment: z.lazy(getExplanationOfBenefit_PaymentSchema).optional(),
    precedence: z.number().int().positive().optional(),
    _precedence: z.lazy(getElementSchema).optional(),
    prescription: z.lazy(getReferenceSchema).optional(),
    procedure: z
      .lazy(getExplanationOfBenefit_ProcedureSchema)
      .array()
      .optional(),
    processNote: z
      .lazy(getExplanationOfBenefit_ProcessNoteSchema)
      .array()
      .optional(),
    provider: z.lazy(getReferenceSchema).optional(),
    referral: z.lazy(getReferenceSchema).optional(),
    related: z.lazy(getExplanationOfBenefit_RelatedSchema).array().optional(),
    resourceType: z.literal("ExplanationOfBenefit"),
    status: z
      .enum(["active", "cancelled", "draft", "entered-in-error"])
      .optional(),
    _status: z.lazy(getElementSchema).optional(),
    subType: z.lazy(getCodeableConceptSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    totalBenefit: z.lazy(getMoneySchema).optional(),
    totalCost: z.lazy(getMoneySchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    unallocDeductable: z.lazy(getMoneySchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.claim,
      "claim",
      ["http://hl7.org/fhir/StructureDefinition/Claim"],
      ["Claim"],
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
      record.enterer,
      "enterer",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.facility,
      "facility",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
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
      record.organization,
      "organization",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.originalPrescription,
      "originalPrescription",
      ["http://hl7.org/fhir/StructureDefinition/MedicationRequest"],
      ["MedicationRequest"],
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
      record.prescription,
      "prescription",
      [
        "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
        "http://hl7.org/fhir/StructureDefinition/VisionPrescription",
      ],
      ["MedicationRequest", "VisionPrescription"],
      ctx,
    );
    validateReferenceTarget(
      record.provider,
      "provider",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.referral,
      "referral",
      ["http://hl7.org/fhir/StructureDefinition/ReferralRequest"],
      ["ReferralRequest"],
      ctx,
    );
  });

export const ExplanationOfBenefitSchema =
  ExplanationOfBenefitSchemaInternal as z.ZodType<ExplanationOfBenefit>;
