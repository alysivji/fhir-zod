// Source: https://hl7.org/fhir/STU3/backboneelement.html
// Profile: http://hl7.org/fhir/StructureDefinition/BackboneElement
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for BackboneElement Type */
export interface BackboneElement extends Element {
  /** May be used to represent additional information that is not part of the basic definition of the element, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions. */
  modifierExtension?: Array<Extension>;
}

const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const BackboneElementSchemaInternal = ElementSchemaInternal.extend({
  modifierExtension: z.lazy(getExtensionSchema).array().optional(),
}).strict();

export const BackboneElementSchema =
  BackboneElementSchemaInternal as z.ZodType<BackboneElement>;
