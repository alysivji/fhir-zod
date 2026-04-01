// Profile: http://hl7.org/fhir/StructureDefinition/Money
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Money = z
	.object({
		_currency: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for currency"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_value: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for value"),
		currency: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe("ISO 4217 Currency Code."),
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
		value: z
			.number()
			.optional()
			.describe("Numerical value (with implicit precision)."),
	})
	.strict();

export type Money = z.output<typeof Money>;
