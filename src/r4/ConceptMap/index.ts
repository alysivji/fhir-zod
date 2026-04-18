// Release: R4
// Last generated: 2026-04-18T01:45:47.034Z

export type { ConceptMap } from "./ConceptMap";
export { ConceptMapSchema } from "./ConceptMap";
export type { ConceptMap_Group } from "./ConceptMap_Group";
export { ConceptMap_GroupSchema } from "./ConceptMap_Group";
export type { ConceptMap_Group_Element } from "./ConceptMap_Group_Element";
export { ConceptMap_Group_ElementSchema } from "./ConceptMap_Group_Element";
export type { ConceptMap_Group_Element_Target } from "./ConceptMap_Group_Element_Target";
export { ConceptMap_Group_Element_TargetSchema } from "./ConceptMap_Group_Element_Target";
export type { ConceptMap_Group_Element_Target_DependsOn } from "./ConceptMap_Group_Element_Target_DependsOn";
export { ConceptMap_Group_Element_Target_DependsOnSchema } from "./ConceptMap_Group_Element_Target_DependsOn";
export type { ConceptMap_Group_Unmapped } from "./ConceptMap_Group_Unmapped";
export { ConceptMap_Group_UnmappedSchema } from "./ConceptMap_Group_Unmapped";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ConceptMapSchemaInternal } from "./ConceptMap";

_registerFhirResourceSchemas({
  ConceptMap: ConceptMapSchemaInternal,
});
