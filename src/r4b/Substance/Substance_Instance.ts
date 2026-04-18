// Source: https://hl7.org/fhir/R4B/substance-definitions.html#Substance.instance
// Profile: http://hl7.org/fhir/StructureDefinition/Substance
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance. */
export interface Substance_Instance extends BackboneElement {
  /** When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry. */
  expiry?: string;
  /** Extensions for expiry */
  _expiry?: Element;
  /** Identifier associated with the package/container (usually a label affixed directly). */
  identifier?: Identifier;
  /** The amount of the substance. */
  quantity?: Quantity;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const Substance_InstanceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    expiry: fhirDateTime().optional(),
    _expiry: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
  }).strict();

export const Substance_InstanceSchema =
  Substance_InstanceSchemaInternal as z.ZodType<Substance_Instance>;
