// Profile: http://hl7.org/fhir/StructureDefinition/CodeSystem
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T02:24:57.598Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeSystem_Concept } from "./CodeSystem_Concept";
import { CodeSystem_ConceptSchemaInternal } from "./CodeSystem_Concept";
import type { CodeSystem_Filter } from "./CodeSystem_Filter";
import { CodeSystem_FilterSchemaInternal } from "./CodeSystem_Filter";
import type { CodeSystem_Property } from "./CodeSystem_Property";
import { CodeSystem_PropertySchemaInternal } from "./CodeSystem_Property";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface CodeSystem extends DomainResource {
	/** If code comparison is case sensitive when codes within this system are compared to each other. */
	caseSensitive?: boolean;
	/** Extensions for caseSensitive */
	_caseSensitive?: Element;
	/** The code system defines a compositional (post-coordination) grammar. */
	compositional?: boolean;
	/** Extensions for compositional */
	_compositional?: Element;
	/** Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meanings of the hierarchical relationships are. */
	concept?: Array<CodeSystem_Concept>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** The extent of the content of the code system (the concepts and codes it defines) are represented in this resource instance. */
	content: "complete" | "example" | "fragment" | "not-present" | "supplement";
	/** Extensions for content */
	_content?: Element;
	/** A copyright statement relating to the code system and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the code system. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The total number of concepts defined by the code system. Where the code system has a compositional grammar, the basis of this count is defined by the system steward. */
	count?: number;
	/** Extensions for count */
	_count?: Element;
	/** The date  (and optionally time) when the code system was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the code system changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the code system from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A Boolean value to indicate that this code system is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A filter that can be used in a value set compose statement when selecting concepts using a filter. */
	filter?: Array<CodeSystem_Filter>;
	/** The meaning of the hierarchy of concepts as represented in this resource. */
	hierarchyMeaning?: "classified-with" | "grouped-by" | "is-a" | "part-of";
	/** Extensions for hierarchyMeaning */
	_hierarchyMeaning?: Element;
	/** A formal identifier that is used to identify this code system when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the code system is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** A natural language name identifying the code system. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** A property defines an additional slot through which additional information can be provided about a concept. */
	property?: Array<CodeSystem_Property>;
	/** The name of the organization or individual that published the code system. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this code system is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** This is a CodeSystem resource. */
	resourceType: "CodeSystem";
	/** The date (and optionally time) when the code system resource was created or revised. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The canonical URL of the code system that this code system supplement is adding designations and properties to. */
	supplements?: string;
	/** Extensions for supplements */
	_supplements?: Element;
	/** A short, descriptive, user-friendly title for the code system. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** An absolute URI that is used to identify this code system when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this code system is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the code system is stored on different servers. This is used in [Coding](datatypes.html#Coding).system. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate code system instances. */
	useContext?: Array<UsageContext>;
	/** Canonical reference to the value set that contains the entire code system. */
	valueSet?: string;
	/** Extensions for valueSet */
	_valueSet?: Element;
	/** The identifier that is used to identify this version of the code system when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the code system author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. This is used in [Coding](datatypes.html#Coding).version. */
	version?: string;
	/** Extensions for version */
	_version?: Element;
	/** This flag is used to signify that the code system does not commit to concept permanence across versions. If true, a version must be specified when referencing this code system. */
	versionNeeded?: boolean;
	/** Extensions for versionNeeded */
	_versionNeeded?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeSystem_ConceptSchema = (): z.ZodType<CodeSystem_Concept> =>
	CodeSystem_ConceptSchemaInternal as z.ZodType<CodeSystem_Concept>;
const getCodeSystem_FilterSchema = (): z.ZodType<CodeSystem_Filter> =>
	CodeSystem_FilterSchemaInternal as z.ZodType<CodeSystem_Filter>;
const getCodeSystem_PropertySchema = (): z.ZodType<CodeSystem_Property> =>
	CodeSystem_PropertySchemaInternal as z.ZodType<CodeSystem_Property>;
const getContactDetailSchema = (): z.ZodType<ContactDetail> =>
	ContactDetailSchemaInternal as z.ZodType<ContactDetail>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const CodeSystemSchemaInternal = DomainResourceSchemaInternal.extend({
	caseSensitive: z.boolean().optional(),
	_caseSensitive: z.lazy(getElementSchema).optional(),
	compositional: z.boolean().optional(),
	_compositional: z.lazy(getElementSchema).optional(),
	concept: z.lazy(getCodeSystem_ConceptSchema).array().optional(),
	contact: z.lazy(getContactDetailSchema).array().optional(),
	content: z.enum([
		"complete",
		"example",
		"fragment",
		"not-present",
		"supplement",
	]),
	_content: z.lazy(getElementSchema).optional(),
	copyright: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_copyright: z.lazy(getElementSchema).optional(),
	count: z.number().int().nonnegative().optional(),
	_count: z.lazy(getElementSchema).optional(),
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	description: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_description: z.lazy(getElementSchema).optional(),
	experimental: z.boolean().optional(),
	_experimental: z.lazy(getElementSchema).optional(),
	filter: z.lazy(getCodeSystem_FilterSchema).array().optional(),
	hierarchyMeaning: z
		.enum(["classified-with", "grouped-by", "is-a", "part-of"])
		.optional(),
	_hierarchyMeaning: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	property: z.lazy(getCodeSystem_PropertySchema).array().optional(),
	publisher: fhirString().optional(),
	_publisher: z.lazy(getElementSchema).optional(),
	purpose: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_purpose: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("CodeSystem"),
	status: z.enum(["active", "draft", "retired", "unknown"]),
	_status: z.lazy(getElementSchema).optional(),
	supplements: fhirCanonical().optional(),
	_supplements: z.lazy(getElementSchema).optional(),
	title: fhirString().optional(),
	_title: z.lazy(getElementSchema).optional(),
	url: fhirUri().optional(),
	_url: z.lazy(getElementSchema).optional(),
	useContext: z.lazy(getUsageContextSchema).array().optional(),
	valueSet: fhirCanonical().optional(),
	_valueSet: z.lazy(getElementSchema).optional(),
	version: fhirString().optional(),
	_version: z.lazy(getElementSchema).optional(),
	versionNeeded: z.boolean().optional(),
	_versionNeeded: z.lazy(getElementSchema).optional(),
}).strict();

export const CodeSystemSchema =
	CodeSystemSchemaInternal as z.ZodType<CodeSystem>;
