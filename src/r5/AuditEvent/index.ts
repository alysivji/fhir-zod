// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { AuditEvent } from "./AuditEvent";
export { AuditEventSchema } from "./AuditEvent";
export type { AuditEvent_Agent } from "./AuditEvent_Agent";
export { AuditEvent_AgentSchema } from "./AuditEvent_Agent";
export type { AuditEvent_Entity } from "./AuditEvent_Entity";
export { AuditEvent_EntitySchema } from "./AuditEvent_Entity";
export type { AuditEvent_Entity_Detail } from "./AuditEvent_Entity_Detail";
export { AuditEvent_Entity_DetailSchema } from "./AuditEvent_Entity_Detail";
export type { AuditEvent_Outcome } from "./AuditEvent_Outcome";
export { AuditEvent_OutcomeSchema } from "./AuditEvent_Outcome";
export type { AuditEvent_Source } from "./AuditEvent_Source";
export { AuditEvent_SourceSchema } from "./AuditEvent_Source";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { AuditEventSchemaInternal } from "./AuditEvent";

_registerFhirResourceSchemas({
	AuditEvent: AuditEventSchemaInternal,
});
