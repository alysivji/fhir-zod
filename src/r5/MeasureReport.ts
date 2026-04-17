// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirCanonical, fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { MeasureReport_Group } from "./MeasureReport_Group";
import { MeasureReport_GroupSchemaInternal } from "./MeasureReport_Group";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation. */
export interface MeasureReport extends DomainResource {
  /** Indicates whether the data submitted in a data-exchange report represents a snapshot or incremental update. A snapshot update replaces all previously submitted data for the receiver, whereas an incremental update represents only updated and/or changed data and should be applied as a differential update to the existing submitted data for the receiver. */
  dataUpdateType?: "incremental" | "snapshot";
  /** Extensions for dataUpdateType */
  _dataUpdateType?: Element;
  /** The date this measure was calculated. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** Evaluated resources are used to capture what data was involved in the calculation of a measure. This usage is only allowed for individual reports to ensure that the size of the MeasureReport resource is bounded. */
  evaluatedResource?: Array<Reference>;
  /** The results of the calculation, one for each population group in the measure. */
  group?: Array<MeasureReport_Group>;
  /** A formal identifier that is used to identify this MeasureReport when it is represented in other formats or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** Whether improvement in the measure is noted by an increase or decrease in the measure score. */
  improvementNotation?: CodeableConcept;
  /** A reference to a Parameters resource (typically represented using a contained resource) that represents any input parameters that were provided to the operation that generated the report. */
  inputParameters?: Reference;
  /** A reference to the location for which the data is being reported. */
  location?: Reference;
  /** A reference to the Measure that was calculated to produce this report. */
  measure?: string;
  /** Extensions for measure */
  _measure?: Element;
  /** The reporting period for which the report was calculated. */
  period: Period;
  /** The individual or organization that is reporting the data. */
  reporter?: Reference;
  /** A reference to the vendor who queried the data, calculated results and/or generated the report. The ‘reporting vendor’ is intended to represent the submitting entity when it is not the same as the reporting entity. This extension is used when the Receiver is interested in getting vendor information in the report. */
  reportingVendor?: Reference;
  /** This is a MeasureReport resource. */
  resourceType: "MeasureReport";
  /** Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented. It is expected to be the same as the scoring element on the referenced Measure. */
  scoring?: CodeableConcept;
  /** The MeasureReport status. No data will be available until the MeasureReport status is complete. */
  status: "complete" | "error" | "pending";
  /** Extensions for status */
  _status?: Element;
  /** Optional subject identifying the individual or individuals the report is for. */
  subject?: Reference;
  /** A reference to a Resource that represents additional information collected for the report. If the value of the supplemental data is not a Resource (i.e. evaluating the supplementalData expression for this case in the measure results in a value that is not a FHIR Resource), it is reported as a reference to a contained Observation resource. */
  supplementalData?: Array<Reference>;
  /** The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure. */
  type: "data-exchange" | "individual" | "subject-list" | "summary";
  /** Extensions for type */
  _type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMeasureReport_GroupSchema = (): z.ZodType<MeasureReport_Group> =>
  MeasureReport_GroupSchemaInternal as z.ZodType<MeasureReport_Group>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MeasureReportSchemaInternal = DomainResourceSchemaInternal.extend({
  dataUpdateType: z.enum(["incremental", "snapshot"]).optional(),
  _dataUpdateType: z.lazy(getElementSchema).optional(),
  date: fhirDateTime().optional(),
  _date: z.lazy(getElementSchema).optional(),
  evaluatedResource: z.lazy(getReferenceSchema).array().optional(),
  group: z.lazy(getMeasureReport_GroupSchema).array().optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  improvementNotation: z.lazy(getCodeableConceptSchema).optional(),
  inputParameters: z.lazy(getReferenceSchema).optional(),
  location: z.lazy(getReferenceSchema).optional(),
  measure: fhirCanonical().optional(),
  _measure: z.lazy(getElementSchema).optional(),
  period: z.lazy(getPeriodSchema),
  reporter: z.lazy(getReferenceSchema).optional(),
  reportingVendor: z.lazy(getReferenceSchema).optional(),
  resourceType: z.literal("MeasureReport"),
  scoring: z.lazy(getCodeableConceptSchema).optional(),
  status: z.enum(["complete", "error", "pending"]),
  _status: z.lazy(getElementSchema).optional(),
  subject: z.lazy(getReferenceSchema).optional(),
  supplementalData: z.lazy(getReferenceSchema).array().optional(),
  type: z.enum(["data-exchange", "individual", "subject-list", "summary"]),
  _type: z.lazy(getElementSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.evaluatedResource,
      "evaluatedResource",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.inputParameters,
      "inputParameters",
      ["http://hl7.org/fhir/StructureDefinition/Parameters"],
      ["Parameters"],
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
      record.reporter,
      "reporter",
      [
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Group", "Organization", "Practitioner", "PractitionerRole"],
      ctx,
    );
    validateReferenceTarget(
      record.reportingVendor,
      "reportingVendor",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/CareTeam",
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        "http://hl7.org/fhir/StructureDefinition/Location",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "CareTeam",
        "Device",
        "Group",
        "HealthcareService",
        "Location",
        "Organization",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
    validateReferenceTarget(
      record.supplementalData,
      "supplementalData",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const MeasureReportSchema =
  MeasureReportSchemaInternal as z.ZodType<MeasureReport>;
