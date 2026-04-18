// Source: https://hl7.org/fhir/R4/medicationadministration.html
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
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
import type { MedicationAdministration_Dosage } from "./MedicationAdministration_Dosage";
import { MedicationAdministration_DosageSchemaInternal } from "./MedicationAdministration_Dosage";
import type { MedicationAdministration_Performer } from "./MedicationAdministration_Performer";
import { MedicationAdministration_PerformerSchemaInternal } from "./MedicationAdministration_Performer";

/** Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. */
export interface MedicationAdministration extends DomainResource {
  /** Indicates where the medication is expected to be consumed or administered. */
  category?: CodeableConcept;
  /** The visit, admission, or other contact between patient and health care provider during which the medication administration was performed. */
  context?: Reference;
  /** The device used in administering the medication to the patient.  For example, a particular infusion pump. */
  device?: Array<Reference>;
  /** Describes the medication dosage information details e.g. dose, rate, site, route, etc. */
  dosage?: MedicationAdministration_Dosage;
  /** A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate. */
  effectiveDateTime?: string;
  /** Extensions for effectiveDateTime */
  _effectiveDateTime?: Element;
  /** A specific date/time or interval of time during which the administration took place (or did not take place, when the 'notGiven' attribute is true). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate. */
  effectivePeriod?: Period;
  /** A summary of the events of interest that have occurred, such as when the administration was verified. */
  eventHistory?: Array<Reference>;
  /** Identifiers associated with this Medication Administration that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
  identifier?: Array<Identifier>;
  /** A protocol, guideline, orderset, or other definition that was adhered to in whole or in part by this event. */
  instantiates?: Array<string | null>;
  /** Extensions for instantiates */
  _instantiates?: Array<Element | null>;
  /** Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
  medicationCodeableConcept?: CodeableConcept;
  /** Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
  medicationReference?: Reference;
  /** Extra information about the medication administration that is not conveyed by the other attributes. */
  note?: Array<Annotation>;
  /** A larger event of which this particular event is a component or step. */
  partOf?: Array<Reference>;
  /** Indicates who or what performed the medication administration and how they were involved. */
  performer?: Array<MedicationAdministration_Performer>;
  /** A code indicating why the medication was given. */
  reasonCode?: Array<CodeableConcept>;
  /** Condition or observation that supports why the medication was administered. */
  reasonReference?: Array<Reference>;
  /** The original request, instruction or authority to perform the administration. */
  request?: Reference;
  /** This is a MedicationAdministration resource. */
  resourceType: "MedicationAdministration";
  /** Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way. */
  status:
    | "completed"
    | "entered-in-error"
    | "in-progress"
    | "not-done"
    | "on-hold"
    | "stopped"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** A code indicating why the administration was not performed. */
  statusReason?: Array<CodeableConcept>;
  /** The person or animal or group receiving the medication. */
  subject: Reference;
  /** Additional information (for example, patient height and weight) that supports the administration of the medication. */
  supportingInformation?: Array<Reference>;
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
const getMedicationAdministration_DosageSchema =
  (): z.ZodType<MedicationAdministration_Dosage> =>
    MedicationAdministration_DosageSchemaInternal as z.ZodType<MedicationAdministration_Dosage>;
const getMedicationAdministration_PerformerSchema =
  (): z.ZodType<MedicationAdministration_Performer> =>
    MedicationAdministration_PerformerSchemaInternal as z.ZodType<MedicationAdministration_Performer>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicationAdministrationSchemaInternal = z
  .object({
    category: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    context: z.lazy(getReferenceSchema).optional(),
    device: z.lazy(getReferenceSchema).array().optional(),
    dosage: z.lazy(getMedicationAdministration_DosageSchema).optional(),
    effectiveDateTime: fhirDateTime().optional(),
    _effectiveDateTime: z.lazy(getElementSchema).optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    eventHistory: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    instantiates: fhirUri().nullable().array().optional(),
    _instantiates: z.lazy(getElementSchema).nullable().array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    medicationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    medicationReference: z.lazy(getReferenceSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    performer: z
      .lazy(getMedicationAdministration_PerformerSchema)
      .array()
      .optional(),
    reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
    reasonReference: z.lazy(getReferenceSchema).array().optional(),
    request: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("MedicationAdministration"),
    status: z.enum([
      "completed",
      "entered-in-error",
      "in-progress",
      "not-done",
      "on-hold",
      "stopped",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    statusReason: z.lazy(getCodeableConceptSchema).array().optional(),
    subject: z.lazy(getReferenceSchema),
    supportingInformation: z.lazy(getReferenceSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const effective_x_Present = ["effectiveDateTime", "effectivePeriod"].filter(
      (field) => record[field] !== undefined,
    );
    if (effective_x_Present.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "One of effectiveDateTime, effectivePeriod must be present for effective[x]",
        path: ["effectiveDateTime"],
      });
    }
    if (effective_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of effectiveDateTime, effectivePeriod may be present for effective[x]",
        path: [effective_x_Present[0]],
      });
    }
    const medication_x_Present = [
      "medicationCodeableConcept",
      "medicationReference",
    ].filter((field) => record[field] !== undefined);
    if (medication_x_Present.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "One of medicationCodeableConcept, medicationReference must be present for medication[x]",
        path: ["medicationCodeableConcept"],
      });
    }
    if (medication_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of medicationCodeableConcept, medicationReference may be present for medication[x]",
        path: [medication_x_Present[0]],
      });
    }
    validatePrimitiveArrayPair(
      record.instantiates,
      record._instantiates,
      "instantiates",
      "_instantiates",
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
      record.device,
      "device",
      ["http://hl7.org/fhir/StructureDefinition/Device"],
      ["Device"],
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
      record.medicationReference,
      "medicationReference",
      ["http://hl7.org/fhir/StructureDefinition/Medication"],
      ["Medication"],
      ctx,
    );
    validateReferenceTarget(
      record.partOf,
      "partOf",
      [
        "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
        "http://hl7.org/fhir/StructureDefinition/Procedure",
      ],
      ["MedicationAdministration", "Procedure"],
      ctx,
    );
    validateReferenceTarget(
      record.reasonReference,
      "reasonReference",
      [
        "http://hl7.org/fhir/StructureDefinition/Condition",
        "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
        "http://hl7.org/fhir/StructureDefinition/Observation",
      ],
      ["Condition", "DiagnosticReport", "Observation"],
      ctx,
    );
    validateReferenceTarget(
      record.request,
      "request",
      ["http://hl7.org/fhir/StructureDefinition/MedicationRequest"],
      ["MedicationRequest"],
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
      record.supportingInformation,
      "supportingInformation",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const MedicationAdministrationSchema =
  MedicationAdministrationSchemaInternal as z.ZodType<MedicationAdministration>;
