// Profile: http://hl7.org/fhir/StructureDefinition/Money
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirCode, fhirId } from "../../shared/fhir-primitives-zod4";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Money Type: An amount of economic utility in some recognized currency. */
export interface Money extends DataType {
	/** ISO 4217 Currency Code. */
	currency?: string;
	/** Extensions for currency */
	_currency?: Element;
	/** Numerical value (with implicit precision). */
	value?: number;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const MoneySchemaInternal = z
	.object({
		currency: fhirCode().optional(),
		_currency: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		value: z.number().optional(),
		_value: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const MoneySchema = MoneySchemaInternal as z.ZodType<Money>;
