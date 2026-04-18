// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { ValueSet } from "./ValueSet";
export { ValueSetSchema } from "./ValueSet";
export type { ValueSet_Compose } from "./ValueSet_Compose";
export { ValueSet_ComposeSchema } from "./ValueSet_Compose";
export type { ValueSet_Compose_Include } from "./ValueSet_Compose_Include";
export { ValueSet_Compose_IncludeSchema } from "./ValueSet_Compose_Include";
export type { ValueSet_Compose_Include_Concept } from "./ValueSet_Compose_Include_Concept";
export { ValueSet_Compose_Include_ConceptSchema } from "./ValueSet_Compose_Include_Concept";
export type { ValueSet_Compose_Include_Concept_Designation } from "./ValueSet_Compose_Include_Concept_Designation";
export { ValueSet_Compose_Include_Concept_DesignationSchema } from "./ValueSet_Compose_Include_Concept_Designation";
export type { ValueSet_Compose_Include_Filter } from "./ValueSet_Compose_Include_Filter";
export { ValueSet_Compose_Include_FilterSchema } from "./ValueSet_Compose_Include_Filter";
export type { ValueSet_Expansion } from "./ValueSet_Expansion";
export { ValueSet_ExpansionSchema } from "./ValueSet_Expansion";
export type { ValueSet_Expansion_Contains } from "./ValueSet_Expansion_Contains";
export { ValueSet_Expansion_ContainsSchema } from "./ValueSet_Expansion_Contains";
export type { ValueSet_Expansion_Parameter } from "./ValueSet_Expansion_Parameter";
export { ValueSet_Expansion_ParameterSchema } from "./ValueSet_Expansion_Parameter";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ValueSetSchemaInternal } from "./ValueSet";

_registerFhirResourceSchemas({
  ValueSet: ValueSetSchemaInternal,
});
