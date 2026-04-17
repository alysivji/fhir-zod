// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirId, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { StructureMap_Group_Rule_Dependent } from "./StructureMap_Group_Rule_Dependent";
import { StructureMap_Group_Rule_DependentSchemaInternal } from "./StructureMap_Group_Rule_Dependent";
import type { StructureMap_Group_Rule_Source } from "./StructureMap_Group_Rule_Source";
import { StructureMap_Group_Rule_SourceSchemaInternal } from "./StructureMap_Group_Rule_Source";
import type { StructureMap_Group_Rule_Target } from "./StructureMap_Group_Rule_Target";
import { StructureMap_Group_Rule_TargetSchemaInternal } from "./StructureMap_Group_Rule_Target";

/** Transform Rule from source to target. */
export interface StructureMap_Group_Rule extends BackboneElement {
  /** Which other rules to apply in the context of this rule. */
  dependent?: Array<StructureMap_Group_Rule_Dependent>;
  /** Documentation for this instance of data. */
  documentation?: string;
  /** Extensions for documentation */
  _documentation?: Element;
  /** Name of the rule for internal references. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** Rules contained in this rule. */
  rule?: Array<unknown>;
  /** Source inputs to the mapping. */
  source: Array<StructureMap_Group_Rule_Source>;
  /** Content to create because of this mapping rule. */
  target?: Array<StructureMap_Group_Rule_Target>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getStructureMap_Group_Rule_DependentSchema =
  (): z.ZodType<StructureMap_Group_Rule_Dependent> =>
    StructureMap_Group_Rule_DependentSchemaInternal as z.ZodType<StructureMap_Group_Rule_Dependent>;
const getStructureMap_Group_Rule_SourceSchema =
  (): z.ZodType<StructureMap_Group_Rule_Source> =>
    StructureMap_Group_Rule_SourceSchemaInternal as z.ZodType<StructureMap_Group_Rule_Source>;
const getStructureMap_Group_Rule_TargetSchema =
  (): z.ZodType<StructureMap_Group_Rule_Target> =>
    StructureMap_Group_Rule_TargetSchemaInternal as z.ZodType<StructureMap_Group_Rule_Target>;

/** @internal */
export const StructureMap_Group_RuleSchemaInternal =
  BackboneElementSchemaInternal.extend({
    dependent: z
      .lazy(getStructureMap_Group_Rule_DependentSchema)
      .array()
      .optional(),
    documentation: fhirString().optional(),
    _documentation: z.lazy(getElementSchema).optional(),
    name: fhirId(),
    _name: z.lazy(getElementSchema).optional(),
    rule: z.unknown().array().optional(),
    source: z.lazy(getStructureMap_Group_Rule_SourceSchema).array(),
    target: z.lazy(getStructureMap_Group_Rule_TargetSchema).array().optional(),
  }).strict();

export const StructureMap_Group_RuleSchema =
  StructureMap_Group_RuleSchemaInternal as z.ZodType<StructureMap_Group_Rule>;
