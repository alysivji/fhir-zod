// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Provenance } from "./Provenance";
export { ProvenanceSchema } from "./Provenance";
export type { Provenance_Agent } from "./Provenance_Agent";
export { Provenance_AgentSchema } from "./Provenance_Agent";
export type { Provenance_Entity } from "./Provenance_Entity";
export { Provenance_EntitySchema } from "./Provenance_Entity";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ProvenanceSchemaInternal } from "./Provenance";

_registerFhirResourceSchemas({
	Provenance: ProvenanceSchemaInternal,
});
