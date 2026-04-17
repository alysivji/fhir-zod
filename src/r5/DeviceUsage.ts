// Profile: http://hl7.org/fhir/StructureDefinition/DeviceUsage
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { DeviceUsage_Adherence } from "./DeviceUsage_Adherence";
import { DeviceUsage_AdherenceSchemaInternal } from "./DeviceUsage_Adherence";
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
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** A record of a device being used by a patient where the record is the result of a report from the patient or a clinician. */
export interface DeviceUsage extends DomainResource {
  /** This indicates how or if the device is being used. */
  adherence?: DeviceUsage_Adherence;
  /** A plan, proposal or order that is fulfilled in whole or in part by this DeviceUsage. */
  basedOn?: Array<Reference>;
  /** Indicates the anotomic location on the subject's body where the device was used ( i.e. the target). */
  bodySite?: CodeableReference;
  /** This attribute indicates a category for the statement - The device statement may be made in an inpatient or outpatient settting (inpatient | outpatient | community | patientspecified). */
  category?: Array<CodeableConcept>;
  /** The encounter or episode of care that establishes the context for this device use statement. */
  context?: Reference;
  /** The time at which the statement was recorded by informationSource. */
  dateAsserted?: string;
  /** Extensions for dateAsserted */
  _dateAsserted?: Element;
  /** Allows linking the DeviceUsage to the underlying Request, or to other information that supports or is used to derive the DeviceUsage. */
  derivedFrom?: Array<Reference>;
  /** Code or Reference to device used. */
  device: CodeableReference;
  /** An external identifier for this statement such as an IRI. */
  identifier?: Array<Identifier>;
  /** Who reported the device was being used by the patient. */
  informationSource?: Reference;
  /** Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement. */
  note?: Array<Annotation>;
  /** The patient who used the device. */
  patient: Reference;
  /** Reason or justification for the use of the device. A coded concept, or another resource whose existence justifies this DeviceUsage. */
  reason?: Array<CodeableReference>;
  /** This is a DeviceUsage resource. */
  resourceType: "DeviceUsage";
  /** A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed. */
  status:
    | "active"
    | "completed"
    | "entered-in-error"
    | "intended"
    | "not-done"
    | "on-hold"
    | "stopped";
  /** Extensions for status */
  _status?: Element;
  /** How often the device was used. */
  timingDateTime?: string;
  /** Extensions for timingDateTime */
  _timingDateTime?: Element;
  /** How often the device was used. */
  timingPeriod?: Period;
  /** How often the device was used. */
  timingTiming?: Timing;
  /** The reason for asserting the usage status - for example forgot, lost, stolen, broken. */
  usageReason?: Array<CodeableConcept>;
  /** The status of the device usage, for example always, sometimes, never. This is not the same as the status of the statement. */
  usageStatus?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getDeviceUsage_AdherenceSchema = (): z.ZodType<DeviceUsage_Adherence> =>
  DeviceUsage_AdherenceSchemaInternal as z.ZodType<DeviceUsage_Adherence>;
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
export const DeviceUsageSchemaInternal = DomainResourceSchemaInternal.extend({
  adherence: z.lazy(getDeviceUsage_AdherenceSchema).optional(),
  basedOn: z.lazy(getReferenceSchema).array().optional(),
  bodySite: z.lazy(getCodeableReferenceSchema).optional(),
  category: z.lazy(getCodeableConceptSchema).array().optional(),
  context: z.lazy(getReferenceSchema).optional(),
  dateAsserted: fhirDateTime().optional(),
  _dateAsserted: z.lazy(getElementSchema).optional(),
  derivedFrom: z.lazy(getReferenceSchema).array().optional(),
  device: z.lazy(getCodeableReferenceSchema),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  informationSource: z.lazy(getReferenceSchema).optional(),
  note: z.lazy(getAnnotationSchema).array().optional(),
  patient: z.lazy(getReferenceSchema),
  reason: z.lazy(getCodeableReferenceSchema).array().optional(),
  resourceType: z.literal("DeviceUsage"),
  status: z.enum([
    "active",
    "completed",
    "entered-in-error",
    "intended",
    "not-done",
    "on-hold",
    "stopped",
  ]),
  _status: z.lazy(getElementSchema).optional(),
  timingDateTime: fhirDateTime().optional(),
  _timingDateTime: z.lazy(getElementSchema).optional(),
  timingPeriod: z.lazy(getPeriodSchema).optional(),
  timingTiming: z.lazy(getTimingSchema).optional(),
  usageReason: z.lazy(getCodeableConceptSchema).array().optional(),
  usageStatus: z.lazy(getCodeableConceptSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const timing_x_Present = [
      "timingDateTime",
      "timingPeriod",
      "timingTiming",
    ].filter((field) => record[field] !== undefined);
    if (timing_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of timingDateTime, timingPeriod, timingTiming may be present for timing[x]",
        path: [timing_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      ["http://hl7.org/fhir/StructureDefinition/ServiceRequest"],
      ["ServiceRequest"],
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
      record.derivedFrom,
      "derivedFrom",
      [
        "http://hl7.org/fhir/StructureDefinition/Claim",
        "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        "http://hl7.org/fhir/StructureDefinition/Observation",
        "http://hl7.org/fhir/StructureDefinition/Procedure",
        "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
        "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
      ],
      [
        "Claim",
        "DocumentReference",
        "Observation",
        "Procedure",
        "QuestionnaireResponse",
        "ServiceRequest",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.informationSource,
      "informationSource",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.patient,
      "patient",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
  });

export const DeviceUsageSchema =
  DeviceUsageSchemaInternal as z.ZodType<DeviceUsage>;
