// Profile: http://hl7.org/fhir/StructureDefinition/ResearchSubject
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:04:03.496Z

import * as z from "zod";
import {
  fhirCode,
  fhirId,
  fhirString,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** A physical entity which is the primary unit of operational and/or administrative interest in a study. */
export interface ResearchSubject extends DomainResource {
  /** The name of the arm in the study the subject actually followed as part of this study. */
  actualArm?: string;
  /** Extensions for actualArm */
  _actualArm?: Element;
  /** The name of the arm in the study the subject is expected to follow as part of this study. */
  assignedArm?: string;
  /** Extensions for assignedArm */
  _assignedArm?: Element;
  /** A record of the patient's informed agreement to participate in the study. */
  consent?: Reference;
  /** Identifiers assigned to this research subject for a study. */
  identifier?: Array<Identifier>;
  /** The record of the person or animal who is involved in the study. */
  individual: Reference;
  /** The dates the subject began and ended their participation in the study. */
  period?: Period;
  /** This is a ResearchSubject resource. */
  resourceType: "ResearchSubject";
  /** The current state of the subject. */
  status:
    | "candidate"
    | "eligible"
    | "follow-up"
    | "ineligible"
    | "not-registered"
    | "off-study"
    | "on-study"
    | "on-study-intervention"
    | "on-study-observation"
    | "pending-on-study"
    | "potential-candidate"
    | "screening"
    | "withdrawn";
  /** Extensions for status */
  _status?: Element;
  /** Reference to the study the subject is participating in. */
  study: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ResearchSubjectSchemaInternal = z
  .object({
    actualArm: fhirString().optional(),
    _actualArm: z.lazy(getElementSchema).optional(),
    assignedArm: fhirString().optional(),
    _assignedArm: z.lazy(getElementSchema).optional(),
    consent: z.lazy(getReferenceSchema).optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    individual: z.lazy(getReferenceSchema),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    period: z.lazy(getPeriodSchema).optional(),
    resourceType: z.literal("ResearchSubject"),
    status: z.enum([
      "candidate",
      "eligible",
      "follow-up",
      "ineligible",
      "not-registered",
      "off-study",
      "on-study",
      "on-study-intervention",
      "on-study-observation",
      "pending-on-study",
      "potential-candidate",
      "screening",
      "withdrawn",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    study: z.lazy(getReferenceSchema),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.consent,
      "consent",
      ["http://hl7.org/fhir/StructureDefinition/Consent"],
      ["Consent"],
      ctx,
    );
    validateReferenceTarget(
      record.individual,
      "individual",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
    validateReferenceTarget(
      record.study,
      "study",
      ["http://hl7.org/fhir/StructureDefinition/ResearchStudy"],
      ["ResearchStudy"],
      ctx,
    );
  });

export const ResearchSubjectSchema =
  ResearchSubjectSchemaInternal as z.ZodType<ResearchSubject>;
