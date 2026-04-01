// Profile: http://hl7.org/fhir/StructureDefinition/HumanName
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

export const HumanName = z
	.object({
		_family: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for family"),
		_given: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for given"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_prefix: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for prefix"),
		_suffix: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for suffix"),
		_text: z.lazy(getElementSchema).optional().describe("Extensions for text"),
		_use: z.lazy(getElementSchema).optional().describe("Extensions for use"),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		family: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the family name of a son is the first name of his father.",
			),
		given: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional()
			.describe("Given name."),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		period: z
			.lazy(getPeriodSchema)
			.optional()
			.describe(
				"Indicates the period of time when this name was valid for the named person.",
			),
		prefix: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional()
			.describe(
				"Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the start of the name.",
			),
		suffix: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional()
			.describe(
				"Part of the name that is acquired as a title due to academic, legal, employment or nobility status, etc. and that appears at the end of the name.",
			),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Specifies the entire name as it should be displayed e.g. on an application UI. This may be provided instead of or as well as the specific parts.",
			),
		use: z
			.enum([
				"anonymous",
				"maiden",
				"nickname",
				"official",
				"old",
				"temp",
				"usual",
			])
			.optional()
			.describe("Identifies the purpose for this name."),
	})
	.strict();

export type HumanName = z.output<typeof HumanName>;
