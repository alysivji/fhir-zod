// Profile: http://hl7.org/fhir/StructureDefinition/ObservationDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDate,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
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
import type { ObservationDefinition_Component } from "./ObservationDefinition_Component";
import { ObservationDefinition_ComponentSchemaInternal } from "./ObservationDefinition_Component";
import type { ObservationDefinition_QualifiedValue } from "./ObservationDefinition_QualifiedValue";
import { ObservationDefinition_QualifiedValueSchemaInternal } from "./ObservationDefinition_QualifiedValue";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface ObservationDefinition extends DomainResource {
	/** The date on which the asset content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** The site on the subject's body where the  observation is to be made. */
	bodySite?: CodeableConcept;
	/** A code that classifies the general type of observation. */
	category?: Array<CodeableConcept>;
	/** Describes what will be observed. Sometimes this is called the observation "name". */
	code: CodeableConcept;
	/** Some observations have multiple component observations, expressed as separate code value pairs. */
	component?: Array<ObservationDefinition_Component>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** Copyright statement relating to the ObservationDefinition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the ObservationDefinition. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
	copyrightLabel?: string;
	/** Extensions for copyrightLabel */
	_copyrightLabel?: Element;
	/** The date (and optionally time) when the ObservationDefinition was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the ObservationDefinition changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The canonical URL pointing to another FHIR-defined ObservationDefinition that is adhered to in whole or in part by this definition. */
	derivedFromCanonical?: Array<string | null>;
	/** Extensions for derivedFromCanonical */
	_derivedFromCanonical?: Array<Element | null>;
	/** The URL pointing to an externally-defined observation definition, guideline or other definition that is adhered to in whole or in part by this definition. */
	derivedFromUri?: Array<string | null>;
	/** Extensions for derivedFromUri */
	_derivedFromUri?: Array<Element | null>;
	/** A free text natural language description of the ObservationDefinition from the consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The measurement model of device or actual device used to produce observations of this type. */
	device?: Array<Reference>;
	/** The period during which the ObservationDefinition content was or is planned to be effective. */
	effectivePeriod?: Period;
	/** A flag to indicate that this ObservationDefinition is authored for testing purposes (or education/evaluation/marketing), and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** This ObservationDefinition defines a group  observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group. */
	hasMember?: Array<Reference>;
	/** Business identifiers assigned to this ObservationDefinition. by the performer and/or other systems. These identifiers remain constant as the resource is updated and propagates from server to server. */
	identifier?: Identifier;
	/** A jurisdiction in which the ObservationDefinition is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The date on which the asset content was last reviewed. Review happens periodically after that, but doesn't change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** The method or technique used to perform the observation. */
	method?: CodeableConcept;
	/** Multiple results allowed for observations conforming to this ObservationDefinition. */
	multipleResultsAllowed?: boolean;
	/** Extensions for multipleResultsAllowed */
	_multipleResultsAllowed?: Element;
	/** A natural language name identifying the ObservationDefinition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The type of individual/organization/device that is expected to act upon instances of this definition. */
	performerType?: CodeableConcept;
	/** The data types allowed for the value element of the instance observations conforming to this ObservationDefinition. */
	permittedDataType?: Array<
		| "boolean"
		| "CodeableConcept"
		| "dateTime"
		| "integer"
		| "Period"
		| "Quantity"
		| "Range"
		| "Ratio"
		| "SampledData"
		| "string"
		| "time"
		| null
	>;
	/** Extensions for permittedDataType */
	_permittedDataType?: Array<Element | null>;
	/** Units allowed for the valueQuantity element in the instance observations conforming to this ObservationDefinition. */
	permittedUnit?: Array<Coding>;
	/** The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition. */
	preferredReportName?: string;
	/** Extensions for preferredReportName */
	_preferredReportName?: Element;
	/** Helps establish the "authority/credibility" of the ObservationDefinition. May also allow for contact. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explains why this ObservationDefinition is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** A set of qualified values associated with a context and a set of conditions -  provides a range for quantitative and ordinal observations and a collection of value sets for qualitative observations. */
	qualifiedValue?: Array<ObservationDefinition_QualifiedValue>;
	/** This is a ObservationDefinition resource. */
	resourceType: "ObservationDefinition";
	/** The kind of specimen that this type of observation is produced on. */
	specimen?: Array<Reference>;
	/** The current state of the ObservationDefinition. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A code that describes the intended kind of subject of Observation instances conforming to this ObservationDefinition. */
	subject?: Array<CodeableConcept>;
	/** A short, descriptive, user-friendly title for the ObservationDefinition. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** An absolute URL that is used to identify this ObservationDefinition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this ObservationDefinition is (or will be) published. The URL SHOULD include the major version of the ObservationDefinition. For more information see Technical and Business Versions. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate ObservationDefinition instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the ObservationDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the ObservationDefinition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions are orderable. */
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
const getObservationDefinition_ComponentSchema =
	(): z.ZodType<ObservationDefinition_Component> =>
		ObservationDefinition_ComponentSchemaInternal as z.ZodType<ObservationDefinition_Component>;
const getObservationDefinition_QualifiedValueSchema =
	(): z.ZodType<ObservationDefinition_QualifiedValue> =>
		ObservationDefinition_QualifiedValueSchemaInternal as z.ZodType<ObservationDefinition_QualifiedValue>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const ObservationDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		approvalDate: fhirDate().optional(),
		_approvalDate: z.lazy(getElementSchema).optional(),
		bodySite: z.lazy(getCodeableConceptSchema).optional(),
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema),
		component: z
			.lazy(getObservationDefinition_ComponentSchema)
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
		derivedFromCanonical: fhirCanonical().nullable().array().optional(),
		_derivedFromCanonical: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		derivedFromUri: fhirUri().nullable().array().optional(),
		_derivedFromUri: z.lazy(getElementSchema).nullable().array().optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		device: z.lazy(getReferenceSchema).array().optional(),
		effectivePeriod: z.lazy(getPeriodSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		hasMember: z.lazy(getReferenceSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		lastReviewDate: fhirDate().optional(),
		_lastReviewDate: z.lazy(getElementSchema).optional(),
		method: z.lazy(getCodeableConceptSchema).optional(),
		multipleResultsAllowed: z.boolean().optional(),
		_multipleResultsAllowed: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		performerType: z.lazy(getCodeableConceptSchema).optional(),
		permittedDataType: z
			.enum([
				"boolean",
				"CodeableConcept",
				"dateTime",
				"integer",
				"Period",
				"Quantity",
				"Range",
				"Ratio",
				"SampledData",
				"string",
				"time",
			])
			.nullable()
			.array()
			.optional(),
		_permittedDataType: z.lazy(getElementSchema).nullable().array().optional(),
		permittedUnit: z.lazy(getCodingSchema).array().optional(),
		preferredReportName: fhirString().optional(),
		_preferredReportName: z.lazy(getElementSchema).optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		qualifiedValue: z
			.lazy(getObservationDefinition_QualifiedValueSchema)
			.array()
			.optional(),
		resourceType: z.literal("ObservationDefinition"),
		specimen: z.lazy(getReferenceSchema).array().optional(),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getCodeableConceptSchema).array().optional(),
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
				record.derivedFromCanonical,
				record._derivedFromCanonical,
				"derivedFromCanonical",
				"_derivedFromCanonical",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.derivedFromUri,
				record._derivedFromUri,
				"derivedFromUri",
				"_derivedFromUri",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.permittedDataType,
				record._permittedDataType,
				"permittedDataType",
				"_permittedDataType",
				ctx,
			);
			validateReferenceTarget(
				record.device,
				"device",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
				],
				["Device", "DeviceDefinition"],
				ctx,
			);
			validateReferenceTarget(
				record.hasMember,
				"hasMember",
				[
					"http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
					"http://hl7.org/fhir/StructureDefinition/Questionnaire",
				],
				["ObservationDefinition", "Questionnaire"],
				ctx,
			);
			validateReferenceTarget(
				record.specimen,
				"specimen",
				["http://hl7.org/fhir/StructureDefinition/SpecimenDefinition"],
				["SpecimenDefinition"],
				ctx,
			);
		});

export const ObservationDefinitionSchema =
	ObservationDefinitionSchemaInternal as z.ZodType<ObservationDefinition>;
