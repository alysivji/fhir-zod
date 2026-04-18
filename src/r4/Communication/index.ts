// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Communication } from "./Communication";
export { CommunicationSchema } from "./Communication";
export type { Communication_Payload } from "./Communication_Payload";
export { Communication_PayloadSchema } from "./Communication_Payload";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CommunicationSchemaInternal } from "./Communication";

_registerFhirResourceSchemas({
  Communication: CommunicationSchemaInternal,
});
