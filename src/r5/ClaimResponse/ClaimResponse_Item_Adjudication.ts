// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item. */
export interface ClaimResponse_Item_Adjudication extends BackboneElement {
  /** Monetary amount associated with the category. */
  amount?: Money;
  /** A code to indicate the information type of this adjudication record. Information types may include the value submitted, maximum values or percentages allowed or payable under the plan, amounts that: the patient is responsible for in aggregate or pertaining to this item; amounts paid by other coverages; and, the benefit payable for this item. */
  category: CodeableConcept;
  /** A non-monetary value associated with the category. Mutually exclusive to the amount element above. */
  quantity?: Quantity;
  /** A code supporting the understanding of the adjudication result and explaining variance from expected amount. */
  reason?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const ClaimResponse_Item_AdjudicationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    amount: z.lazy(getMoneySchema).optional(),
    category: z.lazy(getCodeableConceptSchema),
    quantity: z.lazy(getQuantitySchema).optional(),
    reason: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const ClaimResponse_Item_AdjudicationSchema =
  ClaimResponse_Item_AdjudicationSchemaInternal as z.ZodType<ClaimResponse_Item_Adjudication>;
