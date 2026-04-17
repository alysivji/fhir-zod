// Profile: http://hl7.org/fhir/StructureDefinition/EligibilityResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { EligibilityResponse_Insurance_BenefitBalance } from "./EligibilityResponse_Insurance_BenefitBalance";
import { EligibilityResponse_Insurance_BenefitBalanceSchemaInternal } from "./EligibilityResponse_Insurance_BenefitBalance";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The insurer may provide both the details for the requested coverage as well as details for additional coverages known to the insurer. */
export interface EligibilityResponse_Insurance extends BackboneElement {
  /** Benefits and optionally current balances by Category. */
  benefitBalance?: Array<EligibilityResponse_Insurance_BenefitBalance>;
  /** The contract resource which may provide more detailed information. */
  contract?: Reference;
  /** A suite of updated or additional Coverages from the Insurer. */
  coverage?: Reference;
}

const getEligibilityResponse_Insurance_BenefitBalanceSchema =
  (): z.ZodType<EligibilityResponse_Insurance_BenefitBalance> =>
    EligibilityResponse_Insurance_BenefitBalanceSchemaInternal as z.ZodType<EligibilityResponse_Insurance_BenefitBalance>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EligibilityResponse_InsuranceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    benefitBalance: z
      .lazy(getEligibilityResponse_Insurance_BenefitBalanceSchema)
      .array()
      .optional(),
    contract: z.lazy(getReferenceSchema).optional(),
    coverage: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.contract,
        "contract",
        ["http://hl7.org/fhir/StructureDefinition/Contract"],
        ["Contract"],
        ctx,
      );
      validateReferenceTarget(
        record.coverage,
        "coverage",
        ["http://hl7.org/fhir/StructureDefinition/Coverage"],
        ["Coverage"],
        ctx,
      );
    });

export const EligibilityResponse_InsuranceSchema =
  EligibilityResponse_InsuranceSchemaInternal as z.ZodType<EligibilityResponse_Insurance>;
