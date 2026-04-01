// Profile: http://hl7.org/fhir/StructureDefinition/ContactPoint
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getPeriodSchema = (): z.ZodType<unknown> => Period;

export const ContactPoint = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_rank: z.lazy(getElementSchema).optional().describe("Extensions for rank"),
		_system: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for system"),
		_use: z.lazy(getElementSchema).optional().describe("Extensions for use"),
		_value: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for value"),
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
		period: z
			.lazy(getPeriodSchema)
			.optional()
			.describe("Time period when the contact point was/is in use."),
		rank: z
			.number()
			.int()
			.positive()
			.optional()
			.describe(
				"Specifies a preferred order in which to use a set of contacts. ContactPoints with lower rank values are more preferred than those with higher rank values.",
			),
		system: z
			.enum(["email", "fax", "other", "pager", "phone", "sms", "url"])
			.optional()
			.describe(
				"Telecommunications form for contact point - what communications system is required to make use of the contact.",
			),
		use: z
			.enum(["home", "mobile", "old", "temp", "work"])
			.optional()
			.describe("Identifies the purpose for the contact point."),
		value: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The actual contact point details, in a form that is meaningful to the designated communication system (i.e. phone number or email address).",
			),
	})
	.strict();

export type ContactPoint = z.output<typeof ContactPoint>;
