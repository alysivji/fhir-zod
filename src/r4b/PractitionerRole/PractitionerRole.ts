// Source: https://hl7.org/fhir/R4B/practitionerrole.html
// Profile: http://hl7.org/fhir/StructureDefinition/PractitionerRole
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

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
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactPoint } from "../ContactPoint";
import { ContactPointSchemaInternal } from "../ContactPoint";
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
import type { PractitionerRole_AvailableTime } from "./PractitionerRole_AvailableTime";
import { PractitionerRole_AvailableTimeSchemaInternal } from "./PractitionerRole_AvailableTime";
import type { PractitionerRole_NotAvailable } from "./PractitionerRole_NotAvailable";
import { PractitionerRole_NotAvailableSchemaInternal } from "./PractitionerRole_NotAvailable";

/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export interface PractitionerRole extends DomainResource {
  /** Whether this practitioner role record is in active use. */
  active?: boolean;
  /** Extensions for active */
  _active?: Element;
  /** A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times. */
  availabilityExceptions?: string;
  /** Extensions for availabilityExceptions */
  _availabilityExceptions?: Element;
  /** A collection of times the practitioner is available or performing this role at the location and/or healthcareservice. */
  availableTime?: Array<PractitionerRole_AvailableTime>;
  /** Roles which this practitioner is authorized to perform for the organization. */
  code?: Array<CodeableConcept>;
  /** Technical endpoints providing access to services operated for the practitioner with this role. */
  endpoint?: Array<Reference>;
  /** The list of healthcare services that this worker provides for this role's Organization/Location(s). */
  healthcareService?: Array<Reference>;
  /** Business Identifiers that are specific to a role/location. */
  identifier?: Array<Identifier>;
  /** The location(s) at which this practitioner provides care. */
  location?: Array<Reference>;
  /** The practitioner is not available or performing this role during this period of time due to the provided reason. */
  notAvailable?: Array<PractitionerRole_NotAvailable>;
  /** The organization where the Practitioner performs the roles associated. */
  organization?: Reference;
  /** The period during which the person is authorized to act as a practitioner in these role(s) for the organization. */
  period?: Period;
  /** Practitioner that is able to provide the defined services for the organization. */
  practitioner?: Reference;
  /** This is a PractitionerRole resource. */
  resourceType: "PractitionerRole";
  /** Specific specialty of the practitioner. */
  specialty?: Array<CodeableConcept>;
  /** Contact details that are specific to the role/location/service. */
  telecom?: Array<ContactPoint>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
  ContactPointSchemaInternal as z.ZodType<ContactPoint>;
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
const getPractitionerRole_AvailableTimeSchema =
  (): z.ZodType<PractitionerRole_AvailableTime> =>
    PractitionerRole_AvailableTimeSchemaInternal as z.ZodType<PractitionerRole_AvailableTime>;
const getPractitionerRole_NotAvailableSchema =
  (): z.ZodType<PractitionerRole_NotAvailable> =>
    PractitionerRole_NotAvailableSchemaInternal as z.ZodType<PractitionerRole_NotAvailable>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const PractitionerRoleSchemaInternal = z
  .object({
    active: z.boolean().optional(),
    _active: z.lazy(getElementSchema).optional(),
    availabilityExceptions: fhirString().optional(),
    _availabilityExceptions: z.lazy(getElementSchema).optional(),
    availableTime: z
      .lazy(getPractitionerRole_AvailableTimeSchema)
      .array()
      .optional(),
    code: z.lazy(getCodeableConceptSchema).array().optional(),
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
    notAvailable: z
      .lazy(getPractitionerRole_NotAvailableSchema)
      .array()
      .optional(),
    organization: z.lazy(getReferenceSchema).optional(),
    period: z.lazy(getPeriodSchema).optional(),
    practitioner: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("PractitionerRole"),
    specialty: z.lazy(getCodeableConceptSchema).array().optional(),
    telecom: z.lazy(getContactPointSchema).array().optional(),
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
