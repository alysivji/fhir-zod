// Profile: http://hl7.org/fhir/StructureDefinition/ProductShelfLife
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Base StructureDefinition for ProductShelfLife Type: The shelf-life and storage information for a medicinal product item or container can be described using this class. */
export interface ProductShelfLife extends BackboneElement {
  /** Unique identifier for the packaged Medicinal Product. */
  identifier?: Identifier;
  /** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used. */
  period: Quantity;
  /** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified. */
  specialPrecautionsForStorage?: Array<CodeableConcept>;
  /** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified. */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const ProductShelfLifeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    identifier: z.lazy(getIdentifierSchema).optional(),
    period: z.lazy(getQuantitySchema),
    specialPrecautionsForStorage: z
      .lazy(getCodeableConceptSchema)
      .array()
      .optional(),
    type: z.lazy(getCodeableConceptSchema),
  }).strict();

export const ProductShelfLifeSchema =
  ProductShelfLifeSchemaInternal as z.ZodType<ProductShelfLife>;
