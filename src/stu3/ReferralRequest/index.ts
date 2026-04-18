// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { ReferralRequest } from "./ReferralRequest";
export { ReferralRequestSchema } from "./ReferralRequest";
export type { ReferralRequest_Requester } from "./ReferralRequest_Requester";
export { ReferralRequest_RequesterSchema } from "./ReferralRequest_Requester";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ReferralRequestSchemaInternal } from "./ReferralRequest";

_registerFhirResourceSchemas({
	ReferralRequest: ReferralRequestSchemaInternal,
});
