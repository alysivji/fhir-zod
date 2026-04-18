// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { EpisodeOfCare } from "./EpisodeOfCare";
export { EpisodeOfCareSchema } from "./EpisodeOfCare";
export type { EpisodeOfCare_Diagnosis } from "./EpisodeOfCare_Diagnosis";
export { EpisodeOfCare_DiagnosisSchema } from "./EpisodeOfCare_Diagnosis";
export type { EpisodeOfCare_StatusHistory } from "./EpisodeOfCare_StatusHistory";
export { EpisodeOfCare_StatusHistorySchema } from "./EpisodeOfCare_StatusHistory";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { EpisodeOfCareSchemaInternal } from "./EpisodeOfCare";

_registerFhirResourceSchemas({
	EpisodeOfCare: EpisodeOfCareSchemaInternal,
});
