// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Account } from "./Account";
export { AccountSchema } from "./Account";
export type { Account_Balance } from "./Account_Balance";
export { Account_BalanceSchema } from "./Account_Balance";
export type { Account_Coverage } from "./Account_Coverage";
export { Account_CoverageSchema } from "./Account_Coverage";
export type { Account_Diagnosis } from "./Account_Diagnosis";
export { Account_DiagnosisSchema } from "./Account_Diagnosis";
export type { Account_Guarantor } from "./Account_Guarantor";
export { Account_GuarantorSchema } from "./Account_Guarantor";
export type { Account_Procedure } from "./Account_Procedure";
export { Account_ProcedureSchema } from "./Account_Procedure";
export type { Account_RelatedAccount } from "./Account_RelatedAccount";
export { Account_RelatedAccountSchema } from "./Account_RelatedAccount";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { AccountSchemaInternal } from "./Account";

_registerFhirResourceSchemas({
	Account: AccountSchemaInternal,
});
