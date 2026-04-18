// Source: https://hl7.org/fhir/STU3/endpoint.html
// Profile: http://hl7.org/fhir/StructureDefinition/Endpoint
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
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
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
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

/** Base StructureDefinition for Endpoint Resource */
export interface Endpoint extends DomainResource {
  /** The uri that describes the actual end-point to connect to. */
  address: string;
  /** Extensions for address */
  _address?: Element;
  /** A coded value that represents the technical details of the usage of this endpoint, such as what WSDLs should be used in what way. (e.g. XDS.b/DICOM/cds-hook). */
  connectionType: Coding;
  /** Contact details for a human to contact about the subscription. The primary use of this for system administrator troubleshooting. */
  contact?: Array<ContactPoint>;
  /** Additional headers / information to send as part of the notification. */
  header?: Array<string | null>;
  /** Extensions for header */
  _header?: Array<Element | null>;
  /** Identifier for the organization that is used to identify the endpoint across multiple disparate systems. */
  identifier?: Array<Identifier>;
  /** The organization that manages this endpoint (even if technically another organisation is hosting this in the cloud, it is the organisation associated with the data). */
  managingOrganization?: Reference;
  /** A friendly name that this endpoint can be referred to with. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The mime type to send the payload in - e.g. application/fhir+xml, application/fhir+json. If the mime type is not specified, then the sender could send any content (including no content depending on the connectionType). */
  payloadMimeType?: Array<string | null>;
  /** Extensions for payloadMimeType */
  _payloadMimeType?: Array<Element | null>;
  /** The payload type describes the acceptable content that can be communicated on the endpoint. */
  payloadType: Array<CodeableConcept>;
  /** The interval during which the endpoint is expected to be operational. */
  period?: Period;
  /** This is a Endpoint resource. */
  resourceType: "Endpoint";
  /** active | suspended | error | off | test. */
  status:
    | "active"
    | "entered-in-error"
    | "error"
    | "off"
    | "suspended"
    | "test";
  /** Extensions for status */
  _status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
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
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const EndpointSchemaInternal = z
  .object({
    address: fhirUri(),
    _address: z.lazy(getElementSchema).optional(),
    connectionType: z.lazy(getCodingSchema),
    contact: z.lazy(getContactPointSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    header: fhirString().nullable().array().optional(),
    _header: z.lazy(getElementSchema).nullable().array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    managingOrganization: z.lazy(getReferenceSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    payloadMimeType: fhirCode().nullable().array().optional(),
    _payloadMimeType: z.lazy(getElementSchema).nullable().array().optional(),
    payloadType: z.lazy(getCodeableConceptSchema).array(),
    period: z.lazy(getPeriodSchema).optional(),
    resourceType: z.literal("Endpoint"),
    status: z.enum([
      "active",
      "entered-in-error",
      "error",
      "off",
      "suspended",
      "test",
    ]),
    _status: z.lazy(getElementSchema).optional(),
    text: z.lazy(getNarrativeSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validatePrimitiveArrayPair(
      record.header,
      record._header,
      "header",
      "_header",
      ctx,
    );
    validatePrimitiveArrayPair(
      record.payloadMimeType,
      record._payloadMimeType,
      "payloadMimeType",
      "_payloadMimeType",
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

export const EndpointSchema = EndpointSchemaInternal as z.ZodType<Endpoint>;
