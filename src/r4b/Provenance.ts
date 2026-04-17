// Profile: http://hl7.org/fhir/StructureDefinition/Provenance
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-17T23:33:05.787Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirDateTime, fhirInstant, fhirUri } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Provenance_Agent } from "./Provenance_Agent";
import { Provenance_AgentSchemaInternal } from "./Provenance_Agent";
import type { Provenance_Entity } from "./Provenance_Entity";
import { Provenance_EntitySchemaInternal } from "./Provenance_Entity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Signature } from "./Signature";
import { SignatureSchemaInternal } from "./Signature";

/** Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies. */
export interface Provenance extends DomainResource {
  /** An activity is something that occurs over a period of time and acts upon or with entities; it may include consuming, processing, transforming, modifying, relocating, using, or generating entities. */
  activity?: CodeableConcept;
  /** An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place. */
  agent: Array<Provenance_Agent>;
  /** An entity used in this activity. */
  entity?: Array<Provenance_Entity>;
  /** Where the activity occurred, if relevant. */
  location?: Reference;
  /** The period during which the activity occurred. */
  occurredDateTime?: string;
  /** Extensions for occurredDateTime */
  _occurredDateTime?: Element;
  /** The period during which the activity occurred. */
  occurredPeriod?: Period;
  /** Policy or plan the activity was defined by. Typically, a single activity may have multiple applicable policy documents, such as patient consent, guarantor funding, etc. */
  policy?: Array<string | null>;
  /** Extensions for policy */
  _policy?: Array<Element | null>;
  /** The reason that the activity was taking place. */
  reason?: Array<CodeableConcept>;
  /** The instant of time at which the activity was recorded. */
  recorded: string;
  /** Extensions for recorded */
  _recorded?: Element;
  /** This is a Provenance resource. */
  resourceType: "Provenance";
  /** A digital signature on the target Reference(s). The signer should match a Provenance.agent. The purpose of the signature is indicated. */
  signature?: Array<Signature>;
  /** The Reference(s) that were generated or updated by  the activity described in this resource. A provenance can point to more than one target if multiple resources were created/updated by the same activity. */
  target: Array<Reference>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getProvenance_AgentSchema = (): z.ZodType<Provenance_Agent> =>
  Provenance_AgentSchemaInternal as z.ZodType<Provenance_Agent>;
const getProvenance_EntitySchema = (): z.ZodType<Provenance_Entity> =>
  Provenance_EntitySchemaInternal as z.ZodType<Provenance_Entity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getSignatureSchema = (): z.ZodType<Signature> =>
  SignatureSchemaInternal as z.ZodType<Signature>;

/** @internal */
export const ProvenanceSchemaInternal = DomainResourceSchemaInternal.extend({
  activity: z.lazy(getCodeableConceptSchema).optional(),
  agent: z.lazy(getProvenance_AgentSchema).array(),
  entity: z.lazy(getProvenance_EntitySchema).array().optional(),
  location: z.lazy(getReferenceSchema).optional(),
  occurredDateTime: fhirDateTime().optional(),
  _occurredDateTime: z.lazy(getElementSchema).optional(),
  occurredPeriod: z.lazy(getPeriodSchema).optional(),
  policy: fhirUri().nullable().array().optional(),
  _policy: z.lazy(getElementSchema).nullable().array().optional(),
  reason: z.lazy(getCodeableConceptSchema).array().optional(),
  recorded: fhirInstant(),
  _recorded: z.lazy(getElementSchema).optional(),
  resourceType: z.literal("Provenance"),
  signature: z.lazy(getSignatureSchema).array().optional(),
  target: z.lazy(getReferenceSchema).array(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const occurred_x_Present = ["occurredDateTime", "occurredPeriod"].filter(
      (field) => record[field] !== undefined,
    );
    if (occurred_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of occurredDateTime, occurredPeriod may be present for occurred[x]",
        path: [occurred_x_Present[0]],
      });
    }
    validatePrimitiveArrayPair(
      record.policy,
      record._policy,
      "policy",
      "_policy",
      ctx,
    );
    validateReferenceTarget(
      record.location,
      "location",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
      ctx,
    );
    validateReferenceTarget(
      record.target,
      "target",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
  });

export const ProvenanceSchema =
  ProvenanceSchemaInternal as z.ZodType<Provenance>;
