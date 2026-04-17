// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Contract_Term_Action } from "./Contract_Term_Action";
import { Contract_Term_ActionSchemaInternal } from "./Contract_Term_Action";
import type { Contract_Term_Asset } from "./Contract_Term_Asset";
import { Contract_Term_AssetSchemaInternal } from "./Contract_Term_Asset";
import type { Contract_Term_Offer } from "./Contract_Term_Offer";
import { Contract_Term_OfferSchemaInternal } from "./Contract_Term_Offer";
import type { Contract_Term_SecurityLabel } from "./Contract_Term_SecurityLabel";
import { Contract_Term_SecurityLabelSchemaInternal } from "./Contract_Term_SecurityLabel";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** One or more Contract Provisions, which may be related and conveyed as a group, and may contain nested groups. */
export interface Contract_Term extends BackboneElement {
  /** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place. */
  action?: Array<Contract_Term_Action>;
  /** Relevant time or time-period when this Contract Provision is applicable. */
  applies?: Period;
  /** Contract Term Asset List. */
  asset?: Array<Contract_Term_Asset>;
  /** Nested group of Contract Provisions. */
  group?: Array<unknown>;
  /** Unique identifier for this particular Contract Provision. */
  identifier?: Identifier;
  /** When this Contract Provision was issued. */
  issued?: string;
  /** Extensions for issued */
  _issued?: Element;
  /** The matter of concern in the context of this provision of the agrement. */
  offer: Contract_Term_Offer;
  /** Security labels that protect the handling of information about the term and its elements, which may be specifically identified. */
  securityLabel?: Array<Contract_Term_SecurityLabel>;
  /** A specialized legal clause or condition based on overarching contract type. */
  subType?: CodeableConcept;
  /** Statement of a provision in a policy or a contract. */
  text?: string;
  /** Extensions for text */
  _text?: Element;
  /** The entity that the term applies to. */
  topicCodeableConcept?: CodeableConcept;
  /** The entity that the term applies to. */
  topicReference?: Reference;
  /** A legal clause or condition contained within a contract that requires one or both parties to perform a particular requirement by some specified time or prevents one or both parties from performing a particular requirement by some specified time. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContract_Term_ActionSchema = (): z.ZodType<Contract_Term_Action> =>
  Contract_Term_ActionSchemaInternal as z.ZodType<Contract_Term_Action>;
const getContract_Term_AssetSchema = (): z.ZodType<Contract_Term_Asset> =>
  Contract_Term_AssetSchemaInternal as z.ZodType<Contract_Term_Asset>;
const getContract_Term_OfferSchema = (): z.ZodType<Contract_Term_Offer> =>
  Contract_Term_OfferSchemaInternal as z.ZodType<Contract_Term_Offer>;
const getContract_Term_SecurityLabelSchema =
  (): z.ZodType<Contract_Term_SecurityLabel> =>
    Contract_Term_SecurityLabelSchemaInternal as z.ZodType<Contract_Term_SecurityLabel>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_TermSchemaInternal = BackboneElementSchemaInternal.extend(
  {
    action: z.lazy(getContract_Term_ActionSchema).array().optional(),
    applies: z.lazy(getPeriodSchema).optional(),
    asset: z.lazy(getContract_Term_AssetSchema).array().optional(),
    group: z.unknown().array().optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    issued: fhirDateTime().optional(),
    _issued: z.lazy(getElementSchema).optional(),
    offer: z.lazy(getContract_Term_OfferSchema),
    securityLabel: z
      .lazy(getContract_Term_SecurityLabelSchema)
      .array()
      .optional(),
    subType: z.lazy(getCodeableConceptSchema).optional(),
    text: fhirString().optional(),
    _text: z.lazy(getElementSchema).optional(),
    topicCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    topicReference: z.lazy(getReferenceSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  },
)
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const topic_x_Present = ["topicCodeableConcept", "topicReference"].filter(
      (field) => record[field] !== undefined,
    );
    if (topic_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of topicCodeableConcept, topicReference may be present for topic[x]",
        path: [topic_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.topicReference,
      "topicReference",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const Contract_TermSchema =
  Contract_TermSchemaInternal as z.ZodType<Contract_Term>;
