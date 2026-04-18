// Profile: http://hl7.org/fhir/StructureDefinition/TestPlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import {
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { TestPlan_Dependency } from "./TestPlan_Dependency";
import { TestPlan_DependencySchemaInternal } from "./TestPlan_Dependency";
import type { TestPlan_TestCase } from "./TestPlan_TestCase";
import { TestPlan_TestCaseSchemaInternal } from "./TestPlan_TestCase";

/** A plan for executing testing on an artifact or specifications */
export interface TestPlan extends DomainResource {
	/** The category of the Test Plan - can be acceptance, unit, performance, etc. */
	category?: Array<CodeableConcept>;
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: Array<ContactDetail>;
	/** A copyright statement relating to the test plan and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test plan. The short copyright declaration (e.g. (c) '2015+ xyz organization' should be sent in the copyrightLabel element. */
	copyright?: string;
	/** Extensions for copyright */
	_copyright?: Element;
	/** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
	copyrightLabel?: string;
	/** Extensions for copyrightLabel */
	_copyrightLabel?: Element;
	/** The date (and optionally time) when the test plan was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test plan changes. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The required criteria to execute the test plan - e.g. preconditions, previous tests... */
	dependency?: Array<TestPlan_Dependency>;
	/** A free text natural language description of the test plan from a consumer's perspective. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The threshold or criteria for the test plan to be considered successfully executed - narrative. */
	exitCriteria?: string;
	/** Extensions for exitCriteria */
	_exitCriteria?: Element;
	/** A Boolean value to indicate that this test plan is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean;
	/** Extensions for experimental */
	_experimental?: Element;
	/** A formal identifier that is used to identify this test plan when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Array<Identifier>;
	/** A legal or geographic region in which the test plan is intended to be used. */
	jurisdiction?: Array<CodeableConcept>;
	/** A natural language name identifying the test plan. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The name of the organization or individual responsible for the release and ongoing maintenance of the test plan. */
	publisher?: string;
	/** Extensions for publisher */
	_publisher?: Element;
	/** Explanation of why this test plan is needed and why it has been designed as it has. */
	purpose?: string;
	/** Extensions for purpose */
	_purpose?: Element;
	/** This is a TestPlan resource. */
	resourceType: "TestPlan";
	/** What is being tested with this Test Plan - a conformance resource, or narrative criteria, or an external reference... */
	scope?: Array<Reference>;
	/** The status of this test plan. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The individual test cases that are part of this plan, when they they are made explicit. */
	testCase?: Array<TestPlan_TestCase>;
	/** A description of test tools to be used in the test plan. */
	testTools?: string;
	/** Extensions for testTools */
	_testTools?: Element;
	/** A short, descriptive, user-friendly title for the test plan. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
	/** An absolute URI that is used to identify this test plan when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this test plan is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the test plan is stored on different servers. */
	url?: string;
	/** Extensions for url */
	_url?: Element;
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate test plan instances. */
	useContext?: Array<UsageContext>;
	/** The identifier that is used to identify this version of the test plan when it is referenced in a specification, model, design or instance.  This is an arbitrary value managed by the test plan author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTestPlan_DependencySchema = (): z.ZodType<TestPlan_Dependency> =>
	TestPlan_DependencySchemaInternal as z.ZodType<TestPlan_Dependency>;
const getTestPlan_TestCaseSchema = (): z.ZodType<TestPlan_TestCase> =>
	TestPlan_TestCaseSchemaInternal as z.ZodType<TestPlan_TestCase>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
	UsageContextSchemaInternal as z.ZodType<UsageContext>;

/** @internal */
export const TestPlanSchemaInternal = DomainResourceSchemaInternal.extend({
	category: z.lazy(getCodeableConceptSchema).array().optional(),
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
	dependency: z.lazy(getTestPlan_DependencySchema).array().optional(),
	description: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_description: z.lazy(getElementSchema).optional(),
	exitCriteria: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_exitCriteria: z.lazy(getElementSchema).optional(),
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
	resourceType: z.literal("TestPlan"),
	scope: z.lazy(getReferenceSchema).array().optional(),
	status: z.enum(["active", "draft", "retired", "unknown"]),
	_status: z.lazy(getElementSchema).optional(),
	testCase: z.lazy(getTestPlan_TestCaseSchema).array().optional(),
	testTools: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_testTools: z.lazy(getElementSchema).optional(),
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

export const TestPlanSchema = TestPlanSchemaInternal as z.ZodType<TestPlan>;
