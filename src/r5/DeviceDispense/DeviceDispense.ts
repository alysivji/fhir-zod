// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDispense
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import {
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
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { DeviceDispense_Performer } from "./DeviceDispense_Performer";
import { DeviceDispense_PerformerSchemaInternal } from "./DeviceDispense_Performer";

/** Indicates that a device is to be or has been dispensed for a named person/patient.  This includes a description of the product (supply) provided and the instructions for using the device. */
export interface DeviceDispense extends DomainResource {
  /** The order or request that this dispense is fulfilling. */
  basedOn?: Array<Reference>;
  /** Indicates the type of device dispense. */
  category?: Array<CodeableConcept>;
  /** Identification of the facility/location where the device was /should be shipped to, as part of the dispense process. */
  destination?: Reference;
  /** Identifies the device being dispensed. This is either a link to a resource representing the details of the device or a simple attribute carrying a code that identifies the device from a known list of devices. */
  device: CodeableReference;
  /** The encounter that establishes the context for this event. */
  encounter?: Reference;
  /** A summary of the events of interest that have occurred, such as when the dispense was verified. */
  eventHistory?: Array<Reference>;
  /** Business identifier for this dispensation. */
  identifier?: Array<Identifier>;
  /** The principal physical location where the dispense was performed. */
  location?: Reference;
  /** Extra information about the dispense that could not be conveyed in the other attributes. */
  note?: Array<Annotation>;
  /** The bigger event that this dispense is a part of. */
  partOf?: Array<Reference>;
  /** Indicates who or what performed the event. */
  performer?: Array<DeviceDispense_Performer>;
  /** The time when the dispensed product was packaged and reviewed. */
  preparedDate?: string;
  /** Extensions for preparedDate */
  _preparedDate?: Element;
  /** The number of devices that have been dispensed. */
  quantity?: Quantity;
  /** Identifies the person who picked up the device or the person or location where the device was delivered.  This may be a patient or their caregiver, but some cases exist where it can be a healthcare professional or a location. */
  receiver?: Reference;
  /** This is a DeviceDispense resource. */
  resourceType: "DeviceDispense";
  /** A code specifying the state of the set of dispense events. */
  status:
    | "cancelled"
    | "completed"
    | "declined"
    | "entered-in-error"
    | "in-progress"
    | "on-hold"
    | "preparation"
    | "stopped"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** Indicates the reason why a dispense was or was not performed. */
  statusReason?: CodeableReference;
  /** A link to a resource representing the person to whom the device is intended. */
  subject: Reference;
  /** Additional information that supports the device being dispensed. */
  supportingInformation?: Array<Reference>;
  /** Indicates the type of dispensing event that is performed. */
  type?: CodeableConcept;
  /** The full representation of the instructions. */
  usageInstruction?: string;
  /** Extensions for usageInstruction */
  _usageInstruction?: Element;
  /** The time the dispensed product was made available to the patient or their representative. */
  whenHandedOver?: string;
  /** Extensions for whenHandedOver */
  _whenHandedOver?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getDeviceDispense_PerformerSchema =
  (): z.ZodType<DeviceDispense_Performer> =>
    DeviceDispense_PerformerSchemaInternal as z.ZodType<DeviceDispense_Performer>;
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
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const DeviceDispenseSchemaInternal = z
  .object({
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    destination: z.lazy(getReferenceSchema).optional(),
    device: z.lazy(getCodeableReferenceSchema),
    encounter: z.lazy(getReferenceSchema).optional(),
    eventHistory: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    location: z.lazy(getReferenceSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    performer: z.lazy(getDeviceDispense_PerformerSchema).array().optional(),
    preparedDate: fhirDateTime().optional(),
    _preparedDate: z.lazy(getElementSchema).optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    receiver: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("DeviceDispense"),
    status: z.enum([
      "cancelled",
      "completed",
      "declined",
      "entered-in-error",
      "in-progress",
      "on-hold",
      "preparation",
      "stopped",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    statusReason: z.lazy(getCodeableReferenceSchema).optional(),
    subject: z.lazy(getReferenceSchema),
    supportingInformation: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    usageInstruction: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _usageInstruction: z.lazy(getElementSchema).optional(),
    whenHandedOver: fhirDateTime().optional(),
    _whenHandedOver: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      [
        "http://hl7.org/fhir/StructureDefinition/CarePlan",
        "http://hl7.org/fhir/StructureDefinition/DeviceRequest",
      ],
      ["CarePlan", "DeviceRequest"],
      ctx,
    );
    validateReferenceTarget(
      record.destination,
      "destination",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
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
      record.eventHistory,
      "eventHistory",
      ["http://hl7.org/fhir/StructureDefinition/Provenance"],
      ["Provenance"],
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
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/Procedure"],
      ["Procedure"],
      ctx,
    );
    validateReferenceTarget(
      record.receiver,
      "receiver",
      [
        "http://hl7.org/fhir/StructureDefinition/Location",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "Location",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
      ],
      ["Patient", "Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.supportingInformation,
      "supportingInformation",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const DeviceDispenseSchema =
  DeviceDispenseSchemaInternal as z.ZodType<DeviceDispense>;
