// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { ImagingStudy } from "./ImagingStudy";
export { ImagingStudySchema } from "./ImagingStudy";
export type { ImagingStudy_Series } from "./ImagingStudy_Series";
export { ImagingStudy_SeriesSchema } from "./ImagingStudy_Series";
export type { ImagingStudy_Series_Instance } from "./ImagingStudy_Series_Instance";
export { ImagingStudy_Series_InstanceSchema } from "./ImagingStudy_Series_Instance";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ImagingStudySchemaInternal } from "./ImagingStudy";

_registerFhirResourceSchemas({
	ImagingStudy: ImagingStudySchemaInternal,
});
