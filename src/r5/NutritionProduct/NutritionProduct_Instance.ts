// Source: https://hl7.org/fhir/R5/nutritionproduct-definitions.html#NutritionProduct.instance
// Profile: http://hl7.org/fhir/StructureDefinition/NutritionProduct
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product. */
export interface NutritionProduct_Instance extends BackboneElement {
  /** An identifier that supports traceability to the event during which material in this product from one or more biological entities was obtained or pooled. */
  biologicalSourceEvent?: Identifier;
  /** The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed. */
  expiry?: string;
  /** Extensions for expiry */
  _expiry?: Element;
  /** The identifier for the physical instance, typically a serial number or manufacturer number. */
  identifier?: Array<Identifier>;
  /** The identification of the batch or lot of the product. */
  lotNumber?: string;
  /** Extensions for lotNumber */
  _lotNumber?: Element;
  /** The name for the specific product. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The amount of items or instances that the resource considers, for instance when referring to 2 identical units together. */
  quantity?: Quantity;
  /** The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed. */
  useBy?: string;
  /** Extensions for useBy */
  _useBy?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const NutritionProduct_InstanceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    biologicalSourceEvent: z.lazy(getIdentifierSchema).optional(),
    expiry: fhirDateTime().optional(),
    _expiry: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    lotNumber: fhirString().optional(),
    _lotNumber: z.lazy(getElementSchema).optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    useBy: fhirDateTime().optional(),
    _useBy: z.lazy(getElementSchema).optional(),
  }).strict();

export const NutritionProduct_InstanceSchema =
  NutritionProduct_InstanceSchemaInternal as z.ZodType<NutritionProduct_Instance>;
