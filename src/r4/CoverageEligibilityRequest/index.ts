// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { CoverageEligibilityRequest } from "./CoverageEligibilityRequest";
export { CoverageEligibilityRequestSchema } from "./CoverageEligibilityRequest";
export type { CoverageEligibilityRequest_Insurance } from "./CoverageEligibilityRequest_Insurance";
export { CoverageEligibilityRequest_InsuranceSchema } from "./CoverageEligibilityRequest_Insurance";
export type { CoverageEligibilityRequest_Item } from "./CoverageEligibilityRequest_Item";
export { CoverageEligibilityRequest_ItemSchema } from "./CoverageEligibilityRequest_Item";
export type { CoverageEligibilityRequest_Item_Diagnosis } from "./CoverageEligibilityRequest_Item_Diagnosis";
export { CoverageEligibilityRequest_Item_DiagnosisSchema } from "./CoverageEligibilityRequest_Item_Diagnosis";
export type { CoverageEligibilityRequest_SupportingInfo } from "./CoverageEligibilityRequest_SupportingInfo";
export { CoverageEligibilityRequest_SupportingInfoSchema } from "./CoverageEligibilityRequest_SupportingInfo";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CoverageEligibilityRequestSchemaInternal } from "./CoverageEligibilityRequest";

_registerFhirResourceSchemas({
	CoverageEligibilityRequest: CoverageEligibilityRequestSchemaInternal,
});
