// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceVariable
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

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

/** A grouping (or set of values) described along with other groupings to specify the set of groupings allowed for the variable. */
export interface EvidenceVariable_Category extends BackboneElement {
  /** A human-readable title or representation of the grouping. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Value or set of values that define the grouping. */
  valueCodeableConcept?: CodeableConcept;
  /** Value or set of values that define the grouping. */
  valueQuantity?: Quantity;
  /** Value or set of values that define the grouping. */
  valueRange?: Range;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const EvidenceVariable_CategorySchemaInternal =
  BackboneElementSchemaInternal.extend({
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    valueQuantity: z.lazy(getQuantitySchema).optional(),
    valueRange: z.lazy(getRangeSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = [
        "valueCodeableConcept",
        "valueQuantity",
        "valueRange",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueCodeableConcept, valueQuantity, valueRange may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const EvidenceVariable_CategorySchema =
  EvidenceVariable_CategorySchemaInternal as z.ZodType<EvidenceVariable_Category>;
