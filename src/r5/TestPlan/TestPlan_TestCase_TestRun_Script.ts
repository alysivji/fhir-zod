// Profile: http://hl7.org/fhir/StructureDefinition/TestPlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** The test cases in a structured language e.g. gherkin, Postman, or FHIR TestScript. */
export interface TestPlan_TestCase_TestRun_Script extends BackboneElement {
  /** The language for the test cases e.g. 'gherkin', 'testscript'. */
  language?: CodeableConcept;
  /** The actual content of the cases - references to TestScripts or externally defined content. */
  sourceReference?: Reference;
  /** The actual content of the cases - references to TestScripts or externally defined content. */
  sourceString?: string;
  /** Extensions for sourceString */
  _sourceString?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const TestPlan_TestCase_TestRun_ScriptSchemaInternal =
  BackboneElementSchemaInternal.extend({
    language: z.lazy(getCodeableConceptSchema).optional(),
    sourceReference: z.lazy(getReferenceSchema).optional(),
    sourceString: fhirString().optional(),
    _sourceString: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const source_x_Present = ["sourceReference", "sourceString"].filter(
        (field) => record[field] !== undefined,
      );
      if (source_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of sourceReference, sourceString may be present for source[x]",
          path: [source_x_Present[0]],
        });
      }
    });

export const TestPlan_TestCase_TestRun_ScriptSchema =
  TestPlan_TestCase_TestRun_ScriptSchemaInternal as z.ZodType<TestPlan_TestCase_TestRun_Script>;
