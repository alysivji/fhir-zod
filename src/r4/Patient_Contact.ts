// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:47:10.063Z

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
		_gender: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		address: z.lazy(getAddressSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		gender: z.enum(["female", "male", "other", "unknown"]).optional(),
		id: fhirId().optional(),
		modifierExtension: z.lazy(getExtensionSchema).array().optional(),
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

export type Patient_Contact = z.output<typeof Patient_Contact>;
