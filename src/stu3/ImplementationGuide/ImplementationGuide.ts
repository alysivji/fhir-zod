// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirDateTime,
	fhirId,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { ImplementationGuide_Dependency } from "./ImplementationGuide_Dependency";
import { ImplementationGuide_DependencySchemaInternal } from "./ImplementationGuide_Dependency";
import type { ImplementationGuide_Global } from "./ImplementationGuide_Global";
import { ImplementationGuide_GlobalSchemaInternal } from "./ImplementationGuide_Global";
import type { ImplementationGuide_Package } from "./ImplementationGuide_Package";
import { ImplementationGuide_PackageSchemaInternal } from "./ImplementationGuide_Package";
import type { ImplementationGuide_Page } from "./ImplementationGuide_Page";
import { ImplementationGuide_PageSchemaInternal } from "./ImplementationGuide_Page";

/** Base StructureDefinition for ImplementationGuide Resource */
export interface ImplementationGuide extends DomainResource {
	/** A binary file that is included in the  implementation guide when it is published. */
	binary?: Array<string | null>;
	/** Extensions for binary */
	_binary?: Array<Element | null>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the implementation guide and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the implementation guide. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** The date  (and optionally time) when the implementation guide was published. The date must change if and when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the implementation guide changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides. */
	dependency?: Array<ImplementationGuide_Dependency>;
	/** A free text natural language description of the implementation guide from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A boolean value to indicate that this implementation guide is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** The version of the FHIR specification on which this ImplementationGuide is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 3.0.2 for this version. */
	fhirVersion?: string;
	/** Extensions for fhirVersion */
	_fhirVersion?: Element;
	/** A set of profiles that all resources covered by this implementation guide must conform to. */
	global?: Array<ImplementationGuide_Global>;
	/** A legal or geographic region in which the implementation guide is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** A natural language name identifying the implementation guide. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** A logical group of resources. Logical groups can be used when building pages. */
	package?: Array<ImplementationGuide_Package>;
	/** A page / section in the implementation guide. The root page is the implementation guide home page. */
	page?: ImplementationGuide_Page;
	/** The name of the individual or organization that published the implementation guide. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** This is a ImplementationGuide resource. */
	resourceType: "ImplementationGuide";
	/** The status of this implementation guide. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** An absolute URI that is used to identify this implementation guide when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this implementation guide is (or will be) published. The URL SHOULD include the major version of the implementation guide. For more information see [Technical and Business Versions](resource.html#versions). */
	url: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching for appropriate implementation guide instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the implementation guide when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the implementation guide author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getImplementationGuide_DependencySchema =
	(): z.ZodType<ImplementationGuide_Dependency> =>
		ImplementationGuide_DependencySchemaInternal as z.ZodType<ImplementationGuide_Dependency>;
const getImplementationGuide_GlobalSchema =
	(): z.ZodType<ImplementationGuide_Global> =>
		ImplementationGuide_GlobalSchemaInternal as z.ZodType<ImplementationGuide_Global>;
const getImplementationGuide_PackageSchema =
	(): z.ZodType<ImplementationGuide_Package> =>
		ImplementationGuide_PackageSchemaInternal as z.ZodType<ImplementationGuide_Package>;
const getImplementationGuide_PageSchema =
	(): z.ZodType<ImplementationGuide_Page> =>
		ImplementationGuide_PageSchemaInternal as z.ZodType<ImplementationGuide_Page>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ImplementationGuideSchemaInternal =
	DomainResourceSchemaInternal.extend({
		binary: fhirUri().nullable().array().optional(),
		_binary: z.lazy(getElementSchema).nullable().array().optional(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		copyright: z.string().optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		dependency: z
			.lazy(getImplementationGuide_DependencySchema)
			.array()
			.optional(),
		description: z.string().optional(),
		_description: z.lazy(getElementSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		fhirVersion: fhirId().optional(),
		_fhirVersion: z.lazy(getElementSchema).optional(),
		global: z.lazy(getImplementationGuide_GlobalSchema).array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		package: z.lazy(getImplementationGuide_PackageSchema).array().optional(),
		page: z.lazy(getImplementationGuide_PageSchema).optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("ImplementationGuide"),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		url: fhirUri(),
		_url: z.lazy(getElementSchema).optional(),
		useContext: z.lazy(getUsageContextSchema).array().optional(),
		version: fhirString().optional(),
		_version: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.binary,
				record._binary,
				"binary",
				"_binary",
				ctx,
			);
		});

export const ImplementationGuideSchema =
	ImplementationGuideSchemaInternal as z.ZodType<ImplementationGuide>;
