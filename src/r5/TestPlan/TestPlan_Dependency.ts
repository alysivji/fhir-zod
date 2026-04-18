// Profile: http://hl7.org/fhir/StructureDefinition/TestPlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The required criteria to execute the test plan - e.g. preconditions, previous tests... */
export interface TestPlan_Dependency extends BackboneElement {
  /** A textual description of the criterium - what is needed for the dependency to be considered met. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Predecessor test plans - those that are expected to be successfully performed as a dependency for the execution of this test plan. */
  predecessor?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const TestPlan_DependencySchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    predecessor: z.lazy(getReferenceSchema).optional(),
  }).strict();

export const TestPlan_DependencySchema =
  TestPlan_DependencySchemaInternal as z.ZodType<TestPlan_Dependency>;
