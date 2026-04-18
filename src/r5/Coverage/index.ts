// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Coverage } from "./Coverage";
export { CoverageSchema } from "./Coverage";
export type { Coverage_Class } from "./Coverage_Class";
export { Coverage_ClassSchema } from "./Coverage_Class";
export type { Coverage_CostToBeneficiary } from "./Coverage_CostToBeneficiary";
export { Coverage_CostToBeneficiarySchema } from "./Coverage_CostToBeneficiary";
export type { Coverage_CostToBeneficiary_Exception } from "./Coverage_CostToBeneficiary_Exception";
export { Coverage_CostToBeneficiary_ExceptionSchema } from "./Coverage_CostToBeneficiary_Exception";
export type { Coverage_PaymentBy } from "./Coverage_PaymentBy";
export { Coverage_PaymentBySchema } from "./Coverage_PaymentBy";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CoverageSchemaInternal } from "./Coverage";

_registerFhirResourceSchemas({
	Coverage: CoverageSchemaInternal,
});
