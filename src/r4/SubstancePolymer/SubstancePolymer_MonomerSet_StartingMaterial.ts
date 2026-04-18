// Profile: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { SubstanceAmount } from "../SubstanceAmount";
import { SubstanceAmountSchemaInternal } from "../SubstanceAmount";

/** Todo. */
export interface SubstancePolymer_MonomerSet_StartingMaterial
  extends BackboneElement {
  /** Todo. */
  amount?: SubstanceAmount;
  /** Todo. */
  isDefining?: boolean;
  /** Extensions for isDefining */
  _isDefining?: Element;
  /** Todo. */
  material?: CodeableConcept;
  /** Todo. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getSubstanceAmountSchema = (): z.ZodType<SubstanceAmount> =>
  SubstanceAmountSchemaInternal as z.ZodType<SubstanceAmount>;

/** @internal */
export const SubstancePolymer_MonomerSet_StartingMaterialSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amount: z.lazy(getSubstanceAmountSchema).optional(),
    isDefining: z.boolean().optional(),
    _isDefining: z.lazy(getElementSchema).optional(),
    material: z.lazy(getCodeableConceptSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const SubstancePolymer_MonomerSet_StartingMaterialSchema =
  SubstancePolymer_MonomerSet_StartingMaterialSchemaInternal as z.ZodType<SubstancePolymer_MonomerSet_StartingMaterial>;
