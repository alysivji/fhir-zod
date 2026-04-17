// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";

/** The adjudication results. */
export interface ClaimResponse_Item_Adjudication extends BackboneElement {
  /** Monetary amount associated with the code. */
  amount?: Money;
  /** Code indicating: Co-Pay, deductible, eligible, benefit, tax, etc. */
  category: CodeableConcept;
  /** Adjudication reason such as limit reached. */
  reason?: CodeableConcept;
  /** A non-monetary value for example a percentage. Mutually exclusive to the amount element above. */
  value?: number;
  /** Extensions for value */
  _value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const ClaimResponse_Item_AdjudicationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amount: z.lazy(getMoneySchema).optional(),
    category: z.lazy(getCodeableConceptSchema),
    reason: z.lazy(getCodeableConceptSchema).optional(),
    value: z.number().optional(),
    _value: z.lazy(getElementSchema).optional(),
  }).strict();

export const ClaimResponse_Item_AdjudicationSchema =
  ClaimResponse_Item_AdjudicationSchemaInternal as z.ZodType<ClaimResponse_Item_Adjudication>;
