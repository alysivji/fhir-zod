// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** The ingredient substance. */
export interface MedicinalProductIngredient_Substance extends BackboneElement {
  /** The ingredient substance. */
  code: CodeableConcept;
  /** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product. */
  strength?: Array<unknown>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const MedicinalProductIngredient_SubstanceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    strength: z.unknown().array().optional(),
  }).strict();

export const MedicinalProductIngredient_SubstanceSchema =
  MedicinalProductIngredient_SubstanceSchemaInternal as z.ZodType<MedicinalProductIngredient_Substance>;
