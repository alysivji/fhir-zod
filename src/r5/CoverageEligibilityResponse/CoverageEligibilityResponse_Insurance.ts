// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { CoverageEligibilityResponse_Insurance_Item } from "./CoverageEligibilityResponse_Insurance_Item";
import { CoverageEligibilityResponse_Insurance_ItemSchemaInternal } from "./CoverageEligibilityResponse_Insurance_Item";

/** Financial instruments for reimbursement for the health care products and services. */
export interface CoverageEligibilityResponse_Insurance extends BackboneElement {
  /** The term of the benefits documented in this response. */
  benefitPeriod?: Period;
  /** Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system. */
  coverage: Reference;
  /** Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates. */
  inforce?: boolean;
  /** Extensions for inforce */
  _inforce?: Element;
  /** Benefits and optionally current balances, and authorization details by category or service. */
  item?: Array<CoverageEligibilityResponse_Insurance_Item>;
}

const getCoverageEligibilityResponse_Insurance_ItemSchema =
  (): z.ZodType<CoverageEligibilityResponse_Insurance_Item> =>
    CoverageEligibilityResponse_Insurance_ItemSchemaInternal as z.ZodType<CoverageEligibilityResponse_Insurance_Item>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CoverageEligibilityResponse_InsuranceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    benefitPeriod: z.lazy(getPeriodSchema).optional(),
    coverage: z.lazy(getReferenceSchema),
    inforce: z.boolean().optional(),
    _inforce: z.lazy(getElementSchema).optional(),
    item: z
      .lazy(getCoverageEligibilityResponse_Insurance_ItemSchema)
      .array()
      .optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.coverage,
        "coverage",
        ["http://hl7.org/fhir/StructureDefinition/Coverage"],
        ["Coverage"],
        ctx,
      );
    });

export const CoverageEligibilityResponse_InsuranceSchema =
  CoverageEligibilityResponse_InsuranceSchemaInternal as z.ZodType<CoverageEligibilityResponse_Insurance>;
