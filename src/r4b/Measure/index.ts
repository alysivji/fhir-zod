// Release: R4B
// Last generated: 2026-04-18T03:47:47.070Z

export type { Measure } from "./Measure";
export { MeasureSchema } from "./Measure";
export type { Measure_Group } from "./Measure_Group";
export { Measure_GroupSchema } from "./Measure_Group";
export type { Measure_Group_Population } from "./Measure_Group_Population";
export { Measure_Group_PopulationSchema } from "./Measure_Group_Population";
export type { Measure_Group_Stratifier } from "./Measure_Group_Stratifier";
export { Measure_Group_StratifierSchema } from "./Measure_Group_Stratifier";
export type { Measure_Group_Stratifier_Component } from "./Measure_Group_Stratifier_Component";
export { Measure_Group_Stratifier_ComponentSchema } from "./Measure_Group_Stratifier_Component";
export type { Measure_SupplementalData } from "./Measure_SupplementalData";
export { Measure_SupplementalDataSchema } from "./Measure_SupplementalData";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { MeasureSchemaInternal } from "./Measure";

_registerFhirResourceSchemas({
	Measure: MeasureSchemaInternal,
});
