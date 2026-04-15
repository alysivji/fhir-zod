// Profile: http://hl7.org/fhir/StructureDefinition/CapabilityStatement
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T00:02:33.197Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirCode,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../shared/fhir-primitives";
import type { CapabilityStatement_Document } from "./CapabilityStatement_Document";
import { CapabilityStatement_DocumentSchemaInternal } from "./CapabilityStatement_Document";
import type { CapabilityStatement_Implementation } from "./CapabilityStatement_Implementation";
import { CapabilityStatement_ImplementationSchemaInternal } from "./CapabilityStatement_Implementation";
import type { CapabilityStatement_Messaging } from "./CapabilityStatement_Messaging";
import { CapabilityStatement_MessagingSchemaInternal } from "./CapabilityStatement_Messaging";
import type { CapabilityStatement_Rest } from "./CapabilityStatement_Rest";
import { CapabilityStatement_RestSchemaInternal } from "./CapabilityStatement_Rest";
import type { CapabilityStatement_Software } from "./CapabilityStatement_Software";
import { CapabilityStatement_SoftwareSchemaInternal } from "./CapabilityStatement_Software";
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
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server or Client for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface CapabilityStatement extends DomainResource {
	/** A list of the languages supported by this implementation that are usefully supported in the ```Accept-Language``` header. */
	acceptLanguage?: Array<string | null>;
	/** Extensions for acceptLanguage */
	_acceptLanguage?: Array<Element | null>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the capability statement and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the capability statement. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
	copyrightLabel?: string;
	/** Extensions for copyrightLabel */
	_copyrightLabel?: Element;
	/** The date  (and optionally time) when the capability statement was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the capability statement changes. */
	date: string;
	/** Extensions for date */
	_date?: Element;
	/** A free text natural language description of the capability statement from a consumer's perspective. Typically, this is used when the capability statement describes a desired rather than an actual solution, for example as a formal expression of requirements as part of an RFP. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A document definition. */
	document?: Array<CapabilityStatement_Document>;
	/** A Boolean value to indicate that this capability statement is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** The version of the FHIR specification that this CapabilityStatement describes (which SHALL be the same as the FHIR version of the CapabilityStatement itself). There is no default value. */
	fhirVersion:
		| "0.0"
		| "0.0.80"
		| "0.0.81"
		| "0.0.82"
		| "0.01"
		| "0.05"
		| "0.06"
		| "0.11"
		| "0.4"
		| "0.4.0"
		| "0.5"
		| "0.5.0"
		| "1.0"
		| "1.0.0"
		| "1.0.1"
		| "1.0.2"
		| "1.1"
		| "1.1.0"
		| "1.4"
		| "1.4.0"
		| "1.6"
		| "1.6.0"
		| "1.8"
		| "1.8.0"
		| "3.0"
		| "3.0.0"
		| "3.0.1"
		| "3.0.2"
		| "3.3"
		| "3.3.0"
		| "3.5"
		| "3.5.0"
		| "4.0"
		| "4.0.0"
		| "4.0.1"
		| "4.1"
		| "4.1.0"
		| "4.2"
		| "4.2.0"
		| "4.3"
		| "4.3.0"
		| "4.3.0-cibuild"
		| "4.3.0-snapshot1"
		| "4.4"
		| "4.4.0"
		| "4.5"
		| "4.5.0"
		| "4.6"
		| "4.6.0"
		| "5.0"
		| "5.0.0"
		| "5.0.0-ballot"
		| "5.0.0-cibuild"
		| "5.0.0-draft-final"
		| "5.0.0-snapshot1"
		| "5.0.0-snapshot2"
		| "5.0.0-snapshot3";
	/** Extensions for fhirVersion */
	_fhirVersion?: Element;
	/** A list of the formats supported by this implementation using their content types. */
	format: Array<string | null>;
	/** Extensions for format */
	_format?: Array<Element | null>;
	/** A formal identifier that is used to identify this CapabilityStatement when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** Identifies a specific implementation instance that is described by the capability statement - i.e. a particular installation, rather than the capabilities of a software program. */
	implementation?: CapabilityStatement_Implementation;
	/** A list of implementation guides that the server does (or should) support in their entirety. */
	implementationGuide?: Array<string | null>;
	/** Extensions for implementationGuide */
	_implementationGuide?: Array<Element | null>;
	/** Reference to a canonical URL of another CapabilityStatement that this software adds to. The capability statement automatically includes everything in the other statement, and it is not duplicated, though the server may repeat the same resources, interactions and operations to add additional details to them. */
	imports?: Array<string | null>;
	/** Extensions for imports */
	_imports?: Array<Element | null>;
	/** Reference to a canonical URL of another CapabilityStatement that this software implements. This capability statement is a published API description that corresponds to a business service. The server may actually implement a subset of the capability statement it claims to implement, so the capability statement must specify the full capability details. */
	instantiates?: Array<string | null>;
	/** Extensions for instantiates */
	_instantiates?: Array<Element | null>;
	/** A legal or geographic region in which the capability statement is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The way that this statement is intended to be used, to describe an actual running instance of software, a particular product (kind, not instance of software) or a class of implementation (e.g. a desired purchase). */
	kind: "capability" | "instance" | "requirements";
	/** Extensions for kind */
	_kind?: Element;
	/** A description of the messaging capabilities of the solution. */
	messaging?: Array<CapabilityStatement_Messaging>;
	/** A natural language name identifying the capability statement. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** A list of the patch formats supported by this implementation using their content types. */
	patchFormat?: Array<string | null>;
	/** Extensions for patchFormat */
	_patchFormat?: Array<Element | null>;
	/** The name of the organization or individual responsible for the release and ongoing maintenance of the capability statement. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this capability statement is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** This is a CapabilityStatement resource. */
	resourceType: "CapabilityStatement";
	/** A definition of the restful capabilities of the solution, if any. */
	rest?: Array<CapabilityStatement_Rest>;
	/** Software that is covered by this capability statement.  It is used when the capability statement describes the capabilities of a particular software version, independent of an installation. */
	software?: CapabilityStatement_Software;
	/** The status of this capability statement. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A short, descriptive, user-friendly title for the capability statement. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** An absolute URI that is used to identify this capability statement when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this capability statement is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the capability statement is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate capability statement instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the capability statement when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the capability statement author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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

const getCapabilityStatement_DocumentSchema =
	(): z.ZodType<CapabilityStatement_Document> =>
		CapabilityStatement_DocumentSchemaInternal as z.ZodType<CapabilityStatement_Document>;
const getCapabilityStatement_ImplementationSchema =
	(): z.ZodType<CapabilityStatement_Implementation> =>
		CapabilityStatement_ImplementationSchemaInternal as z.ZodType<CapabilityStatement_Implementation>;
const getCapabilityStatement_MessagingSchema =
	(): z.ZodType<CapabilityStatement_Messaging> =>
		CapabilityStatement_MessagingSchemaInternal as z.ZodType<CapabilityStatement_Messaging>;
const getCapabilityStatement_RestSchema =
	(): z.ZodType<CapabilityStatement_Rest> =>
		CapabilityStatement_RestSchemaInternal as z.ZodType<CapabilityStatement_Rest>;
const getCapabilityStatement_SoftwareSchema =
	(): z.ZodType<CapabilityStatement_Software> =>
		CapabilityStatement_SoftwareSchemaInternal as z.ZodType<CapabilityStatement_Software>;
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
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const CapabilityStatementSchemaInternal =
	DomainResourceSchemaInternal.extend({
		acceptLanguage: fhirCode().nullable().array().optional(),
		_acceptLanguage: z.lazy(getElementSchema).nullable().array().optional(),
		contact: z.lazy(getContactDetailSchema).array().optional(),
		copyright: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_copyright: z.lazy(getElementSchema).optional(),
		copyrightLabel: fhirString().optional(),
		_copyrightLabel: z.lazy(getElementSchema).optional(),
		date: fhirDateTime(),
		_date: z.lazy(getElementSchema).optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		document: z.lazy(getCapabilityStatement_DocumentSchema).array().optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		fhirVersion: z.enum([
			"0.0",
			"0.0.80",
			"0.0.81",
			"0.0.82",
			"0.01",
			"0.05",
			"0.06",
			"0.11",
			"0.4",
			"0.4.0",
			"0.5",
			"0.5.0",
			"1.0",
			"1.0.0",
			"1.0.1",
			"1.0.2",
			"1.1",
			"1.1.0",
			"1.4",
			"1.4.0",
			"1.6",
			"1.6.0",
			"1.8",
			"1.8.0",
			"3.0",
			"3.0.0",
			"3.0.1",
			"3.0.2",
			"3.3",
			"3.3.0",
			"3.5",
			"3.5.0",
			"4.0",
			"4.0.0",
			"4.0.1",
			"4.1",
			"4.1.0",
			"4.2",
			"4.2.0",
			"4.3",
			"4.3.0",
			"4.3.0-cibuild",
			"4.3.0-snapshot1",
			"4.4",
			"4.4.0",
			"4.5",
			"4.5.0",
			"4.6",
			"4.6.0",
			"5.0",
			"5.0.0",
			"5.0.0-ballot",
			"5.0.0-cibuild",
			"5.0.0-draft-final",
			"5.0.0-snapshot1",
			"5.0.0-snapshot2",
			"5.0.0-snapshot3",
		]),
		_fhirVersion: z.lazy(getElementSchema).optional(),
		format: fhirCode().nullable().array(),
		_format: z.lazy(getElementSchema).nullable().array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		implementation: z
			.lazy(getCapabilityStatement_ImplementationSchema)
			.optional(),
		implementationGuide: fhirCanonical().nullable().array().optional(),
		_implementationGuide: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		imports: fhirCanonical().nullable().array().optional(),
		_imports: z.lazy(getElementSchema).nullable().array().optional(),
		instantiates: fhirCanonical().nullable().array().optional(),
		_instantiates: z.lazy(getElementSchema).nullable().array().optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		kind: z.enum(["capability", "instance", "requirements"]),
		_kind: z.lazy(getElementSchema).optional(),
		messaging: z
			.lazy(getCapabilityStatement_MessagingSchema)
			.array()
			.optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		patchFormat: fhirCode().nullable().array().optional(),
		_patchFormat: z.lazy(getElementSchema).nullable().array().optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("CapabilityStatement"),
		rest: z.lazy(getCapabilityStatement_RestSchema).array().optional(),
		software: z.lazy(getCapabilityStatement_SoftwareSchema).optional(),
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
			validatePrimitiveArrayPair(
				record.acceptLanguage,
				record._acceptLanguage,
				"acceptLanguage",
				"_acceptLanguage",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.format,
				record._format,
				"format",
				"_format",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.implementationGuide,
				record._implementationGuide,
				"implementationGuide",
				"_implementationGuide",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.imports,
				record._imports,
				"imports",
				"_imports",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.instantiates,
				record._instantiates,
				"instantiates",
				"_instantiates",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.patchFormat,
				record._patchFormat,
				"patchFormat",
				"_patchFormat",
				ctx,
			);
		});

export const CapabilityStatementSchema =
	CapabilityStatementSchemaInternal as z.ZodType<CapabilityStatement>;
