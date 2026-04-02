// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Address } from "./Address";
import type { BackboneElement } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import type { Element } from "./Element";
import type { HumanName } from "./HumanName";
import type { Period } from "./Period";
import type { Reference } from "./Reference";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { AddressSchemaInternal } from "./Address";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import { ContactPointSchemaInternal } from "./ContactPoint";
import { ElementSchemaInternal } from "./Element";
import { HumanNameSchemaInternal } from "./HumanName";
import { PeriodSchemaInternal } from "./Period";
import { ReferenceSchemaInternal } from "./Reference";

export interface Patient_Contact extends BackboneElement {
	address?: Address;
	gender?: "female" | "male" | "other" | "unknown";
	_gender?: Element;
	name?: HumanName;
	organization?: Reference;
	period?: Period;
	relationship?: Array<CodeableConcept>;
	telecom?: Array<ContactPoint>;
}

const getAddressSchema = (): z.ZodType<Address> => AddressSchemaInternal;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal;
const getContactPointSchema = (): z.ZodType<ContactPoint> =>
	ContactPointSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getHumanNameSchema = (): z.ZodType<HumanName> => HumanNameSchemaInternal;
const getPeriodSchema = (): z.ZodType<Period> => PeriodSchemaInternal;
const getReferenceSchema = (): z.ZodType<Reference> => ReferenceSchemaInternal;

/** @internal */
export const Patient_ContactSchemaInternal =
	BackboneElementSchemaInternal.extend({
		address: z
			.lazy(getAddressSchema)
			.optional()
			.describe("Address for the contact person."),
		gender: z
			.enum(["female", "male", "other", "unknown"])
			.optional()
			.describe(
				"Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.",
			),
		_gender: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for gender"),
		name: z
			.lazy(getHumanNameSchema)
			.optional()
			.describe("A name associated with the contact person."),
		organization: z
			.lazy(getReferenceSchema)
			.optional()
			.describe(
				"Organization on behalf of which the contact is acting or for which the contact is working.",
			),
		period: z
			.lazy(getPeriodSchema)
			.optional()
			.describe(
				"The period during which this contact person or organization is valid to be contacted relating to this patient.",
			),
		relationship: z
			.lazy(getCodeableConceptSchema)
			.array()
			.optional()
			.describe(
				"The nature of the relationship between the patient and the contact person.",
			),
		telecom: z
			.lazy(getContactPointSchema)
			.array()
			.optional()
			.describe(
				"A contact detail for the person, e.g. a telephone number or an email address.",
			),
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

export const Patient_ContactSchema: z.ZodType<Patient_Contact> =
	Patient_ContactSchemaInternal;
