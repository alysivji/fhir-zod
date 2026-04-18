// Source: https://hl7.org/fhir/STU3/deviceusestatement.html
// Profile: http://hl7.org/fhir/StructureDefinition/DeviceUseStatement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

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

/** Base StructureDefinition for DeviceUseStatement Resource */
export interface DeviceUseStatement extends DomainResource {
  /** Indicates the site on the subject's body where the device was used ( i.e. the target site). */
  bodySite?: CodeableConcept;
  /** The details of the device used. */
  device: Reference;
  /** An external identifier for this statement such as an IRI. */
  identifier?: Array<Identifier>;
  /** Reason or justification for the use of the device. */
  indication?: Array<CodeableConcept>;
  /** Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement. */
  note?: Array<Annotation>;
  /** The time at which the statement was made/recorded. */
  recordedOn?: string;
  /** Extensions for recordedOn */
  _recordedOn?: Element;
  /** This is a DeviceUseStatement resource. */
  resourceType: "DeviceUseStatement";
  /** Who reported the device was being used by the patient. */
  source?: Reference;
  /** A code representing the patient or other source's judgment about the state of the device used that this statement is about.  Generally this will be active or completed. */
  status:
    | "active"
    | "completed"
    | "entered-in-error"
    | "intended"
    | "on-hold"
    | "stopped";
  /** Extensions for status */
  _status?: Element;
  /** The patient who used the device. */
  subject: Reference;
  /** How often the device was used. */
  timingDateTime?: string;
  /** Extensions for timingDateTime */
  _timingDateTime?: Element;
  /** How often the device was used. */
  timingPeriod?: Period;
  /** How often the device was used. */
  timingTiming?: Timing;
  /** The time period over which the device was used. */
  whenUsed?: Period;
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
export const DeviceUseStatementSchemaInternal = z
  .object({
    bodySite: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    device: z.lazy(getReferenceSchema),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    indication: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    recordedOn: fhirDateTime().optional(),
    _recordedOn: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("DeviceUseStatement"),
    source: z.lazy(getReferenceSchema).optional(),
    status: z.enum([
      "active",
      "completed",
      "entered-in-error",
      "intended",
      "on-hold",
      "stopped",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema),
    text: z.lazy(getNarrativeSchema).optional(),
    timingDateTime: fhirDateTime().optional(),
    _timingDateTime: z.lazy(getElementSchema).optional(),
    timingPeriod: z.lazy(getPeriodSchema).optional(),
    timingTiming: z.lazy(getTimingSchema).optional(),
    whenUsed: z.lazy(getPeriodSchema).optional(),
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
      record.device,
      "device",
      ["http://hl7.org/fhir/StructureDefinition/Device"],
      ["Device"],
      ctx,
    );
    validateReferenceTarget(
      record.source,
      "source",
      [
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Patient", "Practitioner", "RelatedPerson"],
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

export const DeviceUseStatementSchema =
  DeviceUseStatementSchemaInternal as z.ZodType<DeviceUseStatement>;
