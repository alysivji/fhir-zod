// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

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
import type { Immunization_Education } from "./Immunization_Education";
import { Immunization_EducationSchemaInternal } from "./Immunization_Education";
import type { Immunization_Performer } from "./Immunization_Performer";
import { Immunization_PerformerSchemaInternal } from "./Immunization_Performer";
import type { Immunization_ProtocolApplied } from "./Immunization_ProtocolApplied";
import { Immunization_ProtocolAppliedSchemaInternal } from "./Immunization_ProtocolApplied";
import type { Immunization_Reaction } from "./Immunization_Reaction";
import { Immunization_ReactionSchemaInternal } from "./Immunization_Reaction";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface Immunization extends DomainResource {
	/** The quantity of vaccine product that was administered. */
	doseQuantity?: Quantity;
	/** Educational material presented to the patient (or guardian) at the time of vaccine administration. */
	education?: Array<Immunization_Education>;
	/** The visit or admission or other contact between patient and health care provider the immunization was performed as part of. */
	encounter?: Reference;
	/** Date vaccine batch expires. */
	expirationDate?: string;
	/** Extensions for expirationDate */
	_expirationDate?: Element;
	/** Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered). */
	fundingSource?: CodeableConcept;
	/** A unique identifier assigned to this immunization record. */
	identifier?: Array<Identifier>;
	/** Indication if a dose is considered to be subpotent. By default, a dose should be considered to be potent. */
	isSubpotent?: boolean;
	/** Extensions for isSubpotent */
	_isSubpotent?: Element;
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
	/** Date vaccine administered or was to be administered. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** Date vaccine administered or was to be administered. */
	occurrenceString?: string;
	/** Extensions for occurrenceString */
	_occurrenceString?: Element;
	/** The patient who either received or did not receive the immunization. */
	patient: Reference;
	/** Indicates who performed the immunization event. */
	performer?: Array<Immunization_Performer>;
	/** An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded. */
	primarySource?: boolean;
	/** Extensions for primarySource */
	_primarySource?: Element;
	/** Indicates a patient's eligibility for a funding program. */
	programEligibility?: Array<CodeableConcept>;
	/** The protocol (set of recommendations) being followed by the provider who administered the dose. */
	protocolApplied?: Array<Immunization_ProtocolApplied>;
	/** Categorical data indicating that an adverse event is associated in time to an immunization. */
	reaction?: Array<Immunization_Reaction>;
	/** Reasons why the vaccine was administered. */
	reasonCode?: Array<CodeableConcept>;
	/** Condition, Observation or DiagnosticReport that supports why the immunization was administered. */
	reasonReference?: Array<Reference>;
	/** The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event. */
	recorded?: string;
	/** Extensions for recorded */
	_recorded?: Element;
	/** The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine. */
	reportOrigin?: CodeableConcept;
	/** This is a Immunization resource. */
	resourceType: "Immunization";
	/** The path by which the vaccine product is taken into the body. */
	route?: CodeableConcept;
	/** Body site where vaccine was administered. */
	site?: CodeableConcept;
	/** Indicates the current status of the immunization event. */
	status:
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "not-done"
		| "on-hold"
		| "preparation"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Indicates the reason the immunization event was not performed. */
	statusReason?: CodeableConcept;
	/** Reason why a dose is considered to be subpotent. */
	subpotentReason?: Array<CodeableConcept>;
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
const getImmunization_EducationSchema = (): z.ZodType<Immunization_Education> =>
	Immunization_EducationSchemaInternal as z.ZodType<Immunization_Education>;
const getImmunization_PerformerSchema = (): z.ZodType<Immunization_Performer> =>
	Immunization_PerformerSchemaInternal as z.ZodType<Immunization_Performer>;
const getImmunization_ProtocolAppliedSchema =
	(): z.ZodType<Immunization_ProtocolApplied> =>
		Immunization_ProtocolAppliedSchemaInternal as z.ZodType<Immunization_ProtocolApplied>;
const getImmunization_ReactionSchema = (): z.ZodType<Immunization_Reaction> =>
	Immunization_ReactionSchemaInternal as z.ZodType<Immunization_Reaction>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImmunizationSchemaInternal = DomainResourceSchemaInternal.extend({
	doseQuantity: z.lazy(getQuantitySchema).optional(),
	education: z.lazy(getImmunization_EducationSchema).array().optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	expirationDate: fhirDate().optional(),
	_expirationDate: z.lazy(getElementSchema).optional(),
	fundingSource: z.lazy(getCodeableConceptSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	isSubpotent: z.boolean().optional(),
	_isSubpotent: z.lazy(getElementSchema).optional(),
	location: z.lazy(getReferenceSchema).optional(),
	lotNumber: fhirString().optional(),
	_lotNumber: z.lazy(getElementSchema).optional(),
	manufacturer: z.lazy(getReferenceSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	occurrenceDateTime: fhirDateTime().optional(),
	_occurrenceDateTime: z.lazy(getElementSchema).optional(),
	occurrenceString: fhirString().optional(),
	_occurrenceString: z.lazy(getElementSchema).optional(),
	patient: z.lazy(getReferenceSchema),
	performer: z.lazy(getImmunization_PerformerSchema).array().optional(),
	primarySource: z.boolean().optional(),
	_primarySource: z.lazy(getElementSchema).optional(),
	programEligibility: z.lazy(getCodeableConceptSchema).array().optional(),
	protocolApplied: z
		.lazy(getImmunization_ProtocolAppliedSchema)
		.array()
		.optional(),
	reaction: z.lazy(getImmunization_ReactionSchema).array().optional(),
	reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
	reasonReference: z.lazy(getReferenceSchema).array().optional(),
	recorded: fhirDateTime().optional(),
	_recorded: z.lazy(getElementSchema).optional(),
	reportOrigin: z.lazy(getCodeableConceptSchema).optional(),
	resourceType: z.literal("Immunization"),
	route: z.lazy(getCodeableConceptSchema).optional(),
	site: z.lazy(getCodeableConceptSchema).optional(),
	status: z.enum([
		"completed",
		"entered-in-error",
		"in-progress",
		"not-done",
		"on-hold",
		"preparation",
		"stopped",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	statusReason: z.lazy(getCodeableConceptSchema).optional(),
	subpotentReason: z.lazy(getCodeableConceptSchema).array().optional(),
	vaccineCode: z.lazy(getCodeableConceptSchema),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const occurrence_x_Present = [
			"occurrenceDateTime",
			"occurrenceString",
		].filter((field) => record[field] !== undefined);
		if (occurrence_x_Present.length === 0) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"One of occurrenceDateTime, occurrenceString must be present for occurrence[x]",
				path: ["occurrenceDateTime"],
			});
		}
		if (occurrence_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of occurrenceDateTime, occurrenceString may be present for occurrence[x]",
				path: [occurrence_x_Present[0]],
			});
		}
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
		validateReferenceTarget(
			record.reasonReference,
			"reasonReference",
			[
				"http://hl7.org/fhir/StructureDefinition/Condition",
				"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
				"http://hl7.org/fhir/StructureDefinition/Observation",
			],
			["Condition", "DiagnosticReport", "Observation"],
			ctx,
		);
	});

export const ImmunizationSchema =
	ImmunizationSchemaInternal as z.ZodType<Immunization>;
