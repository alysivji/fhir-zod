// Profile: http://hl7.org/fhir/StructureDefinition/MedicationAdministration
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirDateTime } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
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
import type { MedicationAdministration_Dosage } from "./MedicationAdministration_Dosage";
import { MedicationAdministration_DosageSchemaInternal } from "./MedicationAdministration_Dosage";
import type { MedicationAdministration_Performer } from "./MedicationAdministration_Performer";
import { MedicationAdministration_PerformerSchemaInternal } from "./MedicationAdministration_Performer";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion. Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. This event can also be used to record waste using a status of not-done and the appropriate statusReason. */
export interface MedicationAdministration extends DomainResource {
	/** A plan that is fulfilled in whole or in part by this MedicationAdministration. */
	basedOn?: Array<Reference>;
	/** The type of medication administration (for example, drug classification like ATC, where meds would be administered, legal category of the medication). */
	category?: Array<CodeableConcept>;
	/** The device that is to be used for the administration of the medication (for example, PCA Pump). */
	device?: Array<CodeableReference>;
	/** Describes the medication dosage information details e.g. dose, rate, site, route, etc. */
	dosage?: MedicationAdministration_Dosage;
	/** The visit, admission, or other contact between patient and health care provider during which the medication administration was performed. */
	encounter?: Reference;
	/** A summary of the events of interest that have occurred, such as when the administration was verified. */
	eventHistory?: Array<Reference>;
	/** Identifiers associated with this Medication Administration that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** An indication that the full dose was not administered. */
	isSubPotent?: boolean;
	/** Extensions for isSubPotent */
	_isSubPotent?: Element;
	/** Identifies the medication that was administered. This is either a link to a resource representing the details of the medication or a simple attribute carrying a code that identifies the medication from a known list of medications. */
	medication: CodeableReference;
	/** Extra information about the medication administration that is not conveyed by the other attributes. */
	note?: Array<Annotation>;
	/** A specific date/time or interval of time during which the administration took place (or did not take place). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate. */
	occurenceDateTime?: string;
	/** Extensions for occurenceDateTime */
	_occurenceDateTime?: Element;
	/** A specific date/time or interval of time during which the administration took place (or did not take place). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate. */
	occurencePeriod?: Period;
	/** A specific date/time or interval of time during which the administration took place (or did not take place). For many administrations, such as swallowing a tablet the use of dateTime is more appropriate. */
	occurenceTiming?: Timing;
	/** A larger event of which this particular event is a component or step. */
	partOf?: Array<Reference>;
	/** The performer of the medication treatment.  For devices this is the device that performed the administration of the medication.  An IV Pump would be an example of a device that is performing the administration. Both the IV Pump and the practitioner that set the rate or bolus on the pump can be listed as performers. */
	performer?: Array<MedicationAdministration_Performer>;
	/** A code, Condition or observation that supports why the medication was administered. */
	reason?: Array<CodeableReference>;
	/** The date the occurrence of the  MedicationAdministration was first captured in the record - potentially significantly after the occurrence of the event. */
	recorded?: string;
	/** Extensions for recorded */
	_recorded?: Element;
	/** The original request, instruction or authority to perform the administration. */
	request?: Reference;
	/** This is a MedicationAdministration resource. */
	resourceType: "MedicationAdministration";
	/** Will generally be set to show that the administration has been completed.  For some long running administrations such as infusions, it is possible for an administration to be started but not completed or it may be paused while some other process is under way. */
	status:
		| "completed"
		| "entered-in-error"
		| "in-progress"
		| "not-done"
		| "on-hold"
		| "stopped"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** A code indicating why the administration was not performed. */
	statusReason?: Array<CodeableConcept>;
	/** The person or animal or group receiving the medication. */
	subject: Reference;
	/** The reason or reasons why the full dose was not administered. */
	subPotentReason?: Array<CodeableConcept>;
	/** Additional information (for example, patient height and weight) that supports the administration of the medication.  This attribute can be used to provide documentation of specific characteristics of the patient present at the time of administration.  For example, if the dose says "give "x" if the heartrate exceeds "y"", then the heart rate can be included using this attribute. */
	supportingInformation?: Array<Reference>;
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
const getMedicationAdministration_DosageSchema =
	(): z.ZodType<MedicationAdministration_Dosage> =>
		MedicationAdministration_DosageSchemaInternal as z.ZodType<MedicationAdministration_Dosage>;
const getMedicationAdministration_PerformerSchema =
	(): z.ZodType<MedicationAdministration_Performer> =>
		MedicationAdministration_PerformerSchemaInternal as z.ZodType<MedicationAdministration_Performer>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const MedicationAdministrationSchemaInternal =
	DomainResourceSchemaInternal.extend({
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		device: z.lazy(getCodeableReferenceSchema).array().optional(),
		dosage: z.lazy(getMedicationAdministration_DosageSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		eventHistory: z.lazy(getReferenceSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		isSubPotent: z.boolean().optional(),
		_isSubPotent: z.lazy(getElementSchema).optional(),
		medication: z.lazy(getCodeableReferenceSchema),
		note: z.lazy(getAnnotationSchema).array().optional(),
		occurenceDateTime: fhirDateTime().optional(),
		_occurenceDateTime: z.lazy(getElementSchema).optional(),
		occurencePeriod: z.lazy(getPeriodSchema).optional(),
		occurenceTiming: z.lazy(getTimingSchema).optional(),
		partOf: z.lazy(getReferenceSchema).array().optional(),
		performer: z
			.lazy(getMedicationAdministration_PerformerSchema)
			.array()
			.optional(),
		reason: z.lazy(getCodeableReferenceSchema).array().optional(),
		recorded: fhirDateTime().optional(),
		_recorded: z.lazy(getElementSchema).optional(),
		request: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("MedicationAdministration"),
		status: z.enum([
			"completed",
			"entered-in-error",
			"in-progress",
			"not-done",
			"on-hold",
			"stopped",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		statusReason: z.lazy(getCodeableConceptSchema).array().optional(),
		subject: z.lazy(getReferenceSchema),
		subPotentReason: z.lazy(getCodeableConceptSchema).array().optional(),
		supportingInformation: z.lazy(getReferenceSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const occurence_x_Present = [
				"occurenceDateTime",
				"occurencePeriod",
				"occurenceTiming",
			].filter((field) => record[field] !== undefined);
			if (occurence_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of occurenceDateTime, occurencePeriod, occurenceTiming must be present for occurence[x]",
					path: ["occurenceDateTime"],
				});
			}
			if (occurence_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of occurenceDateTime, occurencePeriod, occurenceTiming may be present for occurence[x]",
					path: [occurence_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.basedOn,
				"basedOn",
				["http://hl7.org/fhir/StructureDefinition/CarePlan"],
				["CarePlan"],
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
				record.eventHistory,
				"eventHistory",
				["http://hl7.org/fhir/StructureDefinition/Provenance"],
				["Provenance"],
				ctx,
			);
			validateReferenceTarget(
				record.partOf,
				"partOf",
				[
					"http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
					"http://hl7.org/fhir/StructureDefinition/MedicationDispense",
					"http://hl7.org/fhir/StructureDefinition/Procedure",
				],
				["MedicationAdministration", "MedicationDispense", "Procedure"],
				ctx,
			);
			validateReferenceTarget(
				record.request,
				"request",
				["http://hl7.org/fhir/StructureDefinition/MedicationRequest"],
				["MedicationRequest"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/Patient",
				],
				["Group", "Patient"],
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

export const MedicationAdministrationSchema =
	MedicationAdministrationSchemaInternal as z.ZodType<MedicationAdministration>;
