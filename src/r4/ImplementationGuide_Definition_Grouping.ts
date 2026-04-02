// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** A logical group of resources. Logical groups can be used when building pages. */
export interface ImplementationGuide_Definition_Grouping
	extends BackboneElement {
	/** Human readable text describing the package. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The human-readable title to display for the package of resources when rendering the implementation guide. */
	name: string;
	/** Extensions for name */
	_name?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_Definition_GroupingSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		name: z.string().regex(/[ \r\n\t\S]+/),
		_name: z.lazy(getElementSchema).optional(),
	}).strict();

export const ImplementationGuide_Definition_GroupingSchema =
	ImplementationGuide_Definition_GroupingSchemaInternal as z.ZodType<ImplementationGuide_Definition_Grouping>;
