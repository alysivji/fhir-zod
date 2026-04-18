// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Claim } from "./Claim";
export { ClaimSchema } from "./Claim";
export type { Claim_Accident } from "./Claim_Accident";
export { Claim_AccidentSchema } from "./Claim_Accident";
export type { Claim_CareTeam } from "./Claim_CareTeam";
export { Claim_CareTeamSchema } from "./Claim_CareTeam";
export type { Claim_Diagnosis } from "./Claim_Diagnosis";
export { Claim_DiagnosisSchema } from "./Claim_Diagnosis";
export type { Claim_Insurance } from "./Claim_Insurance";
export { Claim_InsuranceSchema } from "./Claim_Insurance";
export type { Claim_Item } from "./Claim_Item";
export { Claim_ItemSchema } from "./Claim_Item";
export type { Claim_Item_Detail } from "./Claim_Item_Detail";
export { Claim_Item_DetailSchema } from "./Claim_Item_Detail";
export type { Claim_Item_Detail_SubDetail } from "./Claim_Item_Detail_SubDetail";
export { Claim_Item_Detail_SubDetailSchema } from "./Claim_Item_Detail_SubDetail";
export type { Claim_Payee } from "./Claim_Payee";
export { Claim_PayeeSchema } from "./Claim_Payee";
export type { Claim_Procedure } from "./Claim_Procedure";
export { Claim_ProcedureSchema } from "./Claim_Procedure";
export type { Claim_Related } from "./Claim_Related";
export { Claim_RelatedSchema } from "./Claim_Related";
export type { Claim_SupportingInfo } from "./Claim_SupportingInfo";
export { Claim_SupportingInfoSchema } from "./Claim_SupportingInfo";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ClaimSchemaInternal } from "./Claim";

_registerFhirResourceSchemas({
  Claim: ClaimSchemaInternal,
});
