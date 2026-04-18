// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A manufacturing or administrative process or step associated with (or performed on) the medicinal product. */
export interface MedicinalProductDefinition_Operation extends BackboneElement {
  /** Specifies whether this particular business or manufacturing process is considered proprietary or confidential. */
  confidentialityIndicator?: CodeableConcept;
  /** Date range of applicability. */
  effectiveDate?: Period;
  /** The organization or establishment responsible for (or associated with) the particular process or step, examples include the manufacturer, importer, agent. */
  organization?: Array<Reference>;
  /** The type of manufacturing operation e.g. manufacturing itself, re-packaging. For the authorization of this, a RegulatedAuthorization would point to the same plan or activity referenced here. */
  type?: CodeableReference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductDefinition_OperationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    confidentialityIndicator: z.lazy(getCodeableConceptSchema).optional(),
    effectiveDate: z.lazy(getPeriodSchema).optional(),
    organization: z.lazy(getReferenceSchema).array().optional(),
    type: z.lazy(getCodeableReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.organization,
        "organization",
        ["http://hl7.org/fhir/StructureDefinition/Organization"],
        ["Organization"],
        ctx,
      );
    });

export const MedicinalProductDefinition_OperationSchema =
  MedicinalProductDefinition_OperationSchemaInternal as z.ZodType<MedicinalProductDefinition_Operation>;
