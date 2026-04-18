// Source: https://hl7.org/fhir/STU3/location.html
// Profile: http://hl7.org/fhir/StructureDefinition/Location
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
import type { Address } from "../Address";
import { AddressSchemaInternal } from "../Address";
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
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Location_Position } from "./Location_Position";
import { Location_PositionSchemaInternal } from "./Location_Position";

/** Base StructureDefinition for Location Resource */
export interface Location extends DomainResource {
  /** Physical location. */
  address?: Address;
  /** A list of alternate names that the location is known as, or was known as in the past. */
  alias?: Array<string | null>;
  /** Extensions for alias */
  _alias?: Array<Element | null>;
  /** Description of the Location, which helps in finding or referencing the place. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Technical endpoints providing access to services operated for the location. */
  endpoint?: Array<Reference>;
  /** Unique code or number identifying the location to its users. */
  identifier?: Array<Identifier>;
  /** The organization responsible for the provisioning and upkeep of the location. */
  managingOrganization?: Reference;
  /** Indicates whether a resource instance represents a specific location or a class of locations. */
  mode?: "instance" | "kind";
  /** Extensions for mode */
  _mode?: Element;
  /** Name of the location as used by humans. Does not need to be unique. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The Operational status covers operation values most relevant to beds (but can also apply to rooms/units/chair/etc such as an isolation unit/dialisys chair). This typically covers concepts such as contamination, housekeeping and other activities like maintenance. */
  operationalStatus?: Coding;
  /** Another Location which this Location is physically part of. */
  partOf?: Reference;
  /** Physical form of the location, e.g. building, room, vehicle, road. */
  physicalType?: CodeableConcept;
  /** The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML). */
  position?: Location_Position;
  /** This is a Location resource. */
  resourceType: "Location";
  /** The status property covers the general availability of the resource, not the current value which may be covered by the operationStatus, or by a schedule/slots if they are configured for the location. */
  status?: "active" | "inactive" | "suspended";
  /** Extensions for status */
  _status?: Element;
  /** The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites. */
  telecom?: Array<ContactPoint>;
  /** Indicates the type of function performed at the location. */
  type?: CodeableConcept;
}

const getAddressSchema = (): z.ZodType<Address> =>
  AddressSchemaInternal as z.ZodType<Address>;
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
const getLocation_PositionSchema = (): z.ZodType<Location_Position> =>
  Location_PositionSchemaInternal as z.ZodType<Location_Position>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const LocationSchemaInternal = z
  .object({
    address: z.lazy(getAddressSchema).optional(),
    alias: fhirString().nullable().array().optional(),
    _alias: z.lazy(getElementSchema).nullable().array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    endpoint: z.lazy(getReferenceSchema).array().optional(),
    extension: z.lazy(getExtensionSchema).array().optional(),
    id: fhirId().optional(),
    _id: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).array().optional(),
    implicitRules: fhirUri().optional(),
    _implicitRules: z.lazy(getElementSchema).optional(),
    language: fhirCode().optional(),
    _language: z.lazy(getElementSchema).optional(),
    managingOrganization: z.lazy(getReferenceSchema).optional(),
    meta: z.lazy(getMetaSchema).optional(),
    mode: z.enum(["instance", "kind"]).optional(),
    _mode: z.lazy(getElementSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    operationalStatus: z.lazy(getCodingSchema).optional(),
    partOf: z.lazy(getReferenceSchema).optional(),
    physicalType: z.lazy(getCodeableConceptSchema).optional(),
    position: z.lazy(getLocation_PositionSchema).optional(),
    resourceType: z.literal("Location"),
    status: z.enum(["active", "inactive", "suspended"]).optional(),
    _status: z.lazy(getElementSchema).optional(),
    telecom: z.lazy(getContactPointSchema).array().optional(),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  })
  .strict()
  .superRefine((value, ctx) => {
    const record = value as Record<string, unknown>;
    validatePrimitiveArrayPair(
      record.alias,
      record._alias,
      "alias",
      "_alias",
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
      record.managingOrganization,
      "managingOrganization",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
    validateReferenceTarget(
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/Location"],
      ["Location"],
      ctx,
    );
  });

export const LocationSchema = LocationSchemaInternal as z.ZodType<Location>;
