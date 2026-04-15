// Profile: http://hl7.org/fhir/StructureDefinition/Organization
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Organization_Contact } from "./Organization_Contact";
import { Organization_ContactSchemaInternal } from "./Organization_Contact";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
export interface Organization extends DomainResource {
	/** Whether the organization's record is still in active use. */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** An address for the organization. */
	address?: Array<Address>;
	/** A list of alternate names that the organization is known as, or was known as in the past. */
	alias?: Array<string | null>;
	/** Extensions for alias */
	_alias?: Array<Element | null>;
	/** Contact for the organization for a certain purpose. */
	contact?: Array<Organization_Contact>;
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
	/** This is a Organization resource. */
	resourceType: "Organization";
	/** A contact detail for the organization. */
	telecom?: Array<ContactPoint>;
	/** The kind(s) of organization that this is. */
	type?: Array<CodeableConcept>;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getOrganization_ContactSchema = (): z.ZodType<Organization_Contact> =>
	Organization_ContactSchemaInternal as z.ZodType<Organization_Contact>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const OrganizationSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z.boolean().optional(),
	_active: z.lazy(getElementSchema).optional(),
	address: z.lazy(getAddressSchema).array().optional(),
	alias: fhirString().nullable().array().optional(),
	_alias: z.lazy(getElementSchema).nullable().array().optional(),
	contact: z.lazy(getOrganization_ContactSchema).array().optional(),
	endpoint: z.lazy(getReferenceSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	partOf: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("Organization"),
	telecom: z.lazy(getContactPointSchema).array().optional(),
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
