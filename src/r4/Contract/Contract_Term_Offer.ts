// Source: https://hl7.org/fhir/R4/contract-definitions.html#Contract.term.offer
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Contract_Term_Offer_Answer } from "./Contract_Term_Offer_Answer";
import { Contract_Term_Offer_AnswerSchemaInternal } from "./Contract_Term_Offer_Answer";
import type { Contract_Term_Offer_Party } from "./Contract_Term_Offer_Party";
import { Contract_Term_Offer_PartySchemaInternal } from "./Contract_Term_Offer_Party";

/** The matter of concern in the context of this provision of the agrement. */
export interface Contract_Term_Offer extends BackboneElement {
  /** Response to offer text. */
  answer?: Array<Contract_Term_Offer_Answer>;
  /** Type of choice made by accepting party with respect to an offer made by an offeror/ grantee. */
  decision?: CodeableConcept;
  /** How the decision about a Contract was conveyed. */
  decisionMode?: Array<CodeableConcept>;
  /** Unique identifier for this particular Contract Provision. */
  identifier?: Array<Identifier>;
  /** The id of the clause or question text of the offer in the referenced questionnaire/response. */
  linkId?: Array<string | null>;
  /** Extensions for linkId */
  _linkId?: Array<Element | null>;
  /** Offer Recipient. */
  party?: Array<Contract_Term_Offer_Party>;
  /** Security labels that protects the offer. */
  securityLabelNumber?: Array<number | null>;
  /** Extensions for securityLabelNumber */
  _securityLabelNumber?: Array<Element | null>;
  /** Human readable form of this Contract Offer. */
  text?: string;
  /** Extensions for text */
  _text?: Element;
  /** The owner of an asset has the residual control rights over the asset: the right to decide all usages of the asset in any way not inconsistent with a prior contract, custom, or law (Hart, 1995, p. 30). */
  topic?: Reference;
  /** Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContract_Term_Offer_AnswerSchema =
  (): z.ZodType<Contract_Term_Offer_Answer> =>
    Contract_Term_Offer_AnswerSchemaInternal as z.ZodType<Contract_Term_Offer_Answer>;
const getContract_Term_Offer_PartySchema =
  (): z.ZodType<Contract_Term_Offer_Party> =>
    Contract_Term_Offer_PartySchemaInternal as z.ZodType<Contract_Term_Offer_Party>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_Term_OfferSchemaInternal =
  BackboneElementSchemaInternal.extend({
    answer: z.lazy(getContract_Term_Offer_AnswerSchema).array().optional(),
    decision: z.lazy(getCodeableConceptSchema).optional(),
    decisionMode: z.lazy(getCodeableConceptSchema).array().optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    linkId: fhirString().nullable().array().optional(),
    _linkId: z.lazy(getElementSchema).nullable().array().optional(),
    party: z.lazy(getContract_Term_Offer_PartySchema).array().optional(),
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
    text: fhirString().optional(),
    _text: z.lazy(getElementSchema).optional(),
    topic: z.lazy(getReferenceSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
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
        record.topic,
        "topic",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
    });

export const Contract_Term_OfferSchema =
  Contract_Term_OfferSchemaInternal as z.ZodType<Contract_Term_Offer>;
