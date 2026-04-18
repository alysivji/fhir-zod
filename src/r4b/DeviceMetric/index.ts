// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { DeviceMetric } from "./DeviceMetric";
export { DeviceMetricSchema } from "./DeviceMetric";
export type { DeviceMetric_Calibration } from "./DeviceMetric_Calibration";
export { DeviceMetric_CalibrationSchema } from "./DeviceMetric_Calibration";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { DeviceMetricSchemaInternal } from "./DeviceMetric";

_registerFhirResourceSchemas({
	DeviceMetric: DeviceMetricSchemaInternal,
});
