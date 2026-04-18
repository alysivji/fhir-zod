// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { AuditEvent } from "./AuditEvent";
export { AuditEventSchema } from "./AuditEvent";
export type { AuditEvent_Agent } from "./AuditEvent_Agent";
export { AuditEvent_AgentSchema } from "./AuditEvent_Agent";
export type { AuditEvent_Agent_Network } from "./AuditEvent_Agent_Network";
export { AuditEvent_Agent_NetworkSchema } from "./AuditEvent_Agent_Network";
export type { AuditEvent_Entity } from "./AuditEvent_Entity";
export { AuditEvent_EntitySchema } from "./AuditEvent_Entity";
export type { AuditEvent_Entity_Detail } from "./AuditEvent_Entity_Detail";
export { AuditEvent_Entity_DetailSchema } from "./AuditEvent_Entity_Detail";
export type { AuditEvent_Source } from "./AuditEvent_Source";
export { AuditEvent_SourceSchema } from "./AuditEvent_Source";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { AuditEventSchemaInternal } from "./AuditEvent";

_registerFhirResourceSchemas({
	AuditEvent: AuditEventSchemaInternal,
});
