// Profile: http://hl7.org/fhir/StructureDefinition/Practitioner
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirDate, fhirDateTime } from "../../shared/fhir-primitives";
import type { Address } from "../Address";
import { AddressSchemaInternal } from "../Address";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
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
import type { Practitioner_Communication } from "./Practitioner_Communication";
import { Practitioner_CommunicationSchemaInternal } from "./Practitioner_Communication";
import type { Practitioner_Qualification } from "./Practitioner_Qualification";
import { Practitioner_QualificationSchemaInternal } from "./Practitioner_Qualification";

/** A person who is directly or indirectly involved in the provisioning of healthcare or related services. */
export interface Practitioner extends DomainResource {
	/** Whether this practitioner's record is in active use. */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** Address(es) of the practitioner that are not role specific (typically home address). Work addresses are not typically entered in this property as they are usually role dependent. */
	address?: Array<Address>;
	/** The date of birth for the practitioner. */
	birthDate?: string;
	/** Extensions for birthDate */
	_birthDate?: Element;
	/** A language which may be used to communicate with the practitioner, often for correspondence/administrative purposes.The `PractitionerRole.communication` property should be used for publishing the languages that a practitioner is able to communicate with patients (on a per Organization/Role basis). */
	communication?: Array<Practitioner_Communication>;
	/** Indicates if the practitioner is deceased or not. */
	deceasedBoolean?: boolean;
	/** Extensions for deceasedBoolean */
	_deceasedBoolean?: Element;
	/** Indicates if the practitioner is deceased or not. */
	deceasedDateTime?: string;
	/** Extensions for deceasedDateTime */
	_deceasedDateTime?: Element;
	/** Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes. */
	gender?: "female" | "male" | "other" | "unknown";
	/** Extensions for gender */
	_gender?: Element;
	/** An identifier that applies to this person in this role. */
	identifier?: Array<Identifier>;
	/** The name(s) associated with the practitioner. */
	name?: Array<HumanName>;
	/** Image of the person. */
	photo?: Array<Attachment>;
	/** The official qualifications, certifications, accreditations, training, licenses (and other types of educations/skills/capabilities) that authorize or otherwise pertain to the provision of care by the practitioner.For example, a medical license issued by a medical board of licensure authorizing the practitioner to practice medicine within a certain locality. */
	qualification?: Array<Practitioner_Qualification>;
	/** This is a Practitioner resource. */
	resourceType: "Practitioner";
	/** A contact detail for the practitioner, e.g. a telephone number or an email address. */
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
const getPractitioner_CommunicationSchema =
	(): z.ZodType<Practitioner_Communication> =>
		Practitioner_CommunicationSchemaInternal as z.ZodType<Practitioner_Communication>;
const getPractitioner_QualificationSchema =
	(): z.ZodType<Practitioner_Qualification> =>
		Practitioner_QualificationSchemaInternal as z.ZodType<Practitioner_Qualification>;

/** @internal */
export const PractitionerSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z.boolean().optional(),
	_active: z.lazy(getElementSchema).optional(),
	address: z.lazy(getAddressSchema).array().optional(),
	birthDate: fhirDate().optional(),
	_birthDate: z.lazy(getElementSchema).optional(),
	communication: z.lazy(getPractitioner_CommunicationSchema).array().optional(),
	deceasedBoolean: z.boolean().optional(),
	_deceasedBoolean: z.lazy(getElementSchema).optional(),
	deceasedDateTime: fhirDateTime().optional(),
	_deceasedDateTime: z.lazy(getElementSchema).optional(),
	gender: z.enum(["female", "male", "other", "unknown"]).optional(),
	_gender: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	name: z.lazy(getHumanNameSchema).array().optional(),
	photo: z.lazy(getAttachmentSchema).array().optional(),
	qualification: z.lazy(getPractitioner_QualificationSchema).array().optional(),
	resourceType: z.literal("Practitioner"),
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
	});

export const PractitionerSchema =
	PractitionerSchemaInternal as z.ZodType<Practitioner>;
