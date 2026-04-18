// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { List } from "./List";
export { ListSchema } from "./List";
export type { List_Entry } from "./List_Entry";
export { List_EntrySchema } from "./List_Entry";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ListSchemaInternal } from "./List";

_registerFhirResourceSchemas({
	List: ListSchemaInternal,
});
