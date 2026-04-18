// Source: https://hl7.org/fhir/R4B/testscript-definitions.html#TestScript.metadata.capability
// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCanonical,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Capabilities that must exist and are assumed to function correctly on the FHIR server being tested. */
export interface TestScript_Metadata_Capability extends BackboneElement {
  /** Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped. */
  capabilities: string;
  /** Extensions for capabilities */
  _capabilities?: Element;
  /** Description of the capabilities that this test script is requiring the server to support. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Which server these requirements apply to. */
  destination?: number;
  /** Extensions for destination */
  _destination?: Element;
  /** Links to the FHIR specification that describes this interaction and the resources involved in more detail. */
  link?: Array<string | null>;
  /** Extensions for link */
  _link?: Array<Element | null>;
  /** Which origin server these requirements apply to. */
  origin?: Array<number | null>;
  /** Extensions for origin */
  _origin?: Array<Element | null>;
  /** Whether or not the test execution will require the given capabilities of the server in order for this test script to execute. */
  required: boolean;
  /** Extensions for required */
  _required?: Element;
  /** Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute. */
  validated: boolean;
  /** Extensions for validated */
  _validated?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestScript_Metadata_CapabilitySchemaInternal =
  BackboneElementSchemaInternal.extend({
    capabilities: fhirCanonical(),
    _capabilities: z.lazy(getElementSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    destination: z.number().int().optional(),
    _destination: z.lazy(getElementSchema).optional(),
    link: fhirUri().nullable().array().optional(),
    _link: z.lazy(getElementSchema).nullable().array().optional(),
    origin: z.number().int().nullable().array().optional(),
    _origin: z.lazy(getElementSchema).nullable().array().optional(),
    required: z.boolean(),
    _required: z.lazy(getElementSchema).optional(),
    validated: z.boolean(),
    _validated: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.link,
        record._link,
        "link",
        "_link",
        ctx,
      );
      validatePrimitiveArrayPair(
        record.origin,
        record._origin,
        "origin",
        "_origin",
        ctx,
      );
    });

export const TestScript_Metadata_CapabilitySchema =
  TestScript_Metadata_CapabilitySchemaInternal as z.ZodType<TestScript_Metadata_Capability>;
