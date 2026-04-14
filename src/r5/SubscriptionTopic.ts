// Profile: http://hl7.org/fhir/StructureDefinition/SubscriptionTopic
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
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
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
import type { SubscriptionTopic_CanFilterBy } from "./SubscriptionTopic_CanFilterBy";
import { SubscriptionTopic_CanFilterBySchemaInternal } from "./SubscriptionTopic_CanFilterBy";
import type { SubscriptionTopic_EventTrigger } from "./SubscriptionTopic_EventTrigger";
import { SubscriptionTopic_EventTriggerSchemaInternal } from "./SubscriptionTopic_EventTrigger";
import type { SubscriptionTopic_NotificationShape } from "./SubscriptionTopic_NotificationShape";
import { SubscriptionTopic_NotificationShapeSchemaInternal } from "./SubscriptionTopic_NotificationShape";
import type { SubscriptionTopic_ResourceTrigger } from "./SubscriptionTopic_ResourceTrigger";
import { SubscriptionTopic_ResourceTriggerSchemaInternal } from "./SubscriptionTopic_ResourceTrigger";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic. */
export interface SubscriptionTopic extends DomainResource {
	/** The date on which the asset content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** List of properties by which Subscriptions on the SubscriptionTopic can be filtered. May be defined Search Parameters (e.g., Encounter.patient) or parameters defined within this SubscriptionTopic context (e.g., hub.event). */
	canFilterBy?: Array<SubscriptionTopic_CanFilterBy>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the SubscriptionTopic and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the SubscriptionTopic. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
	copyrightLabel?: string;
	/** Extensions for copyrightLabel */
	_copyrightLabel?: Element;
	/** The date (and optionally time) when the subscription topic was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the subscription topic changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The canonical URL pointing to another FHIR-defined SubscriptionTopic that is adhered to in whole or in part by this SubscriptionTopic. */
	derivedFrom?: Array<string>;
	/** Extensions for derivedFrom */
	_derivedFrom?: Array<Element>;
	/** A free text natural language description of the Topic from the consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The period during which the SubscriptionTopic content was or is planned to be effective. */
	effectivePeriod?: Period;
	/** Event definition which can be used to trigger the SubscriptionTopic. */
	eventTrigger?: Array<SubscriptionTopic_EventTrigger>;
	/** A flag to indicate that this TopSubscriptionTopicic is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** Business identifiers assigned to this subscription topic by the performer and/or other systems.  These identifiers remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** A jurisdiction in which the Topic is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The date on which the asset content was last reviewed. Review happens periodically after that, but doesn't change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** A natural language name identifying the subscription topic This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** List of properties to describe the shape (e.g., resources) included in notifications from this Subscription Topic. */
	notificationShape?: Array<SubscriptionTopic_NotificationShape>;
	/** Helps establish the "authority/credibility" of the SubscriptionTopic.  May also allow for contact. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explains why this Topic is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** A definition of a resource-based event that triggers a notification based on the SubscriptionTopic. The criteria may be just a human readable description and/or a full FHIR search string or FHIRPath expression. Multiple triggers are considered OR joined (e.g., a resource update matching ANY of the definitions will trigger a notification). */
	resourceTrigger?: Array<SubscriptionTopic_ResourceTrigger>;
	/** This is a SubscriptionTopic resource. */
	resourceType: "SubscriptionTopic";
	/** The current state of the SubscriptionTopic. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A short, descriptive, user-friendly title for the subscription topic.  For example, "admission". */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** An absolute URI that is used to identify this subscription topic when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this subscription topic is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the subscription topic is stored on different servers. */
	url: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of code system definitions. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the subscription topic when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Topic author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions are orderable. */
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
const getSubscriptionTopic_CanFilterBySchema =
	(): z.ZodType<SubscriptionTopic_CanFilterBy> =>
		SubscriptionTopic_CanFilterBySchemaInternal as z.ZodType<SubscriptionTopic_CanFilterBy>;
const getSubscriptionTopic_EventTriggerSchema =
	(): z.ZodType<SubscriptionTopic_EventTrigger> =>
		SubscriptionTopic_EventTriggerSchemaInternal as z.ZodType<SubscriptionTopic_EventTrigger>;
const getSubscriptionTopic_NotificationShapeSchema =
	(): z.ZodType<SubscriptionTopic_NotificationShape> =>
		SubscriptionTopic_NotificationShapeSchemaInternal as z.ZodType<SubscriptionTopic_NotificationShape>;
const getSubscriptionTopic_ResourceTriggerSchema =
	(): z.ZodType<SubscriptionTopic_ResourceTrigger> =>
		SubscriptionTopic_ResourceTriggerSchemaInternal as z.ZodType<SubscriptionTopic_ResourceTrigger>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const SubscriptionTopicSchemaInternal =
	DomainResourceSchemaInternal.extend({
		approvalDate: fhirDate().optional(),
		_approvalDate: z.lazy(getElementSchema).optional(),
		canFilterBy: z
			.lazy(getSubscriptionTopic_CanFilterBySchema)
			.array()
			.optional(),
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
		derivedFrom: fhirCanonical().array().optional(),
		_derivedFrom: z.lazy(getElementSchema).array().optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		effectivePeriod: z.lazy(getPeriodSchema).optional(),
		eventTrigger: z
			.lazy(getSubscriptionTopic_EventTriggerSchema)
			.array()
			.optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		lastReviewDate: fhirDate().optional(),
		_lastReviewDate: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		notificationShape: z
			.lazy(getSubscriptionTopic_NotificationShapeSchema)
			.array()
			.optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		resourceTrigger: z
			.lazy(getSubscriptionTopic_ResourceTriggerSchema)
			.array()
			.optional(),
		resourceType: z.literal("SubscriptionTopic"),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		url: fhirUri(),
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

export const SubscriptionTopicSchema =
	SubscriptionTopicSchemaInternal as z.ZodType<SubscriptionTopic>;
