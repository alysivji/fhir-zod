// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The populations that make up the population group, one for each type of population appropriate for the measure. */
export interface MeasureReport_Group_Population extends BackboneElement {
  /** The type of the population. */
  code?: CodeableConcept;
  /** The number of members of the population. */
  count?: number;
  /** Extensions for count */
  _count?: Element;
  /** The population from the Measure that corresponds to this population in the MeasureReport resource. */
  linkId?: string;
  /** Extensions for linkId */
  _linkId?: Element;
  /** A reference to an individual level MeasureReport resource for a member of the population. */
  subjectReport?: Array<Reference>;
  /** This element refers to a List of individual level MeasureReport resources, one for each subject in this population. */
  subjectResults?: Reference;
  /** Optional Group identifying the individuals that make up the population. */
  subjects?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MeasureReport_Group_PopulationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema).optional(),
    count: z.number().int().optional(),
    _count: z.lazy(getElementSchema).optional(),
    linkId: fhirString().optional(),
    _linkId: z.lazy(getElementSchema).optional(),
    subjectReport: z.lazy(getReferenceSchema).array().optional(),
    subjectResults: z.lazy(getReferenceSchema).optional(),
    subjects: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.subjectReport,
        "subjectReport",
        ["http://hl7.org/fhir/StructureDefinition/MeasureReport"],
        ["MeasureReport"],
        ctx,
      );
      validateReferenceTarget(
        record.subjectResults,
        "subjectResults",
        ["http://hl7.org/fhir/StructureDefinition/List"],
        ["List"],
        ctx,
      );
      validateReferenceTarget(
        record.subjects,
        "subjects",
        ["http://hl7.org/fhir/StructureDefinition/Group"],
        ["Group"],
        ctx,
      );
    });

export const MeasureReport_Group_PopulationSchema =
  MeasureReport_Group_PopulationSchemaInternal as z.ZodType<MeasureReport_Group_Population>;
