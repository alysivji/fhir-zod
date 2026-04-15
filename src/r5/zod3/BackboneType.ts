// Profile: http://hl7.org/fhir/StructureDefinition/BackboneType
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { DataType } from "./DataType";
import { DataTypeSchemaInternal } from "./DataType";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** BackboneType Type: Base definition for the few data types that are allowed to carry modifier extensions. */
export interface BackboneType extends DataType {
	/**
	 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.
	 *
	 * Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
	 */
	modifierExtension?: Array<Extension>;
}

const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const BackboneTypeSchemaInternal = DataTypeSchemaInternal.extend({
	modifierExtension: z.lazy(getExtensionSchema).array().optional(),
}).strict();

export const BackboneTypeSchema =
	BackboneTypeSchemaInternal as z.ZodType<BackboneType>;
