// Profile: http://hl7.org/fhir/StructureDefinition/Attachment
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Attachment = z
	.object({
		_contentType: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for contentType"),
		_creation: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for creation"),
		_data: z.lazy(getElementSchema).optional().describe("Extensions for data"),
		_hash: z.lazy(getElementSchema).optional().describe("Extensions for hash"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_language: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for language"),
		_size: z.lazy(getElementSchema).optional().describe("Extensions for size"),
		_title: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for title"),
		_url: z.lazy(getElementSchema).optional().describe("Extensions for url"),
		contentType: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.",
			),
		creation: fhirDateTime()
			.optional()
			.describe("The date that the attachment was first created."),
		data: z
			.string()
			.regex(/(\s*([0-9a-zA-Z+/=]){4}\s*)+/)
			.optional()
			.describe(
				"The actual data of the attachment - a sequence of bytes, base64 encoded.",
			),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		hash: z
			.string()
			.regex(/(\s*([0-9a-zA-Z+/=]){4}\s*)+/)
			.optional()
			.describe(
				"The calculated hash of the data using SHA-1. Represented using base64.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		language: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"The human language of the content. The value can be any valid value according to BCP 47.",
			),
		size: z
			.number()
			.int()
			.nonnegative()
			.optional()
			.describe(
				"The number of bytes of data that make up this attachment (before base64 encoding, if that is done).",
			),
		title: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("A label or set of text to display in place of the data."),
		url: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe("A location where the data can be accessed."),
	})
	.strict();

export type Attachment = z.output<typeof Attachment>;
