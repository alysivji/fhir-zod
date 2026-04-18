// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Device } from "./Device";
export { DeviceSchema } from "./Device";
export type { Device_Udi } from "./Device_Udi";
export { Device_UdiSchema } from "./Device_Udi";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { DeviceSchemaInternal } from "./Device";

_registerFhirResourceSchemas({
	Device: DeviceSchemaInternal,
});
