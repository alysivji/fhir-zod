// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { VerificationResult } from "./VerificationResult";
export { VerificationResultSchema } from "./VerificationResult";
export type { VerificationResult_Attestation } from "./VerificationResult_Attestation";
export { VerificationResult_AttestationSchema } from "./VerificationResult_Attestation";
export type { VerificationResult_PrimarySource } from "./VerificationResult_PrimarySource";
export { VerificationResult_PrimarySourceSchema } from "./VerificationResult_PrimarySource";
export type { VerificationResult_Validator } from "./VerificationResult_Validator";
export { VerificationResult_ValidatorSchema } from "./VerificationResult_Validator";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { VerificationResultSchemaInternal } from "./VerificationResult";

_registerFhirResourceSchemas({
	VerificationResult: VerificationResultSchemaInternal,
});
