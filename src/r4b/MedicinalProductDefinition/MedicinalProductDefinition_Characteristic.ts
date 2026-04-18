// Source: https://hl7.org/fhir/R4B/medicinalproductdefinition-definitions.html#MedicinalProductDefinition.characteristic
// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirDate } from "../../shared/fhir-primitives";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** Allows the key product features to be recorded, such as "sugar free", "modified release", "parallel import". */
export interface MedicinalProductDefinition_Characteristic
  extends BackboneElement {
  /** A code expressing the type of characteristic. */
  type: CodeableConcept;
  /** A value for the characteristic. */
  valueAttachment?: Attachment;
  /** A value for the characteristic. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** A value for the characteristic. */
  valueCodeableConcept?: CodeableConcept;
  /** A value for the characteristic. */
  valueDate?: string;
  /** Extensions for valueDate */
  _valueDate?: Element;
  /** A value for the characteristic. */
  valueQuantity?: Quantity;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const MedicinalProductDefinition_CharacteristicSchemaInternal =
  BackboneElementSchemaInternal.extend({
    type: z.lazy(getCodeableConceptSchema),
    valueAttachment: z.lazy(getAttachmentSchema).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    valueDate: fhirDate().optional(),
    _valueDate: z.lazy(getElementSchema).optional(),
    valueQuantity: z.lazy(getQuantitySchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = [
        "valueAttachment",
        "valueBoolean",
        "valueCodeableConcept",
        "valueDate",
        "valueQuantity",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueAttachment, valueBoolean, valueCodeableConcept, valueDate, valueQuantity may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
    });

export const MedicinalProductDefinition_CharacteristicSchema =
  MedicinalProductDefinition_CharacteristicSchemaInternal as z.ZodType<MedicinalProductDefinition_Characteristic>;
