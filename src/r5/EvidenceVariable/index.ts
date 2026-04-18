// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { EvidenceVariable } from "./EvidenceVariable";
export { EvidenceVariableSchema } from "./EvidenceVariable";
export type { EvidenceVariable_Category } from "./EvidenceVariable_Category";
export { EvidenceVariable_CategorySchema } from "./EvidenceVariable_Category";
export type { EvidenceVariable_Characteristic } from "./EvidenceVariable_Characteristic";
export { EvidenceVariable_CharacteristicSchema } from "./EvidenceVariable_Characteristic";
export type { EvidenceVariable_Characteristic_DefinitionByCombination } from "./EvidenceVariable_Characteristic_DefinitionByCombination";
export { EvidenceVariable_Characteristic_DefinitionByCombinationSchema } from "./EvidenceVariable_Characteristic_DefinitionByCombination";
export type { EvidenceVariable_Characteristic_DefinitionByTypeAndValue } from "./EvidenceVariable_Characteristic_DefinitionByTypeAndValue";
export { EvidenceVariable_Characteristic_DefinitionByTypeAndValueSchema } from "./EvidenceVariable_Characteristic_DefinitionByTypeAndValue";
export type { EvidenceVariable_Characteristic_TimeFromEvent } from "./EvidenceVariable_Characteristic_TimeFromEvent";
export { EvidenceVariable_Characteristic_TimeFromEventSchema } from "./EvidenceVariable_Characteristic_TimeFromEvent";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { EvidenceVariableSchemaInternal } from "./EvidenceVariable";

_registerFhirResourceSchemas({
	EvidenceVariable: EvidenceVariableSchemaInternal,
});
