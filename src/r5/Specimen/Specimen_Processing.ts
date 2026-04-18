// Source: https://hl7.org/fhir/R5/specimen-definitions.html#Specimen.processing
// Profile: http://hl7.org/fhir/StructureDefinition/Specimen
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Details concerning processing and processing steps for the specimen. */
export interface Specimen_Processing extends BackboneElement {
  /** Material used in the processing step. */
  additive?: Array<Reference>;
  /** Textual description of procedure. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A coded value specifying the method used to process the specimen. */
  method?: CodeableConcept;
  /** A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin. */
  timeDateTime?: string;
  /** Extensions for timeDateTime */
  _timeDateTime?: Element;
  /** A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin. */
  timePeriod?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Specimen_ProcessingSchemaInternal =
  BackboneElementSchemaInternal.extend({
    additive: z.lazy(getReferenceSchema).array().optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    method: z.lazy(getCodeableConceptSchema).optional(),
    timeDateTime: fhirDateTime().optional(),
    _timeDateTime: z.lazy(getElementSchema).optional(),
    timePeriod: z.lazy(getPeriodSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const time_x_Present = ["timeDateTime", "timePeriod"].filter(
        (field) => record[field] !== undefined,
      );
      if (time_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of timeDateTime, timePeriod may be present for time[x]",
          path: [time_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.additive,
        "additive",
        ["http://hl7.org/fhir/StructureDefinition/Substance"],
        ["Substance"],
        ctx,
      );
    });

export const Specimen_ProcessingSchema =
  Specimen_ProcessingSchemaInternal as z.ZodType<Specimen_Processing>;
