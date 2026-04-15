// Profile: http://hl7.org/fhir/StructureDefinition/RelatedArtifact
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import {
	fhirCanonical,
	fhirDate,
	fhirId,
	fhirString,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** RelatedArtifact Type: Related artifacts such as additional documentation, justification, or bibliographic references. */
export interface RelatedArtifact extends DataType {
	/** A bibliographic citation for the related artifact. This text SHOULD be formatted according to an accepted citation format. */
	citation?: string;
	/** Extensions for citation */
	_citation?: Element;
	/** Provides additional classifiers of the related artifact. */
	classifier?: Array<CodeableConcept>;
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
	/** The date of publication of the artifact being referred to. */
	publicationDate?: string;
	/** Extensions for publicationDate */
	_publicationDate?: Element;
	/** The publication status of the artifact being referred to. */
	publicationStatus?: "active" | "draft" | "retired" | "unknown";
	/** Extensions for publicationStatus */
	_publicationStatus?: Element;
	/** The related artifact, such as a library, value set, profile, or other knowledge resource. */
	resource?: string;
	/** Extensions for resource */
	_resource?: Element;
	/** The related artifact, if the artifact is not a canonical resource, or a resource reference to a canonical resource. */
	resourceReference?: Reference;
	/** The type of relationship to the related artifact. */
	type:
		| "amended-with"
		| "amends"
		| "appended-with"
		| "appends"
		| "citation"
		| "cite-as"
		| "cited-by"
		| "cites"
		| "comment-in"
		| "comments-on"
		| "composed-of"
		| "contained-in"
		| "contains"
		| "correction-in"
		| "corrects"
		| "created-with"
		| "depends-on"
		| "derived-from"
		| "documentation"
		| "documents"
		| "justification"
		| "part-of"
		| "predecessor"
		| "replaced-with"
		| "replaces"
		| "retracted-by"
		| "retracts"
		| "signs"
		| "similar-to"
		| "specification-of"
		| "successor"
		| "supported-with"
		| "supports"
		| "transformed-into"
		| "transformed-with"
		| "transforms";
	/** Extensions for type */
	_type?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const RelatedArtifactSchemaInternal = z
	.object({
		citation: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_citation: z.lazy(getElementSchema).optional(),
		classifier: z.lazy(getCodeableConceptSchema).array().optional(),
		display: fhirString().optional(),
		_display: z.lazy(getElementSchema).optional(),
		document: z.lazy(getAttachmentSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		label: fhirString().optional(),
		_label: z.lazy(getElementSchema).optional(),
		publicationDate: fhirDate().optional(),
		_publicationDate: z.lazy(getElementSchema).optional(),
		publicationStatus: z
			.enum(["active", "draft", "retired", "unknown"])
			.optional(),
		_publicationStatus: z.lazy(getElementSchema).optional(),
		resource: fhirCanonical().optional(),
		_resource: z.lazy(getElementSchema).optional(),
		resourceReference: z.lazy(getReferenceSchema).optional(),
		type: z.enum([
			"amended-with",
			"amends",
			"appended-with",
			"appends",
			"citation",
			"cite-as",
			"cited-by",
			"cites",
			"comment-in",
			"comments-on",
			"composed-of",
			"contained-in",
			"contains",
			"correction-in",
			"corrects",
			"created-with",
			"depends-on",
			"derived-from",
			"documentation",
			"documents",
			"justification",
			"part-of",
			"predecessor",
			"replaced-with",
			"replaces",
			"retracted-by",
			"retracts",
			"signs",
			"similar-to",
			"specification-of",
			"successor",
			"supported-with",
			"supports",
			"transformed-into",
			"transformed-with",
			"transforms",
		]),
		_type: z.lazy(getElementSchema).optional(),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.resourceReference,
			"resourceReference",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
	});

export const RelatedArtifactSchema =
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
