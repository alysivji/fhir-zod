// Profile: http://hl7.org/fhir/StructureDefinition/Slot
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-04T22:42:43.846Z

import * as z from "zod";
import { fhirInstant, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A slot of time on a schedule that may be available for booking appointments. */
export interface Slot extends DomainResource {
	/** The style of appointment or patient that may be booked in the slot (not service type). */
	appointmentType?: CodeableConcept;
	/** Comments on the slot to describe any extended information. Such as custom constraints on the slot. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** Date/Time that the slot is to conclude. */
	end: string;
	/** Extensions for end */
	_end?: Element;
	/** External Ids for this item. */
	identifier?: Array<Identifier>;
	/** This slot has already been overbooked, appointments are unlikely to be accepted for this time. */
	overbooked?: boolean;
	/** Extensions for overbooked */
	_overbooked?: Element;
	/** This is a Slot resource. */
	resourceType: "Slot";
	/** The schedule resource that this slot defines an interval of status information. */
	schedule: Reference;
	/** A broad categorization of the service that is to be performed during this appointment. */
	serviceCategory?: Array<CodeableConcept>;
	/** The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource. */
	serviceType?: Array<CodeableConcept>;
	/** The specialty of a practitioner that would be required to perform the service requested in this appointment. */
	specialty?: Array<CodeableConcept>;
	/** Date/Time that the slot is to begin. */
	start: string;
	/** Extensions for start */
	_start?: Element;
	/** busy | free | busy-unavailable | busy-tentative | entered-in-error. */
	status:
		| "busy"
		| "busy-tentative"
		| "busy-unavailable"
		| "entered-in-error"
		| "free";
	/** Extensions for status */
	_status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SlotSchemaInternal = DomainResourceSchemaInternal.extend({
	appointmentType: z.lazy(getCodeableConceptSchema).optional(),
	comment: fhirString().optional(),
	_comment: z.lazy(getElementSchema).optional(),
	end: fhirInstant(),
	_end: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	overbooked: z.boolean().optional(),
	_overbooked: z.lazy(getElementSchema).optional(),
	resourceType: z.literal("Slot"),
	schedule: z.lazy(getReferenceSchema),
	serviceCategory: z.lazy(getCodeableConceptSchema).array().optional(),
	serviceType: z.lazy(getCodeableConceptSchema).array().optional(),
	specialty: z.lazy(getCodeableConceptSchema).array().optional(),
	start: fhirInstant(),
	_start: z.lazy(getElementSchema).optional(),
	status: z.enum([
		"busy",
		"busy-tentative",
		"busy-unavailable",
		"entered-in-error",
		"free",
	]),
	_status: z.lazy(getElementSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.schedule,
			"schedule",
			["http://hl7.org/fhir/StructureDefinition/Schedule"],
			["Schedule"],
			ctx,
		);
	});

export const SlotSchema = SlotSchemaInternal as z.ZodType<Slot>;
