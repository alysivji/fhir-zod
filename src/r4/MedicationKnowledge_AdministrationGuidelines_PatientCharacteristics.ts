// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Characteristics of the patient that are relevant to the administration guidelines (for example, height, weight, gender, etc.). */
export interface MedicationKnowledge_AdministrationGuidelines_PatientCharacteristics
  extends BackboneElement {
  /** Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender). */
  characteristicCodeableConcept?: CodeableConcept;
  /** Specific characteristic that is relevant to the administration guideline (e.g. height, weight, gender). */
  characteristicQuantity?: Quantity;
  /** The specific characteristic (e.g. height, weight, gender, etc.). */
  value?: Array<string | null>;
  /** Extensions for value */
  _value?: Array<Element | null>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const MedicationKnowledge_AdministrationGuidelines_PatientCharacteristicsSchemaInternal =
  BackboneElementSchemaInternal.extend({
    characteristicCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    characteristicQuantity: z.lazy(getQuantitySchema).optional(),
    value: fhirString().nullable().array().optional(),
    _value: z.lazy(getElementSchema).nullable().array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const characteristic_x_Present = [
        "characteristicCodeableConcept",
        "characteristicQuantity",
      ].filter((field) => record[field] !== undefined);
      if (characteristic_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of characteristicCodeableConcept, characteristicQuantity must be present for characteristic[x]",
          path: ["characteristicCodeableConcept"],
        });
      }
      if (characteristic_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of characteristicCodeableConcept, characteristicQuantity may be present for characteristic[x]",
          path: [characteristic_x_Present[0]],
        });
      }
      validatePrimitiveArrayPair(
        record.value,
        record._value,
        "value",
        "_value",
        ctx,
      );
    });

export const MedicationKnowledge_AdministrationGuidelines_PatientCharacteristicsSchema =
  MedicationKnowledge_AdministrationGuidelines_PatientCharacteristicsSchemaInternal as z.ZodType<MedicationKnowledge_AdministrationGuidelines_PatientCharacteristics>;
