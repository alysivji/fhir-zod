// Source: https://hl7.org/fhir/R4B/enrollmentresponse.html
// Profile: http://hl7.org/fhir/StructureDefinition/EnrollmentResponse
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:27:34.094Z

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

/** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
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
  outcome?: "complete" | "error" | "partial" | "queued";
  /** Extensions for outcome */
  _outcome?: Element;
  /** Original request resource reference. */
  request?: Reference;
  /** The practitioner who is responsible for the services rendered to the patient. */
  requestProvider?: Reference;
  /** This is a EnrollmentResponse resource. */
  resourceType: "EnrollmentResponse";
  /** The status of the resource instance. */
  status?: "active" | "cancelled" | "draft" | "entered-in-error";
  /** Extensions for status */
  _status?: Element;
}

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
    outcome: z.enum(["complete", "error", "partial", "queued"]).optional(),
    _outcome: z.lazy(getElementSchema).optional(),
    request: z.lazy(getReferenceSchema).optional(),
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
      record.requestProvider,
      "requestProvider",
      [
        "http://hl7.org/fhir/StructureDefinition/Organization",
        "http://hl7.org/fhir/StructureDefinition/Practitioner",
        "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
      ],
      ["Organization", "Practitioner", "PractitionerRole"],
      ctx,
    );
  });

export const EnrollmentResponseSchema =
  EnrollmentResponseSchemaInternal as z.ZodType<EnrollmentResponse>;
