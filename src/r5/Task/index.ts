// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Task } from "./Task";
export { TaskSchema } from "./Task";
export type { Task_Input } from "./Task_Input";
export { Task_InputSchema } from "./Task_Input";
export type { Task_Output } from "./Task_Output";
export { Task_OutputSchema } from "./Task_Output";
export type { Task_Performer } from "./Task_Performer";
export { Task_PerformerSchema } from "./Task_Performer";
export type { Task_Restriction } from "./Task_Restriction";
export { Task_RestrictionSchema } from "./Task_Restriction";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { TaskSchemaInternal } from "./Task";

_registerFhirResourceSchemas({
	Task: TaskSchemaInternal,
});
