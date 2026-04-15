// Profile: http://hl7.org/fhir/StructureDefinition/RelatedPerson
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
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for RelatedPerson Resource */
export interface RelatedPerson extends DomainResource {
	/** Whether this related person record is in active use. */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** Address where the related person can be contacted or visited. */
	address?: Array<Address>;
	/** The date on which the related person was born. */
	birthDate?: string;
	/** Extensions for birthDate */
	_birthDate?: Element;
	/** Administrative Gender - the gender that the person is considered to have for administration and record keeping purposes. */
	gender?: "female" | "male" | "other" | "unknown";
	/** Extensions for gender */
	_gender?: Element;
	/** Identifier for a person within a particular scope. */
	identifier?: Array<Identifier>;
	/** A name associated with the person. */
	name?: Array<HumanName>;
	/** The patient this person is related to. */
	patient: Reference;
	/** The period of time that this relationship is considered to be valid. If there are no dates defined, then the interval is unknown. */
	period?: Period;
	/** Image of the person. */
	photo?: Array<Attachment>;
	/** The nature of the relationship between a patient and the related person. */
	relationship?: CodeableConcept;
	/** This is a RelatedPerson resource. */
	resourceType: "RelatedPerson";
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
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const RelatedPersonSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z.boolean().optional(),
	_active: z.lazy(getElementSchema).optional(),
	address: z.lazy(getAddressSchema).array().optional(),
	birthDate: fhirDate().optional(),
	_birthDate: z.lazy(getElementSchema).optional(),
	gender: z.enum(["female", "male", "other", "unknown"]).optional(),
	_gender: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	name: z.lazy(getHumanNameSchema).array().optional(),
	patient: z.lazy(getReferenceSchema),
	period: z.lazy(getPeriodSchema).optional(),
	photo: z.lazy(getAttachmentSchema).array().optional(),
	relationship: z.lazy(getCodeableConceptSchema).optional(),
	resourceType: z.literal("RelatedPerson"),
	telecom: z.lazy(getContactPointSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.patient,
			"patient",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
	});

export const RelatedPersonSchema =
	RelatedPersonSchemaInternal as z.ZodType<RelatedPerson>;
