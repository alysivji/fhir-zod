// Profile: http://hl7.org/fhir/StructureDefinition/ImagingSelection
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/**
 * Each imaging selection instance or frame list might includes an image region, specified by a region type and a set of 2D coordinates.
 *        If the parent imagingSelection.instance contains a subset element of type frame, the image region applies to all frames in the subset list.
 */
export interface ImagingSelection_Instance_ImageRegion2D
	extends BackboneElement {
	/**
	 * The coordinates describing the image region. Encoded as a set of (column, row) pairs that denote positions in the selected image / frames specified with sub-pixel resolution.
	 *        The origin at the TLHC of the TLHC pixel is 0.0\0.0, the BRHC of the TLHC pixel is 1.0\1.0, and the BRHC of the BRHC pixel is the number of columns\rows in the image / frames. The values must be within the range 0\0 to the number of columns\rows in the image / frames.
	 */
	coordinate: Array<number>;
	/** Extensions for coordinate */
	_coordinate?: Array<Element>;
	/** Specifies the type of image region. */
	regionType: "circle" | "ellipse" | "interpolated" | "point" | "polyline";
	/** Extensions for regionType */
	_regionType?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ImagingSelection_Instance_ImageRegion2DSchemaInternal =
	BackboneElementSchemaInternal.extend({
		coordinate: z.number().array(),
		_coordinate: z.lazy(getElementSchema).array().optional(),
		regionType: z.enum([
			"circle",
			"ellipse",
			"interpolated",
			"point",
			"polyline",
		]),
		_regionType: z.lazy(getElementSchema).optional(),
	}).strict();

export const ImagingSelection_Instance_ImageRegion2DSchema =
	ImagingSelection_Instance_ImageRegion2DSchemaInternal as z.ZodType<ImagingSelection_Instance_ImageRegion2D>;
