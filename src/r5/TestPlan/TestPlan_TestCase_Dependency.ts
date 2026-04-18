// Source: https://hl7.org/fhir/R5/testplan-definitions.html#TestPlan.testCase.dependency
// Profile: http://hl7.org/fhir/StructureDefinition/TestPlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The required criteria to execute the test case - e.g. preconditions, previous tests. */
export interface TestPlan_TestCase_Dependency extends BackboneElement {
  /** Description of the criteria. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Link to predecessor test plans. */
  predecessor?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const TestPlan_TestCase_DependencySchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    predecessor: z.lazy(getReferenceSchema).optional(),
  }).strict();

export const TestPlan_TestCase_DependencySchema =
  TestPlan_TestCase_DependencySchemaInternal as z.ZodType<TestPlan_TestCase_Dependency>;
