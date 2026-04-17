// Profile: http://hl7.org/fhir/StructureDefinition/StructureDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { ElementDefinition } from "./ElementDefinition";
import { ElementDefinitionSchemaInternal } from "./ElementDefinition";

/** A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition. */
export interface StructureDefinition_Snapshot extends BackboneElement {
  /** Captures constraints on each element within the resource. */
  element: Array<ElementDefinition>;
}

const getElementDefinitionSchema = (): z.ZodType<ElementDefinition> =>
  ElementDefinitionSchemaInternal as z.ZodType<ElementDefinition>;

/** @internal */
export const StructureDefinition_SnapshotSchemaInternal =
  BackboneElementSchemaInternal.extend({
    element: z.lazy(getElementDefinitionSchema).array(),
  }).strict();

export const StructureDefinition_SnapshotSchema =
  StructureDefinition_SnapshotSchemaInternal as z.ZodType<StructureDefinition_Snapshot>;
