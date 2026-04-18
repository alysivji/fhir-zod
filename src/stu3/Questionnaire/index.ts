// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { Questionnaire } from "./Questionnaire";
export { QuestionnaireSchema } from "./Questionnaire";
export type { Questionnaire_Item } from "./Questionnaire_Item";
export { Questionnaire_ItemSchema } from "./Questionnaire_Item";
export type { Questionnaire_Item_EnableWhen } from "./Questionnaire_Item_EnableWhen";
export { Questionnaire_Item_EnableWhenSchema } from "./Questionnaire_Item_EnableWhen";
export type { Questionnaire_Item_Option } from "./Questionnaire_Item_Option";
export { Questionnaire_Item_OptionSchema } from "./Questionnaire_Item_Option";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { QuestionnaireSchemaInternal } from "./Questionnaire";

_registerFhirResourceSchemas({
	Questionnaire: QuestionnaireSchemaInternal,
});
