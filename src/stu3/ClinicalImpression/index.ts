// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { ClinicalImpression } from "./ClinicalImpression";
export { ClinicalImpressionSchema } from "./ClinicalImpression";
export type { ClinicalImpression_Finding } from "./ClinicalImpression_Finding";
export { ClinicalImpression_FindingSchema } from "./ClinicalImpression_Finding";
export type { ClinicalImpression_Investigation } from "./ClinicalImpression_Investigation";
export { ClinicalImpression_InvestigationSchema } from "./ClinicalImpression_Investigation";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ClinicalImpressionSchemaInternal } from "./ClinicalImpression";

_registerFhirResourceSchemas({
	ClinicalImpression: ClinicalImpressionSchemaInternal,
});
