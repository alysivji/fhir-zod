// Profile: http://hl7.org/fhir/StructureDefinition/DeviceAssociation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DeviceAssociation_Operation } from "./DeviceAssociation_Operation";
import { DeviceAssociation_OperationSchemaInternal } from "./DeviceAssociation_Operation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

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
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const DeviceAssociationSchemaInternal =
  DomainResourceSchemaInternal.extend({
    bodyStructure: z.lazy(getReferenceSchema).optional(),
    category: z.lazy(getCodeableConceptSchema).array().optional(),
    device: z.lazy(getReferenceSchema),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    operation: z.lazy(getDeviceAssociation_OperationSchema).array().optional(),
    period: z.lazy(getPeriodSchema).optional(),
    resourceType: z.literal("DeviceAssociation"),
    status: z.lazy(getCodeableConceptSchema),
    statusReason: z.lazy(getCodeableConceptSchema).array().optional(),
    subject: z.lazy(getReferenceSchema).optional(),
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
