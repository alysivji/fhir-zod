// Profile: http://hl7.org/fhir/StructureDefinition/ProcedureRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { ProcedureRequest_Requester } from "./ProcedureRequest_Requester";
import { ProcedureRequest_RequesterSchemaInternal } from "./ProcedureRequest_Requester";

/** Base StructureDefinition for ProcedureRequest Resource */
export interface ProcedureRequest extends DomainResource {
	/** If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example "pain", "on flare-up", etc. */
	asNeededBoolean?: boolean;
	/** Extensions for asNeededBoolean */
	_asNeededBoolean?: Element;
	/** If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example "pain", "on flare-up", etc. */
	asNeededCodeableConcept?: CodeableConcept;
	/** When the request transitioned to being actionable. */
	authoredOn?: string;
	/** Extensions for authoredOn */
	_authoredOn?: Element;
	/** Plan/proposal/order fulfilled by this request. */
	basedOn?: Array<Reference>;
	/** Anatomic location where the procedure should be performed. This is the target site. */
	bodySite?: Array<CodeableConcept>;
	/** A code that classifies the procedure for searching, sorting and display purposes (e.g. "Surgical Procedure"). */
	category?: Array<CodeableConcept>;
	/** A code that identifies a particular procedure, diagnostic investigation, or panel of investigations, that have been requested. */
	code: CodeableConcept;
	/** An encounter or episode of care that provides additional information about the healthcare context in which this request is made. */
	context?: Reference;
	/** Protocol or definition followed by this request. */
	definition?: Array<Reference>;
	/** Set this to true if the record is saying that the procedure should NOT be performed. */
	doNotPerform?: boolean;
	/** Extensions for doNotPerform */
	_doNotPerform?: Element;
	/** Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller. */
	identifier?: Array<Identifier>;
	/** Whether the request is a proposal, plan, an original order or a reflex order. */
	intent:
		| "filler-order"
		| "instance-order"
		| "option"
		| "order"
		| "original-order"
		| "plan"
		| "proposal"
		| "reflex-order";
	/** Extensions for intent */
	_intent?: Element;
	/** Any other notes and comments made about the service request. For example, letting provider know that "patient hates needles" or other provider instructions. */
	note?: Array<Annotation>;
	/** The date/time at which the diagnostic testing should occur. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** The date/time at which the diagnostic testing should occur. */
	occurrencePeriod?: Period;
	/** The date/time at which the diagnostic testing should occur. */
	occurrenceTiming?: Timing;
	/** The desired perfomer for doing the diagnostic testing.  For example, the surgeon, dermatopathologist, endoscopist, etc. */
	performer?: Reference;
	/** Desired type of performer for doing the diagnostic testing. */
	performerType?: CodeableConcept;
	/** Indicates how quickly the ProcedureRequest should be addressed with respect to other requests. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** An explanation or justification for why this diagnostic investigation is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation. */
	reasonCode?: Array<CodeableConcept>;
	/** Indicates another resource that provides a justification for why this diagnostic investigation is being requested.   May relate to the resources referred to in supportingInformation. */
	reasonReference?: Array<Reference>;
	/** Key events in the history of the request. */
	relevantHistory?: Array<Reference>;
	/** The request takes the place of the referenced completed or terminated request(s). */
	replaces?: Array<Reference>;
	/** The individual who initiated the request and has responsibility for its activation. */
	requester?: ProcedureRequest_Requester;
	/** A shared identifier common to all procedure or diagnostic requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier. */
	requisition?: Identifier;
	/** This is a ProcedureRequest resource. */
	resourceType: "ProcedureRequest";
	/** One or more specimens that the laboratory procedure will use. */
	specimen?: Array<Reference>;
	/** The status of the order. */
	status:
		| "active"
		| "cancelled"
		| "completed"
		| "draft"
		| "entered-in-error"
		| "suspended"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** On whom or what the procedure or diagnostic is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans). */
	subject: Reference;
	/** Additional clinical information about the patient or specimen that may influence the procedure or diagnostics or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements. */
	supportingInfo?: Array<Reference>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getProcedureRequest_RequesterSchema =
	(): z.ZodType<ProcedureRequest_Requester> =>
		ProcedureRequest_RequesterSchemaInternal as z.ZodType<ProcedureRequest_Requester>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const ProcedureRequestSchemaInternal =
	DomainResourceSchemaInternal.extend({
		asNeededBoolean: z.boolean().optional(),
		_asNeededBoolean: z.lazy(getElementSchema).optional(),
		asNeededCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		authoredOn: fhirDateTime().optional(),
		_authoredOn: z.lazy(getElementSchema).optional(),
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		bodySite: z.lazy(getCodeableConceptSchema).array().optional(),
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema),
		context: z.lazy(getReferenceSchema).optional(),
		definition: z.lazy(getReferenceSchema).array().optional(),
		doNotPerform: z.boolean().optional(),
		_doNotPerform: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		intent: z.enum([
			"filler-order",
			"instance-order",
			"option",
			"order",
			"original-order",
			"plan",
			"proposal",
			"reflex-order",
		]),
		_intent: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		occurrenceDateTime: fhirDateTime().optional(),
		_occurrenceDateTime: z.lazy(getElementSchema).optional(),
		occurrencePeriod: z.lazy(getPeriodSchema).optional(),
		occurrenceTiming: z.lazy(getTimingSchema).optional(),
		performer: z.lazy(getReferenceSchema).optional(),
		performerType: z.lazy(getCodeableConceptSchema).optional(),
		priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
		_priority: z.lazy(getElementSchema).optional(),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		relevantHistory: z.lazy(getReferenceSchema).array().optional(),
		replaces: z.lazy(getReferenceSchema).array().optional(),
		requester: z.lazy(getProcedureRequest_RequesterSchema).optional(),
		requisition: z.lazy(getIdentifierSchema).optional(),
		resourceType: z.literal("ProcedureRequest"),
		specimen: z.lazy(getReferenceSchema).array().optional(),
		status: z.enum([
			"active",
			"cancelled",
			"completed",
			"draft",
			"entered-in-error",
			"suspended",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema),
		supportingInfo: z.lazy(getReferenceSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const asNeeded_x_Present = [
				"asNeededBoolean",
				"asNeededCodeableConcept",
			].filter((field) => record[field] !== undefined);
			if (asNeeded_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of asNeededBoolean, asNeededCodeableConcept may be present for asNeeded[x]",
					path: [asNeeded_x_Present[0]],
				});
			}
			const occurrence_x_Present = [
				"occurrenceDateTime",
				"occurrencePeriod",
				"occurrenceTiming",
			].filter((field) => record[field] !== undefined);
			if (occurrence_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of occurrenceDateTime, occurrencePeriod, occurrenceTiming may be present for occurrence[x]",
					path: [occurrence_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.basedOn,
				"basedOn",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.context,
				"context",
				[
					"http://hl7.org/fhir/StructureDefinition/Encounter",
					"http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
				],
				["Encounter", "EpisodeOfCare"],
				ctx,
			);
			validateReferenceTarget(
				record.definition,
				"definition",
				[
					"http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
					"http://hl7.org/fhir/StructureDefinition/PlanDefinition",
				],
				["ActivityDefinition", "PlanDefinition"],
				ctx,
			);
			validateReferenceTarget(
				record.performer,
				"performer",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/HealthcareService",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Device",
					"HealthcareService",
					"Organization",
					"Patient",
					"Practitioner",
					"RelatedPerson",
				],
				ctx,
			);
			validateReferenceTarget(
				record.reasonReference,
				"reasonReference",
				[
					"http://hl7.org/fhir/StructureDefinition/Condition",
					"http://hl7.org/fhir/StructureDefinition/Observation",
				],
				["Condition", "Observation"],
				ctx,
			);
			validateReferenceTarget(
				record.relevantHistory,
				"relevantHistory",
				["http://hl7.org/fhir/StructureDefinition/Provenance"],
				["Provenance"],
				ctx,
			);
			validateReferenceTarget(
				record.replaces,
				"replaces",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
			validateReferenceTarget(
				record.specimen,
				"specimen",
				["http://hl7.org/fhir/StructureDefinition/Specimen"],
				["Specimen"],
				ctx,
			);
			validateReferenceTarget(
				record.subject,
				"subject",
				[
					"http://hl7.org/fhir/StructureDefinition/Device",
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/Location",
					"http://hl7.org/fhir/StructureDefinition/Patient",
				],
				["Device", "Group", "Location", "Patient"],
				ctx,
			);
			validateReferenceTarget(
				record.supportingInfo,
				"supportingInfo",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const ProcedureRequestSchema =
	ProcedureRequestSchemaInternal as z.ZodType<ProcedureRequest>;
