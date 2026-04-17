// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";

/** The price of the medication. */
export interface MedicationKnowledge_Cost extends BackboneElement {
  /** The price of the medication. */
  cost: Money;
  /** The source or owner that assigns the price to the medication. */
  source?: string;
  /** Extensions for source */
  _source?: Element;
  /** The category of the cost information.  For example, manufacturers' cost, patient cost, claim reimbursement cost, actual acquisition cost. */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;

/** @internal */
export const MedicationKnowledge_CostSchemaInternal =
  BackboneElementSchemaInternal.extend({
    cost: z.lazy(getMoneySchema),
    source: fhirString().optional(),
    _source: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
  }).strict();

export const MedicationKnowledge_CostSchema =
  MedicationKnowledge_CostSchemaInternal as z.ZodType<MedicationKnowledge_Cost>;
