// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { Appointment } from "./Appointment";
export { AppointmentSchema } from "./Appointment";
export type { Appointment_Participant } from "./Appointment_Participant";
export { Appointment_ParticipantSchema } from "./Appointment_Participant";
export type { Appointment_RecurrenceTemplate } from "./Appointment_RecurrenceTemplate";
export { Appointment_RecurrenceTemplateSchema } from "./Appointment_RecurrenceTemplate";
export type { Appointment_RecurrenceTemplate_MonthlyTemplate } from "./Appointment_RecurrenceTemplate_MonthlyTemplate";
export { Appointment_RecurrenceTemplate_MonthlyTemplateSchema } from "./Appointment_RecurrenceTemplate_MonthlyTemplate";
export type { Appointment_RecurrenceTemplate_WeeklyTemplate } from "./Appointment_RecurrenceTemplate_WeeklyTemplate";
export { Appointment_RecurrenceTemplate_WeeklyTemplateSchema } from "./Appointment_RecurrenceTemplate_WeeklyTemplate";
export type { Appointment_RecurrenceTemplate_YearlyTemplate } from "./Appointment_RecurrenceTemplate_YearlyTemplate";
export { Appointment_RecurrenceTemplate_YearlyTemplateSchema } from "./Appointment_RecurrenceTemplate_YearlyTemplate";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { AppointmentSchemaInternal } from "./Appointment";

_registerFhirResourceSchemas({
	Appointment: AppointmentSchemaInternal,
});
