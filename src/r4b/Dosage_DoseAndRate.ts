// Source: https://hl7.org/fhir/R4B/dosage-definitions.html#Dosage.doseAndRate
// Profile: http://hl7.org/fhir/StructureDefinition/Dosage
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";

/** The amount of medication administered. */
export interface Dosage_DoseAndRate extends Element {
  /** Amount of medication per dose. */
  doseQuantity?: Quantity;
  /** Amount of medication per dose. */
  doseRange?: Range;
  /** Amount of medication per unit of time. */
  rateQuantity?: Quantity;
  /** Amount of medication per unit of time. */
  rateRange?: Range;
  /** Amount of medication per unit of time. */
  rateRatio?: Ratio;
  /** The kind of dose or rate specified, for example, ordered or calculated. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
  RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const Dosage_DoseAndRateSchemaInternal = z
  .object({
    doseQuantity: z.lazy(getQuantitySchema).optional(),
    doseRange: z.lazy(getRangeSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirString().optional(),
    _id: z.lazy(getElementSchema).optional(),
    rateQuantity: z.lazy(getQuantitySchema).optional(),
    rateRange: z.lazy(getRangeSchema).optional(),
    rateRatio: z.lazy(getRatioSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const dose_x_Present = ["doseQuantity", "doseRange"].filter(
      (field) => record[field] !== undefined,
    );
    if (dose_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of doseQuantity, doseRange may be present for dose[x]",
        path: [dose_x_Present[0]],
      });
    }
    const rate_x_Present = ["rateQuantity", "rateRange", "rateRatio"].filter(
      (field) => record[field] !== undefined,
    );
    if (rate_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of rateQuantity, rateRange, rateRatio may be present for rate[x]",
        path: [rate_x_Present[0]],
      });
    }
  });

export const Dosage_DoseAndRateSchema =
  Dosage_DoseAndRateSchemaInternal as z.ZodType<Dosage_DoseAndRate>;
