// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirDate, fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { Address } from "./Address";
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { ContactPoint } from "./ContactPoint";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { HumanName } from "./HumanName";
import { Identifier } from "./Identifier";
import { Patient_Communication } from "./Patient_Communication";
import { Patient_Contact } from "./Patient_Contact";
import { Patient_Link } from "./Patient_Link";
import { Reference } from "./Reference";

const getAddressSchema = (): z.ZodType<unknown> => Address;
const getAttachmentSchema = (): z.ZodType<unknown> => Attachment;
const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getContactPointSchema = (): z.ZodType<unknown> => ContactPoint;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getHumanNameSchema = (): z.ZodType<unknown> => HumanName;
const getIdentifierSchema = (): z.ZodType<unknown> => Identifier;
const getPatient_CommunicationSchema = (): z.ZodType<unknown> =>
	Patient_Communication;
const getPatient_ContactSchema = (): z.ZodType<unknown> => Patient_Contact;
const getPatient_LinkSchema = (): z.ZodType<unknown> => Patient_Link;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;

export const Patient = DomainResource.extend({
	_active: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for active"),
	_birthDate: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for birthDate"),
	_deceasedBoolean: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for deceasedBoolean"),
	_deceasedDateTime: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for deceasedDateTime"),
	_gender: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for gender"),
	_multipleBirthBoolean: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for multipleBirthBoolean"),
	_multipleBirthInteger: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for multipleBirthInteger"),
	active: z
		.boolean()
		.optional()
		.describe(
			"Whether this patient record is in active use. \nMany systems use this property to mark as non-current patients, such as those that have not been seen for a period of time based on an organization's business rules.\n\nIt is often used to filter patient lists to exclude inactive patients\n\nDeceased patients may also be marked as inactive for the same reasons, but may be active for some time after death.",
		),
	address: z
		.lazy(getAddressSchema)
		.array()
		.optional()
		.describe("An address for the individual."),
	birthDate: fhirDate()
		.optional()
		.describe("The date of birth for the individual."),
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
	deceasedDateTime: fhirDateTime()
		.optional()
		.describe("Indicates if the individual is deceased or not."),
	gender: z
		.enum(["female", "male", "other", "unknown"])
		.optional()
		.describe(
			"Administrative Gender - the gender that the patient is considered to have for administration and record keeping purposes.",
		),
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
	multipleBirthInteger: z
		.number()
		.int()
		.optional()
		.describe(
			"Indicates whether the patient is part of a multiple (boolean) or indicates the actual birth order (integer).",
		),
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

export type Patient = z.output<typeof Patient>;
