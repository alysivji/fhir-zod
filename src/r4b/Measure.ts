// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T02:24:59.228Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Measure_Group } from "./Measure_Group";
import { Measure_GroupSchemaInternal } from "./Measure_Group";
import type { Measure_SupplementalData } from "./Measure_SupplementalData";
import { Measure_SupplementalDataSchemaInternal } from "./Measure_SupplementalData";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** The Measure resource provides the definition of a quality measure. */
export interface Measure extends DomainResource {
	/** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** An individiual or organization primarily involved in the creation and maintenance of the content. */
	author?: Array<ContactDetail>;
	/** Provides a summary of relevant clinical guidelines or other clinical recommendations supporting the measure. */
	clinicalRecommendationStatement?: string;
	/** Extensions for clinicalRecommendationStatement */
	_clinicalRecommendationStatement?: Element;
	/** If this is a composite measure, the scoring method used to combine the component measures to determine the composite score. */
	compositeScoring?: CodeableConcept;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the measure and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the measure. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The date  (and optionally time) when the measure was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the measure changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Provides a description of an individual term used within the measure. */
	definition?: Array<string | null>;
	/** Extensions for definition */
	_definition?: Array<Element | null>;
	/** A free text natural language description of the measure from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Notices and disclaimers regarding the use of the measure or related to intellectual property (such as code systems) referenced by the measure. */
	disclaimer?: string;
	/** Extensions for disclaimer */
	_disclaimer?: Element;
	/** An individual or organization primarily responsible for internal coherence of the content. */
	editor?: Array<ContactDetail>;
	/** The period during which the measure content was or is planned to be in active use. */
	effectivePeriod?: Period;
	/** An individual or organization responsible for officially endorsing the content for use in some setting. */
	endorser?: Array<ContactDetail>;
	/** A Boolean value to indicate that this measure is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A group of population criteria for the measure. */
	group?: Array<Measure_Group>;
	/** Additional guidance for the measure including how it can be used in a clinical context, and the intent of the measure. */
	guidance?: string;
	/** Extensions for guidance */
	_guidance?: Element;
	/** A formal identifier that is used to identify this measure when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** Information on whether an increase or decrease in score is the preferred result (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is within a range). */
	improvementNotation?: CodeableConcept;
	/** A legal or geographic region in which the measure is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** A reference to a Library resource containing the formal logic used by the measure. */
	library?: Array<string | null>;
	/** Extensions for library */
	_library?: Array<Element | null>;
	/** A natural language name identifying the measure. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The name of the organization or individual that published the measure. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this measure is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** Describes how to combine the information calculated, based on logic in each of several populations, into one summarized result. */
	rateAggregation?: string;
	/** Extensions for rateAggregation */
	_rateAggregation?: Element;
	/** Provides a succinct statement of the need for the measure. Usually includes statements pertaining to importance criterion: impact, gap in care, and evidence. */
	rationale?: string;
	/** Extensions for rationale */
	_rationale?: Element;
	/** Related artifacts such as additional documentation, justification, or bibliographic references. */
	relatedArtifact?: Array<RelatedArtifact>;
	/** This is a Measure resource. */
	resourceType: "Measure";
	/** An individual or organization primarily responsible for review of some aspect of the content. */
	reviewer?: Array<ContactDetail>;
	/** A description of the risk adjustment factors that may impact the resulting score for the measure and how they may be accounted for when computing and reporting measure results. */
	riskAdjustment?: string;
	/** Extensions for riskAdjustment */
	_riskAdjustment?: Element;
	/** Indicates how the calculation is performed for the measure, including proportion, ratio, continuous-variable, and cohort. The value set is extensible, allowing additional measure scoring types to be represented. */
	scoring?: CodeableConcept;
	/** The status of this measure. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The intended subjects for the measure. If this element is not provided, a Patient subject is assumed, but the subject of the measure can be anything. */
	subjectCodeableConcept?: CodeableConcept;
	/** The intended subjects for the measure. If this element is not provided, a Patient subject is assumed, but the subject of the measure can be anything. */
	subjectReference?: Reference;
	/** An explanatory or alternate title for the measure giving additional information about its content. */
	subtitle?: string;
	/** Extensions for subtitle */
	_subtitle?: Element;
	/** The supplemental data criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library, or a valid FHIR Resource Path. */
	supplementalData?: Array<Measure_SupplementalData>;
	/** A short, descriptive, user-friendly title for the measure. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** Descriptive topics related to the content of the measure. Topics provide a high-level categorization grouping types of measures that can be useful for filtering and searching. */
	topic?: Array<CodeableConcept>;
	/** Indicates whether the measure is used to examine a process, an outcome over time, a patient-reported outcome, or a structure measure such as utilization. */
	type?: Array<CodeableConcept>;
	/** An absolute URI that is used to identify this measure when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this measure is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the measure is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** A detailed description, from a clinical perspective, of how the measure is used. */
	usage?: string;
	/** Extensions for usage */
	_usage?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate measure instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the measure when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the measure author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMeasure_GroupSchema = (): z.ZodType<Measure_Group> =>
	Measure_GroupSchemaInternal as z.ZodType<Measure_Group>;
const getMeasure_SupplementalDataSchema =
	(): z.ZodType<Measure_SupplementalData> =>
		Measure_SupplementalDataSchemaInternal as z.ZodType<Measure_SupplementalData>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const MeasureSchemaInternal = DomainResourceSchemaInternal.extend({
	approvalDate: fhirDate().optional(),
	_approvalDate: z.lazy(getElementSchema).optional(),
	author: z.lazy(getContactDetailSchema).array().optional(),
	clinicalRecommendationStatement: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_clinicalRecommendationStatement: z.lazy(getElementSchema).optional(),
	compositeScoring: z.lazy(getCodeableConceptSchema).optional(),
	contact: z.lazy(getContactDetailSchema).array().optional(),
	copyright: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_copyright: z.lazy(getElementSchema).optional(),
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	definition: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.nullable()
		.array()
		.optional(),
	_definition: z.lazy(getElementSchema).nullable().array().optional(),
	description: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_description: z.lazy(getElementSchema).optional(),
	disclaimer: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_disclaimer: z.lazy(getElementSchema).optional(),
	editor: z.lazy(getContactDetailSchema).array().optional(),
	effectivePeriod: z.lazy(getPeriodSchema).optional(),
	endorser: z.lazy(getContactDetailSchema).array().optional(),
	experimental: z.boolean().optional(),
	_experimental: z.lazy(getElementSchema).optional(),
	group: z.lazy(getMeasure_GroupSchema).array().optional(),
	guidance: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_guidance: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	improvementNotation: z.lazy(getCodeableConceptSchema).optional(),
	jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
	lastReviewDate: fhirDate().optional(),
	_lastReviewDate: z.lazy(getElementSchema).optional(),
	library: fhirCanonical().nullable().array().optional(),
	_library: z.lazy(getElementSchema).nullable().array().optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	publisher: fhirString().optional(),
	_publisher: z.lazy(getElementSchema).optional(),
	purpose: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_purpose: z.lazy(getElementSchema).optional(),
	rateAggregation: fhirString().optional(),
	_rateAggregation: z.lazy(getElementSchema).optional(),
	rationale: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_rationale: z.lazy(getElementSchema).optional(),
	relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
	resourceType: z.literal("Measure"),
	reviewer: z.lazy(getContactDetailSchema).array().optional(),
	riskAdjustment: fhirString().optional(),
	_riskAdjustment: z.lazy(getElementSchema).optional(),
	scoring: z.lazy(getCodeableConceptSchema).optional(),
	status: z.enum(["active", "draft", "retired", "unknown"]),
	_status: z.lazy(getElementSchema).optional(),
	subjectCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	subjectReference: z.lazy(getReferenceSchema).optional(),
	subtitle: fhirString().optional(),
	_subtitle: z.lazy(getElementSchema).optional(),
	supplementalData: z
		.lazy(getMeasure_SupplementalDataSchema)
		.array()
		.optional(),
	title: fhirString().optional(),
	_title: z.lazy(getElementSchema).optional(),
	topic: z.lazy(getCodeableConceptSchema).array().optional(),
	type: z.lazy(getCodeableConceptSchema).array().optional(),
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
		validatePrimitiveArrayPair(
			record.definition,
			record._definition,
			"definition",
			"_definition",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.library,
			record._library,
			"library",
			"_library",
			ctx,
		);
		validateReferenceTarget(
			record.subjectReference,
			"subjectReference",
			["http://hl7.org/fhir/StructureDefinition/Group"],
			["Group"],
			ctx,
		);
	});

export const MeasureSchema = MeasureSchemaInternal as z.ZodType<Measure>;
