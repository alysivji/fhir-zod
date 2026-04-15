// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { TestReport_Participant } from "./TestReport_Participant";
import { TestReport_ParticipantSchemaInternal } from "./TestReport_Participant";
import type { TestReport_Setup } from "./TestReport_Setup";
import { TestReport_SetupSchemaInternal } from "./TestReport_Setup";
import type { TestReport_Teardown } from "./TestReport_Teardown";
import { TestReport_TeardownSchemaInternal } from "./TestReport_Teardown";
import type { TestReport_Test } from "./TestReport_Test";
import { TestReport_TestSchemaInternal } from "./TestReport_Test";

/** Base StructureDefinition for TestReport Resource */
export interface TestReport extends DomainResource {
	/** Identifier for the TestScript assigned for external purposes outside the context of FHIR. */
	identifier?: Identifier;
	/** When the TestScript was executed and this TestReport was generated. */
	issued?: string;
	/** Extensions for issued */
	_issued?: Element;
	/** A free text natural language name identifying the executed TestScript. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** A participant in the test execution, either the execution engine, a client, or a server. */
	participant?: Array<TestReport_Participant>;
	/** This is a TestReport resource. */
	resourceType: "TestReport";
	/** The overall result from the execution of the TestScript. */
	result: "fail" | "pass" | "pending";
	/** Extensions for result */
	_result?: Element;
	/** The final score (percentage of tests passed) resulting from the execution of the TestScript. */
	score?: number;
	/** Extensions for score */
	_score?: Element;
	/** The results of the series of required setup operations before the tests were executed. */
	setup?: TestReport_Setup;
	/** The current state of this test report. */
	status:
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "stopped"
		| "waiting";
	/** Extensions for status */
	_status?: Element;
	/** The results of the series of operations required to clean up after the all the tests were executed (successfully or otherwise). */
	teardown?: TestReport_Teardown;
	/** A test executed from the test script. */
	test?: Array<TestReport_Test>;
	/** Name of the tester producing this report (Organization or individual). */
	tester?: string;
	/** Extensions for tester */
	_tester?: Element;
	/** Ideally this is an absolute URL that is used to identify the version-specific TestScript that was executed, matching the `TestScript.url`. */
	testScript: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTestReport_ParticipantSchema = (): z.ZodType<TestReport_Participant> =>
	TestReport_ParticipantSchemaInternal as z.ZodType<TestReport_Participant>;
const getTestReport_SetupSchema = (): z.ZodType<TestReport_Setup> =>
	TestReport_SetupSchemaInternal as z.ZodType<TestReport_Setup>;
const getTestReport_TeardownSchema = (): z.ZodType<TestReport_Teardown> =>
	TestReport_TeardownSchemaInternal as z.ZodType<TestReport_Teardown>;
const getTestReport_TestSchema = (): z.ZodType<TestReport_Test> =>
	TestReport_TestSchemaInternal as z.ZodType<TestReport_Test>;

/** @internal */
export const TestReportSchemaInternal = DomainResourceSchemaInternal.extend({
	identifier: z.lazy(getIdentifierSchema).optional(),
	issued: fhirDateTime().optional(),
	_issued: z.lazy(getElementSchema).optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	participant: z.lazy(getTestReport_ParticipantSchema).array().optional(),
	resourceType: z.literal("TestReport"),
	result: z.enum(["fail", "pass", "pending"]),
	_result: z.lazy(getElementSchema).optional(),
	score: z.number().optional(),
	_score: z.lazy(getElementSchema).optional(),
	setup: z.lazy(getTestReport_SetupSchema).optional(),
	status: z.enum([
		"completed",
		"entered-in-error",
		"in-progress",
		"stopped",
		"waiting",
	]),
	_status: z.lazy(getElementSchema).optional(),
	teardown: z.lazy(getTestReport_TeardownSchema).optional(),
	test: z.lazy(getTestReport_TestSchema).array().optional(),
	tester: fhirString().optional(),
	_tester: z.lazy(getElementSchema).optional(),
	testScript: z.lazy(getReferenceSchema),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.testScript,
			"testScript",
			["http://hl7.org/fhir/StructureDefinition/TestScript"],
			["TestScript"],
			ctx,
		);
	});

export const TestReportSchema =
	TestReportSchemaInternal as z.ZodType<TestReport>;
