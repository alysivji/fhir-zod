// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { EvidenceReport_RelatesTo } from "./EvidenceReport_RelatesTo";
import { EvidenceReport_RelatesToSchemaInternal } from "./EvidenceReport_RelatesTo";
import type { EvidenceReport_Section } from "./EvidenceReport_Section";
import { EvidenceReport_SectionSchemaInternal } from "./EvidenceReport_Section";
import type { EvidenceReport_Subject } from "./EvidenceReport_Subject";
import { EvidenceReport_SubjectSchemaInternal } from "./EvidenceReport_Subject";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts. */
export interface EvidenceReport extends DomainResource {
	/** An individiual, organization, or device primarily involved in the creation and maintenance of the content. */
	author?: Array<ContactDetail>;
	/** Citation Resource or display of suggested citation for this report. */
	citeAsMarkdown?: string;
	/** Extensions for citeAsMarkdown */
	_citeAsMarkdown?: Element;
	/** Citation Resource or display of suggested citation for this report. */
	citeAsReference?: Reference;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** An individiual, organization, or device primarily responsible for internal coherence of the content. */
	editor?: Array<ContactDetail>;
	/** An individiual, organization, or device responsible for officially endorsing the content for use in some setting. */
	endorser?: Array<ContactDetail>;
	/** A formal identifier that is used to identify this EvidenceReport when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** Used for footnotes and annotations. */
	note?: Array<Annotation>;
	/** The name of the organization or individual responsible for the release and ongoing maintenance of the evidence report. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Link, description or reference to artifact associated with the report. */
	relatedArtifact?: Array<RelatedArtifact>;
	/** A formal identifier that is used to identify things closely related to this EvidenceReport. */
	relatedIdentifier?: Array<Identifier>;
	/** Relationships that this composition has with other compositions or documents that already exist. */
	relatesTo?: Array<EvidenceReport_RelatesTo>;
	/** This is a EvidenceReport resource. */
	resourceType: "EvidenceReport";
	/** An individiual, organization, or device primarily responsible for review of some aspect of the content. */
	reviewer?: Array<ContactDetail>;
	/** The root of the sections that make up the composition. */
	section?: Array<EvidenceReport_Section>;
	/** The status of this summary. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Specifies the subject or focus of the report. Answers "What is this report about?". */
	subject: EvidenceReport_Subject;
	/** Specifies the kind of report, such as grouping of classifiers, search results, or human-compiled expression. */
	type?: CodeableConcept;
	/** An absolute URI that is used to identify this EvidenceReport when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this summary is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the summary is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate evidence report instances. */
	useContext?: Array<UsageContext>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getEvidenceReport_RelatesToSchema =
	(): z.ZodType<EvidenceReport_RelatesTo> =>
		EvidenceReport_RelatesToSchemaInternal as z.ZodType<EvidenceReport_RelatesTo>;
const getEvidenceReport_SectionSchema = (): z.ZodType<EvidenceReport_Section> =>
	EvidenceReport_SectionSchemaInternal as z.ZodType<EvidenceReport_Section>;
const getEvidenceReport_SubjectSchema = (): z.ZodType<EvidenceReport_Subject> =>
	EvidenceReport_SubjectSchemaInternal as z.ZodType<EvidenceReport_Subject>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const EvidenceReportSchemaInternal = DomainResourceSchemaInternal.extend(
	{
		author: z.lazy(getContactDetailSchema).array().optional(),
		citeAsMarkdown: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_citeAsMarkdown: z.lazy(getElementSchema).optional(),
		citeAsReference: z.lazy(getReferenceSchema).optional(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		editor: z.lazy(getContactDetailSchema).array().optional(),
		endorser: z.lazy(getContactDetailSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
		relatedIdentifier: z.lazy(getIdentifierSchema).array().optional(),
		relatesTo: z.lazy(getEvidenceReport_RelatesToSchema).array().optional(),
		resourceType: z.literal("EvidenceReport"),
		reviewer: z.lazy(getContactDetailSchema).array().optional(),
		section: z.lazy(getEvidenceReport_SectionSchema).array().optional(),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getEvidenceReport_SubjectSchema),
		type: z.lazy(getCodeableConceptSchema).optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
	},
)
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const citeAs_x_Present = ["citeAsMarkdown", "citeAsReference"].filter(
			(field) => record[field] !== undefined,
		);
		if (citeAs_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of citeAsMarkdown, citeAsReference may be present for citeAs[x]",
				path: [citeAs_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.citeAsReference,
			"citeAsReference",
			["http://hl7.org/fhir/StructureDefinition/Citation"],
			["Citation"],
			ctx,
		);
	});

export const EvidenceReportSchema =
	EvidenceReportSchemaInternal as z.ZodType<EvidenceReport>;
