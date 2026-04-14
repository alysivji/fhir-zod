// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Information about a page within the IG. */
export interface ImplementationGuide_Manifest_Page extends BackboneElement {
	/** The name of an anchor available on the page. */
	anchor?: Array<string>;
	/** Extensions for anchor */
	_anchor?: Array<Element>;
	/** Relative path to the page. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** Label for the page intended for human display. */
	title?: string;
	/** Extensions for title */
	_title?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImplementationGuide_Manifest_PageSchemaInternal =
	BackboneElementSchemaInternal.extend({
		anchor: fhirString().array().optional(),
		_anchor: z.lazy(getElementSchema).array().optional(),
		name: fhirString(),
		_name: z.lazy(getElementSchema).optional(),
		title: fhirString().optional(),
		_title: z.lazy(getElementSchema).optional(),
	}).strict();

export const ImplementationGuide_Manifest_PageSchema =
	ImplementationGuide_Manifest_PageSchemaInternal as z.ZodType<ImplementationGuide_Manifest_Page>;
