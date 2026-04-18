// Source: https://hl7.org/fhir/R4B/biologicallyderivedproduct-definitions.html#BiologicallyDerivedProduct.manipulation
// Profile: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";

/** Any manipulation of product post-collection that is intended to alter the product.  For example a buffy-coat enrichment or CD8 reduction of Peripheral Blood Stem Cells to make it more suitable for infusion. */
export interface BiologicallyDerivedProduct_Manipulation
  extends BackboneElement {
  /** Description of manipulation. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Time of manipulation. */
  timeDateTime?: string;
  /** Extensions for timeDateTime */
  _timeDateTime?: Element;
  /** Time of manipulation. */
  timePeriod?: Period;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const BiologicallyDerivedProduct_ManipulationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
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
    });

export const BiologicallyDerivedProduct_ManipulationSchema =
  BiologicallyDerivedProduct_ManipulationSchemaInternal as z.ZodType<BiologicallyDerivedProduct_Manipulation>;
