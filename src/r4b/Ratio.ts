// Profile: http://hl7.org/fhir/StructureDefinition/Ratio
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Base StructureDefinition for Ratio Type: A relationship of two Quantity values - expressed as a numerator and a denominator. */
export interface Ratio extends Element {
	/** The value of the denominator. */
	denominator?: Quantity;
	/** The value of the numerator. */
	numerator?: Quantity;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const RatioSchemaInternal = z
	.object({
		denominator: z.lazy(getQuantitySchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		numerator: z.lazy(getQuantitySchema).optional(),
	})
	.strict();

export const RatioSchema = RatioSchemaInternal as z.ZodType<Ratio>;
