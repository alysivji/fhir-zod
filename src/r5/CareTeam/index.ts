// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { CareTeam } from "./CareTeam";
export { CareTeamSchema } from "./CareTeam";
export type { CareTeam_Participant } from "./CareTeam_Participant";
export { CareTeam_ParticipantSchema } from "./CareTeam_Participant";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CareTeamSchemaInternal } from "./CareTeam";

_registerFhirResourceSchemas({
	CareTeam: CareTeamSchemaInternal,
});
