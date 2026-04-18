// Profile: http://hl7.org/fhir/StructureDefinition/EligibilityResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";

/** Benefits Used to date. */
export interface EligibilityResponse_Insurance_BenefitBalance_Financial
  extends BackboneElement {
  /** Benefits allowed. */
  allowedMoney?: Money;
  /** Benefits allowed. */
  allowedString?: string;
  /** Extensions for allowedString */
  _allowedString?: Element;
  /** Benefits allowed. */
  allowedUnsignedInt?: number;
  /** Extensions for allowedUnsignedInt */
  _allowedUnsignedInt?: Element;
  /** Deductable, visits, benefit amount. */
  type: CodeableConcept;
  /** Benefits used. */
  usedMoney?: Money;
  /** Benefits used. */
  usedUnsignedInt?: number;
  /** Extensions for usedUnsignedInt */
  _usedUnsignedInt?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const EligibilityResponse_Insurance_BenefitBalance_FinancialSchemaInternal =
  BackboneElementSchemaInternal.extend({
    allowedMoney: z.lazy(getMoneySchema).optional(),
    allowedString: fhirString().optional(),
    _allowedString: z.lazy(getElementSchema).optional(),
    allowedUnsignedInt: z.number().int().nonnegative().optional(),
    _allowedUnsignedInt: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
    usedMoney: z.lazy(getMoneySchema).optional(),
    usedUnsignedInt: z.number().int().nonnegative().optional(),
    _usedUnsignedInt: z.lazy(getElementSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const allowed_x_Present = [
        "allowedMoney",
        "allowedString",
        "allowedUnsignedInt",
      ].filter((field) => record[field] !== undefined);
      if (allowed_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of allowedMoney, allowedString, allowedUnsignedInt may be present for allowed[x]",
          path: [allowed_x_Present[0]],
        });
      }
      const used_x_Present = ["usedMoney", "usedUnsignedInt"].filter(
        (field) => record[field] !== undefined,
      );
      if (used_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of usedMoney, usedUnsignedInt may be present for used[x]",
          path: [used_x_Present[0]],
        });
      }
    });

export const EligibilityResponse_Insurance_BenefitBalance_FinancialSchema =
  EligibilityResponse_Insurance_BenefitBalance_FinancialSchemaInternal as z.ZodType<EligibilityResponse_Insurance_BenefitBalance_Financial>;
