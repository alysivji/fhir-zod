// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { CommunicationRequest } from "./CommunicationRequest";
export { CommunicationRequestSchema } from "./CommunicationRequest";
export type { CommunicationRequest_Payload } from "./CommunicationRequest_Payload";
export { CommunicationRequest_PayloadSchema } from "./CommunicationRequest_Payload";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CommunicationRequestSchemaInternal } from "./CommunicationRequest";

_registerFhirResourceSchemas({
	CommunicationRequest: CommunicationRequestSchemaInternal,
});
