// Profile: http://hl7.org/fhir/StructureDefinition/DeviceRequest
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
  fhirDateTime,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { DeviceRequest_Parameter } from "./DeviceRequest_Parameter";
import { DeviceRequest_ParameterSchemaInternal } from "./DeviceRequest_Parameter";

/** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
export interface DeviceRequest extends DomainResource {
  /** When the request transitioned to being actionable. */
  authoredOn?: string;
  /** Extensions for authoredOn */
  _authoredOn?: Element;
  /** Plan/proposal/order fulfilled by this request. */
  basedOn?: Array<Reference>;
  /** The details of the device to be used. */
  codeCodeableConcept?: CodeableConcept;
  /** The details of the device to be used. */
  codeReference?: Reference;
  /** An encounter that provides additional context in which this request is made. */
  encounter?: Reference;
  /** Composite request this is part of. */
  groupIdentifier?: Identifier;
  /** Identifiers assigned to this order by the orderer or by the receiver. */
  identifier?: Array<Identifier>;
  /** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this DeviceRequest. */
  instantiatesCanonical?: Array<string | null>;
  /** Extensions for instantiatesCanonical */
  _instantiatesCanonical?: Array<Element | null>;
  /** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this DeviceRequest. */
  instantiatesUri?: Array<string | null>;
  /** Extensions for instantiatesUri */
  _instantiatesUri?: Array<Element | null>;
  /** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service. */
  insurance?: Array<Reference>;
  /** Whether the request is a proposal, plan, an original order or a reflex order. */
  intent:
    | "directive"
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
  /** Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement. */
  note?: Array<Annotation>;
  /** The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013". */
  occurrenceDateTime?: string;
  /** Extensions for occurrenceDateTime */
  _occurrenceDateTime?: Element;
  /** The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013". */
  occurrencePeriod?: Period;
  /** The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013". */
  occurrenceTiming?: Timing;
  /** Specific parameters for the ordered item.  For example, the prism value for lenses. */
  parameter?: Array<DeviceRequest_Parameter>;
  /** The desired performer for doing the diagnostic testing. */
  performer?: Reference;
  /** Desired type of performer for doing the diagnostic testing. */
  performerType?: CodeableConcept;
  /** Indicates how quickly the {{title}} should be addressed with respect to other requests. */
  priority?: "asap" | "routine" | "stat" | "urgent";
  /** Extensions for priority */
  _priority?: Element;
  /** The request takes the place of the referenced completed or terminated request(s). */
  priorRequest?: Array<Reference>;
  /** Reason or justification for the use of this device. */
  reasonCode?: Array<CodeableConcept>;
  /** Reason or justification for the use of this device. */
  reasonReference?: Array<Reference>;
  /** Key events in the history of the request. */
  relevantHistory?: Array<Reference>;
  /** The individual who initiated the request and has responsibility for its activation. */
  requester?: Reference;
  /** This is a DeviceRequest resource. */
  resourceType: "DeviceRequest";
  /** The status of the request. */
  status?:
    | "active"
    | "completed"
    | "draft"
    | "entered-in-error"
    | "on-hold"
    | "revoked"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The patient who will use the device. */
  subject: Reference;
  /** Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site). */
  supportingInfo?: Array<Reference>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDeviceRequest_ParameterSchema =
  (): z.ZodType<DeviceRequest_Parameter> =>
    DeviceRequest_ParameterSchemaInternal as z.ZodType<DeviceRequest_Parameter>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const DeviceRequestSchemaInternal = DomainResourceSchemaInternal.extend({
  authoredOn: fhirDateTime().optional(),
  _authoredOn: z.lazy(getElementSchema).optional(),
  basedOn: z.lazy(getReferenceSchema).array().optional(),
  codeCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
  codeReference: z.lazy(getReferenceSchema).optional(),
  encounter: z.lazy(getReferenceSchema).optional(),
  groupIdentifier: z.lazy(getIdentifierSchema).optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  instantiatesCanonical: fhirCanonical().nullable().array().optional(),
  _instantiatesCanonical: z
    .lazy(getElementSchema)
    .nullable()
    .array()
    .optional(),
  instantiatesUri: fhirUri().nullable().array().optional(),
  _instantiatesUri: z.lazy(getElementSchema).nullable().array().optional(),
  insurance: z.lazy(getReferenceSchema).array().optional(),
  intent: z.enum([
    "directive",
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
  occurrenceTiming: z.lazy(getTimingSchema).optional(),
  parameter: z.lazy(getDeviceRequest_ParameterSchema).array().optional(),
  performer: z.lazy(getReferenceSchema).optional(),
  performerType: z.lazy(getCodeableConceptSchema).optional(),
  priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
  _priority: z.lazy(getElementSchema).optional(),
  priorRequest: z.lazy(getReferenceSchema).array().optional(),
  reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
  reasonReference: z.lazy(getReferenceSchema).array().optional(),
  relevantHistory: z.lazy(getReferenceSchema).array().optional(),
  requester: z.lazy(getReferenceSchema).optional(),
  resourceType: z.literal("DeviceRequest"),
  status: z
    .enum([
      "active",
      "completed",
      "draft",
      "entered-in-error",
      "on-hold",
      "revoked",
      "unknown",
    ])
    .optional(),
  _status: z.lazy(getElementSchema).optional(),
  subject: z.lazy(getReferenceSchema),
  supportingInfo: z.lazy(getReferenceSchema).array().optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const code_x_Present = ["codeCodeableConcept", "codeReference"].filter(
      (field) => record[field] !== undefined,
    );
    if (code_x_Present.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "One of codeCodeableConcept, codeReference must be present for code[x]",
        path: ["codeCodeableConcept"],
      });
    }
    if (code_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of codeCodeableConcept, codeReference may be present for code[x]",
        path: [code_x_Present[0]],
      });
    }
    const occurrence_x_Present = [
      "occurrenceDateTime",
      "occurrencePeriod",
      "occurrenceTiming",
    ].filter((field) => record[field] !== undefined);
    if (occurrence_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of occurrenceDateTime, occurrencePeriod, occurrenceTiming may be present for occurrence[x]",
        path: [occurrence_x_Present[0]],
      });
    }
    validatePrimitiveArrayPair(
      record.instantiatesCanonical,
      record._instantiatesCanonical,
      "instantiatesCanonical",
      "_instantiatesCanonical",
      ctx,
    );
    validatePrimitiveArrayPair(
      record.instantiatesUri,
      record._instantiatesUri,
      "instantiatesUri",
      "_instantiatesUri",
      ctx,
    );
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.codeReference,
      "codeReference",
      ["http://hl7.org/fhir/StructureDefinition/Device"],
      ["Device"],
      ctx,
    );
    validateReferenceTarget(
      record.encounter,
      "encounter",
      ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      ["Encounter"],
      ctx,
    );
    validateReferenceTarget(
      record.insurance,
      "insurance",
      [
        "http://hl7.org/fhir/StructureDefinition/ClaimResponse",
        "http://hl7.org/fhir/StructureDefinition/Coverage",
      ],
      ["ClaimResponse", "Coverage"],
      ctx,
    );
    validateReferenceTarget(
      record.performer,
      "performer",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "CareTeam",
        "Device",
        "HealthcareService",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.priorRequest,
      "priorRequest",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.reasonReference,
      "reasonReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Condition",
        "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
        "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        "http://hl7.org/fhir/StructureDefinition/Observation",
      ],
      ["Condition", "DiagnosticReport", "DocumentReference", "Observation"],
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
      record.requester,
      "requester",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Device", "Organization", "Practitioner", "PractitionerRole"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Location",
        "http://hl7.org/fhir/StructureDefinition/Patient",
      ],
      ["Device", "Group", "Location", "Patient"],
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

export const DeviceRequestSchema =
  DeviceRequestSchemaInternal as z.ZodType<DeviceRequest>;
