// Profile: http://hl7.org/fhir/StructureDefinition/Library
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { DataRequirement } from "../DataRequirement";
import { DataRequirementSchemaInternal } from "../DataRequirement";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { ParameterDefinition } from "../ParameterDefinition";
import { ParameterDefinitionSchemaInternal } from "../ParameterDefinition";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";

/** The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets. */
export interface Library extends DomainResource {
	/** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** An individiual or organization primarily involved in the creation and maintenance of the content. */
	author?: Array<ContactDetail>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** The content of the library as an Attachment. The content may be a reference to a url, or may be directly embedded as a base-64 string. Either way, the contentType of the attachment determines how to interpret the content. */
	content?: Array<Attachment>;
	/** A copyright statement relating to the library and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the library. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** Describes a set of data that must be provided in order to be able to successfully perform the computations defined by the library. */
	dataRequirement?: Array<DataRequirement>;
	/** The date  (and optionally time) when the library was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the library changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the library from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** An individual or organization primarily responsible for internal coherence of the content. */
	editor?: Array<ContactDetail>;
	/** The period during which the library content was or is planned to be in active use. */
	effectivePeriod?: Period;
	/** An individual or organization responsible for officially endorsing the content for use in some setting. */
	endorser?: Array<ContactDetail>;
	/** A Boolean value to indicate that this library is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A formal identifier that is used to identify this library when it is represented in other formats, or referenced in a specification, model, design or an instance. e.g. CMS or NQF identifiers for a measure artifact. Note that at least one identifier is required for non-experimental active artifacts. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the library is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** A natural language name identifying the library. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The parameter element defines parameters used by the library. */
	parameter?: Array<ParameterDefinition>;
	/** The name of the organization or individual that published the library. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this library is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** Related artifacts such as additional documentation, justification, or bibliographic references. */
	relatedArtifact?: Array<RelatedArtifact>;
	/** This is a Library resource. */
	resourceType: "Library";
	/** An individual or organization primarily responsible for review of some aspect of the content. */
	reviewer?: Array<ContactDetail>;
	/** The status of this library. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A code or group definition that describes the intended subject of the contents of the library. */
	subjectCodeableConcept?: CodeableConcept;
	/** A code or group definition that describes the intended subject of the contents of the library. */
	subjectReference?: Reference;
	/** An explanatory or alternate title for the library giving additional information about its content. */
	subtitle?: string;
	/** Extensions for subtitle */
	_subtitle?: Element;
	/** A short, descriptive, user-friendly title for the library. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** Descriptive topics related to the content of the library. Topics provide a high-level categorization of the library that can be useful for filtering and searching. */
	topic?: Array<CodeableConcept>;
	/** Identifies the type of library such as a Logic Library, Model Definition, Asset Collection, or Module Definition. */
	type: CodeableConcept;
	/** An absolute URI that is used to identify this library when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this library is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the library is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** A detailed description of how the library is used from a clinical perspective. */
	usage?: string;
	/** Extensions for usage */
	_usage?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate library instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the library when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the library author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
	DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getParameterDefinitionSchema = (): z.ZodType<ParameterDefinition> =>
	ParameterDefinitionSchemaInternal as z.ZodType<ParameterDefinition>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const LibrarySchemaInternal = DomainResourceSchemaInternal.extend({
	approvalDate: fhirDate().optional(),
	_approvalDate: z.lazy(getElementSchema).optional(),
	author: z.lazy(getContactDetailSchema).array().optional(),
	contact: z.lazy(getContactDetailSchema).array().optional(),
	content: z.lazy(getAttachmentSchema).array().optional(),
	copyright: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_copyright: z.lazy(getElementSchema).optional(),
	dataRequirement: z.lazy(getDataRequirementSchema).array().optional(),
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	description: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_description: z.lazy(getElementSchema).optional(),
	editor: z.lazy(getContactDetailSchema).array().optional(),
	effectivePeriod: z.lazy(getPeriodSchema).optional(),
	endorser: z.lazy(getContactDetailSchema).array().optional(),
	experimental: z.boolean().optional(),
	_experimental: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
	lastReviewDate: fhirDate().optional(),
	_lastReviewDate: z.lazy(getElementSchema).optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	parameter: z.lazy(getParameterDefinitionSchema).array().optional(),
	publisher: fhirString().optional(),
	_publisher: z.lazy(getElementSchema).optional(),
	purpose: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_purpose: z.lazy(getElementSchema).optional(),
	relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
	resourceType: z.literal("Library"),
	reviewer: z.lazy(getContactDetailSchema).array().optional(),
	status: z.enum(["active", "draft", "retired", "unknown"]),
	_status: z.lazy(getElementSchema).optional(),
	subjectCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	subjectReference: z.lazy(getReferenceSchema).optional(),
	subtitle: fhirString().optional(),
	_subtitle: z.lazy(getElementSchema).optional(),
	title: fhirString().optional(),
	_title: z.lazy(getElementSchema).optional(),
	topic: z.lazy(getCodeableConceptSchema).array().optional(),
	type: z.lazy(getCodeableConceptSchema),
	url: fhirUri().optional(),
	_url: z.lazy(getElementSchema).optional(),
	usage: fhirString().optional(),
	_usage: z.lazy(getElementSchema).optional(),
	useContext: z.lazy(getUsageContextSchema).array().optional(),
	version: fhirString().optional(),
	_version: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const subject_x_Present = [
			"subjectCodeableConcept",
			"subjectReference",
		].filter((field) => record[field] !== undefined);
		if (subject_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of subjectCodeableConcept, subjectReference may be present for subject[x]",
				path: [subject_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.subjectReference,
			"subjectReference",
			["http://hl7.org/fhir/StructureDefinition/Group"],
			["Group"],
			ctx,
		);
	});

export const LibrarySchema = LibrarySchemaInternal as z.ZodType<Library>;
