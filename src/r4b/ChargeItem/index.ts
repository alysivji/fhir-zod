// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { ChargeItem } from "./ChargeItem";
export { ChargeItemSchema } from "./ChargeItem";
export type { ChargeItem_Performer } from "./ChargeItem_Performer";
export { ChargeItem_PerformerSchema } from "./ChargeItem_Performer";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ChargeItemSchemaInternal } from "./ChargeItem";

_registerFhirResourceSchemas({
	ChargeItem: ChargeItemSchemaInternal,
});
