// Source: https://hl7.org/fhir/R5/deviceassociation.html
// Profile: http://hl7.org/fhir/StructureDefinition/DeviceAssociation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirCode, fhirId, fhirUri } from "../../shared/fhir-primitives";
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
import type { DeviceAssociation_Operation } from "./DeviceAssociation_Operation";
import { DeviceAssociation_OperationSchemaInternal } from "./DeviceAssociation_Operation";

/** A record of association of a device. */
export interface DeviceAssociation extends DomainResource {
  /** Current anatomical location of the device in/on subject. */
  bodyStructure?: Reference;
  /** Describes the relationship between the device and subject. */
  category?: Array<CodeableConcept>;
  /** Reference to the devices associated with the patient or group. */
  device: Reference;
  /** Instance identifier. */
  identifier?: Array<Identifier>;
  /** The details about the device when it is in use to describe its operation. */
  operation?: Array<DeviceAssociation_Operation>;
  /** Begin and end dates and times for the device association. */
  period?: Period;
  /** This is a DeviceAssociation resource. */
  resourceType: "DeviceAssociation";
  /** Indicates the state of the Device association. */
  status: CodeableConcept;
  /** The reasons given for the current association status. */
  statusReason?: Array<CodeableConcept>;
  /** The individual, group of individuals or device that the device is on or associated with. */
  subject?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDeviceAssociation_OperationSchema =
  (): z.ZodType<DeviceAssociation_Operation> =>
    DeviceAssociation_OperationSchemaInternal as z.ZodType<DeviceAssociation_Operation>;
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
export const DeviceAssociationSchemaInternal = z
  .object({
    bodyStructure: z.lazy(getReferenceSchema).optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    device: z.lazy(getReferenceSchema),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    operation: z.lazy(getDeviceAssociation_OperationSchema).array().optional(),
    period: z.lazy(getPeriodSchema).optional(),
    resourceType: z.literal("DeviceAssociation"),
    status: z.lazy(getCodeableConceptSchema),
    statusReason: z.lazy(getCodeableConceptSchema).array().optional(),
    subject: z.lazy(getReferenceSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.bodyStructure,
      "bodyStructure",
      ["http://hl7.org/fhir/StructureDefinition/BodyStructure"],
      ["BodyStructure"],
      ctx,
    );
    validateReferenceTarget(
      record.device,
      "device",
      ["http://hl7.org/fhir/StructureDefinition/Device"],
      ["Device"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
      ],
      ["Device", "Group", "Patient", "Practitioner", "RelatedPerson"],
      ctx,
    );
  });

export const DeviceAssociationSchema =
  DeviceAssociationSchemaInternal as z.ZodType<DeviceAssociation>;
