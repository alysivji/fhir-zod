// Source: https://hl7.org/fhir/R5/parameters.html
// Profile: http://hl7.org/fhir/StructureDefinition/Parameters
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Resource } from "../Resource";
import type { Parameters_Parameter } from "./Parameters_Parameter";
import { Parameters_ParameterSchemaInternal } from "./Parameters_Parameter";

/** This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not persisted or allowed to be referenced by other resources except as described in the definition of the Parameters resource. */
export interface Parameters extends Resource {
  /** A parameter passed to or received from the operation. */
  parameter?: Array<Parameters_Parameter>;
  /** This is a Parameters resource. */
  resourceType: "Parameters";
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getParameters_ParameterSchema = (): z.ZodType<Parameters_Parameter> =>
  Parameters_ParameterSchemaInternal as z.ZodType<Parameters_Parameter>;

/** @internal */
export const ParametersSchemaInternal = z
  .object({
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    parameter: z.lazy(getParameters_ParameterSchema).array().optional(),
    resourceType: z.literal("Parameters"),
  })
  .strict();

export const ParametersSchema =
  ParametersSchemaInternal as z.ZodType<Parameters>;
