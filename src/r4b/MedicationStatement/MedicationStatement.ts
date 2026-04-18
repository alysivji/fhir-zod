// Profile: http://hl7.org/fhir/StructureDefinition/MedicationStatement
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:04:03.496Z

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
import type { Dosage } from "../Dosage";
import { DosageSchemaInternal } from "../Dosage";
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

/**
 * A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains.
 *
 * The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.
 */
export interface MedicationStatement extends DomainResource {
  /** A plan, proposal or order that is fulfilled in whole or in part by this event. */
  basedOn?: Array<Reference>;
  /** Indicates where the medication is expected to be consumed or administered. */
  category?: CodeableConcept;
  /** The encounter or episode of care that establishes the context for this MedicationStatement. */
  context?: Reference;
  /** The date when the medication statement was asserted by the information source. */
  dateAsserted?: string;
  /** Extensions for dateAsserted */
  _dateAsserted?: Element;
  /** Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement. */
  derivedFrom?: Array<Reference>;
  /** Indicates how the medication is/was or should be taken by the patient. */
  dosage?: Array<Dosage>;
  /** The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.taken element is No). */
  effectiveDateTime?: string;
  /** Extensions for effectiveDateTime */
  _effectiveDateTime?: Element;
  /** The interval of time during which it is being asserted that the patient is/was/will be taking the medication (or was not taking, when the MedicationStatement.taken element is No). */
  effectivePeriod?: Period;
  /** Identifiers associated with this Medication Statement that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
  identifier?: Array<Identifier>;
  /** The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest. */
  informationSource?: Reference;
  /** Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
  medicationCodeableConcept?: CodeableConcept;
  /** Identifies the medication being administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
  medicationReference?: Reference;
  /** Provides extra information about the medication statement that is not conveyed by the other attributes. */
  note?: Array<Annotation>;
  /** A larger event of which this particular event is a component or step. */
  partOf?: Array<Reference>;
  /** A reason for why the medication is being/was taken. */
  reasonCode?: Array<CodeableConcept>;
  /** Condition or observation that supports why the medication is being/was taken. */
  reasonReference?: Array<Reference>;
  /** This is a MedicationStatement resource. */
  resourceType: "MedicationStatement";
  /** A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally, this will be active or completed. */
  status:
    | "active"
    | "completed"
    | "entered-in-error"
    | "intended"
    | "not-taken"
    | "on-hold"
    | "stopped"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** Captures the reason for the current state of the MedicationStatement. */
  statusReason?: Array<CodeableConcept>;
  /** The person, animal or group who is/was taking the medication. */
  subject: Reference;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDosageSchema = (): z.ZodType<Dosage> =>
  DosageSchemaInternal as z.ZodType<Dosage>;
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
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const MedicationStatementSchemaInternal = z
  .object({
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    category: z.lazy(getCodeableConceptSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    context: z.lazy(getReferenceSchema).optional(),
    dateAsserted: fhirDateTime().optional(),
    _dateAsserted: z.lazy(getElementSchema).optional(),
    derivedFrom: z.lazy(getReferenceSchema).array().optional(),
    dosage: z.lazy(getDosageSchema).array().optional(),
    effectiveDateTime: fhirDateTime().optional(),
    _effectiveDateTime: z.lazy(getElementSchema).optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    informationSource: z.lazy(getReferenceSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    medicationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    medicationReference: z.lazy(getReferenceSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
    reasonReference: z.lazy(getReferenceSchema).array().optional(),
    resourceType: z.literal("MedicationStatement"),
    status: z.enum([
      "active",
      "completed",
      "entered-in-error",
      "intended",
      "not-taken",
      "on-hold",
      "stopped",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    statusReason: z.lazy(getCodeableConceptSchema).array().optional(),
    subject: z.lazy(getReferenceSchema),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const effective_x_Present = ["effectiveDateTime", "effectivePeriod"].filter(
      (field) => record[field] !== undefined,
    );
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
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      [
        "http://hl7.org/fhir/StructureDefinition/CarePlan",
        "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
        "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
      ],
      ["CarePlan", "MedicationRequest", "ServiceRequest"],
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
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
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
        "http://hl7.org/fhir/StructureDefinition/MedicationDispense",
        "http://hl7.org/fhir/StructureDefinition/MedicationStatement",
        "http://hl7.org/fhir/StructureDefinition/Observation",
        "http://hl7.org/fhir/StructureDefinition/Procedure",
      ],
      [
        "MedicationAdministration",
        "MedicationDispense",
        "MedicationStatement",
        "Observation",
        "Procedure",
      ],
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

export const MedicationStatementSchema =
  MedicationStatementSchemaInternal as z.ZodType<MedicationStatement>;
