// Source: https://hl7.org/fhir/R5/group-definitions.html#Group.characteristic
// Profile: http://hl7.org/fhir/StructureDefinition/Group
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Identifies traits whose presence r absence is shared by members of the group. */
export interface Group_Characteristic extends BackboneElement {
  /** A code that identifies the kind of trait being asserted. */
  code: CodeableConcept;
  /** If true, indicates the characteristic is one that is NOT held by members of the group. */
  exclude: boolean;
  /** Extensions for exclude */
  _exclude?: Element;
  /** The period over which the characteristic is tested; e.g. the patient had an operation during the month of June. */
  period?: Period;
  /** The value of the trait that holds (or does not hold - see 'exclude') for members of the group. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** The value of the trait that holds (or does not hold - see 'exclude') for members of the group. */
  valueCodeableConcept?: CodeableConcept;
  /** The value of the trait that holds (or does not hold - see 'exclude') for members of the group. */
  valueQuantity?: Quantity;
  /** The value of the trait that holds (or does not hold - see 'exclude') for members of the group. */
  valueRange?: Range;
  /** The value of the trait that holds (or does not hold - see 'exclude') for members of the group. */
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
export const Group_CharacteristicSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    exclude: z.boolean(),
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
    });

export const Group_CharacteristicSchema =
  Group_CharacteristicSchemaInternal as z.ZodType<Group_Characteristic>;
