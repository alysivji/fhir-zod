// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";

/** To do. */
export interface SubstanceSourceMaterial_PartDescription
  extends BackboneElement {
  /** Entity of anatomical origin of source material within an organism. */
  part?: CodeableConcept;
  /** The detailed anatomic location when the part can be extracted from different anatomical locations of the organism. Multiple alternative locations may apply. */
  partLocation?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const SubstanceSourceMaterial_PartDescriptionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    part: z.lazy(getCodeableConceptSchema).optional(),
    partLocation: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const SubstanceSourceMaterial_PartDescriptionSchema =
  SubstanceSourceMaterial_PartDescriptionSchemaInternal as z.ZodType<SubstanceSourceMaterial_PartDescription>;
