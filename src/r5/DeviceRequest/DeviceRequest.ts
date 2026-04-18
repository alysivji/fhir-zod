// Profile: http://hl7.org/fhir/StructureDefinition/DeviceRequest
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { DeviceRequest_Parameter } from "./DeviceRequest_Parameter";
import { DeviceRequest_ParameterSchemaInternal } from "./DeviceRequest_Parameter";

/** Represents a request a device to be provided to a specific patient. The device may be an implantable device to be subsequently implanted, or an external assistive device, such as a walker, to be delivered and subsequently be used. */
export interface DeviceRequest extends DomainResource {
  /** This status is to indicate whether the request is a PRN or may be given as needed. */
  asNeeded?: boolean;
  /** Extensions for asNeeded */
  _asNeeded?: Element;
  /** The reason for using the device. */
  asNeededFor?: CodeableConcept;
  /** When the request transitioned to being actionable. */
  authoredOn?: string;
  /** Extensions for authoredOn */
  _authoredOn?: Element;
  /** Plan/proposal/order fulfilled by this request. */
  basedOn?: Array<Reference>;
  /** The details of the device to be used. */
  code: CodeableReference;
  /** If true, indicates that the provider is asking for the patient to either stop using or to not start using the specified device or category of devices. For example, the patient has undergone surgery and the provider is indicating that the patient should not wear contact lenses. */
  doNotPerform?: boolean;
  /** Extensions for doNotPerform */
  _doNotPerform?: Element;
  /** An encounter that provides additional context in which this request is made. */
  encounter?: Reference;
  /** A shared identifier common to multiple independent Request instances that were activated/authorized more or less simultaneously by a single author.  The presence of the same identifier on each request ties those requests together and may have business ramifications in terms of reporting of results, billing, etc.  E.g. a requisition number shared by a set of lab tests ordered together, or a prescription number shared by all meds ordered at one time. */
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
  /** The desired individual or entity to provide the device to the subject of the request (e.g., patient, location). */
  performer?: CodeableReference;
  /** Indicates how quickly the request should be addressed with respect to other requests. */
  priority?: "asap" | "routine" | "stat" | "urgent";
  /** Extensions for priority */
  _priority?: Element;
  /** The number of devices to be provided. */
  quantity?: number;
  /** Extensions for quantity */
  _quantity?: Element;
  /** Reason or justification for the use of this device. */
  reason?: Array<CodeableReference>;
  /** Key events in the history of the request. */
  relevantHistory?: Array<Reference>;
  /** The request takes the place of the referenced completed or terminated request(s). */
  replaces?: Array<Reference>;
  /** The individual or entity who initiated the request and has responsibility for its activation. */
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
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getDeviceRequest_ParameterSchema =
  (): z.ZodType<DeviceRequest_Parameter> =>
    DeviceRequest_ParameterSchemaInternal as z.ZodType<DeviceRequest_Parameter>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const DeviceRequestSchemaInternal = z
  .object({
    asNeeded: z.boolean().optional(),
    _asNeeded: z.lazy(getElementSchema).optional(),
    asNeededFor: z.lazy(getCodeableConceptSchema).optional(),
    authoredOn: fhirDateTime().optional(),
    _authoredOn: z.lazy(getElementSchema).optional(),
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    code: z.lazy(getCodeableReferenceSchema),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    doNotPerform: z.boolean().optional(),
    _doNotPerform: z.lazy(getElementSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    groupIdentifier: z.lazy(getIdentifierSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
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
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    occurrenceDateTime: fhirDateTime().optional(),
    _occurrenceDateTime: z.lazy(getElementSchema).optional(),
    occurrencePeriod: z.lazy(getPeriodSchema).optional(),
    occurrenceTiming: z.lazy(getTimingSchema).optional(),
    parameter: z.lazy(getDeviceRequest_ParameterSchema).array().optional(),
    performer: z.lazy(getCodeableReferenceSchema).optional(),
    priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
    _priority: z.lazy(getElementSchema).optional(),
    quantity: z.number().int().optional(),
    _quantity: z.lazy(getElementSchema).optional(),
    reason: z.lazy(getCodeableReferenceSchema).array().optional(),
    relevantHistory: z.lazy(getReferenceSchema).array().optional(),
    replaces: z.lazy(getReferenceSchema).array().optional(),
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
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
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
      record.relevantHistory,
      "relevantHistory",
      ["http://hl7.org/fhir/StructureDefinition/Provenance"],
      ["Provenance"],
      ctx,
    );
    validateReferenceTarget(
      record.replaces,
      "replaces",
      ["http://hl7.org/fhir/StructureDefinition/DeviceRequest"],
      ["DeviceRequest"],
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
