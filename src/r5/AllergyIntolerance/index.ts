// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { AllergyIntolerance } from "./AllergyIntolerance";
export { AllergyIntoleranceSchema } from "./AllergyIntolerance";
export type { AllergyIntolerance_Participant } from "./AllergyIntolerance_Participant";
export { AllergyIntolerance_ParticipantSchema } from "./AllergyIntolerance_Participant";
export type { AllergyIntolerance_Reaction } from "./AllergyIntolerance_Reaction";
export { AllergyIntolerance_ReactionSchema } from "./AllergyIntolerance_Reaction";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { AllergyIntoleranceSchemaInternal } from "./AllergyIntolerance";

_registerFhirResourceSchemas({
	AllergyIntolerance: AllergyIntoleranceSchemaInternal,
});
