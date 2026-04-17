// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

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
  /** The date this measure report was generated. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A reference to a Bundle containing the Resources that were used in the calculation of this measure. */
  evaluatedResource?: Array<Reference>;
  /** The results of the calculation, one for each population group in the measure. */
  group?: Array<MeasureReport_Group>;
  /** A formal identifier that is used to identify this MeasureReport when it is represented in other formats or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** Whether improvement in the measure is noted by an increase or decrease in the measure score. */
  improvementNotation?: CodeableConcept;
  /** A reference to the Measure that was calculated to produce this report. */
  measure: string;
  /** Extensions for measure */
  _measure?: Element;
  /** The reporting period for which the report was calculated. */
  period: Period;
  /** The individual, location, or organization that is reporting the data. */
  reporter?: Reference;
  /** This is a MeasureReport resource. */
  resourceType: "MeasureReport";
  /** The MeasureReport status. No data will be available until the MeasureReport status is complete. */
  status: "complete" | "error" | "pending";
  /** Extensions for status */
  _status?: Element;
  /** Optional subject identifying the individual or individuals the report is for. */
  subject?: Reference;
  /** The type of measure report. This may be an individual report, which provides the score for the measure for an individual member of the population; a subject-listing, which returns the list of members that meet the various criteria in the measure; a summary report, which returns a population count for each of the criteria in the measure; or a data-collection, which enables the MeasureReport to be used to exchange the data-of-interest for a quality measure. */
  type: "data-collection" | "individual" | "subject-list" | "summary";
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
  date: fhirDateTime().optional(),
  _date: z.lazy(getElementSchema).optional(),
  evaluatedResource: z.lazy(getReferenceSchema).array().optional(),
  group: z.lazy(getMeasureReport_GroupSchema).array().optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  improvementNotation: z.lazy(getCodeableConceptSchema).optional(),
  measure: fhirCanonical(),
  _measure: z.lazy(getElementSchema).optional(),
  period: z.lazy(getPeriodSchema),
  reporter: z.lazy(getReferenceSchema).optional(),
  resourceType: z.literal("MeasureReport"),
  status: z.enum(["complete", "error", "pending"]),
  _status: z.lazy(getElementSchema).optional(),
  subject: z.lazy(getReferenceSchema).optional(),
  type: z.enum(["data-collection", "individual", "subject-list", "summary"]),
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
      record.reporter,
      "reporter",
      [
        "http://hl7.org/fhir/StructureDefinition/Location",
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Location", "Organization", "Practitioner", "PractitionerRole"],
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
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      [
        "Device",
        "Group",
        "Location",
        "Patient",
        "Practitioner",
        "PractitionerRole",
        "RelatedPerson",
      ],
      ctx,
    );
  });

export const MeasureReportSchema =
  MeasureReportSchemaInternal as z.ZodType<MeasureReport>;
