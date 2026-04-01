// Profile: http://hl7.org/fhir/StructureDefinition/Attachment
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Attachment = z
	.object({
		_contentType: z.lazy(getElementSchema).optional(),
		_creation: z.lazy(getElementSchema).optional(),
		_data: z.lazy(getElementSchema).optional(),
		_hash: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_language: z.lazy(getElementSchema).optional(),
		_size: z.lazy(getElementSchema).optional(),
		_title: z.lazy(getElementSchema).optional(),
		_url: z.lazy(getElementSchema).optional(),
		contentType: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		creation: fhirDateTime().optional(),
		data: z
			.string()
			.regex(/(\s*([0-9a-zA-Z\+\/=]){4}\s*)+/)
			.optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		hash: z
			.string()
			.regex(/(\s*([0-9a-zA-Z\+\/=]){4}\s*)+/)
			.optional(),
		id: fhirId().optional(),
		language: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		size: z.number().int().nonnegative().optional(),
		title: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		url: z.string().regex(/\S*/).optional(),
	})
	.strict();

export type Attachment = z.output<typeof Attachment>;
