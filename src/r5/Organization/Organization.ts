// Profile: http://hl7.org/fhir/StructureDefinition/Organization
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:04:05.932Z

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
import type { DomainResource } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { ExtendedContactDetail } from "../ExtendedContactDetail";
import { ExtendedContactDetailSchemaInternal } from "../ExtendedContactDetail";
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
import type { Organization_Qualification } from "./Organization_Qualification";
import { Organization_QualificationSchemaInternal } from "./Organization_Qualification";

/** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
export interface Organization extends DomainResource {
  /** Whether the organization's record is still in active use. */
  active?: boolean;
  /** Extensions for active */
  _active?: Element;
  /** A list of alternate names that the organization is known as, or was known as in the past. */
  alias?: Array<string | null>;
  /** Extensions for alias */
  _alias?: Array<Element | null>;
  /** The contact details of communication devices available relevant to the specific Organization. This can include addresses, phone numbers, fax numbers, mobile numbers, email addresses and web sites. */
  contact?: Array<ExtendedContactDetail>;
  /** Description of the organization, which helps provide additional general context on the organization to ensure that the correct organization is selected. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Technical endpoints providing access to services operated for the organization. */
  endpoint?: Array<Reference>;
  /** Identifier for the organization that is used to identify the organization across multiple disparate systems. */
  identifier?: Array<Identifier>;
  /** A name associated with the organization. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
  /** The organization of which this organization forms a part. */
  partOf?: Reference;
  /** The official certifications, accreditations, training, designations and licenses that authorize and/or otherwise endorse the provision of care by the organization.For example, an approval to provide a type of services issued by a certifying body (such as the US Joint Commission) to an organization. */
  qualification?: Array<Organization_Qualification>;
  /** This is a Organization resource. */
  resourceType: "Organization";
  /** The kind(s) of organization that this is. */
  type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getExtendedContactDetailSchema = (): z.ZodType<ExtendedContactDetail> =>
  ExtendedContactDetailSchemaInternal as z.ZodType<ExtendedContactDetail>;
const getExtensionSchema = (): z.ZodType<Extension> =>
  ExtensionSchemaInternal as z.ZodType<Extension>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMetaSchema = (): z.ZodType<Meta> =>
  MetaSchemaInternal as z.ZodType<Meta>;
const getNarrativeSchema = (): z.ZodType<Narrative> =>
  NarrativeSchemaInternal as z.ZodType<Narrative>;
const getOrganization_QualificationSchema =
  (): z.ZodType<Organization_Qualification> =>
    Organization_QualificationSchemaInternal as z.ZodType<Organization_Qualification>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getFhirResourceSchema = (): z.ZodType<FhirResource> =>
  FhirResourceSchemaInternal as z.ZodType<FhirResource>;

/** @internal */
export const OrganizationSchemaInternal = z
  .object({
    active: z.boolean().optional(),
    _active: z.lazy(getElementSchema).optional(),
    alias: fhirString().nullable().array().optional(),
    _alias: z.lazy(getElementSchema).nullable().array().optional(),
    contact: z.lazy(getExtendedContactDetailSchema).array().optional(),
    contained: z.lazy(getFhirResourceSchema).array().optional(),
    description: z
      .string()
      .regex(/^[\s\S]+$/)
      .optional(),
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
    meta: z.lazy(getMetaSchema).optional(),
    modifierExtension: z.lazy(getExtensionSchema).array().optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
    partOf: z.lazy(getReferenceSchema).optional(),
    qualification: z
      .lazy(getOrganization_QualificationSchema)
      .array()
      .optional(),
    resourceType: z.literal("Organization"),
    text: z.lazy(getNarrativeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).array().optional(),
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
      record.partOf,
      "partOf",
      ["http://hl7.org/fhir/StructureDefinition/Organization"],
      ["Organization"],
      ctx,
    );
  });

export const OrganizationSchema =
  OrganizationSchemaInternal as z.ZodType<Organization>;
