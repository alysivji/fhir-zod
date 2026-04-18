// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { Questionnaire } from "./Questionnaire";
export { QuestionnaireSchema } from "./Questionnaire";
export type { Questionnaire_Item } from "./Questionnaire_Item";
export { Questionnaire_ItemSchema } from "./Questionnaire_Item";
export type { Questionnaire_Item_AnswerOption } from "./Questionnaire_Item_AnswerOption";
export { Questionnaire_Item_AnswerOptionSchema } from "./Questionnaire_Item_AnswerOption";
export type { Questionnaire_Item_EnableWhen } from "./Questionnaire_Item_EnableWhen";
export { Questionnaire_Item_EnableWhenSchema } from "./Questionnaire_Item_EnableWhen";
export type { Questionnaire_Item_Initial } from "./Questionnaire_Item_Initial";
export { Questionnaire_Item_InitialSchema } from "./Questionnaire_Item_Initial";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { QuestionnaireSchemaInternal } from "./Questionnaire";

_registerFhirResourceSchemas({
  Questionnaire: QuestionnaireSchemaInternal,
});
