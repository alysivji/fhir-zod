// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { CatalogEntry } from "./CatalogEntry";
export { CatalogEntrySchema } from "./CatalogEntry";
export type { CatalogEntry_RelatedEntry } from "./CatalogEntry_RelatedEntry";
export { CatalogEntry_RelatedEntrySchema } from "./CatalogEntry_RelatedEntry";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CatalogEntrySchemaInternal } from "./CatalogEntry";

_registerFhirResourceSchemas({
  CatalogEntry: CatalogEntrySchemaInternal,
});
