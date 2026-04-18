// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Device } from "./Device";
export { DeviceSchema } from "./Device";
export type { Device_DeviceName } from "./Device_DeviceName";
export { Device_DeviceNameSchema } from "./Device_DeviceName";
export type { Device_Property } from "./Device_Property";
export { Device_PropertySchema } from "./Device_Property";
export type { Device_Specialization } from "./Device_Specialization";
export { Device_SpecializationSchema } from "./Device_Specialization";
export type { Device_UdiCarrier } from "./Device_UdiCarrier";
export { Device_UdiCarrierSchema } from "./Device_UdiCarrier";
export type { Device_Version } from "./Device_Version";
export { Device_VersionSchema } from "./Device_Version";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { DeviceSchemaInternal } from "./Device";

_registerFhirResourceSchemas({
	Device: DeviceSchemaInternal,
});
