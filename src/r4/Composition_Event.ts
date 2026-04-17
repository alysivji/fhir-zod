// Profile: http://hl7.org/fhir/StructureDefinition/Composition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The clinical service, such as a colonoscopy or an appendectomy, being documented. */
export interface Composition_Event extends BackboneElement {
  /** This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which the procedure being documented is necessarily a "History and Physical" act. */
  code?: Array<CodeableConcept>;
  /** The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy. */
  detail?: Array<Reference>;
  /** The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time. */
  period?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Composition_EventSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema).array().optional(),
    detail: z.lazy(getReferenceSchema).array().optional(),
    period: z.lazy(getPeriodSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.detail,
        "detail",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const Composition_EventSchema =
  Composition_EventSchemaInternal as z.ZodType<Composition_Event>;
