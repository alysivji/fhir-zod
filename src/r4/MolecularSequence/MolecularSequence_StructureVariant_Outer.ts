// Source: https://hl7.org/fhir/R4/molecularsequence-definitions.html#MolecularSequence.structureVariant.outer
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Structural variant outer. */
export interface MolecularSequence_StructureVariant_Outer
  extends BackboneElement {
  /** Structural variant outer end. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position. */
  end?: number;
  /** Extensions for end */
  _end?: Element;
  /** Structural variant outer start. If the coordinate system is either 0-based or 1-based, then start position is inclusive. */
  start?: number;
  /** Extensions for start */
  _start?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MolecularSequence_StructureVariant_OuterSchemaInternal =
  BackboneElementSchemaInternal.extend({
    end: z.number().int().optional(),
    _end: z.lazy(getElementSchema).optional(),
    start: z.number().int().optional(),
    _start: z.lazy(getElementSchema).optional(),
  }).strict();

export const MolecularSequence_StructureVariant_OuterSchema =
  MolecularSequence_StructureVariant_OuterSchemaInternal as z.ZodType<MolecularSequence_StructureVariant_Outer>;
