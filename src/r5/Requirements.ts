// Profile: http://hl7.org/fhir/StructureDefinition/Requirements
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
	fhirUri,
	fhirUrl,
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
import type { Requirements_Statement } from "./Requirements_Statement";
import { Requirements_StatementSchemaInternal } from "./Requirements_Statement";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** The Requirements resource is used to describe an actor - a human or an application that plays a role in data exchange, and that may have obligations associated with the role the actor plays. */
export interface Requirements extends DomainResource {
	/** An actor these requirements are in regard to. */
	actor?: Array<string>;
	/** Extensions for actor */
	_actor?: Array<Element>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the Requirements and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the Requirements. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
	copyrightLabel?: string;
	/** Extensions for copyrightLabel */
	_copyrightLabel?: Element;
	/** The date  (and optionally time) when the Requirements was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the Requirements changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Another set of Requirements that this set of Requirements builds on and updates. */
	derivedFrom?: Array<string>;
	/** Extensions for derivedFrom */
	_derivedFrom?: Array<Element>;
	/** A free text natural language description of the requirements. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A Boolean value to indicate that this Requirements is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A formal identifier that is used to identify this Requirements when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the Requirements is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** A natural language name identifying the Requirements. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The name of the organization or individual responsible for the release and ongoing maintenance of the Requirements. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this Requirements is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** A reference to another artifact that created this set of requirements. This could be a Profile, etc., or external regulation, or business requirements expressed elsewhere. */
	reference?: Array<string>;
	/** Extensions for reference */
	_reference?: Array<Element>;
	/** This is a Requirements resource. */
	resourceType: "Requirements";
	/** The actual statement of requirement, in markdown format. */
	statement?: Array<Requirements_Statement>;
	/** The status of this Requirements. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A short, descriptive, user-friendly title for the Requirements. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** An absolute URI that is used to identify this Requirements when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this Requirements is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the Requirements is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate Requirements instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the Requirements when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the Requirements author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getRequirements_StatementSchema = (): z.ZodType<Requirements_Statement> =>
	Requirements_StatementSchemaInternal as z.ZodType<Requirements_Statement>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const RequirementsSchemaInternal = DomainResourceSchemaInternal.extend({
	actor: fhirCanonical().array().optional(),
	_actor: z.lazy(getElementSchema).array().optional(),
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
	experimental: z.boolean().optional(),
	_experimental: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	publisher: fhirString().optional(),
	_publisher: z.lazy(getElementSchema).optional(),
	purpose: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_purpose: z.lazy(getElementSchema).optional(),
	reference: fhirUrl().array().optional(),
	_reference: z.lazy(getElementSchema).array().optional(),
	resourceType: z.literal("Requirements"),
	statement: z.lazy(getRequirements_StatementSchema).array().optional(),
	status: z.enum(["active", "draft", "retired", "unknown"]),
	_status: z.lazy(getElementSchema).optional(),
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

export const RequirementsSchema =
	RequirementsSchemaInternal as z.ZodType<Requirements>;
