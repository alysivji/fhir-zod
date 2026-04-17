// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceReport
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Characteristic. */
export interface EvidenceReport_Subject_Characteristic extends BackboneElement {
  /** Characteristic code. */
  code: CodeableConcept;
  /** Is used to express not the characteristic. */
  exclude?: boolean;
  /** Extensions for exclude */
  _exclude?: Element;
  /** Timeframe for the characteristic. */
  period?: Period;
  /** Characteristic value. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** Characteristic value. */
  valueCodeableConcept?: CodeableConcept;
  /** Characteristic value. */
  valueQuantity?: Quantity;
  /** Characteristic value. */
  valueRange?: Range;
  /** Characteristic value. */
  valueReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EvidenceReport_Subject_CharacteristicSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    exclude: z.boolean().optional(),
    _exclude: z.lazy(getElementSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
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
      validateReferenceTarget(
        record.valueReference,
        "valueReference",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const EvidenceReport_Subject_CharacteristicSchema =
  EvidenceReport_Subject_CharacteristicSchemaInternal as z.ZodType<EvidenceReport_Subject_Characteristic>;
