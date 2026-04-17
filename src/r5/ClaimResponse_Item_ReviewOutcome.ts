// Profile: http://hl7.org/fhir/StructureDefinition/ClaimResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** The high-level results of the adjudication if adjudication has been performed. */
export interface ClaimResponse_Item_ReviewOutcome extends BackboneElement {
  /** The result of the claim, predetermination, or preauthorization adjudication. */
  decision?: CodeableConcept;
  /** The time frame during which this authorization is effective. */
  preAuthPeriod?: Period;
  /** Reference from the Insurer which is used in later communications which refers to this adjudication. */
  preAuthRef?: string;
  /** Extensions for preAuthRef */
  _preAuthRef?: Element;
  /** The reasons for the result of the claim, predetermination, or preauthorization adjudication. */
  reason?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const ClaimResponse_Item_ReviewOutcomeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    decision: z.lazy(getCodeableConceptSchema).optional(),
    preAuthPeriod: z.lazy(getPeriodSchema).optional(),
    preAuthRef: fhirString().optional(),
    _preAuthRef: z.lazy(getElementSchema).optional(),
    reason: z.lazy(getCodeableConceptSchema).array().optional(),
  }).strict();

export const ClaimResponse_Item_ReviewOutcomeSchema =
  ClaimResponse_Item_ReviewOutcomeSchemaInternal as z.ZodType<ClaimResponse_Item_ReviewOutcome>;
