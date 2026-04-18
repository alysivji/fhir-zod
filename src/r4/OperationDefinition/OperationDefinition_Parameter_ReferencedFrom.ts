// Profile: http://hl7.org/fhir/StructureDefinition/OperationDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Identifies other resource parameters within the operation invocation that are expected to resolve to this resource. */
export interface OperationDefinition_Parameter_ReferencedFrom
  extends BackboneElement {
  /** The name of the parameter or dot-separated path of parameter names pointing to the resource parameter that is expected to contain a reference to this resource. */
  source: string;
  /** Extensions for source */
  _source?: Element;
  /** The id of the element in the referencing resource that is expected to resolve to this resource. */
  sourceId?: string;
  /** Extensions for sourceId */
  _sourceId?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const OperationDefinition_Parameter_ReferencedFromSchemaInternal =
  BackboneElementSchemaInternal.extend({
    source: fhirString(),
    _source: z.lazy(getElementSchema).optional(),
    sourceId: fhirString().optional(),
    _sourceId: z.lazy(getElementSchema).optional(),
  }).strict();

export const OperationDefinition_Parameter_ReferencedFromSchema =
  OperationDefinition_Parameter_ReferencedFromSchemaInternal as z.ZodType<OperationDefinition_Parameter_ReferencedFrom>;
