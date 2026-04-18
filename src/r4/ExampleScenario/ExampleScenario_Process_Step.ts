// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ExampleScenario_Process_Step_Alternative } from "./ExampleScenario_Process_Step_Alternative";
import { ExampleScenario_Process_Step_AlternativeSchemaInternal } from "./ExampleScenario_Process_Step_Alternative";
import type { ExampleScenario_Process_Step_Operation } from "./ExampleScenario_Process_Step_Operation";
import { ExampleScenario_Process_Step_OperationSchemaInternal } from "./ExampleScenario_Process_Step_Operation";

/** Each step of the process. */
export interface ExampleScenario_Process_Step extends BackboneElement {
  /** Indicates an alternative step that can be taken instead of the operations on the base step in exceptional/atypical circumstances. */
  alternative?: Array<ExampleScenario_Process_Step_Alternative>;
  /** Each interaction or action. */
  operation?: ExampleScenario_Process_Step_Operation;
  /** If there is a pause in the flow. */
  pause?: boolean;
  /** Extensions for pause */
  _pause?: Element;
  /** Nested process. */
  process?: Array<unknown>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExampleScenario_Process_Step_AlternativeSchema =
  (): z.ZodType<ExampleScenario_Process_Step_Alternative> =>
    ExampleScenario_Process_Step_AlternativeSchemaInternal as z.ZodType<ExampleScenario_Process_Step_Alternative>;
const getExampleScenario_Process_Step_OperationSchema =
  (): z.ZodType<ExampleScenario_Process_Step_Operation> =>
    ExampleScenario_Process_Step_OperationSchemaInternal as z.ZodType<ExampleScenario_Process_Step_Operation>;

/** @internal */
export const ExampleScenario_Process_StepSchemaInternal =
  BackboneElementSchemaInternal.extend({
    alternative: z
      .lazy(getExampleScenario_Process_Step_AlternativeSchema)
      .array()
      .optional(),
    operation: z
      .lazy(getExampleScenario_Process_Step_OperationSchema)
      .optional(),
    pause: z.boolean().optional(),
    _pause: z.lazy(getElementSchema).optional(),
    process: z.unknown().array().optional(),
  }).strict();

export const ExampleScenario_Process_StepSchema =
  ExampleScenario_Process_StepSchemaInternal as z.ZodType<ExampleScenario_Process_Step>;
