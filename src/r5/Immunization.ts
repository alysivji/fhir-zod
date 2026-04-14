// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDate, fhirDateTime, fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Immunization_Performer } from "./Immunization_Performer";
import { Immunization_PerformerSchemaInternal } from "./Immunization_Performer";
import type { Immunization_ProgramEligibility } from "./Immunization_ProgramEligibility";
import { Immunization_ProgramEligibilitySchemaInternal } from "./Immunization_ProgramEligibility";
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
	/** An indication of which product was administered to the patient. This is typically a more detailed representation of the concept conveyed by the vaccineCode data element. If a Medication resource is referenced, it may be to a stand-alone resource or a contained resource within the Immunization resource. */
	administeredProduct?: CodeableReference;
	/** A plan, order or recommendation fulfilled in whole or in part by this immunization. */
	basedOn?: Array<Reference>;
	/** The quantity of vaccine product that was administered. */
	doseQuantity?: Quantity;
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
	/** Typically the source of the data when the report of the immunization event is not based on information from the person who administered the vaccine. */
	informationSource?: CodeableReference;
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
	manufacturer?: CodeableReference;
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
	/** Indicates whether the data contained in the resource was captured by the individual/organization which was responsible for the administration of the vaccine rather than as 'secondary reported' data documented by a third party. A value of 'true' means this data originated with the individual/organization which was responsible for the administration of the vaccine. */
	primarySource?: boolean;
	/** Extensions for primarySource */
	_primarySource?: Element;
	/** Indicates a patient's eligibility for a funding program. */
	programEligibility?: Array<Immunization_ProgramEligibility>;
	/** The protocol (set of recommendations) being followed by the provider who administered the dose. */
	protocolApplied?: Array<Immunization_ProtocolApplied>;
	/** Categorical data indicating that an adverse event is associated in time to an immunization. */
	reaction?: Array<Immunization_Reaction>;
	/** Describes why the immunization occurred in coded or textual form, or Indicates another resource (Condition, Observation or DiagnosticReport) whose existence justifies this immunization. */
	reason?: Array<CodeableReference>;
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
	/** Additional information that is relevant to the immunization (e.g. for a vaccine recipient who is pregnant, the gestational age of the fetus). The reason why a vaccine was given (e.g. occupation, underlying medical condition) should be conveyed in Immunization.reason, not as supporting information. The reason why a vaccine was not given (e.g. contraindication) should be conveyed in Immunization.statusReason, not as supporting information. */
	supportingInformation?: Array<Reference>;
	/** Vaccine that was administered or was to be administered. */
	vaccineCode: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getImmunization_PerformerSchema = (): z.ZodType<Immunization_Performer> =>
	Immunization_PerformerSchemaInternal as z.ZodType<Immunization_Performer>;
const getImmunization_ProgramEligibilitySchema =
	(): z.ZodType<Immunization_ProgramEligibility> =>
		Immunization_ProgramEligibilitySchemaInternal as z.ZodType<Immunization_ProgramEligibility>;
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
	administeredProduct: z.lazy(getCodeableReferenceSchema).optional(),
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	doseQuantity: z.lazy(getQuantitySchema).optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	expirationDate: fhirDate().optional(),
	_expirationDate: z.lazy(getElementSchema).optional(),
	fundingSource: z.lazy(getCodeableConceptSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	informationSource: z.lazy(getCodeableReferenceSchema).optional(),
	isSubpotent: z.boolean().optional(),
	_isSubpotent: z.lazy(getElementSchema).optional(),
	location: z.lazy(getReferenceSchema).optional(),
	lotNumber: fhirString().optional(),
	_lotNumber: z.lazy(getElementSchema).optional(),
	manufacturer: z.lazy(getCodeableReferenceSchema).optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	occurrenceDateTime: fhirDateTime().optional(),
	_occurrenceDateTime: z.lazy(getElementSchema).optional(),
	occurrenceString: fhirString().optional(),
	_occurrenceString: z.lazy(getElementSchema).optional(),
	patient: z.lazy(getReferenceSchema),
	performer: z.lazy(getImmunization_PerformerSchema).array().optional(),
	primarySource: z.boolean().optional(),
	_primarySource: z.lazy(getElementSchema).optional(),
	programEligibility: z
		.lazy(getImmunization_ProgramEligibilitySchema)
		.array()
		.optional(),
	protocolApplied: z
		.lazy(getImmunization_ProtocolAppliedSchema)
		.array()
		.optional(),
	reaction: z.lazy(getImmunization_ReactionSchema).array().optional(),
	reason: z.lazy(getCodeableReferenceSchema).array().optional(),
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
	supportingInformation: z.lazy(getReferenceSchema).array().optional(),
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
			record.basedOn,
			"basedOn",
			[
				"http://hl7.org/fhir/StructureDefinition/CarePlan",
				"http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
				"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
				"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
			],
			[
				"CarePlan",
				"ImmunizationRecommendation",
				"MedicationRequest",
				"ServiceRequest",
			],
			ctx,
		);
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
			record.patient,
			"patient",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
		validateReferenceTarget(
			record.supportingInformation,
			"supportingInformation",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
	});

export const ImmunizationSchema =
	ImmunizationSchemaInternal as z.ZodType<Immunization>;
