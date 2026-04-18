// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Appointment } from "./Appointment";
export { AppointmentSchema } from "./Appointment";
export type { Appointment_Participant } from "./Appointment_Participant";
export { Appointment_ParticipantSchema } from "./Appointment_Participant";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { AppointmentSchemaInternal } from "./Appointment";

_registerFhirResourceSchemas({
	Appointment: AppointmentSchemaInternal,
});
