// Profile: http://hl7.org/fhir/StructureDefinition/Money
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T14:11:40.945Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Money Type: An amount of economic utility in some recognized currency. */
export interface Money extends Element {
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
		currency: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		_currency: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_id: z.lazy(getElementSchema).optional(),
		value: z.number().optional(),
		_value: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const MoneySchema = MoneySchemaInternal as z.ZodType<Money>;
