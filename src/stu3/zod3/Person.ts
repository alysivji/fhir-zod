// Profile: http://hl7.org/fhir/StructureDefinition/Person
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirDate } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { HumanName } from "./HumanName";
import { HumanNameSchemaInternal } from "./HumanName";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Person_Link } from "./Person_Link";
import { Person_LinkSchemaInternal } from "./Person_Link";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Person Resource */
export interface Person extends DomainResource {
	/** Whether this person's record is in active use. */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** One or more addresses for the person. */
	address?: Array<Address>;
	/** The birth date for the person. */
	birthDate?: string;
	/** Extensions for birthDate */
	_birthDate?: Element;
	/** Administrative Gender. */
	gender?: "female" | "male" | "other" | "unknown";
	/** Extensions for gender */
	_gender?: Element;
	/** Identifier for a person within a particular scope. */
	identifier?: Array<Identifier>;
	/** Link to a resource that concerns the same actual person. */
	link?: Array<Person_Link>;
	/** The organization that is the custodian of the person record. */
	managingOrganization?: Reference;
	/** A name associated with the person. */
	name?: Array<HumanName>;
	/** An image that can be displayed as a thumbnail of the person to enhance the identification of the individual. */
	photo?: Attachment;
	/** This is a Person resource. */
	resourceType: "Person";
	/** A contact detail for the person, e.g. a telephone number or an email address. */
	telecom?: Array<ContactPoint>;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
	HumanNameSchemaInternal as z.ZodType<HumanName>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPerson_LinkSchema = (): z.ZodType<Person_Link> =>
	Person_LinkSchemaInternal as z.ZodType<Person_Link>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PersonSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z.boolean().optional(),
	_active: z.lazy(getElementSchema).optional(),
	address: z.lazy(getAddressSchema).array().optional(),
	birthDate: fhirDate().optional(),
	_birthDate: z.lazy(getElementSchema).optional(),
	gender: z.enum(["female", "male", "other", "unknown"]).optional(),
	_gender: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	link: z.lazy(getPerson_LinkSchema).array().optional(),
	managingOrganization: z.lazy(getReferenceSchema).optional(),
	name: z.lazy(getHumanNameSchema).array().optional(),
	photo: z.lazy(getAttachmentSchema).optional(),
	resourceType: z.literal("Person"),
	telecom: z.lazy(getContactPointSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.managingOrganization,
			"managingOrganization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export const PersonSchema = PersonSchemaInternal as z.ZodType<Person>;
