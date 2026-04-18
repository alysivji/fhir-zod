// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { GenomicStudy } from "./GenomicStudy";
export { GenomicStudySchema } from "./GenomicStudy";
export type { GenomicStudy_Analysis } from "./GenomicStudy_Analysis";
export { GenomicStudy_AnalysisSchema } from "./GenomicStudy_Analysis";
export type { GenomicStudy_Analysis_Device } from "./GenomicStudy_Analysis_Device";
export { GenomicStudy_Analysis_DeviceSchema } from "./GenomicStudy_Analysis_Device";
export type { GenomicStudy_Analysis_Input } from "./GenomicStudy_Analysis_Input";
export { GenomicStudy_Analysis_InputSchema } from "./GenomicStudy_Analysis_Input";
export type { GenomicStudy_Analysis_Output } from "./GenomicStudy_Analysis_Output";
export { GenomicStudy_Analysis_OutputSchema } from "./GenomicStudy_Analysis_Output";
export type { GenomicStudy_Analysis_Performer } from "./GenomicStudy_Analysis_Performer";
export { GenomicStudy_Analysis_PerformerSchema } from "./GenomicStudy_Analysis_Performer";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { GenomicStudySchemaInternal } from "./GenomicStudy";

_registerFhirResourceSchemas({
	GenomicStudy: GenomicStudySchemaInternal,
});
