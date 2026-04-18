// Source: https://hl7.org/fhir/R5/healthcareservice.html
// Profile: http://hl7.org/fhir/StructureDefinition/HealthcareService
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

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
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
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
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { HealthcareService_Eligibility } from "./HealthcareService_Eligibility";
import { HealthcareService_EligibilitySchemaInternal } from "./HealthcareService_Eligibility";

/** The details of a healthcare service available at a location or in a catalog.  In the case where there is a hierarchy of services (for example, Lab -> Pathology -> Wound Cultures), this can be represented using a set of linked HealthcareServices. */
export interface HealthcareService extends DomainResource {
  /** This flag is used to mark the record to not be used. This is not used when a center is closed for maintenance, or for holidays, the notAvailable period is to be used for this. */
  active?: boolean;
  /** Extensions for active */
  _active?: Element;
  /** Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service. */
  appointmentRequired?: boolean;
  /** Extensions for appointmentRequired */
  _appointmentRequired?: Element;
  /** A collection of times that the healthcare service is available. */
  availability?: Array<Availability>;
  /** Identifies the broad category of service being performed or delivered. */
  category?: Array<CodeableConcept>;
  /** Collection of characteristics (attributes). */
  characteristic?: Array<CodeableConcept>;
  /** Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName. */
  comment?: string;
  /** Extensions for comment */
  _comment?: Element;
  /** Some services are specifically made available in multiple languages, this property permits a directory to declare the languages this is offered in. Typically this is only provided where a service operates in communities with mixed languages used. */
  communication?: Array<CodeableConcept>;
  /** The contact details of communication devices available relevant to the specific HealthcareService. This can include addresses, phone numbers, fax numbers, mobile numbers, email addresses and web sites. */
  contact?: Array<ExtendedContactDetail>;
  /** The location(s) that this service is available to (not where the service is provided). */
  coverageArea?: Array<Reference>;
  /** Does this service have specific eligibility requirements that need to be met in order to use the service? */
  eligibility?: Array<HealthcareService_Eligibility>;
  /** Technical endpoints providing access to services operated for the specific healthcare services defined at this resource. */
  endpoint?: Array<Reference>;
  /** Extra details about the service that can't be placed in the other fields. */
  extraDetails?: string;
  /** Extensions for extraDetails */
  _extraDetails?: Element;
  /** External identifiers for this item. */
  identifier?: Array<Identifier>;
  /** The location(s) where this healthcare service may be provided. */
  location?: Array<Reference>;
  /** Further description of the service as it would be presented to a consumer while searching. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** When the HealthcareService is representing a specific, schedulable service, the availableIn property can refer to a generic service. */
  offeredIn?: Array<Reference>;
  /** If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list. */
  photo?: Attachment;
  /** Programs that this service is applicable to. */
  program?: Array<CodeableConcept>;
  /** The organization that provides this healthcare service. */
  providedBy?: Reference;
  /** Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required. */
  referralMethod?: Array<CodeableConcept>;
  /** This is a HealthcareService resource. */
  resourceType: "HealthcareService";
  /** The code(s) that detail the conditions under which the healthcare service is available/offered. */
  serviceProvisionCode?: Array<CodeableConcept>;
  /** Collection of specialties handled by the Healthcare service. This is more of a medical term. */
  specialty?: Array<CodeableConcept>;
  /** The specific type of service that may be delivered or performed. */
  type?: Array<CodeableConcept>;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
  AttachmentSchemaInternal as z.ZodType<Attachment>;
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
const getHealthcareService_EligibilitySchema =
  (): z.ZodType<HealthcareService_Eligibility> =>
    HealthcareService_EligibilitySchemaInternal as z.ZodType<HealthcareService_Eligibility>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const HealthcareServiceSchemaInternal = z
  .object({
    active: z.boolean().optional(),
    _active: z.lazy(getElementSchema).optional(),
    appointmentRequired: z.boolean().optional(),
    _appointmentRequired: z.lazy(getElementSchema).optional(),
    availability: z.lazy(getAvailabilitySchema).array().optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    characteristic: z.lazy(getCodeableConceptSchema).array().optional(),
    comment: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _comment: z.lazy(getElementSchema).optional(),
    communication: z.lazy(getCodeableConceptSchema).array().optional(),
    contact: z.lazy(getExtendedContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    coverageArea: z.lazy(getReferenceSchema).array().optional(),
    eligibility: z
      .lazy(getHealthcareService_EligibilitySchema)
      .array()
      .optional(),
    endpoint: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    extraDetails: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
    _extraDetails: z.lazy(getElementSchema).optional(),
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
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    offeredIn: z.lazy(getReferenceSchema).array().optional(),
    photo: z.lazy(getAttachmentSchema).optional(),
    program: z.lazy(getCodeableConceptSchema).array().optional(),
    providedBy: z.lazy(getReferenceSchema).optional(),
    referralMethod: z.lazy(getCodeableConceptSchema).array().optional(),
    resourceType: z.literal("HealthcareService"),
    serviceProvisionCode: z.lazy(getCodeableConceptSchema).array().optional(),
    specialty: z.lazy(getCodeableConceptSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).array().optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.coverageArea,
      "coverageArea",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
      ctx,
    );
    validateReferenceTarget(
      record.endpoint,
      "endpoint",
      ["http://hl7.org/fhir/StructureDefinition/Endpoint"],
      ["Endpoint"],
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
      record.offeredIn,
      "offeredIn",
      ["http://hl7.org/fhir/StructureDefinition/HealthcareService"],
      ["HealthcareService"],
      ctx,
    );
    validateReferenceTarget(
      record.providedBy,
      "providedBy",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
  });

export const HealthcareServiceSchema =
  HealthcareServiceSchemaInternal as z.ZodType<HealthcareService>;
