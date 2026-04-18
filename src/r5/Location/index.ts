// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Location } from "./Location";
export { LocationSchema } from "./Location";
export type { Location_Position } from "./Location_Position";
export { Location_PositionSchema } from "./Location_Position";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { LocationSchemaInternal } from "./Location";

_registerFhirResourceSchemas({
	Location: LocationSchemaInternal,
});
