// Profile: http://hl7.org/fhir/StructureDefinition/ServiceRequest
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirString,
	fhirUri,
} from "../../shared/fhir-primitives";
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
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Ratio } from "../Ratio";
import { RatioSchemaInternal } from "../Ratio";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";

/** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
export interface ServiceRequest extends DomainResource {
	/** If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc. */
	asNeededBoolean?: boolean;
	/** Extensions for asNeededBoolean */
	_asNeededBoolean?: Element;
	/** If a CodeableConcept is present, it indicates the pre-condition for performing the service.  For example "pain", "on flare-up", etc. */
	asNeededCodeableConcept?: CodeableConcept;
	/** When the request transitioned to being actionable. */
	authoredOn?: string;
	/** Extensions for authoredOn */
	_authoredOn?: Element;
	/** Plan/proposal/order fulfilled by this request. */
	basedOn?: Array<Reference>;
	/** Anatomic location where the procedure should be performed. This is the target site. */
	bodySite?: Array<CodeableConcept>;
	/** A code that classifies the service for searching, sorting and display purposes (e.g. "Surgical Procedure"). */
	category?: Array<CodeableConcept>;
	/** A code that identifies a particular service (i.e., procedure, diagnostic investigation, or panel of investigations) that have been requested. */
	code?: CodeableConcept;
	/** Set this to true if the record is saying that the service/procedure should NOT be performed. */
	doNotPerform?: boolean;
	/** Extensions for doNotPerform */
	_doNotPerform?: Element;
	/** An encounter that provides additional information about the healthcare context in which this request is made. */
	encounter?: Reference;
	/** Identifiers assigned to this order instance by the orderer and/or the receiver and/or order fulfiller. */
	identifier?: Array<Identifier>;
	/** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest. */
	instantiatesCanonical?: Array<string | null>;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Array<Element | null>;
	/** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this ServiceRequest. */
	instantiatesUri?: Array<string | null>;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Array<Element | null>;
	/** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be needed for delivering the requested service. */
	insurance?: Array<Reference>;
	/** Whether the request is a proposal, plan, an original order or a reflex order. */
	intent:
		| "directive"
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
	/** The preferred location(s) where the procedure should actually happen in coded or free text form. E.g. at home or nursing day care center. */
	locationCode?: Array<CodeableConcept>;
	/** A reference to the the preferred location(s) where the procedure should actually happen. E.g. at home or nursing day care center. */
	locationReference?: Array<Reference>;
	/** Any other notes and comments made about the service request. For example, internal billing notes. */
	note?: Array<Annotation>;
	/** The date/time at which the requested service should occur. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** The date/time at which the requested service should occur. */
	occurrencePeriod?: Period;
	/** The date/time at which the requested service should occur. */
	occurrenceTiming?: Timing;
	/** Additional details and instructions about the how the services are to be delivered.   For example, and order for a urinary catheter may have an order detail for an external or indwelling catheter, or an order for a bandage may require additional instructions specifying how the bandage should be applied. */
	orderDetail?: Array<CodeableConcept>;
	/** Instructions in terms that are understood by the patient or consumer. */
	patientInstruction?: string;
	/** Extensions for patientInstruction */
	_patientInstruction?: Element;
	/** The desired performer for doing the requested service.  For example, the surgeon, dermatopathologist, endoscopist, etc. */
	performer?: Array<Reference>;
	/** Desired type of performer for doing the requested service. */
	performerType?: CodeableConcept;
	/** Indicates how quickly the ServiceRequest should be addressed with respect to other requests. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction). */
	quantityQuantity?: Quantity;
	/** An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction). */
	quantityRange?: Range;
	/** An amount of service being requested which can be a quantity ( for example $1,500 home modification), a ratio ( for example, 20 half day visits per month), or a range (2.0 to 1.8 Gy per fraction). */
	quantityRatio?: Ratio;
	/** An explanation or justification for why this service is being requested in coded or textual form.   This is often for billing purposes.  May relate to the resources referred to in `supportingInfo`. */
	reasonCode?: Array<CodeableConcept>;
	/** Indicates another resource that provides a justification for why this service is being requested.   May relate to the resources referred to in `supportingInfo`. */
	reasonReference?: Array<Reference>;
	/** Key events in the history of the request. */
	relevantHistory?: Array<Reference>;
	/** The request takes the place of the referenced completed or terminated request(s). */
	replaces?: Array<Reference>;
	/** The individual who initiated the request and has responsibility for its activation. */
	requester?: Reference;
	/** A shared identifier common to all service requests that were authorized more or less simultaneously by a single author, representing the composite or group identifier. */
	requisition?: Identifier;
	/** This is a ServiceRequest resource. */
	resourceType: "ServiceRequest";
	/** One or more specimens that the laboratory procedure will use. */
	specimen?: Array<Reference>;
	/** The status of the order. */
	status:
		| "active"
		| "completed"
		| "draft"
		| "entered-in-error"
		| "on-hold"
		| "revoked"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** On whom or what the service is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans). */
	subject: Reference;
	/** Additional clinical information about the patient or specimen that may influence the services or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements. */
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
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const ServiceRequestSchemaInternal = DomainResourceSchemaInternal.extend(
	{
		asNeededBoolean: z.boolean().optional(),
		_asNeededBoolean: z.lazy(getElementSchema).optional(),
		asNeededCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		authoredOn: fhirDateTime().optional(),
		_authoredOn: z.lazy(getElementSchema).optional(),
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		bodySite: z.lazy(getCodeableConceptSchema).array().optional(),
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		doNotPerform: z.boolean().optional(),
		_doNotPerform: z.lazy(getElementSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		instantiatesCanonical: fhirCanonical().nullable().array().optional(),
		_instantiatesCanonical: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		instantiatesUri: fhirUri().nullable().array().optional(),
		_instantiatesUri: z.lazy(getElementSchema).nullable().array().optional(),
		insurance: z.lazy(getReferenceSchema).array().optional(),
		intent: z.enum([
			"directive",
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
		locationCode: z.lazy(getCodeableConceptSchema).array().optional(),
		locationReference: z.lazy(getReferenceSchema).array().optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		occurrenceDateTime: fhirDateTime().optional(),
		_occurrenceDateTime: z.lazy(getElementSchema).optional(),
		occurrencePeriod: z.lazy(getPeriodSchema).optional(),
		occurrenceTiming: z.lazy(getTimingSchema).optional(),
		orderDetail: z.lazy(getCodeableConceptSchema).array().optional(),
		patientInstruction: fhirString().optional(),
		_patientInstruction: z.lazy(getElementSchema).optional(),
		performer: z.lazy(getReferenceSchema).array().optional(),
		performerType: z.lazy(getCodeableConceptSchema).optional(),
		priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
		_priority: z.lazy(getElementSchema).optional(),
		quantityQuantity: z.lazy(getQuantitySchema).optional(),
		quantityRange: z.lazy(getRangeSchema).optional(),
		quantityRatio: z.lazy(getRatioSchema).optional(),
		reasonCode: z.lazy(getCodeableConceptSchema).array().optional(),
		reasonReference: z.lazy(getReferenceSchema).array().optional(),
		relevantHistory: z.lazy(getReferenceSchema).array().optional(),
		replaces: z.lazy(getReferenceSchema).array().optional(),
		requester: z.lazy(getReferenceSchema).optional(),
		requisition: z.lazy(getIdentifierSchema).optional(),
		resourceType: z.literal("ServiceRequest"),
		specimen: z.lazy(getReferenceSchema).array().optional(),
		status: z.enum([
			"active",
			"completed",
			"draft",
			"entered-in-error",
			"on-hold",
			"revoked",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		subject: z.lazy(getReferenceSchema),
		supportingInfo: z.lazy(getReferenceSchema).array().optional(),
	},
)
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
		const quantity_x_Present = [
			"quantityQuantity",
			"quantityRange",
			"quantityRatio",
		].filter((field) => record[field] !== undefined);
		if (quantity_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of quantityQuantity, quantityRange, quantityRatio may be present for quantity[x]",
				path: [quantity_x_Present[0]],
			});
		}
		validatePrimitiveArrayPair(
			record.instantiatesCanonical,
			record._instantiatesCanonical,
			"instantiatesCanonical",
			"_instantiatesCanonical",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.instantiatesUri,
			record._instantiatesUri,
			"instantiatesUri",
			"_instantiatesUri",
			ctx,
		);
		validateReferenceTarget(
			record.basedOn,
			"basedOn",
			[
				"http://hl7.org/fhir/StructureDefinition/CarePlan",
				"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
				"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
			],
			["CarePlan", "MedicationRequest", "ServiceRequest"],
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
			record.insurance,
			"insurance",
			[
				"http://hl7.org/fhir/StructureDefinition/ClaimResponse",
				"http://hl7.org/fhir/StructureDefinition/Coverage",
			],
			["ClaimResponse", "Coverage"],
			ctx,
		);
		validateReferenceTarget(
			record.locationReference,
			"locationReference",
			["http://hl7.org/fhir/StructureDefinition/Location"],
			["Location"],
			ctx,
		);
		validateReferenceTarget(
			record.performer,
			"performer",
			[
				"http://hl7.org/fhir/StructureDefinition/CareTeam",
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/HealthcareService",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"CareTeam",
				"Device",
				"HealthcareService",
				"Organization",
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
			],
			ctx,
		);
		validateReferenceTarget(
			record.reasonReference,
			"reasonReference",
			[
				"http://hl7.org/fhir/StructureDefinition/Condition",
				"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
				"http://hl7.org/fhir/StructureDefinition/DocumentReference",
				"http://hl7.org/fhir/StructureDefinition/Observation",
			],
			["Condition", "DiagnosticReport", "DocumentReference", "Observation"],
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
			["http://hl7.org/fhir/StructureDefinition/ServiceRequest"],
			["ServiceRequest"],
			ctx,
		);
		validateReferenceTarget(
			record.requester,
			"requester",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"Device",
				"Organization",
				"Patient",
				"Practitioner",
				"PractitionerRole",
				"RelatedPerson",
			],
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

export const ServiceRequestSchema =
	ServiceRequestSchemaInternal as z.ZodType<ServiceRequest>;
