// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { Citation_CitedArtifact } from "./Citation_CitedArtifact";
import { Citation_CitedArtifactSchemaInternal } from "./Citation_CitedArtifact";
import type { Citation_Classification } from "./Citation_Classification";
import { Citation_ClassificationSchemaInternal } from "./Citation_Classification";
import type { Citation_StatusDate } from "./Citation_StatusDate";
import { Citation_StatusDateSchemaInternal } from "./Citation_StatusDate";
import type { Citation_Summary } from "./Citation_Summary";
import { Citation_SummarySchemaInternal } from "./Citation_Summary";

/** The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources. */
export interface Citation extends DomainResource {
	/** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** Who authored or created the citation record. */
	author?: Array<ContactDetail>;
	/** The article or artifact being described. */
	citedArtifact?: Citation_CitedArtifact;
	/** The assignment to an organizing scheme. */
	classification?: Array<Citation_Classification>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** Use and/or publishing restrictions for the citation record, not for the cited artifact. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
	copyrightLabel?: string;
	/** Extensions for copyrightLabel */
	_copyrightLabel?: Element;
	/** The status of the citation record. */
	currentState?: Array<CodeableConcept>;
	/** The date (and optionally time) when the citation record was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the citation record changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the citation from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Who edited or revised the citation record. */
	editor?: Array<ContactDetail>;
	/** The period during which the citation record content was or is planned to be in active use. */
	effectivePeriod?: Period;
	/** Who endorsed the citation record. */
	endorser?: Array<ContactDetail>;
	/** A Boolean value to indicate that this citation record is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A formal identifier that is used to identify this citation record when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the citation record is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** A natural language name identifying the citation record. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Used for general notes and annotations not coded elsewhere. */
	note?: Array<Annotation>;
	/** The name of the organization or individual that published the citation record. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this citation is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** Artifact related to the citation record. */
	relatedArtifact?: Array<RelatedArtifact>;
	/** This is a Citation resource. */
	resourceType: "Citation";
	/** Who reviewed the citation record. */
	reviewer?: Array<ContactDetail>;
	/** The status of this summary. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The state or status of the citation record paired with an effective date or period for that state. */
	statusDate?: Array<Citation_StatusDate>;
	/** A human-readable display of key concepts to represent the citation. */
	summary?: Array<Citation_Summary>;
	/** A short, descriptive, user-friendly title for the citation record. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** An absolute URI that is used to identify this citation record when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this summary is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the summary is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate citation record instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the citation record when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the citation record author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
	/** Indicates the mechanism used to compare versions to determine which is more current. */
	versionAlgorithmCoding?: Coding;
	/** Indicates the mechanism used to compare versions to determine which is more current. */
	versionAlgorithmString?: string;
	/** Extensions for versionAlgorithmString */
	_versionAlgorithmString?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCitation_CitedArtifactSchema = (): z.ZodType<Citation_CitedArtifact> =>
	Citation_CitedArtifactSchemaInternal as z.ZodType<Citation_CitedArtifact>;
const getCitation_ClassificationSchema =
	(): z.ZodType<Citation_Classification> =>
		Citation_ClassificationSchemaInternal as z.ZodType<Citation_Classification>;
const getCitation_StatusDateSchema = (): z.ZodType<Citation_StatusDate> =>
	Citation_StatusDateSchemaInternal as z.ZodType<Citation_StatusDate>;
const getCitation_SummarySchema = (): z.ZodType<Citation_Summary> =>
	Citation_SummarySchemaInternal as z.ZodType<Citation_Summary>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const CitationSchemaInternal = DomainResourceSchemaInternal.extend({
	approvalDate: fhirDate().optional(),
	_approvalDate: z.lazy(getElementSchema).optional(),
	author: z.lazy(getContactDetailSchema).array().optional(),
	citedArtifact: z.lazy(getCitation_CitedArtifactSchema).optional(),
	classification: z.lazy(getCitation_ClassificationSchema).array().optional(),
	contact: z.lazy(getContactDetailSchema).array().optional(),
	copyright: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_copyright: z.lazy(getElementSchema).optional(),
	copyrightLabel: fhirString().optional(),
	_copyrightLabel: z.lazy(getElementSchema).optional(),
	currentState: z.lazy(getCodeableConceptSchema).array().optional(),
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	description: z
		.string()
		.regex(/^[\s\S]+$/)
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
	note: z.lazy(getAnnotationSchema).array().optional(),
	publisher: fhirString().optional(),
	_publisher: z.lazy(getElementSchema).optional(),
	purpose: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_purpose: z.lazy(getElementSchema).optional(),
	relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
	resourceType: z.literal("Citation"),
	reviewer: z.lazy(getContactDetailSchema).array().optional(),
	status: z.enum(["active", "draft", "retired", "unknown"]),
	_status: z.lazy(getElementSchema).optional(),
	statusDate: z.lazy(getCitation_StatusDateSchema).array().optional(),
	summary: z.lazy(getCitation_SummarySchema).array().optional(),
	title: fhirString().optional(),
	_title: z.lazy(getElementSchema).optional(),
	url: fhirUri().optional(),
	_url: z.lazy(getElementSchema).optional(),
	useContext: z.lazy(getUsageContextSchema).array().optional(),
	version: fhirString().optional(),
	_version: z.lazy(getElementSchema).optional(),
	versionAlgorithmCoding: z.lazy(getCodingSchema).optional(),
	versionAlgorithmString: fhirString().optional(),
	_versionAlgorithmString: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const versionAlgorithm_x_Present = [
			"versionAlgorithmCoding",
			"versionAlgorithmString",
		].filter((field) => record[field] !== undefined);
		if (versionAlgorithm_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of versionAlgorithmCoding, versionAlgorithmString may be present for versionAlgorithm[x]",
				path: [versionAlgorithm_x_Present[0]],
			});
		}
	});

export const CitationSchema = CitationSchemaInternal as z.ZodType<Citation>;
