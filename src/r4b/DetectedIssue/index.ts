// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { DetectedIssue } from "./DetectedIssue";
export { DetectedIssueSchema } from "./DetectedIssue";
export type { DetectedIssue_Evidence } from "./DetectedIssue_Evidence";
export { DetectedIssue_EvidenceSchema } from "./DetectedIssue_Evidence";
export type { DetectedIssue_Mitigation } from "./DetectedIssue_Mitigation";
export { DetectedIssue_MitigationSchema } from "./DetectedIssue_Mitigation";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { DetectedIssueSchemaInternal } from "./DetectedIssue";

_registerFhirResourceSchemas({
	DetectedIssue: DetectedIssueSchemaInternal,
});
