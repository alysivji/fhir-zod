// Profile: http://hl7.org/fhir/StructureDefinition/RelatedArtifact
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Attachment } from "./Attachment";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getAttachmentSchema = (): z.ZodType<unknown> => Attachment;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const RelatedArtifact = z
	.object({
		_citation: z.lazy(getElementSchema).optional(),
		_display: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_label: z.lazy(getElementSchema).optional(),
		_resource: z.lazy(getElementSchema).optional(),
		_type: z.lazy(getElementSchema).optional(),
		_url: z.lazy(getElementSchema).optional(),
		citation: z.string().optional(),
		display: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		document: z.lazy(getAttachmentSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		label: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		resource: z.string().regex(/\S*/).optional(),
		type: z.enum([
			"citation",
			"composed-of",
			"depends-on",
			"derived-from",
			"documentation",
			"justification",
			"predecessor",
			"successor",
		]),
		url: z.string().regex(/\S*/).optional(),
	})
	.strict();

export type RelatedArtifact = z.output<typeof RelatedArtifact>;
