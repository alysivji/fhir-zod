// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Indicates an alternative step that can be taken instead of the sub-process, scenario or operation.  E.g. to represent non-happy-path/exceptional/atypical circumstances. */
export interface ExampleScenario_Process_Step_Alternative
  extends BackboneElement {
  /** A human-readable description of the alternative explaining when the alternative should occur rather than the base step. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Indicates the operation, sub-process or scenario that happens if the alternative option is selected. */
  step?: Array<unknown>;
  /** The label to display for the alternative that gives a sense of the circumstance in which the alternative should be invoked. */
  title: string;
  /** Extensions for title */
  _title?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExampleScenario_Process_Step_AlternativeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    step: z.unknown().array().optional(),
    title: fhirString(),
    _title: z.lazy(getElementSchema).optional(),
  }).strict();

export const ExampleScenario_Process_Step_AlternativeSchema =
  ExampleScenario_Process_Step_AlternativeSchemaInternal as z.ZodType<ExampleScenario_Process_Step_Alternative>;
