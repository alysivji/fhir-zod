// Profile: http://hl7.org/fhir/StructureDefinition/Evidence
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A variable adjusted for in the adjusted analysis. */
export interface Evidence_Statistic_ModelCharacteristic_Variable
  extends BackboneElement {
  /** How the variable is classified for use in adjusted analysis. */
  handling?: "continuous" | "dichotomous" | "ordinal" | "polychotomous";
  /** Extensions for handling */
  _handling?: Element;
  /** Description for grouping of ordinal or polychotomous variables. */
  valueCategory?: Array<CodeableConcept>;
  /** Discrete value for grouping of ordinal or polychotomous variables. */
  valueQuantity?: Array<Quantity>;
  /** Range of values for grouping of ordinal or polychotomous variables. */
  valueRange?: Array<Range>;
  /** Description of the variable. */
  variableDefinition: Reference;
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
export const Evidence_Statistic_ModelCharacteristic_VariableSchemaInternal =
  BackboneElementSchemaInternal.extend({
    handling: z
      .enum(["continuous", "dichotomous", "ordinal", "polychotomous"])
      .optional(),
    _handling: z.lazy(getElementSchema).optional(),
    valueCategory: z.lazy(getCodeableConceptSchema).array().optional(),
    valueQuantity: z.lazy(getQuantitySchema).array().optional(),
    valueRange: z.lazy(getRangeSchema).array().optional(),
    variableDefinition: z.lazy(getReferenceSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.variableDefinition,
        "variableDefinition",
        [
          "http://hl7.org/fhir/StructureDefinition/EvidenceVariable",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
        ["EvidenceVariable", "Group"],
        ctx,
      );
    });

export const Evidence_Statistic_ModelCharacteristic_VariableSchema =
  Evidence_Statistic_ModelCharacteristic_VariableSchemaInternal as z.ZodType<Evidence_Statistic_ModelCharacteristic_Variable>;
