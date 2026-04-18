// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { AdverseEvent } from "./AdverseEvent";
export { AdverseEventSchema } from "./AdverseEvent";
export type { AdverseEvent_SuspectEntity } from "./AdverseEvent_SuspectEntity";
export { AdverseEvent_SuspectEntitySchema } from "./AdverseEvent_SuspectEntity";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { AdverseEventSchemaInternal } from "./AdverseEvent";

_registerFhirResourceSchemas({
	AdverseEvent: AdverseEventSchemaInternal,
});
