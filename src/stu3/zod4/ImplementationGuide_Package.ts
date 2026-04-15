// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ImplementationGuide_Package_Resource } from "./ImplementationGuide_Package_Resource";
import { ImplementationGuide_Package_ResourceSchemaInternal } from "./ImplementationGuide_Package_Resource";

/** A logical group of resources. Logical groups can be used when building pages. */
export interface ImplementationGuide_Package extends BackboneElement {
	/** Human readable text describing the package. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The name for the group, as used in page.package. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource. */
	resource: Array<ImplementationGuide_Package_Resource>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getImplementationGuide_Package_ResourceSchema =
	(): z.ZodType<ImplementationGuide_Package_Resource> =>
		ImplementationGuide_Package_ResourceSchemaInternal as z.ZodType<ImplementationGuide_Package_Resource>;

/** @internal */
export const ImplementationGuide_PackageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		resource: z.lazy(getImplementationGuide_Package_ResourceSchema).array(),
	}).strict();

export const ImplementationGuide_PackageSchema =
	ImplementationGuide_PackageSchemaInternal as z.ZodType<ImplementationGuide_Package>;
