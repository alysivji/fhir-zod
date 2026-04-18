// Source: https://hl7.org/fhir/R4B/testscript-definitions.html#TestScript.metadata
// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { TestScript_Metadata_Capability } from "./TestScript_Metadata_Capability";
import { TestScript_Metadata_CapabilitySchemaInternal } from "./TestScript_Metadata_Capability";
import type { TestScript_Metadata_Link } from "./TestScript_Metadata_Link";
import { TestScript_Metadata_LinkSchemaInternal } from "./TestScript_Metadata_Link";

/** The required capability must exist and are assumed to function correctly on the FHIR server being tested. */
export interface TestScript_Metadata extends BackboneElement {
  /** Capabilities that must exist and are assumed to function correctly on the FHIR server being tested. */
  capability: Array<TestScript_Metadata_Capability>;
  /** A link to the FHIR specification that this test is covering. */
  link?: Array<TestScript_Metadata_Link>;
}

const getTestScript_Metadata_CapabilitySchema =
  (): z.ZodType<TestScript_Metadata_Capability> =>
    TestScript_Metadata_CapabilitySchemaInternal as z.ZodType<TestScript_Metadata_Capability>;
const getTestScript_Metadata_LinkSchema =
  (): z.ZodType<TestScript_Metadata_Link> =>
    TestScript_Metadata_LinkSchemaInternal as z.ZodType<TestScript_Metadata_Link>;

/** @internal */
export const TestScript_MetadataSchemaInternal =
  BackboneElementSchemaInternal.extend({
    capability: z.lazy(getTestScript_Metadata_CapabilitySchema).array(),
    link: z.lazy(getTestScript_Metadata_LinkSchema).array().optional(),
  }).strict();

export const TestScript_MetadataSchema =
  TestScript_MetadataSchemaInternal as z.ZodType<TestScript_Metadata>;
