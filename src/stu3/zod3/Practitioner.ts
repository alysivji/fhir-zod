// Profile: http://hl7.org/fhir/StructureDefinition/Practitioner
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirDate } from "../../shared/fhir-primitives-zod3";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
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
import type { Practitioner_Qualification } from "./Practitioner_Qualification";
import { Practitioner_QualificationSchemaInternal } from "./Practitioner_Qualification";

/** Base StructureDefinition for Practitioner Resource */
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
	/** A language the practitioner is able to use in patient communication. */
	communication?: Array<CodeableConcept>;
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
	/** Qualifications obtained by training and certification. */
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
	communication: z.lazy(getCodeableConceptSchema).array().optional(),
	gender: z.enum(["female", "male", "other", "unknown"]).optional(),
	_gender: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	name: z.lazy(getHumanNameSchema).array().optional(),
	photo: z.lazy(getAttachmentSchema).array().optional(),
	qualification: z.lazy(getPractitioner_QualificationSchema).array().optional(),
	resourceType: z.literal("Practitioner"),
	telecom: z.lazy(getContactPointSchema).array().optional(),
}).strict();

export const PractitionerSchema =
	PractitionerSchemaInternal as z.ZodType<Practitioner>;
