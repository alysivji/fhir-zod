// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Person } from "./Person";
export { PersonSchema } from "./Person";
export type { Person_Link } from "./Person_Link";
export { Person_LinkSchema } from "./Person_Link";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { PersonSchemaInternal } from "./Person";

_registerFhirResourceSchemas({
  Person: PersonSchemaInternal,
});
