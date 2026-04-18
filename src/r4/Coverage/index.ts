// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Coverage } from "./Coverage";
export { CoverageSchema } from "./Coverage";
export type { Coverage_Class } from "./Coverage_Class";
export { Coverage_ClassSchema } from "./Coverage_Class";
export type { Coverage_CostToBeneficiary } from "./Coverage_CostToBeneficiary";
export { Coverage_CostToBeneficiarySchema } from "./Coverage_CostToBeneficiary";
export type { Coverage_CostToBeneficiary_Exception } from "./Coverage_CostToBeneficiary_Exception";
export { Coverage_CostToBeneficiary_ExceptionSchema } from "./Coverage_CostToBeneficiary_Exception";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CoverageSchemaInternal } from "./Coverage";

_registerFhirResourceSchemas({
	Coverage: CoverageSchemaInternal,
});
