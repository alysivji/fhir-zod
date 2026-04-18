// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { InventoryReport } from "./InventoryReport";
export { InventoryReportSchema } from "./InventoryReport";
export type { InventoryReport_InventoryListing } from "./InventoryReport_InventoryListing";
export { InventoryReport_InventoryListingSchema } from "./InventoryReport_InventoryListing";
export type { InventoryReport_InventoryListing_Item } from "./InventoryReport_InventoryListing_Item";
export { InventoryReport_InventoryListing_ItemSchema } from "./InventoryReport_InventoryListing_Item";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { InventoryReportSchemaInternal } from "./InventoryReport";

_registerFhirResourceSchemas({
	InventoryReport: InventoryReportSchemaInternal,
});
