// Release: R5
// Last generated: 2026-04-18T03:47:50.212Z

export type { ServiceRequest } from "./ServiceRequest";
export { ServiceRequestSchema } from "./ServiceRequest";
export type { ServiceRequest_OrderDetail } from "./ServiceRequest_OrderDetail";
export { ServiceRequest_OrderDetailSchema } from "./ServiceRequest_OrderDetail";
export type { ServiceRequest_OrderDetail_Parameter } from "./ServiceRequest_OrderDetail_Parameter";
export { ServiceRequest_OrderDetail_ParameterSchema } from "./ServiceRequest_OrderDetail_Parameter";
export type { ServiceRequest_PatientInstruction } from "./ServiceRequest_PatientInstruction";
export { ServiceRequest_PatientInstructionSchema } from "./ServiceRequest_PatientInstruction";

import { _registerFhirResourceSchemas } from "../_fhirResourceSchema";
import { ServiceRequestSchemaInternal } from "./ServiceRequest";

_registerFhirResourceSchemas({
	ServiceRequest: ServiceRequestSchemaInternal,
});
