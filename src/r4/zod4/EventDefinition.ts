// Profile: http://hl7.org/fhir/StructureDefinition/EventDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
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
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { RelatedArtifact } from "./RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "./RelatedArtifact";
import type { TriggerDefinition } from "./TriggerDefinition";
import { TriggerDefinitionSchemaInternal } from "./TriggerDefinition";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** The EventDefinition resource provides a reusable description of when a particular event can occur. */
export interface EventDefinition extends DomainResource {
	/** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** An individiual or organization primarily involved in the creation and maintenance of the content. */
	author?: Array<ContactDetail>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the event definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the event definition. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The date  (and optionally time) when the event definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the event definition changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the event definition from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** An individual or organization primarily responsible for internal coherence of the content. */
	editor?: Array<ContactDetail>;
	/** The period during which the event definition content was or is planned to be in active use. */
	effectivePeriod?: Period;
	/** An individual or organization responsible for officially endorsing the content for use in some setting. */
	endorser?: Array<ContactDetail>;
	/** A Boolean value to indicate that this event definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A formal identifier that is used to identify this event definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the event definition is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** A natural language name identifying the event definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The name of the organization or individual that published the event definition. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this event definition is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** Related resources such as additional documentation, justification, or bibliographic references. */
	relatedArtifact?: Array<RelatedArtifact>;
	/** This is a EventDefinition resource. */
	resourceType: "EventDefinition";
	/** An individual or organization primarily responsible for review of some aspect of the content. */
	reviewer?: Array<ContactDetail>;
	/** The status of this event definition. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A code or group definition that describes the intended subject of the event definition. */
	subjectCodeableConcept?: CodeableConcept;
	/** A code or group definition that describes the intended subject of the event definition. */
	subjectReference?: Reference;
	/** An explanatory or alternate title for the event definition giving additional information about its content. */
	subtitle?: string;
	/** Extensions for subtitle */
	_subtitle?: Element;
	/** A short, descriptive, user-friendly title for the event definition. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** Descriptive topics related to the module. Topics provide a high-level categorization of the module that can be useful for filtering and searching. */
	topic?: Array<CodeableConcept>;
	/** The trigger element defines when the event occurs. If more than one trigger condition is specified, the event fires whenever any one of the trigger conditions is met. */
	trigger: Array<TriggerDefinition>;
	/** An absolute URI that is used to identify this event definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this event definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the event definition is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** A detailed description of how the event definition is used from a clinical perspective. */
	usage?: string;
	/** Extensions for usage */
	_usage?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate event definition instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the event definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the event definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getTriggerDefinitionSchema = (): z.ZodType<TriggerDefinition> =>
	TriggerDefinitionSchemaInternal as z.ZodType<TriggerDefinition>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const EventDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		approvalDate: fhirDate().optional(),
		_approvalDate: z.lazy(getElementSchema).optional(),
		author: z.lazy(getContactDetailSchema).array().optional(),
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
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		lastReviewDate: fhirDate().optional(),
		_lastReviewDate: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		relatedArtifact: z.lazy(getRelatedArtifactSchema).array().optional(),
		resourceType: z.literal("EventDefinition"),
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
		trigger: z.lazy(getTriggerDefinitionSchema).array(),
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

export const EventDefinitionSchema =
	EventDefinitionSchemaInternal as z.ZodType<EventDefinition>;
