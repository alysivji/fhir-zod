// Profile: http://hl7.org/fhir/StructureDefinition/ExpansionProfile
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import {
	fhirCode,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod3";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactDetail } from "./ContactDetail";
import { ContactDetailSchemaInternal } from "./ContactDetail";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ExpansionProfile_Designation } from "./ExpansionProfile_Designation";
import { ExpansionProfile_DesignationSchemaInternal } from "./ExpansionProfile_Designation";
import type { ExpansionProfile_ExcludedSystem } from "./ExpansionProfile_ExcludedSystem";
import { ExpansionProfile_ExcludedSystemSchemaInternal } from "./ExpansionProfile_ExcludedSystem";
import type { ExpansionProfile_FixedVersion } from "./ExpansionProfile_FixedVersion";
import { ExpansionProfile_FixedVersionSchemaInternal } from "./ExpansionProfile_FixedVersion";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** Base StructureDefinition for ExpansionProfile Resource */
export interface ExpansionProfile extends DomainResource {
	/** Controls whether inactive concepts are included or excluded in value set expansions. */
	activeOnly?: boolean;
	/** Extensions for activeOnly */
	_activeOnly?: Element;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** The date  (and optionally time) when the expansion profile was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the expansion profile changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the expansion profile from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A set of criteria that provide the constraints imposed on the value set expansion by including or excluding designations. */
	designation?: ExpansionProfile_Designation;
	/** Specifies the language to be used for description in the expansions i.e. the language to be used for ValueSet.expansion.contains.display. */
	displayLanguage?: string;
	/** Extensions for displayLanguage */
	_displayLanguage?: Element;
	/** Code system, or a particular version of a code system to be excluded from value set expansions. */
	excludedSystem?: ExpansionProfile_ExcludedSystem;
	/** Controls whether or not the value set expansion nests codes or not (i.e. ValueSet.expansion.contains.contains). */
	excludeNested?: boolean;
	/** Extensions for excludeNested */
	_excludeNested?: Element;
	/** Controls whether or not the value set expansion includes codes which cannot be displayed in user interfaces. */
	excludeNotForUI?: boolean;
	/** Extensions for excludeNotForUI */
	_excludeNotForUI?: Element;
	/** Controls whether or not the value set expansion includes post coordinated codes. */
	excludePostCoordinated?: boolean;
	/** Extensions for excludePostCoordinated */
	_excludePostCoordinated?: Element;
	/** A boolean value to indicate that this expansion profile is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** Fix use of a particular code system to a particular version. */
	fixedVersion?: Array<ExpansionProfile_FixedVersion>;
	/** A formal identifier that is used to identify this expansion profile when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Identifier;
	/** Controls whether the value set definition is included or excluded in value set expansions. */
	includeDefinition?: boolean;
	/** Extensions for includeDefinition */
	_includeDefinition?: Element;
	/** Controls whether concept designations are to be included or excluded in value set expansions. */
	includeDesignations?: boolean;
	/** Extensions for includeDesignations */
	_includeDesignations?: Element;
	/** A legal or geographic region in which the expansion profile is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** If the value set being expanded is incomplete (because it is too big to expand), return a limited expansion (a subset) with an indicator that expansion is incomplete, using the extension [http://hl7.org/fhir/StructureDefinition/valueset-toocostly](extension-valueset-toocostly.html). */
	limitedExpansion?: boolean;
	/** Extensions for limitedExpansion */
	_limitedExpansion?: Element;
	/** A natural language name identifying the expansion profile. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The name of the individual or organization that published the expansion profile. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** This is a ExpansionProfile resource. */
	resourceType: "ExpansionProfile";
	/** The status of this expansion profile. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** An absolute URI that is used to identify this expansion profile when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this expansion profile is (or will be) published. The URL SHOULD include the major version of the expansion profile. For more information see [Technical and Business Versions](resource.html#versions). */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate expansion profile instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the expansion profile when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the expansion profile author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getExpansionProfile_DesignationSchema =
	(): z.ZodType<ExpansionProfile_Designation> =>
		ExpansionProfile_DesignationSchemaInternal as z.ZodType<ExpansionProfile_Designation>;
const getExpansionProfile_ExcludedSystemSchema =
	(): z.ZodType<ExpansionProfile_ExcludedSystem> =>
		ExpansionProfile_ExcludedSystemSchemaInternal as z.ZodType<ExpansionProfile_ExcludedSystem>;
const getExpansionProfile_FixedVersionSchema =
	(): z.ZodType<ExpansionProfile_FixedVersion> =>
		ExpansionProfile_FixedVersionSchemaInternal as z.ZodType<ExpansionProfile_FixedVersion>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ExpansionProfileSchemaInternal =
	DomainResourceSchemaInternal.extend({
		activeOnly: z.boolean().optional(),
		_activeOnly: z.lazy(getElementSchema).optional(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		description: z.string().optional(),
		_description: z.lazy(getElementSchema).optional(),
		designation: z.lazy(getExpansionProfile_DesignationSchema).optional(),
		displayLanguage: fhirCode().optional(),
		_displayLanguage: z.lazy(getElementSchema).optional(),
		excludedSystem: z.lazy(getExpansionProfile_ExcludedSystemSchema).optional(),
		excludeNested: z.boolean().optional(),
		_excludeNested: z.lazy(getElementSchema).optional(),
		excludeNotForUI: z.boolean().optional(),
		_excludeNotForUI: z.lazy(getElementSchema).optional(),
		excludePostCoordinated: z.boolean().optional(),
		_excludePostCoordinated: z.lazy(getElementSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		fixedVersion: z
			.lazy(getExpansionProfile_FixedVersionSchema)
			.array()
			.optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		includeDefinition: z.boolean().optional(),
		_includeDefinition: z.lazy(getElementSchema).optional(),
		includeDesignations: z.boolean().optional(),
		_includeDesignations: z.lazy(getElementSchema).optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		limitedExpansion: z.boolean().optional(),
		_limitedExpansion: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("ExpansionProfile"),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		url: fhirUri().optional(),
		_url: z.lazy(getElementSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	}).strict();

export const ExpansionProfileSchema =
	ExpansionProfileSchemaInternal as z.ZodType<ExpansionProfile>;
