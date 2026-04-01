// Profile: http://hl7.org/fhir/StructureDefinition/RelatedArtifact
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

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
		_citation: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for citation"),
		_display: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for display"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_label: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for label"),
		_resource: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for resource"),
		_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
		_url: z.lazy(getElementSchema).optional().describe("Extensions for url"),
		citation: z
			.string()
			.optional()
			.describe(
				"A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format.",
			),
		display: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A brief description of the document or knowledge resource being referenced, suitable for display to a consumer.",
			),
		document: z
			.lazy(getAttachmentSchema)
			.optional()
			.describe(
				"The document being referenced, represented as an attachment. This is exclusive with the resource element.",
			),
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
		label: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index.",
			),
		resource: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"The related resource, such as a library, value set, profile, or other knowledge resource.",
			),
		type: z
			.enum([
				"citation",
				"composed-of",
				"depends-on",
				"derived-from",
				"documentation",
				"justification",
				"predecessor",
				"successor",
			])
			.describe("The type of relationship to the related artifact."),
		url: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"A url for the artifact that can be followed to access the actual content.",
			),
	})
	.strict();

export type RelatedArtifact = z.output<typeof RelatedArtifact>;
