// Source: https://hl7.org/fhir/STU3/graphdefinition-definitions.html#GraphDefinition.link
// Profile: http://hl7.org/fhir/StructureDefinition/GraphDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { GraphDefinition_Link_Target } from "./GraphDefinition_Link_Target";
import { GraphDefinition_Link_TargetSchemaInternal } from "./GraphDefinition_Link_Target";

/** Links this graph makes rules about. */
export interface GraphDefinition_Link extends BackboneElement {
  /** Information about why this link is of interest in this graph definition. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Maximum occurrences for this link. */
  max?: string;
  /** Extensions for max */
  _max?: Element;
  /** Minimum occurrences for this link. */
  min?: number;
  /** Extensions for min */
  _min?: Element;
  /** Path in the resource that contains the link. */
  path: string;
  /** Extensions for path */
  _path?: Element;
  /** Which slice (if profiled). */
  sliceName?: string;
  /** Extensions for sliceName */
  _sliceName?: Element;
  /** Potential target for the link. */
  target: Array<GraphDefinition_Link_Target>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getGraphDefinition_Link_TargetSchema =
  (): z.ZodType<GraphDefinition_Link_Target> =>
    GraphDefinition_Link_TargetSchemaInternal as z.ZodType<GraphDefinition_Link_Target>;

/** @internal */
export const GraphDefinition_LinkSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    max: fhirString().optional(),
    _max: z.lazy(getElementSchema).optional(),
    min: z.number().int().optional(),
    _min: z.lazy(getElementSchema).optional(),
    path: fhirString(),
    _path: z.lazy(getElementSchema).optional(),
    sliceName: fhirString().optional(),
    _sliceName: z.lazy(getElementSchema).optional(),
    target: z.lazy(getGraphDefinition_Link_TargetSchema).array(),
  }).strict();

export const GraphDefinition_LinkSchema =
  GraphDefinition_LinkSchemaInternal as z.ZodType<GraphDefinition_Link>;
