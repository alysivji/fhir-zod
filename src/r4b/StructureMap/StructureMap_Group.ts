// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirId, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { StructureMap_Group_Input } from "./StructureMap_Group_Input";
import { StructureMap_Group_InputSchemaInternal } from "./StructureMap_Group_Input";
import type { StructureMap_Group_Rule } from "./StructureMap_Group_Rule";
import { StructureMap_Group_RuleSchemaInternal } from "./StructureMap_Group_Rule";

/** Organizes the mapping into manageable chunks for human review/ease of maintenance. */
export interface StructureMap_Group extends BackboneElement {
  /** Additional supporting documentation that explains the purpose of the group and the types of mappings within it. */
  documentation?: string;
  /** Extensions for documentation */
  _documentation?: Element;
  /** Another group that this group adds rules to. */
  extends?: string;
  /** Extensions for extends */
  _extends?: Element;
  /** A name assigned to an instance of data. The instance must be provided when the mapping is invoked. */
  input: Array<StructureMap_Group_Input>;
  /** A unique name for the group for the convenience of human readers. */
  name: string;
  /** Extensions for name */
  _name?: Element;
  /** Transform Rule from source to target. */
  rule: Array<StructureMap_Group_Rule>;
  /** If this is the default rule set to apply for the source type or this combination of types. */
  typeMode: "none" | "type-and-types" | "types";
  /** Extensions for typeMode */
  _typeMode?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getStructureMap_Group_InputSchema =
  (): z.ZodType<StructureMap_Group_Input> =>
    StructureMap_Group_InputSchemaInternal as z.ZodType<StructureMap_Group_Input>;
const getStructureMap_Group_RuleSchema =
  (): z.ZodType<StructureMap_Group_Rule> =>
    StructureMap_Group_RuleSchemaInternal as z.ZodType<StructureMap_Group_Rule>;

/** @internal */
export const StructureMap_GroupSchemaInternal =
  BackboneElementSchemaInternal.extend({
    documentation: fhirString().optional(),
    _documentation: z.lazy(getElementSchema).optional(),
    extends: fhirId().optional(),
    _extends: z.lazy(getElementSchema).optional(),
    input: z.lazy(getStructureMap_Group_InputSchema).array(),
    name: fhirId(),
    _name: z.lazy(getElementSchema).optional(),
    rule: z.lazy(getStructureMap_Group_RuleSchema).array(),
    typeMode: z.enum(["none", "type-and-types", "types"]),
    _typeMode: z.lazy(getElementSchema).optional(),
  }).strict();

export const StructureMap_GroupSchema =
  StructureMap_GroupSchemaInternal as z.ZodType<StructureMap_Group>;
