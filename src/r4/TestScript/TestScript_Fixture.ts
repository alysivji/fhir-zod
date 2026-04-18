// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Fixture in the test script - by reference (uri). All fixtures are required for the test script to execute. */
export interface TestScript_Fixture extends BackboneElement {
  /** Whether or not to implicitly create the fixture during setup. If true, the fixture is automatically created on each server being tested during setup, therefore no create operation is required for this fixture in the TestScript.setup section. */
  autocreate: boolean;
  /** Extensions for autocreate */
  _autocreate?: Element;
  /** Whether or not to implicitly delete the fixture during teardown. If true, the fixture is automatically deleted on each server being tested during teardown, therefore no delete operation is required for this fixture in the TestScript.teardown section. */
  autodelete: boolean;
  /** Extensions for autodelete */
  _autodelete?: Element;
  /** Reference to the resource (containing the contents of the resource needed for operations). */
  resource?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const TestScript_FixtureSchemaInternal =
  BackboneElementSchemaInternal.extend({
    autocreate: z.boolean(),
    _autocreate: z.lazy(getElementSchema).optional(),
    autodelete: z.boolean(),
    _autodelete: z.lazy(getElementSchema).optional(),
    resource: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.resource,
        "resource",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const TestScript_FixtureSchema =
  TestScript_FixtureSchemaInternal as z.ZodType<TestScript_Fixture>;
