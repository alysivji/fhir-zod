// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { Communication } from "./Communication";
export { CommunicationSchema } from "./Communication";
export type { Communication_Payload } from "./Communication_Payload";
export { Communication_PayloadSchema } from "./Communication_Payload";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CommunicationSchemaInternal } from "./Communication";

_registerFhirResourceSchemas({
	Communication: CommunicationSchemaInternal,
});
