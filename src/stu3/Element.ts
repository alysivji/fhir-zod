// Profile: http://hl7.org/fhir/StructureDefinition/Element
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Element Type */
export interface Element {
	/** May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Array<Extension>;
	/** unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
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
