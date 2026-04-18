// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Observation } from "./Observation";
export { ObservationSchema } from "./Observation";
export type { Observation_Component } from "./Observation_Component";
export { Observation_ComponentSchema } from "./Observation_Component";
export type { Observation_ReferenceRange } from "./Observation_ReferenceRange";
export { Observation_ReferenceRangeSchema } from "./Observation_ReferenceRange";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ObservationSchemaInternal } from "./Observation";

_registerFhirResourceSchemas({
	Observation: ObservationSchemaInternal,
});
