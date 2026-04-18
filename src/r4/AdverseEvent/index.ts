// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { AdverseEvent } from "./AdverseEvent";
export { AdverseEventSchema } from "./AdverseEvent";
export type { AdverseEvent_SuspectEntity } from "./AdverseEvent_SuspectEntity";
export { AdverseEvent_SuspectEntitySchema } from "./AdverseEvent_SuspectEntity";
export type { AdverseEvent_SuspectEntity_Causality } from "./AdverseEvent_SuspectEntity_Causality";
export { AdverseEvent_SuspectEntity_CausalitySchema } from "./AdverseEvent_SuspectEntity_Causality";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { AdverseEventSchemaInternal } from "./AdverseEvent";

_registerFhirResourceSchemas({
  AdverseEvent: AdverseEventSchemaInternal,
});
