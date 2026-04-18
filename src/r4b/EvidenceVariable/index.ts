// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { EvidenceVariable } from "./EvidenceVariable";
export { EvidenceVariableSchema } from "./EvidenceVariable";
export type { EvidenceVariable_Category } from "./EvidenceVariable_Category";
export { EvidenceVariable_CategorySchema } from "./EvidenceVariable_Category";
export type { EvidenceVariable_Characteristic } from "./EvidenceVariable_Characteristic";
export { EvidenceVariable_CharacteristicSchema } from "./EvidenceVariable_Characteristic";
export type { EvidenceVariable_Characteristic_TimeFromStart } from "./EvidenceVariable_Characteristic_TimeFromStart";
export { EvidenceVariable_Characteristic_TimeFromStartSchema } from "./EvidenceVariable_Characteristic_TimeFromStart";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { EvidenceVariableSchemaInternal } from "./EvidenceVariable";

_registerFhirResourceSchemas({
	EvidenceVariable: EvidenceVariableSchemaInternal,
});
