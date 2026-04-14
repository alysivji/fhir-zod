// Profile: http://hl7.org/fhir/StructureDefinition/StructureDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import {
	fhirCanonical,
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
import type { StructureDefinition_Context } from "./StructureDefinition_Context";
import { StructureDefinition_ContextSchemaInternal } from "./StructureDefinition_Context";
import type { StructureDefinition_Differential } from "./StructureDefinition_Differential";
import { StructureDefinition_DifferentialSchemaInternal } from "./StructureDefinition_Differential";
import type { StructureDefinition_Mapping } from "./StructureDefinition_Mapping";
import { StructureDefinition_MappingSchemaInternal } from "./StructureDefinition_Mapping";
import type { StructureDefinition_Snapshot } from "./StructureDefinition_Snapshot";
import { StructureDefinition_SnapshotSchemaInternal } from "./StructureDefinition_Snapshot";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface StructureDefinition extends DomainResource {
	/** Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems. */
	abstract: boolean;
	/** Extensions for abstract */
	_abstract?: Element;
	/** An absolute URI that is the base structure from which this type is derived, either by specialization or constraint. */
	baseDefinition?: string;
	/** Extensions for baseDefinition */
	_baseDefinition?: Element;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** Identifies the types of resource or data type elements to which the extension can be applied. */
	context?: Array<StructureDefinition_Context>;
	/** A set of rules as FHIRPath Invariants about when the extension can be used (e.g. co-occurrence variants for the extension). All the rules must be true. */
	contextInvariant?: Array<string>;
	/** Extensions for contextInvariant */
	_contextInvariant?: Array<Element>;
	/** A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The date  (and optionally time) when the structure definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** How the type relates to the baseDefinition. */
	derivation?: "constraint" | "specialization";
	/** Extensions for derivation */
	_derivation?: Element;
	/** A free text natural language description of the structure definition from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies. */
	differential?: StructureDefinition_Differential;
	/** A Boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.3.0 for this version. */
	fhirVersion?:
		| "0.0.80"
		| "0.0.81"
		| "0.0.82"
		| "0.01"
		| "0.05"
		| "0.06"
		| "0.11"
		| "0.4.0"
		| "0.5.0"
		| "1.0.0"
		| "1.0.1"
		| "1.0.2"
		| "1.1.0"
		| "1.4.0"
		| "1.6.0"
		| "1.8.0"
		| "3.0.0"
		| "3.0.1"
		| "3.0.2"
		| "3.3.0"
		| "3.5.0"
		| "4.0.0"
		| "4.0.1"
		| "4.1.0"
		| "4.3.0"
		| "4.3.0-cibuild"
		| "4.3.0-snapshot1";
	/** Extensions for fhirVersion */
	_fhirVersion?: Element;
	/** A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the structure definition is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates nby describing the use of this structure definition, or the content it describes. */
	keyword?: Array<Coding>;
	/** Defines the kind of structure that this definition is describing. */
	kind: "complex-type" | "logical" | "primitive-type" | "resource";
	/** Extensions for kind */
	_kind?: Element;
	/** An external specification that the content is mapped to. */
	mapping?: Array<StructureDefinition_Mapping>;
	/** A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** The name of the organization or individual that published the structure definition. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this structure definition is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** This is a StructureDefinition resource. */
	resourceType: "StructureDefinition";
	/** A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition. */
	snapshot?: StructureDefinition_Snapshot;
	/** The status of this structure definition. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A short, descriptive, user-friendly title for the structure definition. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** The type this structure describes. If the derivation kind is 'specialization' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).  References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models. */
	type: string;
	/** Extensions for type */
	_type?: Element;
	/** An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this structure definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the structure definition is stored on different servers. */
	url: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate structure definition instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getStructureDefinition_ContextSchema =
	(): z.ZodType<StructureDefinition_Context> =>
		StructureDefinition_ContextSchemaInternal as z.ZodType<StructureDefinition_Context>;
const getStructureDefinition_DifferentialSchema =
	(): z.ZodType<StructureDefinition_Differential> =>
		StructureDefinition_DifferentialSchemaInternal as z.ZodType<StructureDefinition_Differential>;
const getStructureDefinition_MappingSchema =
	(): z.ZodType<StructureDefinition_Mapping> =>
		StructureDefinition_MappingSchemaInternal as z.ZodType<StructureDefinition_Mapping>;
const getStructureDefinition_SnapshotSchema =
	(): z.ZodType<StructureDefinition_Snapshot> =>
		StructureDefinition_SnapshotSchemaInternal as z.ZodType<StructureDefinition_Snapshot>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const StructureDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		abstract: z.boolean(),
		_abstract: z.lazy(getElementSchema).optional(),
		baseDefinition: fhirCanonical().optional(),
		_baseDefinition: z.lazy(getElementSchema).optional(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		context: z.lazy(getStructureDefinition_ContextSchema).array().optional(),
		contextInvariant: fhirString().array().optional(),
		_contextInvariant: z.lazy(getElementSchema).array().optional(),
		copyright: z.string().optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		derivation: z.enum(["constraint", "specialization"]).optional(),
		_derivation: z.lazy(getElementSchema).optional(),
		description: z.string().optional(),
		_description: z.lazy(getElementSchema).optional(),
		differential: z.lazy(getStructureDefinition_DifferentialSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		fhirVersion: z
			.enum([
				"0.0.80",
				"0.0.81",
				"0.0.82",
				"0.01",
				"0.05",
				"0.06",
				"0.11",
				"0.4.0",
				"0.5.0",
				"1.0.0",
				"1.0.1",
				"1.0.2",
				"1.1.0",
				"1.4.0",
				"1.6.0",
				"1.8.0",
				"3.0.0",
				"3.0.1",
				"3.0.2",
				"3.3.0",
				"3.5.0",
				"4.0.0",
				"4.0.1",
				"4.1.0",
				"4.3.0",
				"4.3.0-cibuild",
				"4.3.0-snapshot1",
			])
			.optional(),
		_fhirVersion: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		keyword: z.lazy(getCodingSchema).array().optional(),
		kind: z.enum(["complex-type", "logical", "primitive-type", "resource"]),
		_kind: z.lazy(getElementSchema).optional(),
		mapping: z.lazy(getStructureDefinition_MappingSchema).array().optional(),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z.string().optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("StructureDefinition"),
		snapshot: z.lazy(getStructureDefinition_SnapshotSchema).optional(),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		type: fhirUri(),
		_type: z.lazy(getElementSchema).optional(),
		url: fhirUri(),
		_url: z.lazy(getElementSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const StructureDefinitionSchema =
	StructureDefinitionSchemaInternal as z.ZodType<StructureDefinition>;
