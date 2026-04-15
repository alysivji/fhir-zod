// Profile: http://hl7.org/fhir/StructureDefinition/RelatedArtifact
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T02:24:59.228Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirId,
	fhirString,
	fhirUrl,
} from "../shared/fhir-primitives";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for RelatedArtifact Type: Related artifacts such as additional documentation, justification, or bibliographic references. */
export interface RelatedArtifact extends Element {
	/** A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format. */
	citation?: string;
	/** Extensions for citation */
	_citation?: Element;
	/** A brief description of the document or knowledge resource being referenced, suitable for display to a consumer. */
	display?: string;
	/** Extensions for display */
	_display?: Element;
	/** The document being referenced, represented as an attachment. This is exclusive with the resource element. */
	document?: Attachment;
	/** A short label that can be used to reference the citation from elsewhere in the containing artifact, such as a footnote index. */
	label?: string;
	/** Extensions for label */
	_label?: Element;
	/** The related resource, such as a library, value set, profile, or other knowledge resource. */
	resource?: string;
	/** Extensions for resource */
	_resource?: Element;
	/** The type of relationship to the related artifact. */
	type:
		| "citation"
		| "composed-of"
		| "depends-on"
		| "derived-from"
		| "documentation"
		| "justification"
		| "predecessor"
		| "successor";
	/** Extensions for type */
	_type?: Element;
	/** A url for the artifact that can be followed to access the actual content. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const RelatedArtifactSchemaInternal = z
	.object({
		citation: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_citation: z.lazy(getElementSchema).optional(),
		display: fhirString().optional(),
		_display: z.lazy(getElementSchema).optional(),
		document: z.lazy(getAttachmentSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		label: fhirString().optional(),
		_label: z.lazy(getElementSchema).optional(),
		resource: fhirCanonical().optional(),
		_resource: z.lazy(getElementSchema).optional(),
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
		_type: z.lazy(getElementSchema).optional(),
		url: fhirUrl().optional(),
		_url: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const RelatedArtifactSchema =
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
