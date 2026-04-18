// Source: https://hl7.org/fhir/STU3/visionprescription.html
// Profile: http://hl7.org/fhir/StructureDefinition/VisionPrescription
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
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
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Meta } from "../Meta";
import { MetaSchemaInternal } from "../Meta";
import type { Narrative } from "../Narrative";
import { NarrativeSchemaInternal } from "../Narrative";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { VisionPrescription_Dispense } from "./VisionPrescription_Dispense";
import { VisionPrescription_DispenseSchemaInternal } from "./VisionPrescription_Dispense";

/** Base StructureDefinition for VisionPrescription Resource */
export interface VisionPrescription extends DomainResource {
  /** The date (and perhaps time) when the prescription was written. */
  dateWritten?: string;
  /** Extensions for dateWritten */
  _dateWritten?: Element;
  /** Deals with details of the dispense part of the supply specification. */
  dispense?: Array<VisionPrescription_Dispense>;
  /** A link to a resource that identifies the particular occurrence of contact between patient and health care provider. */
  encounter?: Reference;
  /** Business identifier which may be used by other parties to reference or identify the prescription. */
  identifier?: Array<Identifier>;
  /** A link to a resource representing the person to whom the vision products will be supplied. */
  patient?: Reference;
  /** The healthcare professional responsible for authorizing the prescription. */
  prescriber?: Reference;
  /** Can be the reason or the indication for writing the prescription. */
  reasonCodeableConcept?: CodeableConcept;
  /** Can be the reason or the indication for writing the prescription. */
  reasonReference?: Reference;
  /** This is a VisionPrescription resource. */
  resourceType: "VisionPrescription";
  /** The status of the resource instance. */
  status?: "active" | "cancelled" | "draft" | "entered-in-error";
  /** Extensions for status */
  _status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
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
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getVisionPrescription_DispenseSchema =
  (): z.ZodType<VisionPrescription_Dispense> =>
    VisionPrescription_DispenseSchemaInternal as z.ZodType<VisionPrescription_Dispense>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const VisionPrescriptionSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    dateWritten: fhirDateTime().optional(),
    _dateWritten: z.lazy(getElementSchema).optional(),
    dispense: z.lazy(getVisionPrescription_DispenseSchema).array().optional(),
    encounter: z.lazy(getReferenceSchema).optional(),
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
    patient: z.lazy(getReferenceSchema).optional(),
    prescriber: z.lazy(getReferenceSchema).optional(),
    reasonCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    reasonReference: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("VisionPrescription"),
    status: z
      .enum(["active", "cancelled", "draft", "entered-in-error"])
      .optional(),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    const reason_x_Present = [
      "reasonCodeableConcept",
      "reasonReference",
    ].filter((field) => record[field] !== undefined);
    if (reason_x_Present.length > 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          "Only one of reasonCodeableConcept, reasonReference may be present for reason[x]",
        path: [reason_x_Present[0]],
      });
    }
    validateReferenceTarget(
      record.encounter,
      "encounter",
      ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      ["Encounter"],
      ctx,
    );
    validateReferenceTarget(
      record.patient,
      "patient",
      ["http://hl7.org/fhir/StructureDefinition/Patient"],
      ["Patient"],
      ctx,
    );
    validateReferenceTarget(
      record.prescriber,
      "prescriber",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
      ctx,
    );
    validateReferenceTarget(
      record.reasonReference,
      "reasonReference",
      ["http://hl7.org/fhir/StructureDefinition/Condition"],
      ["Condition"],
      ctx,
    );
  });

export const VisionPrescriptionSchema =
  VisionPrescriptionSchemaInternal as z.ZodType<VisionPrescription>;
