// Source: https://hl7.org/fhir/R4/observation.html
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirInstant,
  fhirString,
  fhirTime,
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
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Ratio } from "../Ratio";
import { RatioSchemaInternal } from "../Ratio";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { SampledData } from "../SampledData";
import { SampledDataSchemaInternal } from "../SampledData";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { Observation_Component } from "./Observation_Component";
import { Observation_ComponentSchemaInternal } from "./Observation_Component";
import type { Observation_ReferenceRange } from "./Observation_ReferenceRange";
import { Observation_ReferenceRangeSchemaInternal } from "./Observation_ReferenceRange";

/** Measurements and simple assertions made about a patient, device or other subject. */
export interface Observation extends DomainResource {
  /** A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed. */
  basedOn?: Array<Reference>;
  /** Indicates the site on the subject's body where the observation was made (i.e. the target site). */
  bodySite?: CodeableConcept;
  /** A code that classifies the general type of observation being made. */
  category?: Array<CodeableConcept>;
  /** Describes what was observed. Sometimes this is called the observation "name". */
  code: CodeableConcept;
  /** Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes.  Examples include systolic and diastolic component observations for blood pressure measurement and multiple component observations for genetics observations. */
  component?: Array<Observation_Component>;
  /** Provides a reason why the expected value in the element Observation.value[x] is missing. */
  dataAbsentReason?: CodeableConcept;
  /** The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image. */
  derivedFrom?: Array<Reference>;
  /** The device used to generate the observation data. */
  device?: Reference;
  /** The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself. */
  effectiveDateTime?: string;
  /** Extensions for effectiveDateTime */
  _effectiveDateTime?: Element;
  /** The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself. */
  effectiveInstant?: string;
  /** Extensions for effectiveInstant */
  _effectiveInstant?: Element;
  /** The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself. */
  effectivePeriod?: Period;
  /** The time or time-period the observed value is asserted as being true. For biological subjects - e.g. human patients - this is usually called the "physiologically relevant time". This is usually either the time of the procedure or of specimen collection, but very often the source of the date/time is not known, only the date/time itself. */
  effectiveTiming?: Timing;
  /** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made. */
  encounter?: Reference;
  /** The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother's record.  The focus of an observation could also be an existing condition,  an intervention, the subject's diet,  another observation of the subject,  or a body structure such as tumor or implanted device.   An example use case would be using the Observation resource to capture whether the mother is trained to change her child's tracheostomy tube. In this example, the child is the patient of record and the mother is the focus. */
  focus?: Array<Reference>;
  /** This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group. */
  hasMember?: Array<Reference>;
  /** A unique identifier assigned to this observation. */
  identifier?: Array<Identifier>;
  /** A categorical assessment of an observation value.  For example, high, low, normal. */
  interpretation?: Array<CodeableConcept>;
  /** The date and time this version of the observation was made available to providers, typically after the results have been reviewed and verified. */
  issued?: string;
  /** Extensions for issued */
  _issued?: Element;
  /** Indicates the mechanism used to perform the observation. */
  method?: CodeableConcept;
  /** Comments about the observation or the results. */
  note?: Array<Annotation>;
  /** A larger event of which this particular Observation is a component or step.  For example,  an observation as part of a procedure. */
  partOf?: Array<Reference>;
  /** Who was responsible for asserting the observed value as "true". */
  performer?: Array<Reference>;
  /** Guidance on how to interpret the value by comparison to a normal or recommended range.  Multiple reference ranges are interpreted as an "OR".   In other words, to represent two distinct target populations, two `referenceRange` elements would be used. */
  referenceRange?: Array<Observation_ReferenceRange>;
  /** This is a Observation resource. */
  resourceType: "Observation";
  /** The specimen that was used when this observation was made. */
  specimen?: Reference;
  /** The status of the result value. */
  status:
    | "amended"
    | "cancelled"
    | "corrected"
    | "entered-in-error"
    | "final"
    | "preliminary"
    | "registered"
    | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation. */
  subject?: Reference;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueCodeableConcept?: CodeableConcept;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueDateTime?: string;
  /** Extensions for valueDateTime */
  _valueDateTime?: Element;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueInteger?: number;
  /** Extensions for valueInteger */
  _valueInteger?: Element;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valuePeriod?: Period;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueQuantity?: Quantity;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueRange?: Range;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueRatio?: Ratio;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueSampledData?: SampledData;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueString?: string;
  /** Extensions for valueString */
  _valueString?: Element;
  /** The information determined as a result of making the observation, if the information has a simple value. */
  valueTime?: string;
  /** Extensions for valueTime */
  _valueTime?: Element;
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
const getObservation_ComponentSchema = (): z.ZodType<Observation_Component> =>
  Observation_ComponentSchemaInternal as z.ZodType<Observation_Component>;
const getObservation_ReferenceRangeSchema =
  (): z.ZodType<Observation_ReferenceRange> =>
    Observation_ReferenceRangeSchemaInternal as z.ZodType<Observation_ReferenceRange>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
  RatioSchemaInternal as z.ZodType<Ratio>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getSampledDataSchema = (): z.ZodType<SampledData> =>
  SampledDataSchemaInternal as z.ZodType<SampledData>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ObservationSchemaInternal = z
  .object({
    basedOn: z.lazy(getReferenceSchema).array().optional(),
    bodySite: z.lazy(getCodeableConceptSchema).optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema),
    component: z.lazy(getObservation_ComponentSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    dataAbsentReason: z.lazy(getCodeableConceptSchema).optional(),
    derivedFrom: z.lazy(getReferenceSchema).array().optional(),
    device: z.lazy(getReferenceSchema).optional(),
    effectiveDateTime: fhirDateTime().optional(),
    _effectiveDateTime: z.lazy(getElementSchema).optional(),
    effectiveInstant: fhirInstant().optional(),
    _effectiveInstant: z.lazy(getElementSchema).optional(),
    effectivePeriod: z.lazy(getPeriodSchema).optional(),
    effectiveTiming: z.lazy(getTimingSchema).optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    focus: z.lazy(getReferenceSchema).array().optional(),
    hasMember: z.lazy(getReferenceSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    interpretation: z.lazy(getCodeableConceptSchema).array().optional(),
    issued: fhirInstant().optional(),
    _issued: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    method: z.lazy(getCodeableConceptSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    partOf: z.lazy(getReferenceSchema).array().optional(),
    performer: z.lazy(getReferenceSchema).array().optional(),
    referenceRange: z
      .lazy(getObservation_ReferenceRangeSchema)
      .array()
      .optional(),
    resourceType: z.literal("Observation"),
    specimen: z.lazy(getReferenceSchema).optional(),
    status: z.enum([
      "amended",
      "cancelled",
      "corrected",
      "entered-in-error",
      "final",
      "preliminary",
      "registered",
      "unknown",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    valueDateTime: fhirDateTime().optional(),
    _valueDateTime: z.lazy(getElementSchema).optional(),
    valueInteger: z.number().int().optional(),
    _valueInteger: z.lazy(getElementSchema).optional(),
    valuePeriod: z.lazy(getPeriodSchema).optional(),
    valueQuantity: z.lazy(getQuantitySchema).optional(),
    valueRange: z.lazy(getRangeSchema).optional(),
    valueRatio: z.lazy(getRatioSchema).optional(),
    valueSampledData: z.lazy(getSampledDataSchema).optional(),
    valueString: fhirString().optional(),
    _valueString: z.lazy(getElementSchema).optional(),
    valueTime: fhirTime().optional(),
    _valueTime: z.lazy(getElementSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const effective_x_Present = [
      "effectiveDateTime",
      "effectiveInstant",
      "effectivePeriod",
      "effectiveTiming",
    ].filter((field) => record[field] !== undefined);
    if (effective_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of effectiveDateTime, effectiveInstant, effectivePeriod, effectiveTiming may be present for effective[x]",
        path: [effective_x_Present[0]],
      });
    }
    const value_x_Present = [
      "valueBoolean",
      "valueCodeableConcept",
      "valueDateTime",
      "valueInteger",
      "valuePeriod",
      "valueQuantity",
      "valueRange",
      "valueRatio",
      "valueSampledData",
      "valueString",
      "valueTime",
    ].filter((field) => record[field] !== undefined);
    if (value_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of valueBoolean, valueCodeableConcept, valueDateTime, valueInteger, valuePeriod, valueQuantity, valueRange, valueRatio, valueSampledData, valueString, valueTime may be present for value[x]",
        path: [value_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.basedOn,
      "basedOn",
      [
        "http://hl7.org/fhir/StructureDefinition/CarePlan",
        "http://hl7.org/fhir/StructureDefinition/DeviceRequest",
        "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
        "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
        "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
        "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
      ],
      [
        "CarePlan",
        "DeviceRequest",
        "ImmunizationRecommendation",
        "MedicationRequest",
        "NutritionOrder",
        "ServiceRequest",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.derivedFrom,
      "derivedFrom",
      [
        "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        "http://hl7.org/fhir/StructureDefinition/ImagingStudy",
        "http://hl7.org/fhir/StructureDefinition/Media",
        "http://hl7.org/fhir/StructureDefinition/MolecularSequence",
        "http://hl7.org/fhir/StructureDefinition/Observation",
        "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
      ],
      [
        "DocumentReference",
        "ImagingStudy",
        "Media",
        "MolecularSequence",
        "Observation",
        "QuestionnaireResponse",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.device,
      "device",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/DeviceMetric",
      ],
      ["Device", "DeviceMetric"],
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
      record.focus,
      "focus",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.hasMember,
      "hasMember",
      [
        "http://hl7.org/fhir/StructureDefinition/MolecularSequence",
        "http://hl7.org/fhir/StructureDefinition/Observation",
        "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
      ],
      ["MolecularSequence", "Observation", "QuestionnaireResponse"],
      ctx,
    );
    validateReferenceTarget(
      record.partOf,
      "partOf",
      [
        "http://hl7.org/fhir/StructureDefinition/ImagingStudy",
        "http://hl7.org/fhir/StructureDefinition/Immunization",
        "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
        "http://hl7.org/fhir/StructureDefinition/MedicationDispense",
        "http://hl7.org/fhir/StructureDefinition/MedicationStatement",
        "http://hl7.org/fhir/StructureDefinition/Procedure",
      ],
      [
        "ImagingStudy",
        "Immunization",
        "MedicationAdministration",
        "MedicationDispense",
        "MedicationStatement",
        "Procedure",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.performer,
      "performer",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "CareTeam",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.specimen,
      "specimen",
      ["http://hl7.org/fhir/StructureDefinition/Specimen"],
      ["Specimen"],
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
  });

export const ObservationSchema =
  ObservationSchemaInternal as z.ZodType<Observation>;
