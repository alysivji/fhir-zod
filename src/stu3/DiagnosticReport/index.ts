// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { DiagnosticReport } from "./DiagnosticReport";
export { DiagnosticReportSchema } from "./DiagnosticReport";
export type { DiagnosticReport_Image } from "./DiagnosticReport_Image";
export { DiagnosticReport_ImageSchema } from "./DiagnosticReport_Image";
export type { DiagnosticReport_Performer } from "./DiagnosticReport_Performer";
export { DiagnosticReport_PerformerSchema } from "./DiagnosticReport_Performer";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { DiagnosticReportSchemaInternal } from "./DiagnosticReport";

_registerFhirResourceSchemas({
	DiagnosticReport: DiagnosticReportSchemaInternal,
});
