// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Expression } from "../Expression";
import { ExpressionSchemaInternal } from "../Expression";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { ClinicalUseDefinition_Contraindication_OtherTherapy } from "./ClinicalUseDefinition_Contraindication_OtherTherapy";
import { ClinicalUseDefinition_Contraindication_OtherTherapySchemaInternal } from "./ClinicalUseDefinition_Contraindication_OtherTherapy";

/** Specifics for when this is a contraindication. */
export interface ClinicalUseDefinition_Contraindication
  extends BackboneElement {
  /** An expression that returns true or false, indicating whether the indication is applicable or not, after having applied its other elements. */
  applicability?: Expression;
  /** A comorbidity (concurrent condition) or coinfection. */
  comorbidity?: Array<CodeableReference>;
  /** The status of the disease or symptom for the contraindication, for example "chronic" or "metastatic". */
  diseaseStatus?: CodeableReference;
  /** The situation that is being documented as contraindicating against this item. */
  diseaseSymptomProcedure?: CodeableReference;
  /** The indication which this is a contraidication for. */
  indication?: Array<Reference>;
  /** Information about the use of the medicinal product in relation to other therapies described as part of the contraindication. */
  otherTherapy?: Array<ClinicalUseDefinition_Contraindication_OtherTherapy>;
}

const getClinicalUseDefinition_Contraindication_OtherTherapySchema =
  (): z.ZodType<ClinicalUseDefinition_Contraindication_OtherTherapy> =>
    ClinicalUseDefinition_Contraindication_OtherTherapySchemaInternal as z.ZodType<ClinicalUseDefinition_Contraindication_OtherTherapy>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getExpressionSchema = (): z.ZodType<Expression> =>
  ExpressionSchemaInternal as z.ZodType<Expression>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ClinicalUseDefinition_ContraindicationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    applicability: z.lazy(getExpressionSchema).optional(),
    comorbidity: z.lazy(getCodeableReferenceSchema).array().optional(),
    diseaseStatus: z.lazy(getCodeableReferenceSchema).optional(),
    diseaseSymptomProcedure: z.lazy(getCodeableReferenceSchema).optional(),
    indication: z.lazy(getReferenceSchema).array().optional(),
    otherTherapy: z
      .lazy(getClinicalUseDefinition_Contraindication_OtherTherapySchema)
      .array()
      .optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.indication,
        "indication",
        ["http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition"],
        ["ClinicalUseDefinition"],
        ctx,
      );
    });

export const ClinicalUseDefinition_ContraindicationSchema =
  ClinicalUseDefinition_ContraindicationSchemaInternal as z.ZodType<ClinicalUseDefinition_Contraindication>;
