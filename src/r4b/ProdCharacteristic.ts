// Profile: http://hl7.org/fhir/StructureDefinition/ProdCharacteristic
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString } from "../shared/fhir-primitives";
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

/** Base StructureDefinition for ProdCharacteristic Type: The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available. */
export interface ProdCharacteristic extends BackboneElement {
  /** Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used. */
  color?: Array<string | null>;
  /** Extensions for color */
  _color?: Array<Element | null>;
  /** Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used. */
  depth?: Quantity;
  /** Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used. */
  externalDiameter?: Quantity;
  /** Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used. */
  height?: Quantity;
  /** Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations. */
  image?: Array<Attachment>;
  /** Where applicable, the imprint can be specified as text. */
  imprint?: Array<string | null>;
  /** Extensions for imprint */
  _imprint?: Array<Element | null>;
  /** Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used. */
  nominalVolume?: Quantity;
  /** Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used. */
  scoring?: CodeableConcept;
  /** Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used. */
  shape?: string;
  /** Extensions for shape */
  _shape?: Element;
  /** Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used. */
  weight?: Quantity;
  /** Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used. */
  width?: Quantity;
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
export const ProdCharacteristicSchemaInternal =
  BackboneElementSchemaInternal.extend({
    color: fhirString().nullable().array().optional(),
    _color: z.lazy(getElementSchema).nullable().array().optional(),
    depth: z.lazy(getQuantitySchema).optional(),
    externalDiameter: z.lazy(getQuantitySchema).optional(),
    height: z.lazy(getQuantitySchema).optional(),
    image: z.lazy(getAttachmentSchema).array().optional(),
    imprint: fhirString().nullable().array().optional(),
    _imprint: z.lazy(getElementSchema).nullable().array().optional(),
    nominalVolume: z.lazy(getQuantitySchema).optional(),
    scoring: z.lazy(getCodeableConceptSchema).optional(),
    shape: fhirString().optional(),
    _shape: z.lazy(getElementSchema).optional(),
    weight: z.lazy(getQuantitySchema).optional(),
    width: z.lazy(getQuantitySchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.color,
        record._color,
        "color",
        "_color",
        ctx,
      );
      validatePrimitiveArrayPair(
        record.imprint,
        record._imprint,
        "imprint",
        "_imprint",
        ctx,
      );
    });

export const ProdCharacteristicSchema =
  ProdCharacteristicSchemaInternal as z.ZodType<ProdCharacteristic>;
