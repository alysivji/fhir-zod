// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceVariable
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T02:24:57.598Z

import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
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
import type { EvidenceVariable_Characteristic } from "./EvidenceVariable_Characteristic";
import { EvidenceVariable_CharacteristicSchemaInternal } from "./EvidenceVariable_Characteristic";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** The EvidenceVariable resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about. */
export interface EvidenceVariable extends DomainResource {
	/** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** An individiual or organization primarily involved in the creation and maintenance of the content. */
	author?: Array<ContactDetail>;
	/** A characteristic that defines the members of the evidence element. Multiple characteristics are applied with "and" semantics. */
	characteristic: Array<EvidenceVariable_Characteristic>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the evidence variable and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the evidence variable. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The date  (and optionally time) when the evidence variable was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the evidence variable changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the evidence variable from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** An individual or organization primarily responsible for internal coherence of the content. */
	editor?: Array<ContactDetail>;
	/** The period during which the evidence variable content was or is planned to be in active use. */
	effectivePeriod?: Period;
	/** An individual or organization responsible for officially endorsing the content for use in some setting. */
	endorser?: Array<ContactDetail>;
	/** A formal identifier that is used to identify this evidence variable when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the evidence variable is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** A natural language name identifying the evidence variable. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** A human-readable string to clarify or explain concepts about the resource. */
	note?: Array<Annotation>;
	/** The name of the organization or individual that published the evidence variable. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Related artifacts such as additional documentation, justification, or bibliographic references. */
	relatedArtifact?: Array<RelatedArtifact>;
	/** This is a EvidenceVariable resource. */
	resourceType: "EvidenceVariable";
	/** An individual or organization primarily responsible for review of some aspect of the content. */
	reviewer?: Array<ContactDetail>;
	/** The short title provides an alternate title for use in informal descriptive contexts where the full, formal title is not necessary. */
	shortTitle?: string;
	/** Extensions for shortTitle */
	_shortTitle?: Element;
	/** The status of this evidence variable. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** An explanatory or alternate title for the EvidenceVariable giving additional information about its content. */
	subtitle?: string;
	/** Extensions for subtitle */
	_subtitle?: Element;
	/** A short, descriptive, user-friendly title for the evidence variable. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** Descriptive topics related to the content of the EvidenceVariable. Topics provide a high-level categorization grouping types of EvidenceVariables that can be useful for filtering and searching. */
	topic?: Array<CodeableConcept>;
	/** The type of evidence element, a population, an exposure, or an outcome. */
	type?: "continuous" | "descriptive" | "dichotomous";
	/** Extensions for type */
	_type?: Element;
	/** An absolute URI that is used to identify this evidence variable when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this evidence variable is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the evidence variable is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate evidence variable instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the evidence variable when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the evidence variable author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getEvidenceVariable_CharacteristicSchema =
	(): z.ZodType<EvidenceVariable_Characteristic> =>
		EvidenceVariable_CharacteristicSchemaInternal as z.ZodType<EvidenceVariable_Characteristic>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const EvidenceVariableSchemaInternal =
	DomainResourceSchemaInternal.extend({
		approvalDate: fhirDate().optional(),
		_approvalDate: z.lazy(getElementSchema).optional(),
		author: z.lazy(getContactDetailSchema).array().optional(),
		characteristic: z.lazy(getEvidenceVariable_CharacteristicSchema).array(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		copyright: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_copyright: z.lazy(getElementSchema).optional(),
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
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		lastReviewDate: fhirDate().optional(),
		_lastReviewDate: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
		resourceType: z.literal("EvidenceVariable"),
		reviewer: z.lazy(getContactDetailSchema).array().optional(),
		shortTitle: fhirString().optional(),
		_shortTitle: z.lazy(getElementSchema).optional(),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		subtitle: fhirString().optional(),
		_subtitle: z.lazy(getElementSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		topic: z.lazy(getCodeableConceptSchema).array().optional(),
		type: z.enum(["continuous", "descriptive", "dichotomous"]).optional(),
		_type: z.lazy(getElementSchema).optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const EvidenceVariableSchema =
	EvidenceVariableSchemaInternal as z.ZodType<EvidenceVariable>;
