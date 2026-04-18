// Source: https://hl7.org/fhir/R4B/verificationresult.html
// Profile: http://hl7.org/fhir/StructureDefinition/VerificationResult
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
  fhirCode,
  fhirDate,
  fhirDateTime,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { VerificationResult_Attestation } from "./VerificationResult_Attestation";
import { VerificationResult_AttestationSchemaInternal } from "./VerificationResult_Attestation";
import type { VerificationResult_PrimarySource } from "./VerificationResult_PrimarySource";
import { VerificationResult_PrimarySourceSchemaInternal } from "./VerificationResult_PrimarySource";
import type { VerificationResult_Validator } from "./VerificationResult_Validator";
import { VerificationResult_ValidatorSchemaInternal } from "./VerificationResult_Validator";

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface VerificationResult extends DomainResource {
  /** Information about the entity attesting to information. */
  attestation?: VerificationResult_Attestation;
  /** The result if validation fails (fatal; warning; record only; none). */
  failureAction?: CodeableConcept;
  /** Frequency of revalidation. */
  frequency?: Timing;
  /** The date/time validation was last completed (including failed validations). */
  lastPerformed?: string;
  /** Extensions for lastPerformed */
  _lastPerformed?: Element;
  /** The frequency with which the target must be validated (none; initial; periodic). */
  need?: CodeableConcept;
  /** The date when target is next validated, if appropriate. */
  nextScheduled?: string;
  /** Extensions for nextScheduled */
  _nextScheduled?: Element;
  /** Information about the primary source(s) involved in validation. */
  primarySource?: Array<VerificationResult_PrimarySource>;
  /** This is a VerificationResult resource. */
  resourceType: "VerificationResult";
  /** The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed). */
  status:
    | "attested"
    | "in-process"
    | "req-revalid"
    | "reval-fail"
    | "val-fail"
    | "validated";
  /** Extensions for status */
  _status?: Element;
  /** When the validation status was updated. */
  statusDate?: string;
  /** Extensions for statusDate */
  _statusDate?: Element;
  /** A resource that was validated. */
  target?: Array<Reference>;
  /** The fhirpath location(s) within the resource that was validated. */
  targetLocation?: Array<string | null>;
  /** Extensions for targetLocation */
  _targetLocation?: Array<Element | null>;
  /** The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context). */
  validationProcess?: Array<CodeableConcept>;
  /** What the target is validated against (nothing; primary source; multiple sources). */
  validationType?: CodeableConcept;
  /** Information about the entity validating information. */
  validator?: Array<VerificationResult_Validator>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;
const getVerificationResult_AttestationSchema =
  (): z.ZodType<VerificationResult_Attestation> =>
    VerificationResult_AttestationSchemaInternal as z.ZodType<VerificationResult_Attestation>;
const getVerificationResult_PrimarySourceSchema =
  (): z.ZodType<VerificationResult_PrimarySource> =>
    VerificationResult_PrimarySourceSchemaInternal as z.ZodType<VerificationResult_PrimarySource>;
const getVerificationResult_ValidatorSchema =
  (): z.ZodType<VerificationResult_Validator> =>
    VerificationResult_ValidatorSchemaInternal as z.ZodType<VerificationResult_Validator>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const VerificationResultSchemaInternal = z
  .object({
    attestation: z.lazy(getVerificationResult_AttestationSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    failureAction: z.lazy(getCodeableConceptSchema).optional(),
    frequency: z.lazy(getTimingSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    lastPerformed: fhirDateTime().optional(),
    _lastPerformed: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    need: z.lazy(getCodeableConceptSchema).optional(),
    nextScheduled: fhirDate().optional(),
    _nextScheduled: z.lazy(getElementSchema).optional(),
    primarySource: z
      .lazy(getVerificationResult_PrimarySourceSchema)
      .array()
      .optional(),
    resourceType: z.literal("VerificationResult"),
    status: z.enum([
      "attested",
      "in-process",
      "req-revalid",
      "reval-fail",
      "val-fail",
      "validated",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    statusDate: fhirDateTime().optional(),
    _statusDate: z.lazy(getElementSchema).optional(),
    target: z.lazy(getReferenceSchema).array().optional(),
    targetLocation: fhirString().nullable().array().optional(),
    _targetLocation: z.lazy(getElementSchema).nullable().array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    validationProcess: z.lazy(getCodeableConceptSchema).array().optional(),
    validationType: z.lazy(getCodeableConceptSchema).optional(),
    validator: z.lazy(getVerificationResult_ValidatorSchema).array().optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validatePrimitiveArrayPair(
      record.targetLocation,
      record._targetLocation,
      "targetLocation",
      "_targetLocation",
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

export const VerificationResultSchema =
  VerificationResultSchemaInternal as z.ZodType<VerificationResult>;
