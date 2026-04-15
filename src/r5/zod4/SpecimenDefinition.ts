// Profile: http://hl7.org/fhir/StructureDefinition/SpecimenDefinition
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
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { SpecimenDefinition_TypeTested } from "./SpecimenDefinition_TypeTested";
import { SpecimenDefinition_TypeTestedSchemaInternal } from "./SpecimenDefinition_TypeTested";
import type { UsageContext } from "./UsageContext";
import { UsageContextSchemaInternal } from "./UsageContext";

/** A kind of specimen with associated set of requirements. */
export interface SpecimenDefinition extends DomainResource {
	/** The date on which the asset content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string;
	/** Extensions for approvalDate */
	_approvalDate?: Element;
	/** The action to be performed for collecting the specimen. */
	collection?: Array<CodeableConcept>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** Copyright statement relating to the SpecimenDefinition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the SpecimenDefinition. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
	copyrightLabel?: string;
	/** Extensions for copyrightLabel */
	_copyrightLabel?: Element;
	/** For draft definitions, indicates the date of initial creation. For active definitions, represents the date of activation. For withdrawn definitions, indicates the date of withdrawal. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The canonical URL pointing to another FHIR-defined SpecimenDefinition that is adhered to in whole or in part by this definition. */
	derivedFromCanonical?: Array<string | null>;
	/** Extensions for derivedFromCanonical */
	_derivedFromCanonical?: Array<Element | null>;
	/** The URL pointing to an externally-defined type of specimen, guideline or other definition that is adhered to in whole or in part by this definition. */
	derivedFromUri?: Array<string | null>;
	/** Extensions for derivedFromUri */
	_derivedFromUri?: Array<Element | null>;
	/** A free text natural language description of the SpecimenDefinition from the consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The period during which the SpecimenDefinition content was or is planned to be effective. */
	effectivePeriod?: Period;
	/** A flag to indicate that this SpecimenDefinition is not authored for  genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A business identifier assigned to this SpecimenDefinition. */
	identifier?: Identifier;
	/** A jurisdiction in which the SpecimenDefinition is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** The date on which the asset content was last reviewed. Review happens periodically after that, but doesn't change the original approval date. */
	lastReviewDate?: string;
	/** Extensions for lastReviewDate */
	_lastReviewDate?: Element;
	/** A natural language name identifying the {{title}}. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Preparation of the patient for specimen collection. */
	patientPreparation?: Array<CodeableConcept>;
	/** Helps establish the "authority/credibility" of the SpecimenDefinition. May also allow for contact. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explains why this SpecimeDefinition is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** This is a SpecimenDefinition resource. */
	resourceType: "SpecimenDefinition";
	/** The current state of theSpecimenDefinition. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A code or group definition that describes the intended subject  from which this kind of specimen is to be collected. */
	subjectCodeableConcept?: CodeableConcept;
	/** A code or group definition that describes the intended subject  from which this kind of specimen is to be collected. */
	subjectReference?: Reference;
	/** Time aspect of specimen collection (duration or offset). */
	timeAspect?: string;
	/** Extensions for timeAspect */
	_timeAspect?: Element;
	/** A short, descriptive, user-friendly title for the SpecimenDefinition. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** The kind of material to be collected. */
	typeCollected?: CodeableConcept;
	/** Specimen conditioned in a container as expected by the testing laboratory. */
	typeTested?: Array<SpecimenDefinition_TypeTested>;
	/** An absolute URL that is used to identify this SpecimenDefinition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this SpecimenDefinition is (or will be) published. The URL SHOULD include the major version of the SpecimenDefinition. For more information see Technical and Business Versions. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These terms may be used to assist with indexing and searching of specimen definitions. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the SpecimenDefinition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the SpecimenDefinition author and is not expected to be globally unique. */
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
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSpecimenDefinition_TypeTestedSchema =
	(): z.ZodType<SpecimenDefinition_TypeTested> =>
		SpecimenDefinition_TypeTestedSchemaInternal as z.ZodType<SpecimenDefinition_TypeTested>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const SpecimenDefinitionSchemaInternal =
	DomainResourceSchemaInternal.extend({
		approvalDate: fhirDate().optional(),
		_approvalDate: z.lazy(getElementSchema).optional(),
		collection: z.lazy(getCodeableConceptSchema).array().optional(),
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
		effectivePeriod: z.lazy(getPeriodSchema).optional(),
		experimental: z.boolean().optional(),
		_experimental: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
		lastReviewDate: fhirDate().optional(),
		_lastReviewDate: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		patientPreparation: z.lazy(getCodeableConceptSchema).array().optional(),
		publisher: fhirString().optional(),
		_publisher: z.lazy(getElementSchema).optional(),
		purpose: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_purpose: z.lazy(getElementSchema).optional(),
		resourceType: z.literal("SpecimenDefinition"),
		status: z.enum(["active", "draft", "retired", "unknown"]),
		_status: z.lazy(getElementSchema).optional(),
		subjectCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		subjectReference: z.lazy(getReferenceSchema).optional(),
		timeAspect: fhirString().optional(),
		_timeAspect: z.lazy(getElementSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
		typeCollected: z.lazy(getCodeableConceptSchema).optional(),
		typeTested: z
			.lazy(getSpecimenDefinition_TypeTestedSchema)
			.array()
			.optional(),
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
			const subject_x_Present = [
				"subjectCodeableConcept",
				"subjectReference",
			].filter((field) => record[field] !== undefined);
			if (subject_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of subjectCodeableConcept, subjectReference may be present for subject[x]",
					path: [subject_x_Present[0]],
				});
			}
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
			validateReferenceTarget(
				record.subjectReference,
				"subjectReference",
				["http://hl7.org/fhir/StructureDefinition/Group"],
				["Group"],
				ctx,
			);
		});

export const SpecimenDefinitionSchema =
	SpecimenDefinitionSchemaInternal as z.ZodType<SpecimenDefinition>;
