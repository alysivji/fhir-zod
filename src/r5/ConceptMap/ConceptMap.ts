// Profile: http://hl7.org/fhir/StructureDefinition/ConceptMap
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives";
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
import type { ConceptMap_AdditionalAttribute } from "./ConceptMap_AdditionalAttribute";
import { ConceptMap_AdditionalAttributeSchemaInternal } from "./ConceptMap_AdditionalAttribute";
import type { ConceptMap_Group } from "./ConceptMap_Group";
import { ConceptMap_GroupSchemaInternal } from "./ConceptMap_Group";
import type { ConceptMap_Property } from "./ConceptMap_Property";
import { ConceptMap_PropertySchemaInternal } from "./ConceptMap_Property";

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMap extends DomainResource {
	/** An additionalAttribute defines an additional data element found in the source or target data model where the data will come from or be mapped to. Some mappings are based on data in addition to the source data element, where codes in multiple fields are combined to a single field (or vice versa). */
	additionalAttribute?: Array<ConceptMap_AdditionalAttribute>;
	/** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** An individiual or organization primarily involved in the creation and maintenance of the ConceptMap. */
	author?: Array<ContactDetail>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the concept map and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the concept map. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
	copyrightLabel?: string;
	/** Extensions for copyrightLabel */
	_copyrightLabel?: Element;
	/** The date  (and optionally time) when the concept map was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the concept map changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the concept map from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** An individual or organization primarily responsible for internal coherence of the ConceptMap. */
	editor?: Array<ContactDetail>;
	/** The period during which the ConceptMap content was or is planned to be in active use. */
	effectivePeriod?: Period;
	/** An individual or organization asserted by the publisher to be responsible for officially endorsing the ConceptMap for use in some setting. */
	endorser?: Array<ContactDetail>;
	/** A Boolean value to indicate that this concept map is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A group of mappings that all have the same source and target system. */
	group?: Array<ConceptMap_Group>;
	/** A formal identifier that is used to identify this concept map when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the concept map is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** A natural language name identifying the concept map. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** A property defines a slot through which additional information can be provided about a map from source -> target. */
	property?: Array<ConceptMap_Property>;
	/** The name of the organization or individual responsible for the release and ongoing maintenance of the concept map. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this concept map is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** Related artifacts such as additional documentation, justification, dependencies, bibliographic references, and predecessor and successor artifacts. */
	relatedArtifact?: Array<RelatedArtifact>;
	/** This is a ConceptMap resource. */
	resourceType: "ConceptMap";
	/** An individual or organization asserted by the publisher to be primarily responsible for review of some aspect of the ConceptMap. */
	reviewer?: Array<ContactDetail>;
	/** Identifier for the source value set that contains the concepts that are being mapped and provides context for the mappings.  Limits the scope of the map to source codes (ConceptMap.group.element code or valueSet) that are members of this value set. */
	sourceScopeCanonical?: string;
	/** Extensions for sourceScopeCanonical */
	_sourceScopeCanonical?: Element;
	/** Identifier for the source value set that contains the concepts that are being mapped and provides context for the mappings.  Limits the scope of the map to source codes (ConceptMap.group.element code or valueSet) that are members of this value set. */
	sourceScopeUri?: string;
	/** Extensions for sourceScopeUri */
	_sourceScopeUri?: Element;
	/** The status of this concept map. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Identifier for the target value set that provides important context about how the mapping choices are made.  Limits the scope of the map to target codes (ConceptMap.group.element.target code or valueSet) that are members of this value set. */
	targetScopeCanonical?: string;
	/** Extensions for targetScopeCanonical */
	_targetScopeCanonical?: Element;
	/** Identifier for the target value set that provides important context about how the mapping choices are made.  Limits the scope of the map to target codes (ConceptMap.group.element.target code or valueSet) that are members of this value set. */
	targetScopeUri?: string;
	/** Extensions for targetScopeUri */
	_targetScopeUri?: Element;
	/** A short, descriptive, user-friendly title for the concept map. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** Descriptions related to the content of the ConceptMap. Topics provide a high-level categorization as well as keywords for the ConceptMap that can be useful for filtering and searching. */
	topic?: Array<CodeableConcept>;
	/** An absolute URI that is used to identify this concept map when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this concept map is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the concept map is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate concept map instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the concept map when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the concept map author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
	/** Indicates the mechanism used to compare versions to determine which ConceptMap is more current. */
	versionAlgorithmCoding?: Coding;
	/** Indicates the mechanism used to compare versions to determine which ConceptMap is more current. */
	versionAlgorithmString?: string;
	/** Extensions for versionAlgorithmString */
	_versionAlgorithmString?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getConceptMap_AdditionalAttributeSchema =
	(): z.ZodType<ConceptMap_AdditionalAttribute> =>
		ConceptMap_AdditionalAttributeSchemaInternal as z.ZodType<ConceptMap_AdditionalAttribute>;
const getConceptMap_GroupSchema = (): z.ZodType<ConceptMap_Group> =>
	ConceptMap_GroupSchemaInternal as z.ZodType<ConceptMap_Group>;
const getConceptMap_PropertySchema = (): z.ZodType<ConceptMap_Property> =>
	ConceptMap_PropertySchemaInternal as z.ZodType<ConceptMap_Property>;
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
export const ConceptMapSchemaInternal = DomainResourceSchemaInternal.extend({
	additionalAttribute: z
		.lazy(getConceptMap_AdditionalAttributeSchema)
		.array()
		.optional(),
	approvalDate: fhirDate().optional(),
	_approvalDate: z.lazy(getElementSchema).optional(),
	author: z.lazy(getContactDetailSchema).array().optional(),
	contact: z.lazy(getContactDetailSchema).array().optional(),
	copyright: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_copyright: z.lazy(getElementSchema).optional(),
	copyrightLabel: fhirString().optional(),
	_copyrightLabel: z.lazy(getElementSchema).optional(),
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
	group: z.lazy(getConceptMap_GroupSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
	lastReviewDate: fhirDate().optional(),
	_lastReviewDate: z.lazy(getElementSchema).optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	property: z.lazy(getConceptMap_PropertySchema).array().optional(),
	publisher: fhirString().optional(),
	_publisher: z.lazy(getElementSchema).optional(),
	purpose: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_purpose: z.lazy(getElementSchema).optional(),
	relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
	resourceType: z.literal("ConceptMap"),
	reviewer: z.lazy(getContactDetailSchema).array().optional(),
	sourceScopeCanonical: fhirCanonical().optional(),
	_sourceScopeCanonical: z.lazy(getElementSchema).optional(),
	sourceScopeUri: fhirUri().optional(),
	_sourceScopeUri: z.lazy(getElementSchema).optional(),
	status: z.enum(["active", "draft", "retired", "unknown"]),
	_status: z.lazy(getElementSchema).optional(),
	targetScopeCanonical: fhirCanonical().optional(),
	_targetScopeCanonical: z.lazy(getElementSchema).optional(),
	targetScopeUri: fhirUri().optional(),
	_targetScopeUri: z.lazy(getElementSchema).optional(),
	title: fhirString().optional(),
	_title: z.lazy(getElementSchema).optional(),
	topic: z.lazy(getCodeableConceptSchema).array().optional(),
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
		const sourceScope_x_Present = [
			"sourceScopeCanonical",
			"sourceScopeUri",
		].filter((field) => record[field] !== undefined);
		if (sourceScope_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of sourceScopeCanonical, sourceScopeUri may be present for sourceScope[x]",
				path: [sourceScope_x_Present[0]],
			});
		}
		const targetScope_x_Present = [
			"targetScopeCanonical",
			"targetScopeUri",
		].filter((field) => record[field] !== undefined);
		if (targetScope_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of targetScopeCanonical, targetScopeUri may be present for targetScope[x]",
				path: [targetScope_x_Present[0]],
			});
		}
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

export const ConceptMapSchema =
	ConceptMapSchemaInternal as z.ZodType<ConceptMap>;
