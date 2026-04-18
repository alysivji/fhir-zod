// Source: https://hl7.org/fhir/R5/insuranceplan-definitions.html#InsurancePlan.plan.generalCost
// Profile: http://hl7.org/fhir/StructureDefinition/InsurancePlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

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

/** Overall costs associated with the plan. */
export interface InsurancePlan_Plan_GeneralCost extends BackboneElement {
  /** Additional information about the general costs associated with this plan. */
  comment?: string;
  /** Extensions for comment */
  _comment?: Element;
  /** Value of the cost. */
  cost?: Money;
  /** Number of participants enrolled in the plan. */
  groupSize?: number;
  /** Extensions for groupSize */
  _groupSize?: Element;
  /** Type of cost. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const InsurancePlan_Plan_GeneralCostSchemaInternal =
  BackboneElementSchemaInternal.extend({
    comment: fhirString().optional(),
    _comment: z.lazy(getElementSchema).optional(),
    cost: z.lazy(getMoneySchema).optional(),
    groupSize: z.number().int().positive().optional(),
    _groupSize: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const InsurancePlan_Plan_GeneralCostSchema =
  InsurancePlan_Plan_GeneralCostSchemaInternal as z.ZodType<InsurancePlan_Plan_GeneralCost>;
