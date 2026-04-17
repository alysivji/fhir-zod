// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Contract_Term_Agent } from "./Contract_Term_Agent";
import { Contract_Term_AgentSchemaInternal } from "./Contract_Term_Agent";
import type { Contract_Term_ValuedItem } from "./Contract_Term_ValuedItem";
import { Contract_Term_ValuedItemSchemaInternal } from "./Contract_Term_ValuedItem";
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
  /** Action stipulated by this Contract Provision. */
  action?: Array<CodeableConcept>;
  /** Reason or purpose for the action stipulated by this Contract Provision. */
  actionReason?: Array<CodeableConcept>;
  /** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place. */
  agent?: Array<Contract_Term_Agent>;
  /** Relevant time or time-period when this Contract Provision is applicable. */
  applies?: Period;
  /** Nested group of Contract Provisions. */
  group?: Array<unknown>;
  /** Unique identifier for this particular Contract Provision. */
  identifier?: Identifier;
  /** When this Contract Provision was issued. */
  issued?: string;
  /** Extensions for issued */
  _issued?: Element;
  /** A set of security labels that define which terms are controlled by this condition. */
  securityLabel?: Array<Coding>;
  /** Subtype of this Contract Provision, e.g. life time maximum payment for a contract term for specific valued item, e.g. disability payment. */
  subType?: CodeableConcept;
  /** Human readable form of this Contract Provision. */
  text?: string;
  /** Extensions for text */
  _text?: Element;
  /** The matter of concern in the context of this provision of the agrement. */
  topic?: Array<Reference>;
  /** Type of Contract Provision such as specific requirements, purposes for actions, obligations, prohibitions, e.g. life time maximum benefit. */
  type?: CodeableConcept;
  /** Contract Provision Valued Item List. */
  valuedItem?: Array<Contract_Term_ValuedItem>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getContract_Term_AgentSchema = (): z.ZodType<Contract_Term_Agent> =>
  Contract_Term_AgentSchemaInternal as z.ZodType<Contract_Term_Agent>;
const getContract_Term_ValuedItemSchema =
  (): z.ZodType<Contract_Term_ValuedItem> =>
    Contract_Term_ValuedItemSchemaInternal as z.ZodType<Contract_Term_ValuedItem>;
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
    action: z.lazy(getCodeableConceptSchema).array().optional(),
    actionReason: z.lazy(getCodeableConceptSchema).array().optional(),
    agent: z.lazy(getContract_Term_AgentSchema).array().optional(),
    applies: z.lazy(getPeriodSchema).optional(),
    group: z.unknown().array().optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    issued: fhirDateTime().optional(),
    _issued: z.lazy(getElementSchema).optional(),
    securityLabel: z.lazy(getCodingSchema).array().optional(),
    subType: z.lazy(getCodeableConceptSchema).optional(),
    text: fhirString().optional(),
    _text: z.lazy(getElementSchema).optional(),
    topic: z.lazy(getReferenceSchema).array().optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    valuedItem: z.lazy(getContract_Term_ValuedItemSchema).array().optional(),
  },
)
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.topic,
      "topic",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const Contract_TermSchema =
  Contract_TermSchemaInternal as z.ZodType<Contract_Term>;
