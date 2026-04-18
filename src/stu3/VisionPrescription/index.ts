// Release: STU3
// Last generated: 2026-04-18T03:47:44.174Z

export type { VisionPrescription } from "./VisionPrescription";
export { VisionPrescriptionSchema } from "./VisionPrescription";
export type { VisionPrescription_Dispense } from "./VisionPrescription_Dispense";
export { VisionPrescription_DispenseSchema } from "./VisionPrescription_Dispense";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { VisionPrescriptionSchemaInternal } from "./VisionPrescription";

_registerFhirResourceSchemas({
	VisionPrescription: VisionPrescriptionSchemaInternal,
});
