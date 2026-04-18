// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { Location } from "./Location";
export { LocationSchema } from "./Location";
export type { Location_HoursOfOperation } from "./Location_HoursOfOperation";
export { Location_HoursOfOperationSchema } from "./Location_HoursOfOperation";
export type { Location_Position } from "./Location_Position";
export { Location_PositionSchema } from "./Location_Position";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { LocationSchemaInternal } from "./Location";

_registerFhirResourceSchemas({
	Location: LocationSchemaInternal,
});
