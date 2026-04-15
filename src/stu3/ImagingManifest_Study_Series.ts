// Profile: http://hl7.org/fhir/StructureDefinition/ImagingManifest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirOid } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ImagingManifest_Study_Series_Instance } from "./ImagingManifest_Study_Series_Instance";
import { ImagingManifest_Study_Series_InstanceSchemaInternal } from "./ImagingManifest_Study_Series_Instance";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Series identity and locating information of the DICOM SOP instances in the selection. */
export interface ImagingManifest_Study_Series extends BackboneElement {
	/** The network service providing access (e.g., query, view, or retrieval) for this series. See implementation notes for information about using DICOM endpoints. A series-level endpoint, if present, has precedence over a study-level endpoint with the same Endpoint.type. */
	endpoint?: Array<Reference>;
	/** Identity and locating information of the selected DICOM SOP instances. */
	instance: Array<ImagingManifest_Study_Series_Instance>;
	/** Series instance UID of the SOP instances in the selection. */
	uid: string;
	/** Extensions for uid */
	_uid?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getImagingManifest_Study_Series_InstanceSchema =
	(): z.ZodType<ImagingManifest_Study_Series_Instance> =>
		ImagingManifest_Study_Series_InstanceSchemaInternal as z.ZodType<ImagingManifest_Study_Series_Instance>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImagingManifest_Study_SeriesSchemaInternal =
	BackboneElementSchemaInternal.extend({
		endpoint: z.lazy(getReferenceSchema).array().optional(),
		instance: z.lazy(getImagingManifest_Study_Series_InstanceSchema).array(),
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
		});

export const ImagingManifest_Study_SeriesSchema =
	ImagingManifest_Study_SeriesSchemaInternal as z.ZodType<ImagingManifest_Study_Series>;
