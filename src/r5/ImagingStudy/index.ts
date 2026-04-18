// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { ImagingStudy } from "./ImagingStudy";
export { ImagingStudySchema } from "./ImagingStudy";
export type { ImagingStudy_Series } from "./ImagingStudy_Series";
export { ImagingStudy_SeriesSchema } from "./ImagingStudy_Series";
export type { ImagingStudy_Series_Instance } from "./ImagingStudy_Series_Instance";
export { ImagingStudy_Series_InstanceSchema } from "./ImagingStudy_Series_Instance";
export type { ImagingStudy_Series_Performer } from "./ImagingStudy_Series_Performer";
export { ImagingStudy_Series_PerformerSchema } from "./ImagingStudy_Series_Performer";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ImagingStudySchemaInternal } from "./ImagingStudy";

_registerFhirResourceSchemas({
	ImagingStudy: ImagingStudySchemaInternal,
});
