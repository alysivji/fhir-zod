// Source: https://hl7.org/fhir/STU3/eligibilityresponse-definitions.html#EligibilityResponse.insurance.benefitBalance
// Profile: http://hl7.org/fhir/StructureDefinition/EligibilityResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { EligibilityResponse_Insurance_BenefitBalance_Financial } from "./EligibilityResponse_Insurance_BenefitBalance_Financial";
import { EligibilityResponse_Insurance_BenefitBalance_FinancialSchemaInternal } from "./EligibilityResponse_Insurance_BenefitBalance_Financial";

/** Benefits and optionally current balances by Category. */
export interface EligibilityResponse_Insurance_BenefitBalance
  extends BackboneElement {
  /** Dental, Vision, Medical, Pharmacy, Rehab etc. */
  category: CodeableConcept;
  /** A richer description of the benefit, for example 'DENT2 covers 100% of basic, 50% of major but exclused Ortho, Implants and Costmetic services'. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** True if the indicated class of service is excluded from the plan, missing or False indicated the service is included in the coverage. */
  excluded?: boolean;
  /** Extensions for excluded */
  _excluded?: Element;
  /** Benefits Used to date. */
  financial?: Array<EligibilityResponse_Insurance_BenefitBalance_Financial>;
  /** A short name or tag for the benefit, for example MED01, or DENT2. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Network designation. */
  network?: CodeableConcept;
  /** Dental: basic, major, ortho; Vision exam, glasses, contacts; etc. */
  subCategory?: CodeableConcept;
  /** The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual vistis'. */
  term?: CodeableConcept;
  /** Unit designation: individual or family. */
  unit?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getEligibilityResponse_Insurance_BenefitBalance_FinancialSchema =
  (): z.ZodType<EligibilityResponse_Insurance_BenefitBalance_Financial> =>
    EligibilityResponse_Insurance_BenefitBalance_FinancialSchemaInternal as z.ZodType<EligibilityResponse_Insurance_BenefitBalance_Financial>;

/** @internal */
export const EligibilityResponse_Insurance_BenefitBalanceSchemaInternal =
  BackboneElementSchemaInternal.extend({
    category: z.lazy(getCodeableConceptSchema),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    excluded: z.boolean().optional(),
    _excluded: z.lazy(getElementSchema).optional(),
    financial: z
      .lazy(getEligibilityResponse_Insurance_BenefitBalance_FinancialSchema)
      .array()
      .optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    network: z.lazy(getCodeableConceptSchema).optional(),
    subCategory: z.lazy(getCodeableConceptSchema).optional(),
    term: z.lazy(getCodeableConceptSchema).optional(),
    unit: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const EligibilityResponse_Insurance_BenefitBalanceSchema =
  EligibilityResponse_Insurance_BenefitBalanceSchemaInternal as z.ZodType<EligibilityResponse_Insurance_BenefitBalance>;
