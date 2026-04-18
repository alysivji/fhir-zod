// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { ChargeItem } from "./ChargeItem";
export { ChargeItemSchema } from "./ChargeItem";
export type { ChargeItem_Participant } from "./ChargeItem_Participant";
export { ChargeItem_ParticipantSchema } from "./ChargeItem_Participant";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ChargeItemSchemaInternal } from "./ChargeItem";

_registerFhirResourceSchemas({
	ChargeItem: ChargeItemSchemaInternal,
});
