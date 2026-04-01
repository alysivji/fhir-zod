// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { Address } from "./Address";
import { CodeableConcept } from "./CodeableConcept";
import { ContactPoint } from "./ContactPoint";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { HumanName } from "./HumanName";
import { Period } from "./Period";
import { Reference } from "./Reference";

const getAddressSchema = (): z.ZodType<unknown> => Address;
const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getContactPointSchema = (): z.ZodType<unknown> => ContactPoint;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getHumanNameSchema = (): z.ZodType<unknown> => HumanName;
const getPeriodSchema = (): z.ZodType<unknown> => Period;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;

export const Patient_Contact = z
	.object({
		_gender: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for gender"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		address: z
			.lazy(getAddressSchema)
			.optional()
			.describe("Address for the contact person."),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		gender: z
			.enum(["female", "male", "other", "unknown"])
			.optional()
			.describe(
				"Administrative Gender - the gender that the contact person is considered to have for administration and record keeping purposes.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		modifierExtension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
			),
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

export type Patient_Contact = z.output<typeof Patient_Contact>;
