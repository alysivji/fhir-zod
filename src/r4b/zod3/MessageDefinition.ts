// Profile: http://hl7.org/fhir/StructureDefinition/MessageDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod3";
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
import type { MessageDefinition_AllowedResponse } from "./MessageDefinition_AllowedResponse";
import { MessageDefinition_AllowedResponseSchemaInternal } from "./MessageDefinition_AllowedResponse";
import type { MessageDefinition_Focus } from "./MessageDefinition_Focus";
import { MessageDefinition_FocusSchemaInternal } from "./MessageDefinition_Focus";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted. */
export interface MessageDefinition extends DomainResource {
	/** Indicates what types of messages may be sent as an application-level response to this message. */
	allowedResponse?: Array<MessageDefinition_AllowedResponse>;
	/** The MessageDefinition that is the basis for the contents of this resource. */
	base?: string;
	/** Extensions for base */
	_base?: Element;
	/** The impact of the content of the message. */
	category?: "consequence" | "currency" | "notification";
	/** Extensions for category */
	_category?: Element;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the message definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the message definition. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The date  (and optionally time) when the message definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the message definition changes. */
	date: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the message definition from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Event code or link to the EventDefinition. */
	eventCoding?: Coding;
	/** Event code or link to the EventDefinition. */
	eventUri?: string;
	/** Extensions for eventUri */
	_eventUri?: Element;
	/** A Boolean value to indicate that this message definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** Identifies the resource (or resources) that are being addressed by the event.  For example, the Encounter for an admit message or two Account records for a merge. */
	focus?: Array<MessageDefinition_Focus>;
	/** Canonical reference to a GraphDefinition. If a URL is provided, it is the canonical reference to a [GraphDefinition](graphdefinition.html) that it controls what resources are to be added to the bundle when building the document. The GraphDefinition can also specify profiles that apply to the various resources. */
	graph?: Array<string | null>;
	/** Extensions for graph */
	_graph?: Array<Element | null>;
	/** A formal identifier that is used to identify this message definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the message definition is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** A natural language name identifying the message definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Identifies a protocol or workflow that this MessageDefinition represents a step in. */
	parent?: Array<string | null>;
	/** Extensions for parent */
	_parent?: Array<Element | null>;
	/** The name of the organization or individual that published the message definition. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this message definition is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** A MessageDefinition that is superseded by this definition. */
	replaces?: Array<string | null>;
	/** Extensions for replaces */
	_replaces?: Array<Element | null>;
	/** This is a MessageDefinition resource. */
	resourceType: "MessageDefinition";
	/** Declare at a message definition level whether a response is required or only upon error or success, or never. */
	responseRequired?: "always" | "never" | "on-error" | "on-success";
	/** Extensions for responseRequired */
	_responseRequired?: Element;
	/** The status of this message definition. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A short, descriptive, user-friendly title for the message definition. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** The business identifier that is used to reference the MessageDefinition and *is* expected to be consistent from server to server. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate message definition instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the message definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the message definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
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
const getMessageDefinition_AllowedResponseSchema =
	(): z.ZodType<MessageDefinition_AllowedResponse> =>
		MessageDefinition_AllowedResponseSchemaInternal as z.ZodType<MessageDefinition_AllowedResponse>;
const getMessageDefinition_FocusSchema =
	(): z.ZodType<MessageDefinition_Focus> =>
		MessageDefinition_FocusSchemaInternal as z.ZodType<MessageDefinition_Focus>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const MessageDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		allowedResponse: z
			.lazy(getMessageDefinition_AllowedResponseSchema)
			.array()
			.optional(),
		base: fhirCanonical().optional(),
		_base: z.lazy(getElementSchema).optional(),
		category: z.enum(["consequence", "currency", "notification"]).optional(),
		_category: z.lazy(getElementSchema).optional(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		copyright: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		date: fhirDateTime(),
		_date: z.lazy(getElementSchema).optional(),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		eventCoding: z.lazy(getCodingSchema).optional(),
		eventUri: fhirUri().optional(),
		_eventUri: z.lazy(getElementSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		focus: z.lazy(getMessageDefinition_FocusSchema).array().optional(),
		graph: fhirCanonical().nullable().array().optional(),
		_graph: z.lazy(getElementSchema).nullable().array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		parent: fhirCanonical().nullable().array().optional(),
		_parent: z.lazy(getElementSchema).nullable().array().optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		replaces: fhirCanonical().nullable().array().optional(),
		_replaces: z.lazy(getElementSchema).nullable().array().optional(),
		resourceType: z.literal("MessageDefinition"),
		responseRequired: z
			.enum(["always", "never", "on-error", "on-success"])
			.optional(),
		_responseRequired: z.lazy(getElementSchema).optional(),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const event_x_Present = ["eventCoding", "eventUri"].filter(
				(field) => record[field] !== undefined,
			);
			if (event_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: "One of eventCoding, eventUri must be present for event[x]",
					path: ["eventCoding"],
				});
			}
			if (event_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of eventCoding, eventUri may be present for event[x]",
					path: [event_x_Present[0]],
				});
			}
			validatePrimitiveArrayPair(
				record.graph,
				record._graph,
				"graph",
				"_graph",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.parent,
				record._parent,
				"parent",
				"_parent",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.replaces,
				record._replaces,
				"replaces",
				"_replaces",
				ctx,
			);
		});

export const MessageDefinitionSchema =
	MessageDefinitionSchemaInternal as z.ZodType<MessageDefinition>;
