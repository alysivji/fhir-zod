// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import {
	fhirDate,
	fhirDateTime,
	fhirString,
} from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Immunization_Explanation } from "./Immunization_Explanation";
import { Immunization_ExplanationSchemaInternal } from "./Immunization_Explanation";
import type { Immunization_Practitioner } from "./Immunization_Practitioner";
import { Immunization_PractitionerSchemaInternal } from "./Immunization_Practitioner";
import type { Immunization_Reaction } from "./Immunization_Reaction";
import { Immunization_ReactionSchemaInternal } from "./Immunization_Reaction";
import type { Immunization_VaccinationProtocol } from "./Immunization_VaccinationProtocol";
import { Immunization_VaccinationProtocolSchemaInternal } from "./Immunization_VaccinationProtocol";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for Immunization Resource */
export interface Immunization extends DomainResource {
	/** Date vaccine administered or was to be administered. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** The quantity of vaccine product that was administered. */
	doseQuantity?: Quantity;
	/** The visit or admission or other contact between patient and health care provider the immunization was performed as part of. */
	encounter?: Reference;
	/** Date vaccine batch expires. */
	expirationDate?: string;
	/** Extensions for expirationDate */
	_expirationDate?: Element;
	/** Reasons why a vaccine was or was not administered. */
	explanation?: Immunization_Explanation;
	/** A unique identifier assigned to this immunization record. */
	identifier?: Array<Identifier>;
	/** The service delivery location where the vaccine administration occurred. */
	location?: Reference;
	/** Lot number of the  vaccine product. */
	lotNumber?: string;
	/** Extensions for lotNumber */
	_lotNumber?: Element;
	/** Name of vaccine manufacturer. */
	manufacturer?: Reference;
	/** Extra information about the immunization that is not conveyed by the other attributes. */
	note?: Array<Annotation>;
	/** Indicates if the vaccination was or was not given. */
	notGiven: boolean;
	/** Extensions for notGiven */
	_notGiven?: Element;
	/** The patient who either received or did not receive the immunization. */
	patient: Reference;
	/** Indicates who or what performed the event. */
	practitioner?: Array<Immunization_Practitioner>;
	/** An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded. */
	primarySource: boolean;
	/** Extensions for primarySource */
	_primarySource?: Element;
	/** Categorical data indicating that an adverse event is associated in time to an immunization. */
	reaction?: Array<Immunization_Reaction>;
	/** The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine. */
	reportOrigin?: CodeableConcept;
	/** This is a Immunization resource. */
	resourceType: "Immunization";
	/** The path by which the vaccine product is taken into the body. */
	route?: CodeableConcept;
	/** Body site where vaccine was administered. */
	site?: CodeableConcept;
	/** Indicates the current status of the vaccination event. */
	status:
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "on-hold"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Contains information about the protocol(s) under which the vaccine was administered. */
	vaccinationProtocol?: Array<Immunization_VaccinationProtocol>;
	/** Vaccine that was administered or was to be administered. */
	vaccineCode: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getImmunization_ExplanationSchema =
	(): z.ZodType<Immunization_Explanation> =>
		Immunization_ExplanationSchemaInternal as z.ZodType<Immunization_Explanation>;
const getImmunization_PractitionerSchema =
	(): z.ZodType<Immunization_Practitioner> =>
		Immunization_PractitionerSchemaInternal as z.ZodType<Immunization_Practitioner>;
const getImmunization_ReactionSchema = (): z.ZodType<Immunization_Reaction> =>
	Immunization_ReactionSchemaInternal as z.ZodType<Immunization_Reaction>;
const getImmunization_VaccinationProtocolSchema =
	(): z.ZodType<Immunization_VaccinationProtocol> =>
		Immunization_VaccinationProtocolSchemaInternal as z.ZodType<Immunization_VaccinationProtocol>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImmunizationSchemaInternal = DomainResourceSchemaInternal.extend({
	date: fhirDateTime().optional(),
	_date: z.lazy(getElementSchema).optional(),
	doseQuantity: z.lazy(getQuantitySchema).optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	expirationDate: fhirDate().optional(),
	_expirationDate: z.lazy(getElementSchema).optional(),
	explanation: z.lazy(getImmunization_ExplanationSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	location: z.lazy(getReferenceSchema).optional(),
	lotNumber: fhirString().optional(),
	_lotNumber: z.lazy(getElementSchema).optional(),
	manufacturer: z.lazy(getReferenceSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	notGiven: z.boolean(),
	_notGiven: z.lazy(getElementSchema).optional(),
	patient: z.lazy(getReferenceSchema),
	practitioner: z.lazy(getImmunization_PractitionerSchema).array().optional(),
	primarySource: z.boolean(),
	_primarySource: z.lazy(getElementSchema).optional(),
	reaction: z.lazy(getImmunization_ReactionSchema).array().optional(),
	reportOrigin: z.lazy(getCodeableConceptSchema).optional(),
	resourceType: z.literal("Immunization"),
	route: z.lazy(getCodeableConceptSchema).optional(),
	site: z.lazy(getCodeableConceptSchema).optional(),
	status: z.enum([
		"completed",
		"entered-in-error",
		"in-progress",
		"on-hold",
		"stopped",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	vaccinationProtocol: z
		.lazy(getImmunization_VaccinationProtocolSchema)
		.array()
		.optional(),
	vaccineCode: z.lazy(getCodeableConceptSchema),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.encounter,
			"encounter",
			["http://hl7.org/fhir/StructureDefinition/Encounter"],
			["Encounter"],
			ctx,
		);
		validateReferenceTarget(
			record.location,
			"location",
			["http://hl7.org/fhir/StructureDefinition/Location"],
			["Location"],
			ctx,
		);
		validateReferenceTarget(
			record.manufacturer,
			"manufacturer",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.patient,
			"patient",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
	});

export const ImmunizationSchema =
	ImmunizationSchemaInternal as z.ZodType<Immunization>;
