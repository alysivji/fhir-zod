// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";

/** Categorized monetary totals for the adjudication. */
export interface ClaimResponse_Total extends BackboneElement {
	/** Monetary total amount associated with the category. */
	amount: Money;
	/** A code to indicate the information type of this adjudication record. Information types may include: the value submitted, maximum values or percentages allowed or payable under the plan, amounts that the patient is responsible for in aggregate or pertaining to this item, amounts paid by other coverages, and the benefit payable for this item. */
	category: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const ClaimResponse_TotalSchemaInternal =
	BackboneElementSchemaInternal.extend({
		amount: z.lazy(getMoneySchema),
		category: z.lazy(getCodeableConceptSchema),
	}).strict();

export const ClaimResponse_TotalSchema =
	ClaimResponse_TotalSchemaInternal as z.ZodType<ClaimResponse_Total>;
