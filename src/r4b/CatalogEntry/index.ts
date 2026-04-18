// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { CatalogEntry } from "./CatalogEntry";
export { CatalogEntrySchema } from "./CatalogEntry";
export type { CatalogEntry_RelatedEntry } from "./CatalogEntry_RelatedEntry";
export { CatalogEntry_RelatedEntrySchema } from "./CatalogEntry_RelatedEntry";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CatalogEntrySchemaInternal } from "./CatalogEntry";

_registerFhirResourceSchemas({
	CatalogEntry: CatalogEntrySchemaInternal,
});
