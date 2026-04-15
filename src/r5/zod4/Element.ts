// Profile: http://hl7.org/fhir/StructureDefinition/Element
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { Base } from "./Base";
import { BaseSchemaInternal } from "./Base";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Element Type: Base definition for all elements in a resource. */
export interface Element extends Base {
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and managable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Array<Extension>;
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string;
	/** Extensions for id */
	_id?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const ElementSchemaInternal = BaseSchemaInternal.extend({
	extension: z.lazy(getExtensionSchema).array().optional(),
	id: fhirString().optional(),
	_id: z.lazy(getElementSchema).optional(),
}).strict();

export const ElementSchema = ElementSchemaInternal as z.ZodType<Element>;
