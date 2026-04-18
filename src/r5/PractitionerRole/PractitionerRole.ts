// Source: https://hl7.org/fhir/R5/practitionerrole.html
// Profile: http://hl7.org/fhir/StructureDefinition/PractitionerRole
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { FhirResource } from "../_fhirResourceSchema";
import { FhirResourceSchemaInternal } from "../_fhirResourceSchema";
import type { Availability } from "../Availability";
import { AvailabilitySchemaInternal } from "../Availability";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ExtendedContactDetail } from "../ExtendedContactDetail";
import { ExtendedContactDetailSchemaInternal } from "../ExtendedContactDetail";
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

/** A specific set of Roles/Locations/specialties/services that a practitioner may perform, or has performed at an organization during a period of time. */
export interface PractitionerRole extends DomainResource {
  /**  Whether this practitioner role record is in active use. Some systems may use this property to mark non-active practitioners, such as those that are not currently employed. */
  active?: boolean;
  /** Extensions for active */
  _active?: Element;
  /** A collection of times the practitioner is available or performing this role at the location and/or healthcareservice. */
  availability?: Array<Availability>;
  /** Collection of characteristics (attributes). */
  characteristic?: Array<CodeableConcept>;
  /** Roles which this practitioner is authorized to perform for the organization. */
  code?: Array<CodeableConcept>;
  /** A language the practitioner can use in patient communication. The practitioner may know several languages (listed in practitioner.communication), however these are the languages that could be advertised in a directory for a patient to search. */
  communication?: Array<CodeableConcept>;
  /** The contact details of communication devices available relevant to the specific PractitionerRole. This can include addresses, phone numbers, fax numbers, mobile numbers, email addresses and web sites. */
  contact?: Array<ExtendedContactDetail>;
  /**  Technical endpoints providing access to services operated for the practitioner with this role. Commonly used for locating scheduling services, or identifying where to send referrals electronically. */
  endpoint?: Array<Reference>;
  /** The list of healthcare services that this worker provides for this role's Organization/Location(s). */
  healthcareService?: Array<Reference>;
  /** Business Identifiers that are specific to a role/location. */
  identifier?: Array<Identifier>;
  /** The location(s) at which this practitioner provides care. */
  location?: Array<Reference>;
  /** The organization where the Practitioner performs the roles associated. */
  organization?: Reference;
  /** The period during which the person is authorized to act as a practitioner in these role(s) for the organization. */
  period?: Period;
  /** Practitioner that is able to provide the defined services for the organization. */
  practitioner?: Reference;
  /** This is a PractitionerRole resource. */
  resourceType: "PractitionerRole";
  /** The specialty of a practitioner that describes the functional role they are practicing at a given organization or location. */
  specialty?: Array<CodeableConcept>;
}

const getAvailabilitySchema = (): z.ZodType<Availability> =>
  AvailabilitySchemaInternal as z.ZodType<Availability>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtendedContactDetailSchema = (): z.ZodType<ExtendedContactDetail> =>
  ExtendedContactDetailSchemaInternal as z.ZodType<ExtendedContactDetail>;
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
export const PractitionerRoleSchemaInternal = z
  .object({
    active: z.boolean().optional(),
    _active: z.lazy(getElementSchema).optional(),
    availability: z.lazy(getAvailabilitySchema).array().optional(),
    characteristic: z.lazy(getCodeableConceptSchema).array().optional(),
    code: z.lazy(getCodeableConceptSchema).array().optional(),
    communication: z.lazy(getCodeableConceptSchema).array().optional(),
    contact: z.lazy(getExtendedContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    endpoint: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    healthcareService: z.lazy(getReferenceSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    location: z.lazy(getReferenceSchema).array().optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    organization: z.lazy(getReferenceSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
    practitioner: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("PractitionerRole"),
    specialty: z.lazy(getCodeableConceptSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.endpoint,
      "endpoint",
      ["http://hl7.org/fhir/StructureDefinition/Endpoint"],
      ["Endpoint"],
      ctx,
    );
    validateReferenceTarget(
      record.healthcareService,
      "healthcareService",
      ["http://hl7.org/fhir/StructureDefinition/HealthcareService"],
      ["HealthcareService"],
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
      record.organization,
      "organization",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.practitioner,
      "practitioner",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
      ctx,
    );
  });

export const PractitionerRoleSchema =
  PractitionerRoleSchemaInternal as z.ZodType<PractitionerRole>;
