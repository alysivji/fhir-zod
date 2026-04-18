// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { Person } from "./Person";
export { PersonSchema } from "./Person";
export type { Person_Link } from "./Person_Link";
export { Person_LinkSchema } from "./Person_Link";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { PersonSchemaInternal } from "./Person";

_registerFhirResourceSchemas({
	Person: PersonSchemaInternal,
});
