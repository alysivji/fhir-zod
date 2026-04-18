// Source: https://hl7.org/fhir/STU3/patient.html
// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
  fhirCode,
  fhirDate,
  fhirDateTime,
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
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Patient_Animal } from "./Patient_Animal";
import { Patient_AnimalSchemaInternal } from "./Patient_Animal";
import type { Patient_Communication } from "./Patient_Communication";
import { Patient_CommunicationSchemaInternal } from "./Patient_Communication";
import type { Patient_Contact } from "./Patient_Contact";
import { Patient_ContactSchemaInternal } from "./Patient_Contact";
import type { Patient_Link } from "./Patient_Link";
import { Patient_LinkSchemaInternal } from "./Patient_Link";

/** Base StructureDefinition for Patient Resource */
export interface Patient extends DomainResource {
  /** Whether this patient record is in active use. */
  active?: boolean;
  /** Extensions for active */
  _active?: Element;
  /** Addresses for the individual. */
  address?: Array<Address>;
  /** This patient is known to be an animal. */
  animal?: Patient_Animal;
  /** The date of birth for the individual. */
  birthDate?: string;
  /** Extensions for birthDate */
  _birthDate?: Element;
  /** Languages which may be used to communicate with the patient about his or her health. */
  communication?: Array<Patient_Communication>;
  /** A contact party (e.g. guardian, partner, friend) for the patient. */
  contact?: Array<Patient_Contact>;
  /** Indicates if the individual is deceased or not. */
  deceasedBoolean?: boolean;
  /** Extensions for deceasedBoolean */
  _deceasedBoolean?: Element;
  /** Indicates if the individual is deceased or not. */
  deceasedDateTime?: string;
  /** Extensions for deceasedDateTime */
  _deceasedDateTime?: Element;
  /** Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes. */
  gender?: "female" | "male" | "other" | "unknown";
  /** Extensions for gender */
  _gender?: Element;
  /** Patient's nominated care provider. */
  generalPractitioner?: Array<Reference>;
  /** An identifier for this patient. */
  identifier?: Array<Identifier>;
  /** Link to another patient resource that concerns the same actual patient. */
  link?: Array<Patient_Link>;
  /** Organization that is the custodian of the patient record. */
  managingOrganization?: Reference;
  /** This field contains a patient's most recent marital (civil) status. */
  maritalStatus?: CodeableConcept;
  /** Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer). */
  multipleBirthBoolean?: boolean;
  /** Extensions for multipleBirthBoolean */
  _multipleBirthBoolean?: Element;
  /** Indicates whether the patient is part of a multiple (bool) or indicates the actual birth order (integer). */
  multipleBirthInteger?: number;
  /** Extensions for multipleBirthInteger */
  _multipleBirthInteger?: Element;
  /** A name associated with the individual. */
  name?: Array<HumanName>;
  /** Image of the patient. */
  photo?: Array<Attachment>;
  /** This is a Patient resource. */
  resourceType: "Patient";
  /** A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted. */
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
const getPatient_AnimalSchema = (): z.ZodType<Patient_Animal> =>
  Patient_AnimalSchemaInternal as z.ZodType<Patient_Animal>;
const getPatient_CommunicationSchema = (): z.ZodType<Patient_Communication> =>
  Patient_CommunicationSchemaInternal as z.ZodType<Patient_Communication>;
const getPatient_ContactSchema = (): z.ZodType<Patient_Contact> =>
  Patient_ContactSchemaInternal as z.ZodType<Patient_Contact>;
const getPatient_LinkSchema = (): z.ZodType<Patient_Link> =>
  Patient_LinkSchemaInternal as z.ZodType<Patient_Link>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const PatientSchemaInternal = z
  .object({
    active: z.boolean().optional(),
    _active: z.lazy(getElementSchema).optional(),
    address: z.lazy(getAddressSchema).array().optional(),
    animal: z.lazy(getPatient_AnimalSchema).optional(),
    birthDate: fhirDate().optional(),
    _birthDate: z.lazy(getElementSchema).optional(),
    communication: z.lazy(getPatient_CommunicationSchema).array().optional(),
    contact: z.lazy(getPatient_ContactSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    deceasedBoolean: z.boolean().optional(),
    _deceasedBoolean: z.lazy(getElementSchema).optional(),
    deceasedDateTime: fhirDateTime().optional(),
    _deceasedDateTime: z.lazy(getElementSchema).optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    gender: z.enum(["female", "male", "other", "unknown"]).optional(),
    _gender: z.lazy(getElementSchema).optional(),
    generalPractitioner: z.lazy(getReferenceSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    link: z.lazy(getPatient_LinkSchema).array().optional(),
    managingOrganization: z.lazy(getReferenceSchema).optional(),
    maritalStatus: z.lazy(getCodeableConceptSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    multipleBirthBoolean: z.boolean().optional(),
    _multipleBirthBoolean: z.lazy(getElementSchema).optional(),
    multipleBirthInteger: z.number().int().optional(),
    _multipleBirthInteger: z.lazy(getElementSchema).optional(),
    name: z.lazy(getHumanNameSchema).array().optional(),
    photo: z.lazy(getAttachmentSchema).array().optional(),
    resourceType: z.literal("Patient"),
    telecom: z.lazy(getContactPointSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const deceased_x_Present = ["deceasedBoolean", "deceasedDateTime"].filter(
      (field) => record[field] !== undefined,
    );
    if (deceased_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of deceasedBoolean, deceasedDateTime may be present for deceased[x]",
        path: [deceased_x_Present[0]],
      });
    }
    const multipleBirth_x_Present = [
      "multipleBirthBoolean",
      "multipleBirthInteger",
    ].filter((field) => record[field] !== undefined);
    if (multipleBirth_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of multipleBirthBoolean, multipleBirthInteger may be present for multipleBirth[x]",
        path: [multipleBirth_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.generalPractitioner,
      "generalPractitioner",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
      ],
      ["Organization", "Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.managingOrganization,
      "managingOrganization",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
  });

export const PatientSchema = PatientSchemaInternal as z.ZodType<Patient>;
