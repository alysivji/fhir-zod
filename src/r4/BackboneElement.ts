// Profile: http://hl7.org/fhir/StructureDefinition/BackboneElement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for BackboneElement Type: Base definition for all elements that are defined inside a resource - but not those in a data type. */
export interface BackboneElement extends Element {
	/**
	 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
	 *
	 * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
	 */
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
