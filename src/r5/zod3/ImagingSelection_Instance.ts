// Profile: http://hl7.org/fhir/StructureDefinition/ImagingSelection
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirId, fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ImagingSelection_Instance_ImageRegion2D } from "./ImagingSelection_Instance_ImageRegion2D";
import { ImagingSelection_Instance_ImageRegion2DSchemaInternal } from "./ImagingSelection_Instance_ImageRegion2D";
import type { ImagingSelection_Instance_ImageRegion3D } from "./ImagingSelection_Instance_ImageRegion3D";
import { ImagingSelection_Instance_ImageRegion3DSchemaInternal } from "./ImagingSelection_Instance_ImageRegion3D";

/** Each imaging selection includes one or more selected DICOM SOP instances. */
export interface ImagingSelection_Instance extends BackboneElement {
	/**
	 * Each imaging selection instance or frame list might includes an image region, specified by a region type and a set of 2D coordinates.
	 *        If the parent imagingSelection.instance contains a subset element of type frame, the image region applies to all frames in the subset list.
	 */
	imageRegion2D?: Array<ImagingSelection_Instance_ImageRegion2D>;
	/** Each imaging selection might includes a 3D image region, specified by a region type and a set of 3D coordinates. */
	imageRegion3D?: Array<ImagingSelection_Instance_ImageRegion3D>;
	/** The Instance Number for the selected DICOM instance. */
	number?: number;
	/** Extensions for number */
	_number?: Element;
	/** The SOP Class UID for the selected DICOM instance. */
	sopClass?: Coding;
	/**
	 * Selected subset of the SOP Instance. The content and format of the subset item is determined by the SOP Class of the selected instance.
	 *        May be one of:
	 *        - A list of frame numbers selected from a multiframe SOP Instance.
	 *        - A list of Content Item Observation UID values selected from a DICOM SR or other structured document SOP Instance.
	 *        - A list of segment numbers selected from a segmentation SOP Instance.
	 *        - A list of Region of Interest (ROI) numbers selected from a radiotherapy structure set SOP Instance.
	 */
	subset?: Array<string | null>;
	/** Extensions for subset */
	_subset?: Array<Element | null>;
	/** The SOP Instance UID for the selected DICOM instance. */
	uid: string;
	/** Extensions for uid */
	_uid?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getImagingSelection_Instance_ImageRegion2DSchema =
	(): z.ZodType<ImagingSelection_Instance_ImageRegion2D> =>
		ImagingSelection_Instance_ImageRegion2DSchemaInternal as z.ZodType<ImagingSelection_Instance_ImageRegion2D>;
const getImagingSelection_Instance_ImageRegion3DSchema =
	(): z.ZodType<ImagingSelection_Instance_ImageRegion3D> =>
		ImagingSelection_Instance_ImageRegion3DSchemaInternal as z.ZodType<ImagingSelection_Instance_ImageRegion3D>;

/** @internal */
export const ImagingSelection_InstanceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		imageRegion2D: z
			.lazy(getImagingSelection_Instance_ImageRegion2DSchema)
			.array()
			.optional(),
		imageRegion3D: z
			.lazy(getImagingSelection_Instance_ImageRegion3DSchema)
			.array()
			.optional(),
		number: z.number().int().nonnegative().optional(),
		_number: z.lazy(getElementSchema).optional(),
		sopClass: z.lazy(getCodingSchema).optional(),
		subset: fhirString().nullable().array().optional(),
		_subset: z.lazy(getElementSchema).nullable().array().optional(),
		uid: fhirId(),
		_uid: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.subset,
				record._subset,
				"subset",
				"_subset",
				ctx,
			);
		});

export const ImagingSelection_InstanceSchema =
	ImagingSelection_InstanceSchemaInternal as z.ZodType<ImagingSelection_Instance>;
