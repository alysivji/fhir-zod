// Profile: http://hl7.org/fhir/StructureDefinition/ImagingSelection
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Each imaging selection might includes a 3D image region, specified by a region type and a set of 3D coordinates. */
export interface ImagingSelection_Instance_ImageRegion3D
	extends BackboneElement {
	/** The coordinates describing the image region. Encoded as an ordered set of (x,y,z) triplets (in mm and may be negative) that define a region of interest in the patient-relative Reference Coordinate System defined by ImagingSelection.frameOfReferenceUid element. */
	coordinate: Array<number | null>;
	/** Extensions for coordinate */
	_coordinate?: Array<Element | null>;
	/** Specifies the type of image region. */
	regionType:
		| "ellipse"
		| "ellipsoid"
		| "multipoint"
		| "point"
		| "polygon"
		| "polyline";
	/** Extensions for regionType */
	_regionType?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImagingSelection_Instance_ImageRegion3DSchemaInternal =
	BackboneElementSchemaInternal.extend({
		coordinate: z.number().nullable().array(),
		_coordinate: z.lazy(getElementSchema).nullable().array().optional(),
		regionType: z.enum([
			"ellipse",
			"ellipsoid",
			"multipoint",
			"point",
			"polygon",
			"polyline",
		]),
		_regionType: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.coordinate,
				record._coordinate,
				"coordinate",
				"_coordinate",
				ctx,
			);
		});

export const ImagingSelection_Instance_ImageRegion3DSchema =
	ImagingSelection_Instance_ImageRegion3DSchemaInternal as z.ZodType<ImagingSelection_Instance_ImageRegion3D>;
