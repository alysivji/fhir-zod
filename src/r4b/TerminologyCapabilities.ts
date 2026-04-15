// Profile: http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T02:24:59.228Z

import * as z from "zod";
import { fhirDateTime, fhirString, fhirUri } from "../shared/fhir-primitives";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { TerminologyCapabilities_Closure } from "./TerminologyCapabilities_Closure";
import { TerminologyCapabilities_ClosureSchemaInternal } from "./TerminologyCapabilities_Closure";
import type { TerminologyCapabilities_CodeSystem } from "./TerminologyCapabilities_CodeSystem";
import { TerminologyCapabilities_CodeSystemSchemaInternal } from "./TerminologyCapabilities_CodeSystem";
import type { TerminologyCapabilities_Expansion } from "./TerminologyCapabilities_Expansion";
import { TerminologyCapabilities_ExpansionSchemaInternal } from "./TerminologyCapabilities_Expansion";
import type { TerminologyCapabilities_Implementation } from "./TerminologyCapabilities_Implementation";
import { TerminologyCapabilities_ImplementationSchemaInternal } from "./TerminologyCapabilities_Implementation";
import type { TerminologyCapabilities_Software } from "./TerminologyCapabilities_Software";
import { TerminologyCapabilities_SoftwareSchemaInternal } from "./TerminologyCapabilities_Software";
import type { TerminologyCapabilities_Translation } from "./TerminologyCapabilities_Translation";
import { TerminologyCapabilities_TranslationSchemaInternal } from "./TerminologyCapabilities_Translation";
import type { TerminologyCapabilities_ValidateCode } from "./TerminologyCapabilities_ValidateCode";
import { TerminologyCapabilities_ValidateCodeSchemaInternal } from "./TerminologyCapabilities_ValidateCode";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface TerminologyCapabilities extends DomainResource {
	/** Whether the $closure operation is supported. */
	closure?: TerminologyCapabilities_Closure;
	/** The degree to which the server supports the code search parameter on ValueSet, if it is supported. */
	codeSearch?: "all" | "explicit";
	/** Extensions for codeSearch */
	_codeSearch?: Element;
	/** Identifies a code system that is supported by the server. If there is a no code system URL, then this declares the general assumptions a client can make about support for any CodeSystem resource. */
	codeSystem?: Array<TerminologyCapabilities_CodeSystem>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the terminology capabilities and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the terminology capabilities. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The date  (and optionally time) when the terminology capabilities was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the terminology capabilities changes. */
	date: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the terminology capabilities from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Information about the [ValueSet/$expand](valueset-operation-expand.html) operation. */
	expansion?: TerminologyCapabilities_Expansion;
	/** A Boolean value to indicate that this terminology capabilities is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program. */
	implementation?: TerminologyCapabilities_Implementation;
	/** A legal or geographic region in which the terminology capabilities is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase). */
	kind: "capability" | "instance" | "requirements";
	/** Extensions for kind */
	_kind?: Element;
	/** Whether the server supports lockedDate. */
	lockedDate?: boolean;
	/** Extensions for lockedDate */
	_lockedDate?: Element;
	/** A natural language name identifying the terminology capabilities. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The name of the organization or individual that published the terminology capabilities. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this terminology capabilities is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** This is a TerminologyCapabilities resource. */
	resourceType: "TerminologyCapabilities";
	/** Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation. */
	software?: TerminologyCapabilities_Software;
	/** The status of this terminology capabilities. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A short, descriptive, user-friendly title for the terminology capabilities. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation. */
	translation?: TerminologyCapabilities_Translation;
	/** An absolute URI that is used to identify this terminology capabilities when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this terminology capabilities is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the terminology capabilities is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate terminology capabilities instances. */
	useContext?: Array<UsageContext>;
	/** Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation. */
	validateCode?: TerminologyCapabilities_ValidateCode;
	/** The identifier that is used to identify this version of the terminology capabilities when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the terminology capabilities author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getTerminologyCapabilities_ClosureSchema =
	(): z.ZodType<TerminologyCapabilities_Closure> =>
		TerminologyCapabilities_ClosureSchemaInternal as z.ZodType<TerminologyCapabilities_Closure>;
const getTerminologyCapabilities_CodeSystemSchema =
	(): z.ZodType<TerminologyCapabilities_CodeSystem> =>
		TerminologyCapabilities_CodeSystemSchemaInternal as z.ZodType<TerminologyCapabilities_CodeSystem>;
const getTerminologyCapabilities_ExpansionSchema =
	(): z.ZodType<TerminologyCapabilities_Expansion> =>
		TerminologyCapabilities_ExpansionSchemaInternal as z.ZodType<TerminologyCapabilities_Expansion>;
const getTerminologyCapabilities_ImplementationSchema =
	(): z.ZodType<TerminologyCapabilities_Implementation> =>
		TerminologyCapabilities_ImplementationSchemaInternal as z.ZodType<TerminologyCapabilities_Implementation>;
const getTerminologyCapabilities_SoftwareSchema =
	(): z.ZodType<TerminologyCapabilities_Software> =>
		TerminologyCapabilities_SoftwareSchemaInternal as z.ZodType<TerminologyCapabilities_Software>;
const getTerminologyCapabilities_TranslationSchema =
	(): z.ZodType<TerminologyCapabilities_Translation> =>
		TerminologyCapabilities_TranslationSchemaInternal as z.ZodType<TerminologyCapabilities_Translation>;
const getTerminologyCapabilities_ValidateCodeSchema =
	(): z.ZodType<TerminologyCapabilities_ValidateCode> =>
		TerminologyCapabilities_ValidateCodeSchemaInternal as z.ZodType<TerminologyCapabilities_ValidateCode>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const TerminologyCapabilitiesSchemaInternal =
	DomainResourceSchemaInternal.extend({
		closure: z.lazy(getTerminologyCapabilities_ClosureSchema).optional(),
		codeSearch: z.enum(["all", "explicit"]).optional(),
		_codeSearch: z.lazy(getElementSchema).optional(),
		codeSystem: z
			.lazy(getTerminologyCapabilities_CodeSystemSchema)
			.array()
			.optional(),
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
		expansion: z.lazy(getTerminologyCapabilities_ExpansionSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		implementation: z
			.lazy(getTerminologyCapabilities_ImplementationSchema)
			.optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		kind: z.enum(["capability", "instance", "requirements"]),
		_kind: z.lazy(getElementSchema).optional(),
		lockedDate: z.boolean().optional(),
		_lockedDate: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("TerminologyCapabilities"),
		software: z.lazy(getTerminologyCapabilities_SoftwareSchema).optional(),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		translation: z
			.lazy(getTerminologyCapabilities_TranslationSchema)
			.optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
		validateCode: z
			.lazy(getTerminologyCapabilities_ValidateCodeSchema)
			.optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const TerminologyCapabilitiesSchema =
	TerminologyCapabilitiesSchemaInternal as z.ZodType<TerminologyCapabilities>;
