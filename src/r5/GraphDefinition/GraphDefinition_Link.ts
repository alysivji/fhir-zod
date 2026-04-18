// Source: https://hl7.org/fhir/R5/graphdefinition-definitions.html#GraphDefinition.link
// Profile: http://hl7.org/fhir/StructureDefinition/GraphDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirId, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { GraphDefinition_Link_Compartment } from "./GraphDefinition_Link_Compartment";
import { GraphDefinition_Link_CompartmentSchemaInternal } from "./GraphDefinition_Link_Compartment";

/** Links this graph makes rules about. */
export interface GraphDefinition_Link extends BackboneElement {
  /** Compartment Consistency Rules. */
  compartment?: Array<GraphDefinition_Link_Compartment>;
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
  /** A set of parameters to look up. */
  params?: string;
  /** Extensions for params */
  _params?: Element;
  /** A FHIRPath expression that identifies one of FHIR References to other resources. */
  path?: string;
  /** Extensions for path */
  _path?: Element;
  /** Which slice (if profiled). */
  sliceName?: string;
  /** Extensions for sliceName */
  _sliceName?: Element;
  /** The source node for this link. */
  sourceId: string;
  /** Extensions for sourceId */
  _sourceId?: Element;
  /** The target node for this link. */
  targetId: string;
  /** Extensions for targetId */
  _targetId?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getGraphDefinition_Link_CompartmentSchema =
  (): z.ZodType<GraphDefinition_Link_Compartment> =>
    GraphDefinition_Link_CompartmentSchemaInternal as z.ZodType<GraphDefinition_Link_Compartment>;

/** @internal */
export const GraphDefinition_LinkSchemaInternal =
  BackboneElementSchemaInternal.extend({
    compartment: z
      .lazy(getGraphDefinition_Link_CompartmentSchema)
      .array()
      .optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    max: fhirString().optional(),
    _max: z.lazy(getElementSchema).optional(),
    min: z.number().int().optional(),
    _min: z.lazy(getElementSchema).optional(),
    params: fhirString().optional(),
    _params: z.lazy(getElementSchema).optional(),
    path: fhirString().optional(),
    _path: z.lazy(getElementSchema).optional(),
    sliceName: fhirString().optional(),
    _sliceName: z.lazy(getElementSchema).optional(),
    sourceId: fhirId(),
    _sourceId: z.lazy(getElementSchema).optional(),
    targetId: fhirId(),
    _targetId: z.lazy(getElementSchema).optional(),
  }).strict();

export const GraphDefinition_LinkSchema =
  GraphDefinition_LinkSchemaInternal as z.ZodType<GraphDefinition_Link>;
