// Profile: http://hl7.org/fhir/StructureDefinition/Coverage
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** A suite of codes indicating exceptions or reductions to patient costs and their effective periods. */
export interface Coverage_CostToBeneficiary_Exception extends BackboneElement {
  /** The timeframe the exception is in force. */
  period?: Period;
  /** The code for the specific exception. */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const Coverage_CostToBeneficiary_ExceptionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    period: z.lazy(getPeriodSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
  }).strict();

export const Coverage_CostToBeneficiary_ExceptionSchema =
  Coverage_CostToBeneficiary_ExceptionSchemaInternal as z.ZodType<Coverage_CostToBeneficiary_Exception>;
