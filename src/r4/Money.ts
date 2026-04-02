// Profile: http://hl7.org/fhir/StructureDefinition/Money
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

export interface Money extends Element {
	currency?: string;
	_currency?: Element;
	value?: number;
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const MoneySchemaInternal = z
	.object({
		currency: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe("ISO 4217 Currency Code."),
		_currency: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for currency"),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		value: z
			.number()
			.optional()
			.describe("Numerical value (with implicit precision)."),
		_value: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for value"),
	})
	.strict();

export const MoneySchema: z.ZodType<Money> = MoneySchemaInternal;
