// Profile: http://hl7.org/fhir/StructureDefinition/Parameters
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { Parameters_Parameter } from "./Parameters_Parameter";
import { Parameters_ParameterSchemaInternal } from "./Parameters_Parameter";
import type { Resource } from "./Resource";
import { ResourceSchemaInternal } from "./Resource";

/** This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not persisted or allowed to be referenced by other resources except as described in the definition of the Parameters resource. */
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
