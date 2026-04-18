// Source: https://hl7.org/fhir/R4B/examplescenario-definitions.html#ExampleScenario.actor
// Profile: http://hl7.org/fhir/StructureDefinition/ExampleScenario
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Actor participating in the resource. */
export interface ExampleScenario_Actor extends BackboneElement {
  /** ID or acronym of actor. */
  actorId: string;
  /** Extensions for actorId */
  _actorId?: Element;
  /** The description of the actor. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** The name of the actor as shown in the page. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The type of actor - person or system. */
  type: "entity" | "person";
  /** Extensions for type */
  _type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExampleScenario_ActorSchemaInternal =
  BackboneElementSchemaInternal.extend({
    actorId: fhirString(),
    _actorId: z.lazy(getElementSchema).optional(),
    description: z
      .string()
      .regex(/[ \r\n\t\S]+/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    type: z.enum(["entity", "person"]),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const ExampleScenario_ActorSchema =
  ExampleScenario_ActorSchemaInternal as z.ZodType<ExampleScenario_Actor>;
