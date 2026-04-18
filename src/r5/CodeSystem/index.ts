// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { CodeSystem } from "./CodeSystem";
export { CodeSystemSchema } from "./CodeSystem";
export type { CodeSystem_Concept } from "./CodeSystem_Concept";
export { CodeSystem_ConceptSchema } from "./CodeSystem_Concept";
export type { CodeSystem_Concept_Designation } from "./CodeSystem_Concept_Designation";
export { CodeSystem_Concept_DesignationSchema } from "./CodeSystem_Concept_Designation";
export type { CodeSystem_Concept_Property } from "./CodeSystem_Concept_Property";
export { CodeSystem_Concept_PropertySchema } from "./CodeSystem_Concept_Property";
export type { CodeSystem_Filter } from "./CodeSystem_Filter";
export { CodeSystem_FilterSchema } from "./CodeSystem_Filter";
export type { CodeSystem_Property } from "./CodeSystem_Property";
export { CodeSystem_PropertySchema } from "./CodeSystem_Property";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { CodeSystemSchemaInternal } from "./CodeSystem";

_registerFhirResourceSchemas({
	CodeSystem: CodeSystemSchemaInternal,
});
