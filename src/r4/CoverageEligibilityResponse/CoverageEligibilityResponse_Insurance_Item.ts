// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString, fhirUri } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { CoverageEligibilityResponse_Insurance_Item_Benefit } from "./CoverageEligibilityResponse_Insurance_Item_Benefit";
import { CoverageEligibilityResponse_Insurance_Item_BenefitSchemaInternal } from "./CoverageEligibilityResponse_Insurance_Item_Benefit";

/** Benefits and optionally current balances, and authorization details by category or service. */
export interface CoverageEligibilityResponse_Insurance_Item
  extends BackboneElement {
  /** A boolean flag indicating whether a preauthorization is required prior to actual service delivery. */
  authorizationRequired?: boolean;
  /** Extensions for authorizationRequired */
  _authorizationRequired?: Element;
  /** Codes or comments regarding information or actions associated with the preauthorization. */
  authorizationSupporting?: Array<CodeableConcept>;
  /** A web location for obtaining requirements or descriptive information regarding the preauthorization. */
  authorizationUrl?: string;
  /** Extensions for authorizationUrl */
  _authorizationUrl?: Element;
  /** Benefits used to date. */
  benefit?: Array<CoverageEligibilityResponse_Insurance_Item_Benefit>;
  /** Code to identify the general type of benefits under which products and services are provided. */
  category?: CodeableConcept;
  /** A richer description of the benefit or services covered. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage. */
  excluded?: boolean;
  /** Extensions for excluded */
  _excluded?: Element;
  /** Item typification or modifiers codes to convey additional context for the product or service. */
  modifier?: Array<CodeableConcept>;
  /** A short name or tag for the benefit. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers. */
  network?: CodeableConcept;
  /** This contains the product, service, drug or other billing code for the item. */
  productOrService?: CodeableConcept;
  /** The practitioner who is eligible for the provision of the product or service. */
  provider?: Reference;
  /** The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'. */
  term?: CodeableConcept;
  /** Indicates if the benefits apply to an individual or to the family. */
  unit?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCoverageEligibilityResponse_Insurance_Item_BenefitSchema =
  (): z.ZodType<CoverageEligibilityResponse_Insurance_Item_Benefit> =>
    CoverageEligibilityResponse_Insurance_Item_BenefitSchemaInternal as z.ZodType<CoverageEligibilityResponse_Insurance_Item_Benefit>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CoverageEligibilityResponse_Insurance_ItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    authorizationRequired: z.boolean().optional(),
    _authorizationRequired: z.lazy(getElementSchema).optional(),
    authorizationSupporting: z
      .lazy(getCodeableConceptSchema)
      .array()
      .optional(),
    authorizationUrl: fhirUri().optional(),
    _authorizationUrl: z.lazy(getElementSchema).optional(),
    benefit: z
      .lazy(getCoverageEligibilityResponse_Insurance_Item_BenefitSchema)
      .array()
      .optional(),
    category: z.lazy(getCodeableConceptSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    excluded: z.boolean().optional(),
    _excluded: z.lazy(getElementSchema).optional(),
    modifier: z.lazy(getCodeableConceptSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    network: z.lazy(getCodeableConceptSchema).optional(),
    productOrService: z.lazy(getCodeableConceptSchema).optional(),
    provider: z.lazy(getReferenceSchema).optional(),
    term: z.lazy(getCodeableConceptSchema).optional(),
    unit: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.provider,
        "provider",
        [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        ["Practitioner", "PractitionerRole"],
        ctx,
      );
    });

export const CoverageEligibilityResponse_Insurance_ItemSchema =
  CoverageEligibilityResponse_Insurance_ItemSchemaInternal as z.ZodType<CoverageEligibilityResponse_Insurance_Item>;
