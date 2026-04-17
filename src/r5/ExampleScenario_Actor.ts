// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A system or person who shares or receives an instance within the scenario. */
export interface ExampleScenario_Actor extends BackboneElement {
  /** An explanation of who/what the actor is and its role in the scenario. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A unique string within the scenario that is used to reference the actor. */
  key: string;
  /** Extensions for key */
  _key?: Element;
  /** The human-readable name for the actor used when rendering the scenario. */
  title: string;
  /** Extensions for title */
  _title?: Element;
  /** The category of actor - person or system. */
  type: "person" | "system";
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExampleScenario_ActorSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    key: fhirString(),
    _key: z.lazy(getElementSchema).optional(),
    title: fhirString(),
    _title: z.lazy(getElementSchema).optional(),
    type: z.enum(["person", "system"]),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const ExampleScenario_ActorSchema =
  ExampleScenario_ActorSchemaInternal as z.ZodType<ExampleScenario_Actor>;
