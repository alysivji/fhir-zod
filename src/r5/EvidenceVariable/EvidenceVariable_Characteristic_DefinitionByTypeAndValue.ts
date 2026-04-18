// Source: https://hl7.org/fhir/R5/evidencevariable-definitions.html#EvidenceVariable.characteristic.definitionByTypeAndValue
// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceVariable
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirId } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
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

/** Defines the characteristic using both a type and value[x] elements. */
export interface EvidenceVariable_Characteristic_DefinitionByTypeAndValue
  extends BackboneElement {
  /** Device used for determining characteristic. */
  device?: Reference;
  /** Method for how the characteristic value was determined. */
  method?: Array<CodeableConcept>;
  /** Defines the reference point for comparison when valueQuantity or valueRange is not compared to zero. */
  offset?: CodeableConcept;
  /** Used to express the type of characteristic. */
  type: CodeableConcept;
  /** Defines the characteristic when paired with characteristic.type. */
  valueBoolean?: boolean;
  /** Extensions for valueBoolean */
  _valueBoolean?: Element;
  /** Defines the characteristic when paired with characteristic.type. */
  valueCodeableConcept?: CodeableConcept;
  /** Defines the characteristic when paired with characteristic.type. */
  valueId?: string;
  /** Extensions for valueId */
  _valueId?: Element;
  /** Defines the characteristic when paired with characteristic.type. */
  valueQuantity?: Quantity;
  /** Defines the characteristic when paired with characteristic.type. */
  valueRange?: Range;
  /** Defines the characteristic when paired with characteristic.type. */
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
export const EvidenceVariable_Characteristic_DefinitionByTypeAndValueSchemaInternal =
  BackboneElementSchemaInternal.extend({
    device: z.lazy(getReferenceSchema).optional(),
    method: z.lazy(getCodeableConceptSchema).array().optional(),
    offset: z.lazy(getCodeableConceptSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    valueId: fhirId().optional(),
    _valueId: z.lazy(getElementSchema).optional(),
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
        "valueId",
        "valueQuantity",
        "valueRange",
        "valueReference",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of valueBoolean, valueCodeableConcept, valueId, valueQuantity, valueRange, valueReference must be present for value[x]",
          path: ["valueBoolean"],
        });
      }
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueBoolean, valueCodeableConcept, valueId, valueQuantity, valueRange, valueReference may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.device,
        "device",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/DeviceMetric",
        ],
        ["Device", "DeviceMetric"],
        ctx,
      );
    });

export const EvidenceVariable_Characteristic_DefinitionByTypeAndValueSchema =
  EvidenceVariable_Characteristic_DefinitionByTypeAndValueSchemaInternal as z.ZodType<EvidenceVariable_Characteristic_DefinitionByTypeAndValue>;
