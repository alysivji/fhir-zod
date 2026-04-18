// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { DeviceMetric } from "./DeviceMetric";
export { DeviceMetricSchema } from "./DeviceMetric";
export type { DeviceMetric_Calibration } from "./DeviceMetric_Calibration";
export { DeviceMetric_CalibrationSchema } from "./DeviceMetric_Calibration";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { DeviceMetricSchemaInternal } from "./DeviceMetric";

_registerFhirResourceSchemas({
  DeviceMetric: DeviceMetricSchemaInternal,
});
