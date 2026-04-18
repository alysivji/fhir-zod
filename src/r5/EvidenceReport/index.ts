// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { EvidenceReport } from "./EvidenceReport";
export { EvidenceReportSchema } from "./EvidenceReport";
export type { EvidenceReport_RelatesTo } from "./EvidenceReport_RelatesTo";
export { EvidenceReport_RelatesToSchema } from "./EvidenceReport_RelatesTo";
export type { EvidenceReport_RelatesTo_Target } from "./EvidenceReport_RelatesTo_Target";
export { EvidenceReport_RelatesTo_TargetSchema } from "./EvidenceReport_RelatesTo_Target";
export type { EvidenceReport_Section } from "./EvidenceReport_Section";
export { EvidenceReport_SectionSchema } from "./EvidenceReport_Section";
export type { EvidenceReport_Subject } from "./EvidenceReport_Subject";
export { EvidenceReport_SubjectSchema } from "./EvidenceReport_Subject";
export type { EvidenceReport_Subject_Characteristic } from "./EvidenceReport_Subject_Characteristic";
export { EvidenceReport_Subject_CharacteristicSchema } from "./EvidenceReport_Subject_Characteristic";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { EvidenceReportSchemaInternal } from "./EvidenceReport";

_registerFhirResourceSchemas({
	EvidenceReport: EvidenceReportSchemaInternal,
});
