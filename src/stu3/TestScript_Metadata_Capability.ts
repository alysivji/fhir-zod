// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirString, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Capabilities that must exist and are assumed to function correctly on the FHIR server being tested. */
export interface TestScript_Metadata_Capability extends BackboneElement {
  /** Minimum capabilities required of server for test script to execute successfully.   If server does not meet at a minimum the referenced capability statement, then all tests in this script are skipped. */
  capabilities: Reference;
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
  required?: boolean;
  /** Extensions for required */
  _required?: Element;
  /** Whether or not the test execution will validate the given capabilities of the server in order for this test script to execute. */
  validated?: boolean;
  /** Extensions for validated */
  _validated?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const TestScript_Metadata_CapabilitySchemaInternal =
  BackboneElementSchemaInternal.extend({
    capabilities: z.lazy(getReferenceSchema),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    destination: z.number().int().optional(),
    _destination: z.lazy(getElementSchema).optional(),
    link: fhirUri().nullable().array().optional(),
    _link: z.lazy(getElementSchema).nullable().array().optional(),
    origin: z.number().int().nullable().array().optional(),
    _origin: z.lazy(getElementSchema).nullable().array().optional(),
    required: z.boolean().optional(),
    _required: z.lazy(getElementSchema).optional(),
    validated: z.boolean().optional(),
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
      validateReferenceTarget(
        record.capabilities,
        "capabilities",
        ["http://hl7.org/fhir/StructureDefinition/CapabilityStatement"],
        ["CapabilityStatement"],
        ctx,
      );
    });

export const TestScript_Metadata_CapabilitySchema =
  TestScript_Metadata_CapabilitySchemaInternal as z.ZodType<TestScript_Metadata_Capability>;
