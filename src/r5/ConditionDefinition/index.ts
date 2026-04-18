// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { ConditionDefinition } from "./ConditionDefinition";
export { ConditionDefinitionSchema } from "./ConditionDefinition";
export type { ConditionDefinition_Medication } from "./ConditionDefinition_Medication";
export { ConditionDefinition_MedicationSchema } from "./ConditionDefinition_Medication";
export type { ConditionDefinition_Observation } from "./ConditionDefinition_Observation";
export { ConditionDefinition_ObservationSchema } from "./ConditionDefinition_Observation";
export type { ConditionDefinition_Plan } from "./ConditionDefinition_Plan";
export { ConditionDefinition_PlanSchema } from "./ConditionDefinition_Plan";
export type { ConditionDefinition_Precondition } from "./ConditionDefinition_Precondition";
export { ConditionDefinition_PreconditionSchema } from "./ConditionDefinition_Precondition";
export type { ConditionDefinition_Questionnaire } from "./ConditionDefinition_Questionnaire";
export { ConditionDefinition_QuestionnaireSchema } from "./ConditionDefinition_Questionnaire";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ConditionDefinitionSchemaInternal } from "./ConditionDefinition";

_registerFhirResourceSchemas({
	ConditionDefinition: ConditionDefinitionSchemaInternal,
});
