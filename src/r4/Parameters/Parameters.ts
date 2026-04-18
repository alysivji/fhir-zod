// Profile: http://hl7.org/fhir/StructureDefinition/Parameters
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { Resource } from "../Resource";
import { ResourceSchemaInternal } from "../Resource";
import type { Parameters_Parameter } from "./Parameters_Parameter";
import { Parameters_ParameterSchemaInternal } from "./Parameters_Parameter";

/** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
export interface Parameters extends Resource {
  /** A parameter passed to or received from the operation. */
  parameter?: Array<Parameters_Parameter>;
  /** This is a Parameters resource. */
  resourceType: "Parameters";
}

const getParameters_ParameterSchema = (): z.ZodType<Parameters_Parameter> =>
  Parameters_ParameterSchemaInternal as z.ZodType<Parameters_Parameter>;

/** @internal */
export const ParametersSchemaInternal = ResourceSchemaInternal.extend({
  parameter: z.lazy(getParameters_ParameterSchema).array().optional(),
  resourceType: z.literal("Parameters"),
}).strict();

export const ParametersSchema =
  ParametersSchemaInternal as z.ZodType<Parameters>;
