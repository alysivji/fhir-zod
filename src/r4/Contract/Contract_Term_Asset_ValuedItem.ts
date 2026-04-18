// Source: https://hl7.org/fhir/R4/contract-definitions.html#Contract.term.asset.valuedItem
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Contract Valued Item List. */
export interface Contract_Term_Asset_ValuedItem extends BackboneElement {
  /** Indicates the time during which this Contract ValuedItem information is effective. */
  effectiveTime?: string;
  /** Extensions for effectiveTime */
  _effectiveTime?: Element;
  /** Specific type of Contract Valued Item that may be priced. */
  entityCodeableConcept?: CodeableConcept;
  /** Specific type of Contract Valued Item that may be priced. */
  entityReference?: Reference;
  /** A real number that represents a multiplier used in determining the overall value of the Contract Valued Item delivered. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount. */
  factor?: number;
  /** Extensions for factor */
  _factor?: Element;
  /** Identifies a Contract Valued Item instance. */
  identifier?: Identifier;
  /** Id  of the clause or question text related to the context of this valuedItem in the referenced form or QuestionnaireResponse. */
  linkId?: Array<string | null>;
  /** Extensions for linkId */
  _linkId?: Array<Element | null>;
  /** Expresses the product of the Contract Valued Item unitQuantity and the unitPriceAmt. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied. */
  net?: Money;
  /** Terms of valuation. */
  payment?: string;
  /** Extensions for payment */
  _payment?: Element;
  /** When payment is due. */
  paymentDate?: string;
  /** Extensions for paymentDate */
  _paymentDate?: Element;
  /** An amount that expresses the weighting (based on difficulty, cost and/or resource intensiveness) associated with the Contract Valued Item delivered. The concept of Points allows for assignment of point values for a Contract Valued Item, such that a monetary amount can be assigned to each point. */
  points?: number;
  /** Extensions for points */
  _points?: Element;
  /** Specifies the units by which the Contract Valued Item is measured or counted, and quantifies the countable or measurable Contract Valued Item instances. */
  quantity?: Quantity;
  /** Who will receive payment. */
  recipient?: Reference;
  /** Who will make payment. */
  responsible?: Reference;
  /** A set of security labels that define which terms are controlled by this condition. */
  securityLabelNumber?: Array<number | null>;
  /** Extensions for securityLabelNumber */
  _securityLabelNumber?: Array<Element | null>;
  /** A Contract Valued Item unit valuation measure. */
  unitPrice?: Money;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMoneySchema = (): z.ZodType<Money> =>
  MoneySchemaInternal as z.ZodType<Money>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_Term_Asset_ValuedItemSchemaInternal =
  BackboneElementSchemaInternal.extend({
    effectiveTime: fhirDateTime().optional(),
    _effectiveTime: z.lazy(getElementSchema).optional(),
    entityCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    entityReference: z.lazy(getReferenceSchema).optional(),
    factor: z.number().optional(),
    _factor: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    linkId: fhirString().nullable().array().optional(),
    _linkId: z.lazy(getElementSchema).nullable().array().optional(),
    net: z.lazy(getMoneySchema).optional(),
    payment: fhirString().optional(),
    _payment: z.lazy(getElementSchema).optional(),
    paymentDate: fhirDateTime().optional(),
    _paymentDate: z.lazy(getElementSchema).optional(),
    points: z.number().optional(),
    _points: z.lazy(getElementSchema).optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    recipient: z.lazy(getReferenceSchema).optional(),
    responsible: z.lazy(getReferenceSchema).optional(),
    securityLabelNumber: z
      .number()
      .int()
      .nonnegative()
      .nullable()
      .array()
      .optional(),
    _securityLabelNumber: z
      .lazy(getElementSchema)
      .nullable()
      .array()
      .optional(),
    unitPrice: z.lazy(getMoneySchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const entity_x_Present = [
        "entityCodeableConcept",
        "entityReference",
      ].filter((field) => record[field] !== undefined);
      if (entity_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of entityCodeableConcept, entityReference may be present for entity[x]",
          path: [entity_x_Present[0]],
        });
      }
      validatePrimitiveArrayPair(
        record.linkId,
        record._linkId,
        "linkId",
        "_linkId",
        ctx,
      );
      validatePrimitiveArrayPair(
        record.securityLabelNumber,
        record._securityLabelNumber,
        "securityLabelNumber",
        "_securityLabelNumber",
        ctx,
      );
      validateReferenceTarget(
        record.entityReference,
        "entityReference",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
      validateReferenceTarget(
        record.recipient,
        "recipient",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
      validateReferenceTarget(
        record.responsible,
        "responsible",
        [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
    });

export const Contract_Term_Asset_ValuedItemSchema =
  Contract_Term_Asset_ValuedItemSchemaInternal as z.ZodType<Contract_Term_Asset_ValuedItem>;
