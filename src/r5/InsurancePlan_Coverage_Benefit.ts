// Profile: http://hl7.org/fhir/StructureDefinition/InsurancePlan
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
import type { InsurancePlan_Coverage_Benefit_Limit } from "./InsurancePlan_Coverage_Benefit_Limit";
import { InsurancePlan_Coverage_Benefit_LimitSchemaInternal } from "./InsurancePlan_Coverage_Benefit_Limit";

/** Specific benefits under this type of coverage. */
export interface InsurancePlan_Coverage_Benefit extends BackboneElement {
  /** The specific limits on the benefit. */
  limit?: Array<InsurancePlan_Coverage_Benefit_Limit>;
  /** The referral requirements to have access/coverage for this benefit. */
  requirement?: string;
  /** Extensions for requirement */
  _requirement?: Element;
  /** Type of benefit (primary care; speciality care; inpatient; outpatient). */
  type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getInsurancePlan_Coverage_Benefit_LimitSchema =
  (): z.ZodType<InsurancePlan_Coverage_Benefit_Limit> =>
    InsurancePlan_Coverage_Benefit_LimitSchemaInternal as z.ZodType<InsurancePlan_Coverage_Benefit_Limit>;

/** @internal */
export const InsurancePlan_Coverage_BenefitSchemaInternal =
  BackboneElementSchemaInternal.extend({
    limit: z
      .lazy(getInsurancePlan_Coverage_Benefit_LimitSchema)
      .array()
      .optional(),
    requirement: fhirString().optional(),
    _requirement: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema),
  }).strict();

export const InsurancePlan_Coverage_BenefitSchema =
  InsurancePlan_Coverage_BenefitSchemaInternal as z.ZodType<InsurancePlan_Coverage_Benefit>;
