// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-17T23:33:03.670Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirDate } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ExplanationOfBenefit_AddItem_Detail } from "./ExplanationOfBenefit_AddItem_Detail";
import { ExplanationOfBenefit_AddItem_DetailSchemaInternal } from "./ExplanationOfBenefit_AddItem_Detail";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The first-tier service adjudications for payor added product or service lines. */
export interface ExplanationOfBenefit_AddItem extends BackboneElement {
  /** The adjudication results. */
  adjudication?: Array<unknown>;
  /** Physical service site on the patient (limb, tooth, etc.). */
  bodySite?: CodeableConcept;
  /** The second-tier service adjudications for payor added services. */
  detail?: Array<ExplanationOfBenefit_AddItem_Detail>;
  /** The sequence number of the details within the claim item which this line is intended to replace. */
  detailSequence?: Array<number | null>;
  /** Extensions for detailSequence */
  _detailSequence?: Array<Element | null>;
  /** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount. */
  factor?: number;
  /** Extensions for factor */
  _factor?: Element;
  /** Claim items which this service line is intended to replace. */
  itemSequence?: Array<number | null>;
  /** Extensions for itemSequence */
  _itemSequence?: Array<Element | null>;
  /** Where the product or service was provided. */
  locationAddress?: Address;
  /** Where the product or service was provided. */
  locationCodeableConcept?: CodeableConcept;
  /** Where the product or service was provided. */
  locationReference?: Reference;
  /** Item typification or modifiers codes to convey additional context for the product or service. */
  modifier?: Array<CodeableConcept>;
  /** The quantity times the unit price for an additional service or product or charge. */
  net?: Money;
  /** The numbers associated with notes below which apply to the adjudication of this item. */
  noteNumber?: Array<number | null>;
  /** Extensions for noteNumber */
  _noteNumber?: Array<Element | null>;
  /** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item. */
  productOrService: CodeableConcept;
  /** Identifies the program under which this may be recovered. */
  programCode?: Array<CodeableConcept>;
  /** The providers who are authorized for the services rendered to the patient. */
  provider?: Array<Reference>;
  /** The number of repetitions of a service or product. */
  quantity?: Quantity;
  /** The date or dates when the service or product was supplied, performed or completed. */
  servicedDate?: string;
  /** Extensions for servicedDate */
  _servicedDate?: Element;
  /** The date or dates when the service or product was supplied, performed or completed. */
  servicedPeriod?: Period;
  /** The sequence number of the sub-details woithin the details within the claim item which this line is intended to replace. */
  subDetailSequence?: Array<number | null>;
  /** Extensions for subDetailSequence */
  _subDetailSequence?: Array<Element | null>;
  /** A region or surface of the bodySite, e.g. limb region or tooth surface(s). */
  subSite?: Array<CodeableConcept>;
  /** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group. */
  unitPrice?: Money;
}

const getAddressSchema = (): z.ZodType<Address> =>
  AddressSchemaInternal as z.ZodType<Address>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExplanationOfBenefit_AddItem_DetailSchema =
  (): z.ZodType<ExplanationOfBenefit_AddItem_Detail> =>
    ExplanationOfBenefit_AddItem_DetailSchemaInternal as z.ZodType<ExplanationOfBenefit_AddItem_Detail>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_AddItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    adjudication: z.unknown().array().optional(),
    bodySite: z.lazy(getCodeableConceptSchema).optional(),
    detail: z
      .lazy(getExplanationOfBenefit_AddItem_DetailSchema)
      .array()
      .optional(),
    detailSequence: z.number().int().positive().nullable().array().optional(),
    _detailSequence: z.lazy(getElementSchema).nullable().array().optional(),
    factor: z.number().optional(),
    _factor: z.lazy(getElementSchema).optional(),
    itemSequence: z.number().int().positive().nullable().array().optional(),
    _itemSequence: z.lazy(getElementSchema).nullable().array().optional(),
    locationAddress: z.lazy(getAddressSchema).optional(),
    locationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    locationReference: z.lazy(getReferenceSchema).optional(),
    modifier: z.lazy(getCodeableConceptSchema).array().optional(),
    net: z.lazy(getMoneySchema).optional(),
    noteNumber: z.number().int().positive().nullable().array().optional(),
    _noteNumber: z.lazy(getElementSchema).nullable().array().optional(),
    productOrService: z.lazy(getCodeableConceptSchema),
    programCode: z.lazy(getCodeableConceptSchema).array().optional(),
    provider: z.lazy(getReferenceSchema).array().optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    servicedDate: fhirDate().optional(),
    _servicedDate: z.lazy(getElementSchema).optional(),
    servicedPeriod: z.lazy(getPeriodSchema).optional(),
    subDetailSequence: z
      .number()
      .int()
      .positive()
      .nullable()
      .array()
      .optional(),
    _subDetailSequence: z.lazy(getElementSchema).nullable().array().optional(),
    subSite: z.lazy(getCodeableConceptSchema).array().optional(),
    unitPrice: z.lazy(getMoneySchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const location_x_Present = [
        "locationAddress",
        "locationCodeableConcept",
        "locationReference",
      ].filter((field) => record[field] !== undefined);
      if (location_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of locationAddress, locationCodeableConcept, locationReference may be present for location[x]",
          path: [location_x_Present[0]],
        });
      }
      const serviced_x_Present = ["servicedDate", "servicedPeriod"].filter(
        (field) => record[field] !== undefined,
      );
      if (serviced_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of servicedDate, servicedPeriod may be present for serviced[x]",
          path: [serviced_x_Present[0]],
        });
      }
      validatePrimitiveArrayPair(
        record.detailSequence,
        record._detailSequence,
        "detailSequence",
        "_detailSequence",
        ctx,
      );
      validatePrimitiveArrayPair(
        record.itemSequence,
        record._itemSequence,
        "itemSequence",
        "_itemSequence",
        ctx,
      );
      validatePrimitiveArrayPair(
        record.noteNumber,
        record._noteNumber,
        "noteNumber",
        "_noteNumber",
        ctx,
      );
      validatePrimitiveArrayPair(
        record.subDetailSequence,
        record._subDetailSequence,
        "subDetailSequence",
        "_subDetailSequence",
        ctx,
      );
      validateReferenceTarget(
        record.locationReference,
        "locationReference",
        ["http://hl7.org/fhir/StructureDefinition/Location"],
        ["Location"],
        ctx,
      );
      validateReferenceTarget(
        record.provider,
        "provider",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        ["Organization", "Practitioner", "PractitionerRole"],
        ctx,
      );
    });

export const ExplanationOfBenefit_AddItemSchema =
  ExplanationOfBenefit_AddItemSchemaInternal as z.ZodType<ExplanationOfBenefit_AddItem>;
