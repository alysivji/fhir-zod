// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { DeviceRequest } from "./DeviceRequest";
export { DeviceRequestSchema } from "./DeviceRequest";
export type { DeviceRequest_Requester } from "./DeviceRequest_Requester";
export { DeviceRequest_RequesterSchema } from "./DeviceRequest_Requester";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { DeviceRequestSchemaInternal } from "./DeviceRequest";

_registerFhirResourceSchemas({
	DeviceRequest: DeviceRequestSchemaInternal,
});
