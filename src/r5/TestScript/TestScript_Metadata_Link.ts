// Profile: http://hl7.org/fhir/StructureDefinition/TestScript
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirString, fhirUri } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A link to the FHIR specification that this test is covering. */
export interface TestScript_Metadata_Link extends BackboneElement {
  /** Short description of the link. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** URL to a particular requirement or feature within the FHIR specification. */
  url: string;
  /** Extensions for url */
  _url?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const TestScript_Metadata_LinkSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    url: fhirUri(),
    _url: z.lazy(getElementSchema).optional(),
  }).strict();

export const TestScript_Metadata_LinkSchema =
  TestScript_Metadata_LinkSchemaInternal as z.ZodType<TestScript_Metadata_Link>;
