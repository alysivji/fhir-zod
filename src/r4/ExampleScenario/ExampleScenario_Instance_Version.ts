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

/** A specific version of the resource. */
export interface ExampleScenario_Instance_Version extends BackboneElement {
  /** The description of the resource version. */
  description: string;
  /** Extensions for description */
  _description?: Element;
  /** The identifier of a specific version of a resource. */
  versionId: string;
  /** Extensions for versionId */
  _versionId?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ExampleScenario_Instance_VersionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: z.string().regex(/[ \r\n\t\S]+/),
    _description: z.lazy(getElementSchema).optional(),
    versionId: fhirString(),
    _versionId: z.lazy(getElementSchema).optional(),
  }).strict();

export const ExampleScenario_Instance_VersionSchema =
  ExampleScenario_Instance_VersionSchemaInternal as z.ZodType<ExampleScenario_Instance_Version>;
