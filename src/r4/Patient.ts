// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Address } from "./Address";
import type { Attachment } from "./Attachment";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { DomainResource } from "./DomainResource";
import type { Element } from "./Element";
import type { HumanName } from "./HumanName";
import type { Identifier } from "./Identifier";
import type { Patient_Communication } from "./Patient_Communication";
import type { Patient_Contact } from "./Patient_Contact";
import type { Patient_Link } from "./Patient_Link";
import type { Reference } from "./Reference";
import { fhirDate, fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { AddressSchemaInternal } from "./Address";
import { AttachmentSchemaInternal } from "./Attachment";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import { ContactPointSchemaInternal } from "./ContactPoint";
import { DomainResourceSchemaInternal } from "./DomainResource";
import { ElementSchemaInternal } from "./Element";
import { HumanNameSchemaInternal } from "./HumanName";
import { IdentifierSchemaInternal } from "./Identifier";
import { Patient_CommunicationSchemaInternal } from "./Patient_Communication";
import { Patient_ContactSchemaInternal } from "./Patient_Contact";
import { Patient_LinkSchemaInternal } from "./Patient_Link";
import { ReferenceSchemaInternal } from "./Reference";

export interface Patient extends DomainResource {
	active?: boolean;
	_active?: Element;
	address?: Array<Address>;
	birthDate?: string;
	_birthDate?: Element;
	communication?: Array<Patient_Communication>;
	contact?: Array<Patient_Contact>;
	deceasedBoolean?: boolean;
	_deceasedBoolean?: Element;
	deceasedDateTime?: string;
	_deceasedDateTime?: Element;
	gender?: "female" | "male" | "other" | "unknown";
	_gender?: Element;
	generalPractitioner?: Array<Reference>;
	identifier?: Array<Identifier>;
	link?: Array<Patient_Link>;
	managingOrganization?: Reference;
	maritalStatus?: CodeableConcept;
	multipleBirthBoolean?: boolean;
	_multipleBirthBoolean?: Element;
	multipleBirthInteger?: number;
	_multipleBirthInteger?: Element;
	name?: Array<HumanName>;
	photo?: Array<Attachment>;
	resourceType: "Patient";
	telecom?: Array<ContactPoint>;
}

const getAddressSchema = (): z.ZodType<Address> => AddressSchemaInternal;
const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getHumanNameSchema = (): z.ZodType<HumanName> => HumanNameSchemaInternal;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal;
const getPatient_CommunicationSchema = (): z.ZodType<Patient_Communication> =>
	Patient_CommunicationSchemaInternal;
const getPatient_ContactSchema = (): z.ZodType<Patient_Contact> =>
	Patient_ContactSchemaInternal;
const getPatient_LinkSchema = (): z.ZodType<Patient_Link> =>
	Patient_LinkSchemaInternal;
const getReferenceSchema = (): z.ZodType<Reference> => ReferenceSchemaInternal;

/** @internal */
export const PatientSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z
		.boolean()
		.optional()
		.describe(
			"Whether this patient record is in active use. \nMany systems use this property to mark as non-current patients, such as those that have not been seen for a period of time based on an organization's business rules.\n\nIt is often used to filter patient lists to exclude inactive patients\n\nDeceased patients may also be marked as inactive for the same reasons, but may be active for some time after death.",
		),
	_active: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for active"),
	address: z
		.lazy(getAddressSchema)
		.array()
		.optional()
		.describe("An address for the individual."),
	birthDate: fhirDate()
		.optional()
		.describe("The date of birth for the individual."),
	_birthDate: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for birthDate"),
	communication: z
		.lazy(getPatient_CommunicationSchema)
		.array()
		.optional()
		.describe(
			"A language which may be used to communicate with the patient about his or her health.",
		),
	contact: z
		.lazy(getPatient_ContactSchema)
		.array()
		.optional()
		.describe(
			"A contact party (e.g. guardian, partner, friend) for the patient.",
		),
	deceasedBoolean: z
		.boolean()
		.optional()
		.describe("Indicates if the individual is deceased or not."),
	_deceasedBoolean: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for deceasedBoolean"),
	deceasedDateTime: fhirDateTime()
		.optional()
		.describe("Indicates if the individual is deceased or not."),
	_deceasedDateTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for deceasedDateTime"),
	gender: z
		.enum(["female", "male", "other", "unknown"])
		.optional()
		.describe(
			"Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.",
		),
	_gender: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for gender"),
	generalPractitioner: z
		.lazy(getReferenceSchema)
		.array()
		.optional()
		.describe("Patient's nominated care provider."),
	identifier: z
		.lazy(getIdentifierSchema)
		.array()
		.optional()
		.describe("An identifier for this patient."),
	link: z
		.lazy(getPatient_LinkSchema)
		.array()
		.optional()
		.describe(
			"Link to another patient resource that concerns the same actual patient.",
		),
	managingOrganization: z
		.lazy(getReferenceSchema)
		.optional()
		.describe("Organization that is the custodian of the patient record."),
	maritalStatus: z
		.lazy(getCodeableConceptSchema)
		.optional()
		.describe(
			"This field contains a patient's most recent marital (civil) status.",
		),
	multipleBirthBoolean: z
		.boolean()
		.optional()
		.describe(
			"Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).",
		),
	_multipleBirthBoolean: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for multipleBirthBoolean"),
	multipleBirthInteger: z
		.number()
		.int()
		.optional()
		.describe(
			"Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).",
		),
	_multipleBirthInteger: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for multipleBirthInteger"),
	name: z
		.lazy(getHumanNameSchema)
		.array()
		.optional()
		.describe("A name associated with the individual."),
	photo: z
		.lazy(getAttachmentSchema)
		.array()
		.optional()
		.describe("Image of the patient."),
	resourceType: z.literal("Patient").describe("This is a Patient resource."),
	telecom: z
		.lazy(getContactPointSchema)
		.array()
		.optional()
		.describe(
			"A contact detail (e.g. a telephone number or an email address) by which the individual may be contacted.",
		),
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
		const multipleBirth_x_Present = [
			"multipleBirthBoolean",
			"multipleBirthInteger",
		].filter((field) => record[field] !== undefined);
		if (multipleBirth_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of multipleBirthBoolean, multipleBirthInteger may be present for multipleBirth[x]",
				path: [multipleBirth_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.generalPractitioner,
			"generalPractitioner",
			[
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Organization", "Practitioner", "PractitionerRole"],
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

export const PatientSchema: z.ZodType<Patient> = PatientSchemaInternal;
