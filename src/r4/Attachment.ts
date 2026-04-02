// Profile: http://hl7.org/fhir/StructureDefinition/Attachment
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

export interface Attachment extends Element {
	contentType?: string;
	_contentType?: Element;
	creation?: string;
	_creation?: Element;
	data?: string;
	_data?: Element;
	hash?: string;
	_hash?: Element;
	language?: string;
	_language?: Element;
	size?: number;
	_size?: Element;
	title?: string;
	_title?: Element;
	url?: string;
	_url?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const AttachmentSchemaInternal = z
	.object({
		contentType: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"Identifies the type of the data in the attachment and allows a method to be chosen to interpret or render the data. Includes mime type parameters such as charset where appropriate.",
			),
		_contentType: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for contentType"),
		creation: fhirDateTime()
			.optional()
			.describe("The date that the attachment was first created."),
		_creation: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for creation"),
		data: z
			.string()
			.regex(/(\s*([0-9a-zA-Z+/=]){4}\s*)+/)
			.optional()
			.describe(
				"The actual data of the attachment - a sequence of bytes, base64 encoded.",
			),
		_data: z.lazy(getElementSchema).optional().describe("Extensions for data"),
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
		_hash: z.lazy(getElementSchema).optional().describe("Extensions for hash"),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		language: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"The human language of the content. The value can be any valid value according to BCP 47.",
			),
		_language: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for language"),
		size: z
			.number()
			.int()
			.nonnegative()
			.optional()
			.describe(
				"The number of bytes of data that make up this attachment (before base64 encoding, if that is done).",
			),
		_size: z.lazy(getElementSchema).optional().describe("Extensions for size"),
		title: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("A label or set of text to display in place of the data."),
		_title: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for title"),
		url: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe("A location where the data can be accessed."),
		_url: z.lazy(getElementSchema).optional().describe("Extensions for url"),
	})
	.strict();

export const AttachmentSchema: z.ZodType<Attachment> = AttachmentSchemaInternal;
