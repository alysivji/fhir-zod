// Profile: http://hl7.org/fhir/StructureDefinition/Schedule
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A container for slots of time that may be available for booking appointments. */
export interface Schedule extends DomainResource {
	/** Whether this schedule record is in active use or should not be used (such as was entered in error). */
	active?: boolean;
	/** Extensions for active */
	_active?: Element;
	/** Slots that reference this schedule resource provide the availability details to these referenced resource(s). */
	actor: Array<Reference>;
	/** Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** External Ids for this item. */
	identifier?: Array<Identifier>;
	/** The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates. */
	planningHorizon?: Period;
	/** This is a Schedule resource. */
	resourceType: "Schedule";
	/** A broad categorization of the service that is to be performed during this appointment. */
	serviceCategory?: Array<CodeableConcept>;
	/** The specific service that is to be performed during this appointment. */
	serviceType?: Array<CodeableConcept>;
	/** The specialty of a practitioner that would be required to perform the service requested in this appointment. */
	specialty?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ScheduleSchemaInternal = DomainResourceSchemaInternal.extend({
	active: z.boolean().optional(),
	_active: z.lazy(getElementSchema).optional(),
	actor: z.lazy(getReferenceSchema).array(),
	comment: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_comment: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	planningHorizon: z.lazy(getPeriodSchema).optional(),
	resourceType: z.literal("Schedule"),
	serviceCategory: z.lazy(getCodeableConceptSchema).array().optional(),
	serviceType: z.lazy(getCodeableConceptSchema).array().optional(),
	specialty: z.lazy(getCodeableConceptSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.actor,
			"actor",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/HealthcareService",
				"http://hl7.org/fhir/StructureDefinition/Location",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"Device",
				"HealthcareService",
				"Location",
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
			],
			ctx,
		);
	});

export const ScheduleSchema = ScheduleSchemaInternal as z.ZodType<Schedule>;
