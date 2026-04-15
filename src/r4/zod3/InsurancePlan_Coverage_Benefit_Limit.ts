// Profile: http://hl7.org/fhir/StructureDefinition/InsurancePlan
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** The specific limits on the benefit. */
export interface InsurancePlan_Coverage_Benefit_Limit extends BackboneElement {
	/** The specific limit on the benefit. */
	code?: CodeableConcept;
	/** The maximum amount of a service item a plan will pay for a covered benefit.  For examples. wellness visits, or eyeglasses. */
	value?: Quantity;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const InsurancePlan_Coverage_Benefit_LimitSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		value: z.lazy(getQuantitySchema).optional(),
	}).strict();

export const InsurancePlan_Coverage_Benefit_LimitSchema =
	InsurancePlan_Coverage_Benefit_LimitSchemaInternal as z.ZodType<InsurancePlan_Coverage_Benefit_Limit>;
