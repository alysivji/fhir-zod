// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { EvidenceReport_RelatesTo_Target } from "./EvidenceReport_RelatesTo_Target";
import { EvidenceReport_RelatesTo_TargetSchemaInternal } from "./EvidenceReport_RelatesTo_Target";

/** Relationships that this composition has with other compositions or documents that already exist. */
export interface EvidenceReport_RelatesTo extends BackboneElement {
  /** The type of relationship that this composition has with anther composition or document. */
  code:
    | "amendedWith"
    | "amends"
    | "appendedWith"
    | "appends"
    | "replacedWith"
    | "replaces"
    | "transformedWith"
    | "transforms";
  /** Extensions for code */
  _code?: Element;
  /** The target composition/document of this relationship. */
  target: EvidenceReport_RelatesTo_Target;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getEvidenceReport_RelatesTo_TargetSchema =
  (): z.ZodType<EvidenceReport_RelatesTo_Target> =>
    EvidenceReport_RelatesTo_TargetSchemaInternal as z.ZodType<EvidenceReport_RelatesTo_Target>;

/** @internal */
export const EvidenceReport_RelatesToSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.enum([
      "amendedWith",
      "amends",
      "appendedWith",
      "appends",
      "replacedWith",
      "replaces",
      "transformedWith",
      "transforms",
    ]),
    _code: z.lazy(getElementSchema).optional(),
    target: z.lazy(getEvidenceReport_RelatesTo_TargetSchema),
  }).strict();

export const EvidenceReport_RelatesToSchema =
  EvidenceReport_RelatesToSchemaInternal as z.ZodType<EvidenceReport_RelatesTo>;
