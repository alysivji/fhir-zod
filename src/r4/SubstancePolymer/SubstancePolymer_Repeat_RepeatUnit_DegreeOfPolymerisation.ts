// Source: https://hl7.org/fhir/R4/substancepolymer-definitions.html#SubstancePolymer.repeat.repeatUnit.degreeOfPolymerisation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { SubstanceAmount } from "../SubstanceAmount";
import { SubstanceAmountSchemaInternal } from "../SubstanceAmount";

/** Todo. */
export interface SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation
  extends BackboneElement {
  /** Todo. */
  amount?: SubstanceAmount;
  /** Todo. */
  degree?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getSubstanceAmountSchema = (): z.ZodType<SubstanceAmount> =>
  SubstanceAmountSchemaInternal as z.ZodType<SubstanceAmount>;

/** @internal */
export const SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amount: z.lazy(getSubstanceAmountSchema).optional(),
    degree: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchema =
  SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisationSchemaInternal as z.ZodType<SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation>;
