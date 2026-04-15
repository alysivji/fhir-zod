// Profile: http://hl7.org/fhir/StructureDefinition/ImagingManifest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirOid } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ImagingManifest_Study_Series } from "./ImagingManifest_Study_Series";
import { ImagingManifest_Study_SeriesSchemaInternal } from "./ImagingManifest_Study_Series";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Study identity and locating information of the DICOM SOP instances in the selection. */
export interface ImagingManifest_Study extends BackboneElement {
	/** The network service providing access (e.g., query, view, or retrieval) for the study. See implementation notes for information about using DICOM endpoints. A study-level endpoint applies to each series in the study, unless overridden by a series-level endpoint with the same Endpoint.type. */
	endpoint?: Array<Reference>;
	/** Reference to the Imaging Study in FHIR form. */
	imagingStudy?: Reference;
	/** Series identity and locating information of the DICOM SOP instances in the selection. */
	series: Array<ImagingManifest_Study_Series>;
	/** Study instance UID of the SOP instances in the selection. */
	uid: string;
	/** Extensions for uid */
	_uid?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getImagingManifest_Study_SeriesSchema =
	(): z.ZodType<ImagingManifest_Study_Series> =>
		ImagingManifest_Study_SeriesSchemaInternal as z.ZodType<ImagingManifest_Study_Series>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImagingManifest_StudySchemaInternal =
	BackboneElementSchemaInternal.extend({
		endpoint: z.lazy(getReferenceSchema).array().optional(),
		imagingStudy: z.lazy(getReferenceSchema).optional(),
		series: z.lazy(getImagingManifest_Study_SeriesSchema).array(),
		uid: fhirOid(),
		_uid: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.endpoint,
				"endpoint",
				["http://hl7.org/fhir/StructureDefinition/Endpoint"],
				["Endpoint"],
				ctx,
			);
			validateReferenceTarget(
				record.imagingStudy,
				"imagingStudy",
				["http://hl7.org/fhir/StructureDefinition/ImagingStudy"],
				["ImagingStudy"],
				ctx,
			);
		});

export const ImagingManifest_StudySchema =
	ImagingManifest_StudySchemaInternal as z.ZodType<ImagingManifest_Study>;
