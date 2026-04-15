// Profile: http://hl7.org/fhir/StructureDefinition/ExtendedContactDetail
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirId } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { ContactPoint } from "./ContactPoint";
import { ContactPointSchemaInternal } from "./ContactPoint";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { HumanName } from "./HumanName";
import { HumanNameSchemaInternal } from "./HumanName";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** ExtendedContactDetail Type: Specifies contact information for a specific purpose over a period of time, might be handled/monitored by a specific named person or organization. */
export interface ExtendedContactDetail extends DataType {
	/** Address for the contact. */
	address?: Address;
	/** The name of an individual to contact, some types of contact detail are usually blank. */
	name?: Array<HumanName>;
	/** This contact detail is handled/monitored by a specific organization. If the name is provided in the contact, then it is referring to the named individual within this organization. */
	organization?: Reference;
	/** Period that this contact was valid for usage. */
	period?: Period;
	/** The purpose/type of contact. */
	purpose?: CodeableConcept;
	/** The contact details application for the purpose defined. */
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
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getHumanNameSchema = (): z.ZodType<HumanName> =>
	HumanNameSchemaInternal as z.ZodType<HumanName>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExtendedContactDetailSchemaInternal = z
	.object({
		address: z.lazy(getAddressSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		name: z.lazy(getHumanNameSchema).array().optional(),
		organization: z.lazy(getReferenceSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		purpose: z.lazy(getCodeableConceptSchema).optional(),
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

export const ExtendedContactDetailSchema =
	ExtendedContactDetailSchemaInternal as z.ZodType<ExtendedContactDetail>;
