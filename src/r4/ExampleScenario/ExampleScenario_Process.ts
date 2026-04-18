// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ExampleScenario_Process_Step } from "./ExampleScenario_Process_Step";
import { ExampleScenario_Process_StepSchemaInternal } from "./ExampleScenario_Process_Step";

/** Each major process - a group of operations. */
export interface ExampleScenario_Process extends BackboneElement {
  /** A longer description of the group of operations. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Description of final status after the process ends. */
  postConditions?: string;
  /** Extensions for postConditions */
  _postConditions?: Element;
  /** Description of initial status before the process starts. */
  preConditions?: string;
  /** Extensions for preConditions */
  _preConditions?: Element;
  /** Each step of the process. */
  step?: Array<ExampleScenario_Process_Step>;
  /** The diagram title of the group of operations. */
  title: string;
  /** Extensions for title */
  _title?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExampleScenario_Process_StepSchema =
  (): z.ZodType<ExampleScenario_Process_Step> =>
    ExampleScenario_Process_StepSchemaInternal as z.ZodType<ExampleScenario_Process_Step>;

/** @internal */
export const ExampleScenario_ProcessSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    postConditions: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _postConditions: z.lazy(getElementSchema).optional(),
    preConditions: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _preConditions: z.lazy(getElementSchema).optional(),
    step: z.lazy(getExampleScenario_Process_StepSchema).array().optional(),
    title: fhirString(),
    _title: z.lazy(getElementSchema).optional(),
  }).strict();

export const ExampleScenario_ProcessSchema =
  ExampleScenario_ProcessSchemaInternal as z.ZodType<ExampleScenario_Process>;
