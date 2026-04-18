// Source: https://hl7.org/fhir/R5/consent-definitions.html#Consent.provision
// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Expression } from "../Expression";
import { ExpressionSchemaInternal } from "../Expression";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Consent_Provision_Actor } from "./Consent_Provision_Actor";
import { Consent_Provision_ActorSchemaInternal } from "./Consent_Provision_Actor";
import type { Consent_Provision_Data } from "./Consent_Provision_Data";
import { Consent_Provision_DataSchemaInternal } from "./Consent_Provision_Data";

/** An exception to the base policy of this consent. An exception can be an addition or removal of access permissions. */
export interface Consent_Provision extends BackboneElement {
  /** Actions controlled by this provision. */
  action?: Array<CodeableConcept>;
  /** Who or what is controlled by this provision. Use group to identify a set of actors by some property they share (e.g. 'admitting officers'). */
  actor?: Array<Consent_Provision_Actor>;
  /** If this code is found in an instance, then the provision applies. */
  code?: Array<CodeableConcept>;
  /** The resources controlled by this provision if specific resources are referenced. */
  data?: Array<Consent_Provision_Data>;
  /** Clinical or Operational Relevant period of time that bounds the data controlled by this provision. */
  dataPeriod?: Period;
  /** The documentType(s) covered by this provision. The type can be a CDA document, or some other type that indicates what sort of information the consent relates to. */
  documentType?: Array<Coding>;
  /** A computable (FHIRPath or other) definition of what is controlled by this consent. */
  expression?: Expression;
  /** Timeframe for this provision. */
  period?: Period;
  /** Provisions which provide exceptions to the base provision or subprovisions. */
  provision?: Array<unknown>;
  /** The context of the activities a user is taking - why the user is accessing the data - that are controlled by this provision. */
  purpose?: Array<Coding>;
  /** The resourceType(s) covered by this provision. The type can be a FHIR resource type or a profile on a type that indicates what information the consent relates to. */
  resourceType?: Array<Coding>;
  /** A security label, comprised of 0..* security label fields (Privacy tags), which define which resources are controlled by this exception. */
  securityLabel?: Array<Coding>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getConsent_Provision_ActorSchema =
  (): z.ZodType<Consent_Provision_Actor> =>
    Consent_Provision_ActorSchemaInternal as z.ZodType<Consent_Provision_Actor>;
const getConsent_Provision_DataSchema = (): z.ZodType<Consent_Provision_Data> =>
  Consent_Provision_DataSchemaInternal as z.ZodType<Consent_Provision_Data>;
const getExpressionSchema = (): z.ZodType<Expression> =>
  ExpressionSchemaInternal as z.ZodType<Expression>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const Consent_ProvisionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    action: z.lazy(getCodeableConceptSchema).array().optional(),
    actor: z.lazy(getConsent_Provision_ActorSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema).array().optional(),
    data: z.lazy(getConsent_Provision_DataSchema).array().optional(),
    dataPeriod: z.lazy(getPeriodSchema).optional(),
    documentType: z.lazy(getCodingSchema).array().optional(),
    expression: z.lazy(getExpressionSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
    provision: z.unknown().array().optional(),
    purpose: z.lazy(getCodingSchema).array().optional(),
    resourceType: z.lazy(getCodingSchema).array().optional(),
    securityLabel: z.lazy(getCodingSchema).array().optional(),
  }).strict();

export const Consent_ProvisionSchema =
  Consent_ProvisionSchemaInternal as z.ZodType<Consent_Provision>;
