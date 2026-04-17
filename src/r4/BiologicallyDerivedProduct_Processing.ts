// Profile: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Any processing of the product during collection that does not change the fundamental nature of the product. For example adding anti-coagulants during the collection of Peripheral Blood Stem Cells. */
export interface BiologicallyDerivedProduct_Processing extends BackboneElement {
  /** Substance added during processing. */
  additive?: Reference;
  /** Description of of processing. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Procesing code. */
  procedure?: CodeableConcept;
  /** Time of processing. */
  timeDateTime?: string;
  /** Extensions for timeDateTime */
  _timeDateTime?: Element;
  /** Time of processing. */
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
export const BiologicallyDerivedProduct_ProcessingSchemaInternal =
  BackboneElementSchemaInternal.extend({
    additive: z.lazy(getReferenceSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    procedure: z.lazy(getCodeableConceptSchema).optional(),
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

export const BiologicallyDerivedProduct_ProcessingSchema =
  BiologicallyDerivedProduct_ProcessingSchemaInternal as z.ZodType<BiologicallyDerivedProduct_Processing>;
