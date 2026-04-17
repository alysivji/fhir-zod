// Profile: http://hl7.org/fhir/StructureDefinition/ReferralRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
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
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { ReferralRequest_Requester } from "./ReferralRequest_Requester";
import { ReferralRequest_RequesterSchemaInternal } from "./ReferralRequest_Requester";

/** Base StructureDefinition for ReferralRequest Resource */
export interface ReferralRequest extends DomainResource {
  /** Date/DateTime of creation for draft requests and date of activation for active requests. */
  authoredOn?: string;
  /** Extensions for authoredOn */
  _authoredOn?: Element;
  /** Indicates any plans, proposals or orders that this request is intended to satisfy - in whole or in part. */
  basedOn?: Array<Reference>;
  /** The encounter at which the request for referral or transfer of care is initiated. */
  context?: Reference;
  /** A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request. */
  definition?: Array<Reference>;
  /** The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The business identifier of the logical "grouping" request/order that this referral is a part of. */
  groupIdentifier?: Identifier;
  /** Business identifier that uniquely identifies the referral/care transfer request instance. */
  identifier?: Array<Identifier>;
  /** Distinguishes the "level" of authorization/demand implicit in this request. */
  intent:
    | "filler-order"
    | "instance-order"
    | "option"
    | "order"
    | "original-order"
    | "plan"
    | "proposal"
    | "reflex-order";
  /** Extensions for intent */
  _intent?: Element;
  /** Comments made about the referral request by any of the participants. */
  note?: Array<Annotation>;
  /** The period of time within which the services identified in the referral/transfer of care is specified or required to occur. */
  occurrenceDateTime?: string;
  /** Extensions for occurrenceDateTime */
  _occurrenceDateTime?: Element;
  /** The period of time within which the services identified in the referral/transfer of care is specified or required to occur. */
  occurrencePeriod?: Period;
  /** An indication of the urgency of referral (or where applicable the type of transfer of care) request. */
  priority?: "asap" | "routine" | "stat" | "urgent";
  /** Extensions for priority */
  _priority?: Element;
  /** Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management. */
  reasonCode?: Array<CodeableConcept>;
  /** Indicates another resource whose existence justifies this request. */
  reasonReference?: Array<Reference>;
  /** The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request. */
  recipient?: Array<Reference>;
  /** Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource. */
  relevantHistory?: Array<Reference>;
  /** Completed or terminated request(s) whose function is taken by this new request. */
  replaces?: Array<Reference>;
  /** The individual who initiated the request and has responsibility for its activation. */
  requester?: ReferralRequest_Requester;
  /** This is a ReferralRequest resource. */
  resourceType: "ReferralRequest";
  /** The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion. */
  serviceRequested?: Array<CodeableConcept>;
  /** Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology. */
  specialty?: CodeableConcept;
  /** The status of the authorization/intention reflected by the referral request record. */
  status:
    | "active"
    | "cancelled"
    | "completed"
    | "draft"
    | "entered-in-error"
    | "suspended"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The patient who is the subject of a referral or transfer of care request. */
  subject: Reference;
  /** Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan. */
  supportingInfo?: Array<Reference>;
  /** An indication of the type of referral (or where applicable the type of transfer of care) request. */
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
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getReferralRequest_RequesterSchema =
  (): z.ZodType<ReferralRequest_Requester> =>
    ReferralRequest_RequesterSchemaInternal as z.ZodType<ReferralRequest_Requester>;

/** @internal */
export const ReferralRequestSchemaInternal =
  DomainResourceSchemaInternal.extend({
    authoredOn: fhirDateTime().optional(),
    _authoredOn: z.lazy(getElementSchema).optional(),
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    context: z.lazy(getReferenceSchema).optional(),
    definition: z.lazy(getReferenceSchema).array().optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    groupIdentifier: z.lazy(getIdentifierSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    intent: z.enum([
      "filler-order",
      "instance-order",
      "option",
      "order",
      "original-order",
      "plan",
      "proposal",
      "reflex-order",
    ]),
    _intent: z.lazy(getElementSchema).optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    occurrenceDateTime: fhirDateTime().optional(),
    _occurrenceDateTime: z.lazy(getElementSchema).optional(),
    occurrencePeriod: z.lazy(getPeriodSchema).optional(),
    priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
    _priority: z.lazy(getElementSchema).optional(),
    reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
    reasonReference: z.lazy(getReferenceSchema).array().optional(),
    recipient: z.lazy(getReferenceSchema).array().optional(),
    relevantHistory: z.lazy(getReferenceSchema).array().optional(),
    replaces: z.lazy(getReferenceSchema).array().optional(),
    requester: z.lazy(getReferralRequest_RequesterSchema).optional(),
    resourceType: z.literal("ReferralRequest"),
    serviceRequested: z.lazy(getCodeableConceptSchema).array().optional(),
    specialty: z.lazy(getCodeableConceptSchema).optional(),
    status: z.enum([
      "active",
      "cancelled",
      "completed",
      "draft",
      "entered-in-error",
      "suspended",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema),
    supportingInfo: z.lazy(getReferenceSchema).array().optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const occurrence_x_Present = [
        "occurrenceDateTime",
        "occurrencePeriod",
      ].filter((field) => record[field] !== undefined);
      if (occurrence_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of occurrenceDateTime, occurrencePeriod may be present for occurrence[x]",
          path: [occurrence_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.basedOn,
        "basedOn",
        [
          "http://hl7.org/fhir/StructureDefinition/CarePlan",
          "http://hl7.org/fhir/StructureDefinition/ProcedureRequest",
          "http://hl7.org/fhir/StructureDefinition/ReferralRequest",
        ],
        ["CarePlan", "ProcedureRequest", "ReferralRequest"],
        ctx,
      );
      validateReferenceTarget(
        record.context,
        "context",
        [
          "http://hl7.org/fhir/StructureDefinition/Encounter",
          "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
        ],
        ["Encounter", "EpisodeOfCare"],
        ctx,
      );
      validateReferenceTarget(
        record.definition,
        "definition",
        [
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
        ],
        ["ActivityDefinition", "PlanDefinition"],
        ctx,
      );
      validateReferenceTarget(
        record.reasonReference,
        "reasonReference",
        [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Observation",
        ],
        ["Condition", "Observation"],
        ctx,
      );
      validateReferenceTarget(
        record.recipient,
        "recipient",
        [
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
        ],
        ["HealthcareService", "Organization", "Practitioner"],
        ctx,
      );
      validateReferenceTarget(
        record.relevantHistory,
        "relevantHistory",
        ["http://hl7.org/fhir/StructureDefinition/Provenance"],
        ["Provenance"],
        ctx,
      );
      validateReferenceTarget(
        record.replaces,
        "replaces",
        ["http://hl7.org/fhir/StructureDefinition/ReferralRequest"],
        ["ReferralRequest"],
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
      validateReferenceTarget(
        record.supportingInfo,
        "supportingInfo",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const ReferralRequestSchema =
  ReferralRequestSchemaInternal as z.ZodType<ReferralRequest>;
