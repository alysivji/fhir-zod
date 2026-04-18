// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { Encounter } from "./Encounter";
export { EncounterSchema } from "./Encounter";
export type { Encounter_ClassHistory } from "./Encounter_ClassHistory";
export { Encounter_ClassHistorySchema } from "./Encounter_ClassHistory";
export type { Encounter_Diagnosis } from "./Encounter_Diagnosis";
export { Encounter_DiagnosisSchema } from "./Encounter_Diagnosis";
export type { Encounter_Hospitalization } from "./Encounter_Hospitalization";
export { Encounter_HospitalizationSchema } from "./Encounter_Hospitalization";
export type { Encounter_Location } from "./Encounter_Location";
export { Encounter_LocationSchema } from "./Encounter_Location";
export type { Encounter_Participant } from "./Encounter_Participant";
export { Encounter_ParticipantSchema } from "./Encounter_Participant";
export type { Encounter_StatusHistory } from "./Encounter_StatusHistory";
export { Encounter_StatusHistorySchema } from "./Encounter_StatusHistory";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { EncounterSchemaInternal } from "./Encounter";

_registerFhirResourceSchemas({
	Encounter: EncounterSchemaInternal,
});
