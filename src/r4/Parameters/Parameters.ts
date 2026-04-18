// Source: https://hl7.org/fhir/R4/parameters.html
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Resource } from "../Resource";
import type { Parameters_Parameter } from "./Parameters_Parameter";
import { Parameters_ParameterSchemaInternal } from "./Parameters_Parameter";

/** This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it. */
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
