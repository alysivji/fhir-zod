// Profile: http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirDate } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Characteristics e.g. a product's onset of action. */
export interface AdministrableProductDefinition_Property
  extends BackboneElement {
  /** The status of characteristic e.g. assigned or pending. */
  status?: CodeableConcept;
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
  valueMarkdown?: string;
  /** Extensions for valueMarkdown */
  _valueMarkdown?: Element;
  /** A value for the characteristic. */
  valueQuantity?: Quantity;
  /** A value for the characteristic. */
  valueReference?: Reference;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const AdministrableProductDefinition_PropertySchemaInternal =
  BackboneElementSchemaInternal.extend({
    status: z.lazy(getCodeableConceptSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
    valueAttachment: z.lazy(getAttachmentSchema).optional(),
    valueBoolean: z.boolean().optional(),
    _valueBoolean: z.lazy(getElementSchema).optional(),
    valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    valueDate: fhirDate().optional(),
    _valueDate: z.lazy(getElementSchema).optional(),
    valueMarkdown: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _valueMarkdown: z.lazy(getElementSchema).optional(),
    valueQuantity: z.lazy(getQuantitySchema).optional(),
    valueReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const value_x_Present = [
        "valueAttachment",
        "valueBoolean",
        "valueCodeableConcept",
        "valueDate",
        "valueMarkdown",
        "valueQuantity",
        "valueReference",
      ].filter((field) => record[field] !== undefined);
      if (value_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of valueAttachment, valueBoolean, valueCodeableConcept, valueDate, valueMarkdown, valueQuantity, valueReference may be present for value[x]",
          path: [value_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.valueReference,
        "valueReference",
        ["http://hl7.org/fhir/StructureDefinition/Binary"],
        ["Binary"],
        ctx,
      );
    });

export const AdministrableProductDefinition_PropertySchema =
  AdministrableProductDefinition_PropertySchemaInternal as z.ZodType<AdministrableProductDefinition_Property>;
