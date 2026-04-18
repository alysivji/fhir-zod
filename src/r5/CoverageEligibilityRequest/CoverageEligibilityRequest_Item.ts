// Profile: http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { CoverageEligibilityRequest_Item_Diagnosis } from "./CoverageEligibilityRequest_Item_Diagnosis";
import { CoverageEligibilityRequest_Item_DiagnosisSchemaInternal } from "./CoverageEligibilityRequest_Item_Diagnosis";

/** Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor. */
export interface CoverageEligibilityRequest_Item extends BackboneElement {
  /** Code to identify the general type of benefits under which products and services are provided. */
  category?: CodeableConcept;
  /** The plan/proposal/order describing the proposed service in detail. */
  detail?: Array<Reference>;
  /** Patient diagnosis for which care is sought. */
  diagnosis?: Array<CoverageEligibilityRequest_Item_Diagnosis>;
  /** Facility where the services will be provided. */
  facility?: Reference;
  /** Item typification or modifiers codes to convey additional context for the product or service. */
  modifier?: Array<CodeableConcept>;
  /** This contains the product, service, drug or other billing code for the item. */
  productOrService?: CodeableConcept;
  /** The practitioner who is responsible for the product or service to be rendered to the patient. */
  provider?: Reference;
  /** The number of repetitions of a service or product. */
  quantity?: Quantity;
  /** Exceptions, special conditions and supporting information applicable for this service or product line. */
  supportingInfoSequence?: Array<number | null>;
  /** Extensions for supportingInfoSequence */
  _supportingInfoSequence?: Array<Element | null>;
  /** The amount charged to the patient by the provider for a single unit. */
  unitPrice?: Money;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCoverageEligibilityRequest_Item_DiagnosisSchema =
  (): z.ZodType<CoverageEligibilityRequest_Item_Diagnosis> =>
    CoverageEligibilityRequest_Item_DiagnosisSchemaInternal as z.ZodType<CoverageEligibilityRequest_Item_Diagnosis>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CoverageEligibilityRequest_ItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    category: z.lazy(getCodeableConceptSchema).optional(),
    detail: z.lazy(getReferenceSchema).array().optional(),
    diagnosis: z
      .lazy(getCoverageEligibilityRequest_Item_DiagnosisSchema)
      .array()
      .optional(),
    facility: z.lazy(getReferenceSchema).optional(),
    modifier: z.lazy(getCodeableConceptSchema).array().optional(),
    productOrService: z.lazy(getCodeableConceptSchema).optional(),
    provider: z.lazy(getReferenceSchema).optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    supportingInfoSequence: z
      .number()
      .int()
      .positive()
      .nullable()
      .array()
      .optional(),
    _supportingInfoSequence: z
      .lazy(getElementSchema)
      .nullable()
      .array()
      .optional(),
    unitPrice: z.lazy(getMoneySchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validatePrimitiveArrayPair(
        record.supportingInfoSequence,
        record._supportingInfoSequence,
        "supportingInfoSequence",
        "_supportingInfoSequence",
        ctx,
      );
      validateReferenceTarget(
        record.detail,
        "detail",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
      validateReferenceTarget(
        record.facility,
        "facility",
        [
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
        ["Location", "Organization"],
        ctx,
      );
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

export const CoverageEligibilityRequest_ItemSchema =
  CoverageEligibilityRequest_ItemSchemaInternal as z.ZodType<CoverageEligibilityRequest_Item>;
