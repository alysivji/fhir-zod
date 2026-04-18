// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { ImagingManifest } from "./ImagingManifest";
export { ImagingManifestSchema } from "./ImagingManifest";
export type { ImagingManifest_Study } from "./ImagingManifest_Study";
export { ImagingManifest_StudySchema } from "./ImagingManifest_Study";
export type { ImagingManifest_Study_Series } from "./ImagingManifest_Study_Series";
export { ImagingManifest_Study_SeriesSchema } from "./ImagingManifest_Study_Series";
export type { ImagingManifest_Study_Series_Instance } from "./ImagingManifest_Study_Series_Instance";
export { ImagingManifest_Study_Series_InstanceSchema } from "./ImagingManifest_Study_Series_Instance";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ImagingManifestSchemaInternal } from "./ImagingManifest";

_registerFhirResourceSchemas({
	ImagingManifest: ImagingManifestSchemaInternal,
});
