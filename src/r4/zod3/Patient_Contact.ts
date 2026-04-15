// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { HumanName } from "./HumanName";
import { HumanNameSchemaInternal } from "./HumanName";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A contact party (e.g. guardian, partner, friend) for the patient. */
export interface Patient_Contact extends BackboneElement {
	/** Address for the contact person. */
	address?: Address;
	/** Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes. */
	gender?: "female" | "male" | "other" | "unknown";
	/** Extensions for gender */
	_gender?: Element;
	/** A name associated with the contact person. */
	name?: HumanName;
	/** Organization on behalf of which the contact is acting or for which the contact is working. */
	organization?: Reference;
	/** The period during which this contact person or organization is valid to be contacted relating to this patient. */
	period?: Period;
	/** The nature of the relationship between the patient and the contact person. */
	relationship?: Array<CodeableConcept>;
	/** A contact detail for the person, e.g. a telephone number or an email address. */
	telecom?: Array<ContactPoint>;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal as z.ZodType<ContactPoint>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
	HumanNameSchemaInternal as z.ZodType<HumanName>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Patient_ContactSchemaInternal =
	BackboneElementSchemaInternal.extend({
		address: z.lazy(getAddressSchema).optional(),
		gender: z.enum(["female", "male", "other", "unknown"]).optional(),
		_gender: z.lazy(getElementSchema).optional(),
		name: z.lazy(getHumanNameSchema).optional(),
		organization: z.lazy(getReferenceSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		relationship: z.lazy(getCodeableConceptSchema).array().optional(),
		telecom: z.lazy(getContactPointSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.organization,
				"organization",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const Patient_ContactSchema =
	Patient_ContactSchemaInternal as z.ZodType<Patient_Contact>;
