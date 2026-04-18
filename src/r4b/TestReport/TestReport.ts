// Source: https://hl7.org/fhir/R4B/testreport.html
// Profile: http://hl7.org/fhir/StructureDefinition/TestReport
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { TestReport_Participant } from "./TestReport_Participant";
import { TestReport_ParticipantSchemaInternal } from "./TestReport_Participant";
import type { TestReport_Setup } from "./TestReport_Setup";
import { TestReport_SetupSchemaInternal } from "./TestReport_Setup";
import type { TestReport_Teardown } from "./TestReport_Teardown";
import { TestReport_TeardownSchemaInternal } from "./TestReport_Teardown";
import type { TestReport_Test } from "./TestReport_Test";
import { TestReport_TestSchemaInternal } from "./TestReport_Test";

/** A summary of information based on the results of executing a TestScript. */
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
  /** The results of the series of operations required to clean up after all the tests were executed (successfully or otherwise). */
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
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
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
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const TestReportSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    issued: fhirDateTime().optional(),
    _issued: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
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
    text: z.lazy(getNarrativeSchema).optional(),
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
