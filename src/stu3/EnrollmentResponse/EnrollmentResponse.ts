// Profile: http://hl7.org/fhir/StructureDefinition/EnrollmentResponse
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:04:01.401Z

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

/** Base StructureDefinition for EnrollmentResponse Resource */
export interface EnrollmentResponse extends DomainResource {
  /** The date when the enclosed suite of services were performed or completed. */
  created?: string;
  /** Extensions for created */
  _created?: Element;
  /** A description of the status of the adjudication. */
  disposition?: string;
  /** Extensions for disposition */
  _disposition?: Element;
  /** The Response business identifier. */
  identifier?: Array<Identifier>;
  /** The Insurer who produced this adjudicated response. */
  organization?: Reference;
  /** Processing status: error, complete. */
  outcome?: CodeableConcept;
  /** Original request resource reference. */
  request?: Reference;
  /** The organization which is responsible for the services rendered to the patient. */
  requestOrganization?: Reference;
  /** The practitioner who is responsible for the services rendered to the patient. */
  requestProvider?: Reference;
  /** This is a EnrollmentResponse resource. */
  resourceType: "EnrollmentResponse";
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
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const EnrollmentResponseSchemaInternal = z
  .object({
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    created: fhirDateTime().optional(),
    _created: z.lazy(getElementSchema).optional(),
    disposition: fhirString().optional(),
    _disposition: z.lazy(getElementSchema).optional(),
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
    organization: z.lazy(getReferenceSchema).optional(),
    outcome: z.lazy(getCodeableConceptSchema).optional(),
    request: z.lazy(getReferenceSchema).optional(),
    requestOrganization: z.lazy(getReferenceSchema).optional(),
    requestProvider: z.lazy(getReferenceSchema).optional(),
    resourceType: z.literal("EnrollmentResponse"),
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
      record.organization,
      "organization",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.request,
      "request",
      ["http://hl7.org/fhir/StructureDefinition/EnrollmentRequest"],
      ["EnrollmentRequest"],
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

export const EnrollmentResponseSchema =
  EnrollmentResponseSchemaInternal as z.ZodType<EnrollmentResponse>;
