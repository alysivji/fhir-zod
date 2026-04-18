// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";

/** Information code for an event with a corresponding date or period. */
export interface CoverageEligibilityResponse_Event extends BackboneElement {
  /** A coded event such as when a service is expected or a card printed. */
  type: CodeableConcept;
  /** A date or period in the past or future indicating when the event occurred or is expectd to occur. */
  whenDateTime?: string;
  /** Extensions for whenDateTime */
  _whenDateTime?: Element;
  /** A date or period in the past or future indicating when the event occurred or is expectd to occur. */
  whenPeriod?: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const CoverageEligibilityResponse_EventSchemaInternal =
  BackboneElementSchemaInternal.extend({
    type: z.lazy(getCodeableConceptSchema),
    whenDateTime: fhirDateTime().optional(),
    _whenDateTime: z.lazy(getElementSchema).optional(),
    whenPeriod: z.lazy(getPeriodSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const when_x_Present = ["whenDateTime", "whenPeriod"].filter(
        (field) => record[field] !== undefined,
      );
      if (when_x_Present.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "One of whenDateTime, whenPeriod must be present for when[x]",
          path: ["whenDateTime"],
        });
      }
      if (when_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of whenDateTime, whenPeriod may be present for when[x]",
          path: [when_x_Present[0]],
        });
      }
    });

export const CoverageEligibilityResponse_EventSchema =
  CoverageEligibilityResponse_EventSchemaInternal as z.ZodType<CoverageEligibilityResponse_Event>;
