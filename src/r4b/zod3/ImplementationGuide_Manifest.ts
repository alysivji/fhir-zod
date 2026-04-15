// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString, fhirUrl } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ImplementationGuide_Manifest_Page } from "./ImplementationGuide_Manifest_Page";
import { ImplementationGuide_Manifest_PageSchemaInternal } from "./ImplementationGuide_Manifest_Page";
import type { ImplementationGuide_Manifest_Resource } from "./ImplementationGuide_Manifest_Resource";
import { ImplementationGuide_Manifest_ResourceSchemaInternal } from "./ImplementationGuide_Manifest_Resource";

/** Information about an assembled implementation guide, created by the publication tooling. */
export interface ImplementationGuide_Manifest extends BackboneElement {
	/** Indicates a relative path to an image that exists within the IG. */
	image?: Array<string | null>;
	/** Extensions for image */
	_image?: Array<Element | null>;
	/** Indicates the relative path of an additional non-page, non-image file that is part of the IG - e.g. zip, jar and similar files that could be the target of a hyperlink in a derived IG. */
	other?: Array<string | null>;
	/** Extensions for other */
	_other?: Array<Element | null>;
	/** Information about a page within the IG. */
	page?: Array<ImplementationGuide_Manifest_Page>;
	/** A pointer to official web page, PDF or other rendering of the implementation guide. */
	rendering?: string;
	/** Extensions for rendering */
	_rendering?: Element;
	/** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource. */
	resource: Array<ImplementationGuide_Manifest_Resource>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getImplementationGuide_Manifest_PageSchema =
	(): z.ZodType<ImplementationGuide_Manifest_Page> =>
		ImplementationGuide_Manifest_PageSchemaInternal as z.ZodType<ImplementationGuide_Manifest_Page>;
const getImplementationGuide_Manifest_ResourceSchema =
	(): z.ZodType<ImplementationGuide_Manifest_Resource> =>
		ImplementationGuide_Manifest_ResourceSchemaInternal as z.ZodType<ImplementationGuide_Manifest_Resource>;

/** @internal */
export const ImplementationGuide_ManifestSchemaInternal =
	BackboneElementSchemaInternal.extend({
		image: fhirString().nullable().array().optional(),
		_image: z.lazy(getElementSchema).nullable().array().optional(),
		other: fhirString().nullable().array().optional(),
		_other: z.lazy(getElementSchema).nullable().array().optional(),
		page: z.lazy(getImplementationGuide_Manifest_PageSchema).array().optional(),
		rendering: fhirUrl().optional(),
		_rendering: z.lazy(getElementSchema).optional(),
		resource: z.lazy(getImplementationGuide_Manifest_ResourceSchema).array(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.image,
				record._image,
				"image",
				"_image",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.other,
				record._other,
				"other",
				"_other",
				ctx,
			);
		});

export const ImplementationGuide_ManifestSchema =
	ImplementationGuide_ManifestSchemaInternal as z.ZodType<ImplementationGuide_Manifest>;
