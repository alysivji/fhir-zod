// Profile: http://hl7.org/fhir/StructureDefinition/Element
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Element Type: Base definition for all elements in a resource. */
export interface Element {
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
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
export const ElementSchemaInternal = z
	.object({
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const ElementSchema = ElementSchemaInternal as z.ZodType<Element>;
