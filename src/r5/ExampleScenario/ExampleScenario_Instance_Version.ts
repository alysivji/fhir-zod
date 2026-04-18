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
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Represents the instance as it was at a specific time-point. */
export interface ExampleScenario_Instance_Version extends BackboneElement {
  /** Points to an instance (typically an example) that shows the data that would flow at this point in the scenario. */
  content?: Reference;
  /** An explanation of what this specific version of the instance contains and represents. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A unique string within the instance that is used to reference the version of the instance. */
  key: string;
  /** Extensions for key */
  _key?: Element;
  /** A short descriptive label the version to be used in tables or diagrams. */
  title: string;
  /** Extensions for title */
  _title?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExampleScenario_Instance_VersionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    content: z.lazy(getReferenceSchema).optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _description: z.lazy(getElementSchema).optional(),
    key: fhirString(),
    _key: z.lazy(getElementSchema).optional(),
    title: fhirString(),
    _title: z.lazy(getElementSchema).optional(),
  }).strict();

export const ExampleScenario_Instance_VersionSchema =
  ExampleScenario_Instance_VersionSchemaInternal as z.ZodType<ExampleScenario_Instance_Version>;
