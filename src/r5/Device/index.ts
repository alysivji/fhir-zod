// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Device } from "./Device";
export { DeviceSchema } from "./Device";
export type { Device_ConformsTo } from "./Device_ConformsTo";
export { Device_ConformsToSchema } from "./Device_ConformsTo";
export type { Device_Name } from "./Device_Name";
export { Device_NameSchema } from "./Device_Name";
export type { Device_Property } from "./Device_Property";
export { Device_PropertySchema } from "./Device_Property";
export type { Device_UdiCarrier } from "./Device_UdiCarrier";
export { Device_UdiCarrierSchema } from "./Device_UdiCarrier";
export type { Device_Version } from "./Device_Version";
export { Device_VersionSchema } from "./Device_Version";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { DeviceSchemaInternal } from "./Device";

_registerFhirResourceSchemas({
	Device: DeviceSchemaInternal,
});
