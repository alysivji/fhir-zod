// Profile: http://hl7.org/fhir/StructureDefinition/Specimen
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Specimen_Collection } from "./Specimen_Collection";
import { Specimen_CollectionSchemaInternal } from "./Specimen_Collection";
import type { Specimen_Container } from "./Specimen_Container";
import { Specimen_ContainerSchemaInternal } from "./Specimen_Container";
import type { Specimen_Processing } from "./Specimen_Processing";
import { Specimen_ProcessingSchemaInternal } from "./Specimen_Processing";

/** Base StructureDefinition for Specimen Resource */
export interface Specimen extends DomainResource {
  /** The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures. */
  accessionIdentifier?: Identifier;
  /** Details concerning the specimen collection. */
  collection?: Specimen_Collection;
  /** The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here. */
  container?: Array<Specimen_Container>;
  /** Id for specimen. */
  identifier?: Array<Identifier>;
  /** To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen). */
  note?: Array<Annotation>;
  /** Reference to the parent (source) specimen which is used when the specimen was either derived from or a component of another specimen. */
  parent?: Array<Reference>;
  /** Details concerning processing and processing steps for the specimen. */
  processing?: Array<Specimen_Processing>;
  /** Time when specimen was received for processing or testing. */
  receivedTime?: string;
  /** Extensions for receivedTime */
  _receivedTime?: Element;
  /** Details concerning a test or procedure request that required a specimen to be collected. */
  request?: Array<Reference>;
  /** This is a Specimen resource. */
  resourceType: "Specimen";
  /** The availability of the specimen. */
  status?: "available" | "entered-in-error" | "unavailable" | "unsatisfactory";
  /** Extensions for status */
  _status?: Element;
  /** Where the specimen came from. This may be from the patient(s) or from the environment or a device. */
  subject: Reference;
  /** The kind of material that forms the specimen. */
  type?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getSpecimen_CollectionSchema = (): z.ZodType<Specimen_Collection> =>
  Specimen_CollectionSchemaInternal as z.ZodType<Specimen_Collection>;
const getSpecimen_ContainerSchema = (): z.ZodType<Specimen_Container> =>
  Specimen_ContainerSchemaInternal as z.ZodType<Specimen_Container>;
const getSpecimen_ProcessingSchema = (): z.ZodType<Specimen_Processing> =>
  Specimen_ProcessingSchemaInternal as z.ZodType<Specimen_Processing>;

/** @internal */
export const SpecimenSchemaInternal = DomainResourceSchemaInternal.extend({
  accessionIdentifier: z.lazy(getIdentifierSchema).optional(),
  collection: z.lazy(getSpecimen_CollectionSchema).optional(),
  container: z.lazy(getSpecimen_ContainerSchema).array().optional(),
  identifier: z.lazy(getIdentifierSchema).array().optional(),
  note: z.lazy(getAnnotationSchema).array().optional(),
  parent: z.lazy(getReferenceSchema).array().optional(),
  processing: z.lazy(getSpecimen_ProcessingSchema).array().optional(),
  receivedTime: fhirDateTime().optional(),
  _receivedTime: z.lazy(getElementSchema).optional(),
  request: z.lazy(getReferenceSchema).array().optional(),
  resourceType: z.literal("Specimen"),
  status: z
    .enum(["available", "entered-in-error", "unavailable", "unsatisfactory"])
    .optional(),
  _status: z.lazy(getElementSchema).optional(),
  subject: z.lazy(getReferenceSchema),
  type: z.lazy(getCodeableConceptSchema).optional(),
})
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.parent,
      "parent",
      ["http://hl7.org/fhir/StructureDefinition/Specimen"],
      ["Specimen"],
      ctx,
    );
    validateReferenceTarget(
      record.request,
      "request",
      ["http://hl7.org/fhir/StructureDefinition/ProcedureRequest"],
      ["ProcedureRequest"],
      ctx,
    );
    validateReferenceTarget(
      record.subject,
      "subject",
      [
        "http://hl7.org/fhir/StructureDefinition/Device",
        "http://hl7.org/fhir/StructureDefinition/Group",
        "http://hl7.org/fhir/StructureDefinition/Patient",
        "http://hl7.org/fhir/StructureDefinition/Substance",
      ],
      ["Device", "Group", "Patient", "Substance"],
      ctx,
    );
  });

export const SpecimenSchema = SpecimenSchemaInternal as z.ZodType<Specimen>;
