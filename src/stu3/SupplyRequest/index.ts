// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { SupplyRequest } from "./SupplyRequest";
export { SupplyRequestSchema } from "./SupplyRequest";
export type { SupplyRequest_OrderedItem } from "./SupplyRequest_OrderedItem";
export { SupplyRequest_OrderedItemSchema } from "./SupplyRequest_OrderedItem";
export type { SupplyRequest_Requester } from "./SupplyRequest_Requester";
export { SupplyRequest_RequesterSchema } from "./SupplyRequest_Requester";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { SupplyRequestSchemaInternal } from "./SupplyRequest";

_registerFhirResourceSchemas({
	SupplyRequest: SupplyRequestSchemaInternal,
});
