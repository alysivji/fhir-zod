// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Observation } from "./Observation";
export { ObservationSchema } from "./Observation";
export type { Observation_Component } from "./Observation_Component";
export { Observation_ComponentSchema } from "./Observation_Component";
export type { Observation_ReferenceRange } from "./Observation_ReferenceRange";
export { Observation_ReferenceRangeSchema } from "./Observation_ReferenceRange";
export type { Observation_Related } from "./Observation_Related";
export { Observation_RelatedSchema } from "./Observation_Related";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ObservationSchemaInternal } from "./Observation";

_registerFhirResourceSchemas({
	Observation: ObservationSchemaInternal,
});
