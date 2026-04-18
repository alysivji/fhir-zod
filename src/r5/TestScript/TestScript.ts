// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { ContactDetail } from "../ContactDetail";
import { ContactDetailSchemaInternal } from "../ContactDetail";
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
import type { UsageContext } from "../UsageContext";
import { UsageContextSchemaInternal } from "../UsageContext";
import type { TestScript_Destination } from "./TestScript_Destination";
import { TestScript_DestinationSchemaInternal } from "./TestScript_Destination";
import type { TestScript_Fixture } from "./TestScript_Fixture";
import { TestScript_FixtureSchemaInternal } from "./TestScript_Fixture";
import type { TestScript_Metadata } from "./TestScript_Metadata";
import { TestScript_MetadataSchemaInternal } from "./TestScript_Metadata";
import type { TestScript_Origin } from "./TestScript_Origin";
import { TestScript_OriginSchemaInternal } from "./TestScript_Origin";
import type { TestScript_Scope } from "./TestScript_Scope";
import { TestScript_ScopeSchemaInternal } from "./TestScript_Scope";
import type { TestScript_Setup } from "./TestScript_Setup";
import { TestScript_SetupSchemaInternal } from "./TestScript_Setup";
import type { TestScript_Teardown } from "./TestScript_Teardown";
import { TestScript_TeardownSchemaInternal } from "./TestScript_Teardown";
import type { TestScript_Test } from "./TestScript_Test";
import { TestScript_TestSchemaInternal } from "./TestScript_Test";
import type { TestScript_Variable } from "./TestScript_Variable";
import { TestScript_VariableSchemaInternal } from "./TestScript_Variable";

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScript extends DomainResource {
  /** Contact details to assist a user in finding and communicating with the publisher. */
  contact?: Array<ContactDetail>;
  /** A copyright statement relating to the test script and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the test script. */
  copyright?: string;
  /** Extensions for copyright */
  _copyright?: Element;
  /** A short string (<50 characters), suitable for inclusion in a page footer that identifies the copyright holder, effective period, and optionally whether rights are resctricted. (e.g. 'All rights reserved', 'Some rights reserved'). */
  copyrightLabel?: string;
  /** Extensions for copyrightLabel */
  _copyrightLabel?: Element;
  /** The date (and optionally time) when the test script was last significantly changed. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the test script changes. */
  date?: string;
  /** Extensions for date */
  _date?: Element;
  /** A free text natural language description of the test script from a consumer's perspective. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** An abstract server used in operations within this test script in the destination element. */
  destination?: Array<TestScript_Destination>;
  /** A Boolean value to indicate that this test script is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
  experimental?: boolean;
  /** Extensions for experimental */
  _experimental?: Element;
  /** Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute. */
  fixture?: Array<TestScript_Fixture>;
  /** A formal identifier that is used to identify this test script when it is represented in other formats, or referenced in a specification, model, design or an instance. */
  identifier?: Array<Identifier>;
  /** A legal or geographic region in which the test script is intended to be used. */
  jurisdiction?: Array<CodeableConcept>;
  /** The required capability must exist and are assumed to function correctly on the FHIR server being tested. */
  metadata?: TestScript_Metadata;
  /** A natural language name identifying the test script. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** An abstract server used in operations within this test script in the origin element. */
  origin?: Array<TestScript_Origin>;
  /** Reference to the profile to be used for validation. */
  profile?: Array<string | null>;
  /** Extensions for profile */
  _profile?: Array<Element | null>;
  /** The name of the organization or individual responsible for the release and ongoing maintenance of the test script. */
  publisher?: string;
  /** Extensions for publisher */
  _publisher?: Element;
  /** Explanation of why this test script is needed and why it has been designed as it has. */
  purpose?: string;
  /** Extensions for purpose */
  _purpose?: Element;
  /** This is a TestScript resource. */
  resourceType: "TestScript";
  /** The scope indicates a conformance artifact that is tested by the test(s) within this test case and the expectation of the test outcome(s) as well as the intended test phase inclusion. */
  scope?: Array<TestScript_Scope>;
  /** A series of required setup operations before tests are executed. */
  setup?: TestScript_Setup;
  /** The status of this test script. Enables tracking the life-cycle of the content. */
  status: "active" | "draft" | "retired" | "unknown";
  /** Extensions for status */
  _status?: Element;
  /** A series of operations required to clean up after all the tests are executed (successfully or otherwise). */
  teardown?: TestScript_Teardown;
  /** A test in this script. */
  test?: Array<TestScript_Test>;
  /** A short, descriptive, user-friendly title for the test script. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** An absolute URI that is used to identify this test script when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which an authoritative instance of this test script is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the test script is stored on different servers. */
  url?: string;
  /** Extensions for url */
  _url?: Element;
  /** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate test script instances. */
  useContext?: Array<UsageContext>;
  /** Variable is set based either on element value in response body or on header field value in the response headers. */
  variable?: Array<TestScript_Variable>;
  /** The identifier that is used to identify this version of the test script when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the test script author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
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
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getTestScript_DestinationSchema = (): z.ZodType<TestScript_Destination> =>
  TestScript_DestinationSchemaInternal as z.ZodType<TestScript_Destination>;
const getTestScript_FixtureSchema = (): z.ZodType<TestScript_Fixture> =>
  TestScript_FixtureSchemaInternal as z.ZodType<TestScript_Fixture>;
const getTestScript_MetadataSchema = (): z.ZodType<TestScript_Metadata> =>
  TestScript_MetadataSchemaInternal as z.ZodType<TestScript_Metadata>;
const getTestScript_OriginSchema = (): z.ZodType<TestScript_Origin> =>
  TestScript_OriginSchemaInternal as z.ZodType<TestScript_Origin>;
const getTestScript_ScopeSchema = (): z.ZodType<TestScript_Scope> =>
  TestScript_ScopeSchemaInternal as z.ZodType<TestScript_Scope>;
const getTestScript_SetupSchema = (): z.ZodType<TestScript_Setup> =>
  TestScript_SetupSchemaInternal as z.ZodType<TestScript_Setup>;
const getTestScript_TeardownSchema = (): z.ZodType<TestScript_Teardown> =>
  TestScript_TeardownSchemaInternal as z.ZodType<TestScript_Teardown>;
const getTestScript_TestSchema = (): z.ZodType<TestScript_Test> =>
  TestScript_TestSchemaInternal as z.ZodType<TestScript_Test>;
const getTestScript_VariableSchema = (): z.ZodType<TestScript_Variable> =>
  TestScript_VariableSchemaInternal as z.ZodType<TestScript_Variable>;
const getUsageContextSchema = (): z.ZodType<UsageContext> =>
  UsageContextSchemaInternal as z.ZodType<UsageContext>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const TestScriptSchemaInternal = z
  .object({
    contact: z.lazy(getContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    copyright: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _copyright: z.lazy(getElementSchema).optional(),
    copyrightLabel: fhirString().optional(),
    _copyrightLabel: z.lazy(getElementSchema).optional(),
    date: fhirDateTime().optional(),
    _date: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    destination: z.lazy(getTestScript_DestinationSchema).array().optional(),
    experimental: z.boolean().optional(),
    _experimental: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    fixture: z.lazy(getTestScript_FixtureSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    jurisdiction: z.lazy(getCodeableConceptSchema).array().optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    metadata: z.lazy(getTestScript_MetadataSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString(),
    _name: z.lazy(getElementSchema).optional(),
    origin: z.lazy(getTestScript_OriginSchema).array().optional(),
    profile: fhirCanonical().nullable().array().optional(),
    _profile: z.lazy(getElementSchema).nullable().array().optional(),
    publisher: fhirString().optional(),
    _publisher: z.lazy(getElementSchema).optional(),
    purpose: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _purpose: z.lazy(getElementSchema).optional(),
    resourceType: z.literal("TestScript"),
    scope: z.lazy(getTestScript_ScopeSchema).array().optional(),
    setup: z.lazy(getTestScript_SetupSchema).optional(),
    status: z.enum(["active", "draft", "retired", "unknown"]),
    _status: z.lazy(getElementSchema).optional(),
    teardown: z.lazy(getTestScript_TeardownSchema).optional(),
    test: z.lazy(getTestScript_TestSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    url: fhirUri().optional(),
    _url: z.lazy(getElementSchema).optional(),
    useContext: z.lazy(getUsageContextSchema).array().optional(),
    variable: z.lazy(getTestScript_VariableSchema).array().optional(),
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
      record.profile,
      record._profile,
      "profile",
      "_profile",
      ctx,
    );
  });

export const TestScriptSchema =
  TestScriptSchemaInternal as z.ZodType<TestScript>;
