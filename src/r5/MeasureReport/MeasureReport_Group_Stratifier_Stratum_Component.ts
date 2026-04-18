// Source: https://hl7.org/fhir/R5/measurereport-definitions.html#MeasureReport.group.stratifier.stratum.component
// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A stratifier component value. */
export interface MeasureReport_Group_Stratifier_Stratum_Component
  extends BackboneElement {
  /** The code for the stratum component value. */
  code: CodeableConcept;
  /** The stratifier component from the Measure that corresponds to this stratifier component in the MeasureReport resource. */
  linkId?: string;
  /** Extensions for linkId */
  _linkId?: Element;
  /** The stratum component value. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** The stratum component value. */
  valueCodeableConcept?: CodeableConcept;
  /** The stratum component value. */
  valueQuantity?: Quantity;
  /** The stratum component value. */
  valueRange?: Range;
  /** The stratum component value. */
  valueReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MeasureReport_Group_Stratifier_Stratum_ComponentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    linkId: fhirString().optional(),
    _linkId: z.lazy(getElementSchema).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    valueQuantity: z.lazy(getQuantitySchema).optional(),
    valueRange: z.lazy(getRangeSchema).optional(),
    valueReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = [
        "valueBoolean",
        "valueCodeableConcept",
        "valueQuantity",
        "valueRange",
        "valueReference",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of valueBoolean, valueCodeableConcept, valueQuantity, valueRange, valueReference must be present for value[x]",
          path: ["valueBoolean"],
        });
      }
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueBoolean, valueCodeableConcept, valueQuantity, valueRange, valueReference may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const MeasureReport_Group_Stratifier_Stratum_ComponentSchema =
  MeasureReport_Group_Stratifier_Stratum_ComponentSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum_Component>;
