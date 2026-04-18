// Source: https://hl7.org/fhir/R4/relatedperson.html
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

import * as z from "zod";
import {
  fhirCode,
  fhirDate,
  fhirId,
  fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Address } from "../Address";
import { AddressSchemaInternal } from "../Address";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactPoint } from "../ContactPoint";
import { ContactPointSchemaInternal } from "../ContactPoint";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Extension } from "../Extension";
import { ExtensionSchemaInternal } from "../Extension";
import type { HumanName } from "../HumanName";
import { HumanNameSchemaInternal } from "../HumanName";
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
import type { RelatedPerson_Communication } from "./RelatedPerson_Communication";
import { RelatedPerson_CommunicationSchemaInternal } from "./RelatedPerson_Communication";

/** Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process. */
export interface RelatedPerson extends DomainResource {
  /** Whether this related person record is in active use. */
  active?: boolean;
  /** Extensions for active */
  _active?: Element;
  /** Address where the related person can be contacted or visited. */
  address?: Array<Address>;
  /** The date on which the related person was born. */
  birthDate?: string;
  /** Extensions for birthDate */
  _birthDate?: Element;
  /** A language which may be used to communicate with about the patient's health. */
  communication?: Array<RelatedPerson_Communication>;
  /** Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes. */
  gender?: "female" | "male" | "other" | "unknown";
  /** Extensions for gender */
  _gender?: Element;
  /** Identifier for a person within a particular scope. */
  identifier?: Array<Identifier>;
  /** A name associated with the person. */
  name?: Array<HumanName>;
  /** The patient this person is related to. */
  patient: Reference;
  /** The period of time during which this relationship is or was active. If there are no dates defined, then the interval is unknown. */
  period?: Period;
  /** Image of the person. */
  photo?: Array<Attachment>;
  /** The nature of the relationship between a patient and the related person. */
  relationship?: Array<CodeableConcept>;
  /** This is a RelatedPerson resource. */
  resourceType: "RelatedPerson";
  /** A contact detail for the person, e.g. a telephone number or an email address. */
  telecom?: Array<ContactPoint>;
}

const getAddressSchema = (): z.ZodType<Address> =>
  AddressSchemaInternal as z.ZodType<Address>;
const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
  HumanNameSchemaInternal as z.ZodType<HumanName>;
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
const getRelatedPerson_CommunicationSchema =
  (): z.ZodType<RelatedPerson_Communication> =>
    RelatedPerson_CommunicationSchemaInternal as z.ZodType<RelatedPerson_Communication>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const RelatedPersonSchemaInternal = z
  .object({
    active: z.boolean().optional(),
    _active: z.lazy(getElementSchema).optional(),
    address: z.lazy(getAddressSchema).array().optional(),
    birthDate: fhirDate().optional(),
    _birthDate: z.lazy(getElementSchema).optional(),
    communication: z
      .lazy(getRelatedPerson_CommunicationSchema)
      .array()
      .optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    gender: z.enum(["female", "male", "other", "unknown"]).optional(),
    _gender: z.lazy(getElementSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: z.lazy(getHumanNameSchema).array().optional(),
    patient: z.lazy(getReferenceSchema),
    period: z.lazy(getPeriodSchema).optional(),
    photo: z.lazy(getAttachmentSchema).array().optional(),
    relationship: z.lazy(getCodeableConceptSchema).array().optional(),
    resourceType: z.literal("RelatedPerson"),
    telecom: z.lazy(getContactPointSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.patient,
      "patient",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
  });

export const RelatedPersonSchema =
  RelatedPersonSchemaInternal as z.ZodType<RelatedPerson>;
