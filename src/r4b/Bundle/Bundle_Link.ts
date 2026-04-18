// Source: https://hl7.org/fhir/R4B/bundle-definitions.html#Bundle.link
// Profile: http://hl7.org/fhir/StructureDefinition/Bundle
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { fhirString, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A series of links that provide context to this bundle. */
export interface Bundle_Link extends BackboneElement {
  /** A name which details the functional use for this link - see [http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1). */
  relation: string;
  /** Extensions for relation */
  _relation?: Element;
  /** The reference details for the link. */
  url: string;
  /** Extensions for url */
  _url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Bundle_LinkSchemaInternal = BackboneElementSchemaInternal.extend({
  relation: fhirString(),
  _relation: z.lazy(getElementSchema).optional(),
  url: fhirUri(),
  _url: z.lazy(getElementSchema).optional(),
}).strict();

export const Bundle_LinkSchema =
  Bundle_LinkSchemaInternal as z.ZodType<Bundle_Link>;
