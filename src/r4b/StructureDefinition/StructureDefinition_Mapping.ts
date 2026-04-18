// Profile: http://hl7.org/fhir/StructureDefinition/StructureDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirId, fhirString, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** An external specification that the content is mapped to. */
export interface StructureDefinition_Mapping extends BackboneElement {
  /** Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage. */
  comment?: string;
  /** Extensions for comment */
  _comment?: Element;
  /** An Internal id that is used to identify this mapping set when specific mappings are made. */
  identity: string;
  /** Extensions for identity */
  _identity?: Element;
  /** A name for the specification that is being mapped to. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** An absolute URI that identifies the specification that this mapping is expressed to. */
  uri?: string;
  /** Extensions for uri */
  _uri?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureDefinition_MappingSchemaInternal =
  BackboneElementSchemaInternal.extend({
    comment: fhirString().optional(),
    _comment: z.lazy(getElementSchema).optional(),
    identity: fhirId(),
    _identity: z.lazy(getElementSchema).optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    uri: fhirUri().optional(),
    _uri: z.lazy(getElementSchema).optional(),
  }).strict();

export const StructureDefinition_MappingSchema =
  StructureDefinition_MappingSchemaInternal as z.ZodType<StructureDefinition_Mapping>;
