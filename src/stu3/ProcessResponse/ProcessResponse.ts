// Source: https://hl7.org/fhir/STU3/processresponse.html
// Profile: http://hl7.org/fhir/StructureDefinition/ProcessResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import {
  fhirCode,
  fhirDateTime,
  fhirId,
  fhirString,
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
import type { ProcessResponse_ProcessNote } from "./ProcessResponse_ProcessNote";
import { ProcessResponse_ProcessNoteSchemaInternal } from "./ProcessResponse_ProcessNote";

/** Base StructureDefinition for ProcessResponse Resource */
export interface ProcessResponse extends DomainResource {
  /** Request for additional supporting or authorizing information, such as: documents, images or resources. */
  communicationRequest?: Array<Reference>;
  /** The date when the enclosed suite of services were performed or completed. */
  created?: string;
  /** Extensions for created */
  _created?: Element;
  /** A description of the status of the adjudication or processing. */
  disposition?: string;
  /** Extensions for disposition */
  _disposition?: Element;
  /** Processing errors. */
  error?: Array<CodeableConcept>;
  /** The form to be used for printing the content. */
  form?: CodeableConcept;
  /** The Response business identifier. */
  identifier?: Array<Identifier>;
  /** The organization who produced this adjudicated response. */
  organization?: Reference;
  /** Transaction status: error, complete, held. */
  outcome?: CodeableConcept;
  /** Suite of processing notes or additional requirements if the processing has been held. */
  processNote?: Array<ProcessResponse_ProcessNote>;
  /** Original request resource reference. */
  request?: Reference;
  /** The organization which is responsible for the services rendered to the patient. */
  requestOrganization?: Reference;
  /** The practitioner who is responsible for the services rendered to the patient. */
  requestProvider?: Reference;
  /** This is a ProcessResponse resource. */
  resourceType: "ProcessResponse";
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
const getProcessResponse_ProcessNoteSchema =
  (): z.ZodType<ProcessResponse_ProcessNote> =>
    ProcessResponse_ProcessNoteSchemaInternal as z.ZodType<ProcessResponse_ProcessNote>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const ProcessResponseSchemaInternal = z
  .object({
    communicationRequest: z.lazy(getReferenceSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    created: fhirDateTime().optional(),
    _created: z.lazy(getElementSchema).optional(),
    disposition: fhirString().optional(),
    _disposition: z.lazy(getElementSchema).optional(),
    error: z.lazy(getCodeableConceptSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    form: z.lazy(getCodeableConceptSchema).optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    organization: z.lazy(getReferenceSchema).optional(),
    outcome: z.lazy(getCodeableConceptSchema).optional(),
    processNote: z
      .lazy(getProcessResponse_ProcessNoteSchema)
      .array()
      .optional(),
    request: z.lazy(getReferenceSchema).optional(),
    requestOrganization: z.lazy(getReferenceSchema).optional(),
    requestProvider: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("ProcessResponse"),
    status: z
      .enum(["active", "cancelled", "draft", "entered-in-error"])
      .optional(),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validateReferenceTarget(
      record.communicationRequest,
      "communicationRequest",
      ["http://hl7.org/fhir/StructureDefinition/CommunicationRequest"],
      ["CommunicationRequest"],
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
      record.request,
      "request",
      ["http://hl7.org/fhir/StructureDefinition/Resource"],
      ["Resource"],
      ctx,
    );
    validateReferenceTarget(
      record.requestOrganization,
      "requestOrganization",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.requestProvider,
      "requestProvider",
      ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      ["Practitioner"],
      ctx,
    );
  });

export const ProcessResponseSchema =
  ProcessResponseSchemaInternal as z.ZodType<ProcessResponse>;
