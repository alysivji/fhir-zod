// Profile: http://hl7.org/fhir/StructureDefinition/ArtifactAssessment
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { ArtifactAssessment_Content } from "./ArtifactAssessment_Content";
import { ArtifactAssessment_ContentSchemaInternal } from "./ArtifactAssessment_Content";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** This Resource provides one or more comments, classifiers or ratings about a Resource and supports attribution and rights management metadata for the added content. */
export interface ArtifactAssessment extends DomainResource {
	/** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** A reference to a resource, canonical resource, or non-FHIR resource which the comment or assessment is about. */
	artifactCanonical?: string;
	/** Extensions for artifactCanonical */
	_artifactCanonical?: Element;
	/** A reference to a resource, canonical resource, or non-FHIR resource which the comment or assessment is about. */
	artifactReference?: Reference;
	/** A reference to a resource, canonical resource, or non-FHIR resource which the comment or assessment is about. */
	artifactUri?: string;
	/** Extensions for artifactUri */
	_artifactUri?: Element;
	/** Display of or reference to the bibliographic citation of the comment, classifier, or rating. */
	citeAsMarkdown?: string;
	/** Extensions for citeAsMarkdown */
	_citeAsMarkdown?: Element;
	/** Display of or reference to the bibliographic citation of the comment, classifier, or rating. */
	citeAsReference?: Reference;
	/** A component comment, classifier, or rating of the artifact. */
	content?: Array<ArtifactAssessment_Content>;
	/** A copyright statement relating to the artifact assessment and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the artifact assessment. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The date  (and optionally time) when the artifact assessment was published. The date must change when the disposition changes and it must change if the workflow status code changes. In addition, it should change when the substantive content of the artifact assessment changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Indicates the disposition of the responsible party to the comment or change request. */
	disposition?:
		| "not-persuasive"
		| "not-persuasive-with-modification"
		| "persuasive"
		| "persuasive-with-modification"
		| "unresolved";
	/** Extensions for disposition */
	_disposition?: Element;
	/** A formal identifier that is used to identify this artifact assessment when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** This is a ArtifactAssessment resource. */
	resourceType: "ArtifactAssessment";
	/** A short title for the assessment for use in displaying and selecting. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** Indicates the workflow status of the comment or change request. */
	workflowStatus?:
		| "applied"
		| "deferred"
		| "duplicate"
		| "entered-in-error"
		| "published"
		| "resolved-change-required"
		| "resolved-no-change"
		| "submitted"
		| "triaged"
		| "waiting-for-input";
	/** Extensions for workflowStatus */
	_workflowStatus?: Element;
}

const getArtifactAssessment_ContentSchema =
	(): z.ZodType<ArtifactAssessment_Content> =>
		ArtifactAssessment_ContentSchemaInternal as z.ZodType<ArtifactAssessment_Content>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ArtifactAssessmentSchemaInternal =
	DomainResourceSchemaInternal.extend({
		approvalDate: fhirDate().optional(),
		_approvalDate: z.lazy(getElementSchema).optional(),
		artifactCanonical: fhirCanonical().optional(),
		_artifactCanonical: z.lazy(getElementSchema).optional(),
		artifactReference: z.lazy(getReferenceSchema).optional(),
		artifactUri: fhirUri().optional(),
		_artifactUri: z.lazy(getElementSchema).optional(),
		citeAsMarkdown: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_citeAsMarkdown: z.lazy(getElementSchema).optional(),
		citeAsReference: z.lazy(getReferenceSchema).optional(),
		content: z.lazy(getArtifactAssessment_ContentSchema).array().optional(),
		copyright: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		disposition: z
			.enum([
				"not-persuasive",
				"not-persuasive-with-modification",
				"persuasive",
				"persuasive-with-modification",
				"unresolved",
			])
			.optional(),
		_disposition: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		lastReviewDate: fhirDate().optional(),
		_lastReviewDate: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("ArtifactAssessment"),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		workflowStatus: z
			.enum([
				"applied",
				"deferred",
				"duplicate",
				"entered-in-error",
				"published",
				"resolved-change-required",
				"resolved-no-change",
				"submitted",
				"triaged",
				"waiting-for-input",
			])
			.optional(),
		_workflowStatus: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const artifact_x_Present = [
				"artifactCanonical",
				"artifactReference",
				"artifactUri",
			].filter((field) => record[field] !== undefined);
			if (artifact_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of artifactCanonical, artifactReference, artifactUri must be present for artifact[x]",
					path: ["artifactCanonical"],
				});
			}
			if (artifact_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of artifactCanonical, artifactReference, artifactUri may be present for artifact[x]",
					path: [artifact_x_Present[0]],
				});
			}
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
				record.artifactReference,
				"artifactReference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.citeAsReference,
				"citeAsReference",
				["http://hl7.org/fhir/StructureDefinition/Citation"],
				["Citation"],
				ctx,
			);
		});

export const ArtifactAssessmentSchema =
	ArtifactAssessmentSchemaInternal as z.ZodType<ArtifactAssessment>;
