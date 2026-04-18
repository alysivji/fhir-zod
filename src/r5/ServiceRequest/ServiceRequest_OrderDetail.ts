// Source: https://hl7.org/fhir/R5/servicerequest-definitions.html#ServiceRequest.orderDetail
// Profile: http://hl7.org/fhir/StructureDefinition/ServiceRequest
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { ServiceRequest_OrderDetail_Parameter } from "./ServiceRequest_OrderDetail_Parameter";
import { ServiceRequest_OrderDetail_ParameterSchemaInternal } from "./ServiceRequest_OrderDetail_Parameter";

/** Additional details and instructions about the how the services are to be delivered.   For example, and order for a urinary catheter may have an order detail for an external or indwelling catheter, or an order for a bandage may require additional instructions specifying how the bandage should be applied. */
export interface ServiceRequest_OrderDetail extends BackboneElement {
  /** The parameter details for the service being requested. */
  parameter: Array<ServiceRequest_OrderDetail_Parameter>;
  /** Indicates the context of the order details by reference. */
  parameterFocus?: CodeableReference;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getServiceRequest_OrderDetail_ParameterSchema =
  (): z.ZodType<ServiceRequest_OrderDetail_Parameter> =>
    ServiceRequest_OrderDetail_ParameterSchemaInternal as z.ZodType<ServiceRequest_OrderDetail_Parameter>;

/** @internal */
export const ServiceRequest_OrderDetailSchemaInternal =
  BackboneElementSchemaInternal.extend({
    parameter: z.lazy(getServiceRequest_OrderDetail_ParameterSchema).array(),
    parameterFocus: z.lazy(getCodeableReferenceSchema).optional(),
  }).strict();

export const ServiceRequest_OrderDetailSchema =
  ServiceRequest_OrderDetailSchemaInternal as z.ZodType<ServiceRequest_OrderDetail>;
