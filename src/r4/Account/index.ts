// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Account } from "./Account";
export { AccountSchema } from "./Account";
export type { Account_Coverage } from "./Account_Coverage";
export { Account_CoverageSchema } from "./Account_Coverage";
export type { Account_Guarantor } from "./Account_Guarantor";
export { Account_GuarantorSchema } from "./Account_Guarantor";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { AccountSchemaInternal } from "./Account";

_registerFhirResourceSchemas({
	Account: AccountSchemaInternal,
});
