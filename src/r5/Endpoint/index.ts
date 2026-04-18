// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Endpoint } from "./Endpoint";
export { EndpointSchema } from "./Endpoint";
export type { Endpoint_Payload } from "./Endpoint_Payload";
export { Endpoint_PayloadSchema } from "./Endpoint_Payload";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { EndpointSchemaInternal } from "./Endpoint";

_registerFhirResourceSchemas({
	Endpoint: EndpointSchemaInternal,
});
