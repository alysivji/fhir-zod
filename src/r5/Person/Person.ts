// Profile: http://hl7.org/fhir/StructureDefinition/Person
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirDate, fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Address } from "../Address";
import { AddressSchemaInternal } from "../Address";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { ContactPoint } from "../ContactPoint";
import { ContactPointSchemaInternal } from "../ContactPoint";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { HumanName } from "../HumanName";
import { HumanNameSchemaInternal } from "../HumanName";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Person_Communication } from "./Person_Communication";
import { Person_CommunicationSchemaInternal } from "./Person_Communication";
import type { Person_Link } from "./Person_Link";
import { Person_LinkSchemaInternal } from "./Person_Link";

/** Demographics and administrative information about a person independent of a specific health-related context. */
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
	/** A language which may be used to communicate with the person about his or her health. */
	communication?: Array<Person_Communication>;
	/** Indicates if the individual is deceased or not. */
	deceasedBoolean?: boolean;
	/** Extensions for deceasedBoolean */
	_deceasedBoolean?: Element;
	/** Indicates if the individual is deceased or not. */
	deceasedDateTime?: string;
	/** Extensions for deceasedDateTime */
	_deceasedDateTime?: Element;
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
	/** This field contains a person's most recent marital (civil) status. */
	maritalStatus?: CodeableConcept;
	/** A name associated with the person. */
	name?: Array<HumanName>;
	/** An image that can be displayed as a thumbnail of the person to enhance the identification of the individual. */
	photo?: Array<Attachment>;
	/** This is a Person resource. */
	resourceType: "Person";
	/** A contact detail for the person, e.g. a telephone number or an email address. */
	telecom?: Array<ContactPoint>;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
	HumanNameSchemaInternal as z.ZodType<HumanName>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPerson_CommunicationSchema = (): z.ZodType<Person_Communication> =>
	Person_CommunicationSchemaInternal as z.ZodType<Person_Communication>;
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
	communication: z.lazy(getPerson_CommunicationSchema).array().optional(),
	deceasedBoolean: z.boolean().optional(),
	_deceasedBoolean: z.lazy(getElementSchema).optional(),
	deceasedDateTime: fhirDateTime().optional(),
	_deceasedDateTime: z.lazy(getElementSchema).optional(),
	gender: z.enum(["female", "male", "other", "unknown"]).optional(),
	_gender: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	link: z.lazy(getPerson_LinkSchema).array().optional(),
	managingOrganization: z.lazy(getReferenceSchema).optional(),
	maritalStatus: z.lazy(getCodeableConceptSchema).optional(),
	name: z.lazy(getHumanNameSchema).array().optional(),
	photo: z.lazy(getAttachmentSchema).array().optional(),
	resourceType: z.literal("Person"),
	telecom: z.lazy(getContactPointSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const deceased_x_Present = ["deceasedBoolean", "deceasedDateTime"].filter(
			(field) => record[field] !== undefined,
		);
		if (deceased_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of deceasedBoolean, deceasedDateTime may be present for deceased[x]",
				path: [deceased_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.managingOrganization,
			"managingOrganization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export const PersonSchema = PersonSchemaInternal as z.ZodType<Person>;
