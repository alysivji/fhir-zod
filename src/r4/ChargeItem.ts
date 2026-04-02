// Profile: http://hl7.org/fhir/StructureDefinition/ChargeItem
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:26:21.962Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { ChargeItem_Performer } from "./ChargeItem_Performer";
import { ChargeItem_PerformerSchemaInternal } from "./ChargeItem_Performer";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation. */
export interface ChargeItem extends DomainResource {
	/** Account into which this ChargeItems belongs. */
	account?: Array<Reference>;
	/** The anatomical location where the related service has been applied. */
	bodysite?: Array<CodeableConcept>;
	/** A code that identifies the charge, like a billing code. */
	code: CodeableConcept;
	/** The encounter or episode of care that establishes the context for this event. */
	context?: Reference;
	/** The financial cost center permits the tracking of charge attribution. */
	costCenter?: Reference;
	/** References the source of pricing information, rules of application for the code this ChargeItem uses. */
	definitionCanonical?: Array<string>;
	/** Extensions for definitionCanonical */
	_definitionCanonical?: Array<Element>;
	/** References the (external) source of pricing information, rules of application for the code this ChargeItem uses. */
	definitionUri?: Array<string>;
	/** Extensions for definitionUri */
	_definitionUri?: Array<Element>;
	/** Date the charge item was entered. */
	enteredDate?: string;
	/** Extensions for enteredDate */
	_enteredDate?: Element;
	/** The device, practitioner, etc. who entered the charge item. */
	enterer?: Reference;
	/** Factor overriding the factor determined by the rules associated with the code. */
	factorOverride?: number;
	/** Extensions for factorOverride */
	_factorOverride?: Element;
	/** Identifiers assigned to this event performer or other systems. */
	identifier?: Array<Identifier>;
	/** Comments made about the event by the performer, subject or other participants. */
	note?: Array<Annotation>;
	/** Date/time(s) or duration when the charged service was applied. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** Date/time(s) or duration when the charged service was applied. */
	occurrencePeriod?: Period;
	/** Date/time(s) or duration when the charged service was applied. */
	occurrenceTiming?: Timing;
	/** If the list price or the rule-based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action. */
	overrideReason?: string;
	/** Extensions for overrideReason */
	_overrideReason?: Element;
	/** ChargeItems can be grouped to larger ChargeItems covering the whole set. */
	partOf?: Array<Reference>;
	/** Indicates who or what performed or participated in the charged service. */
	performer?: Array<ChargeItem_Performer>;
	/** The organization requesting the service. */
	performingOrganization?: Reference;
	/** Total price of the charge overriding the list price associated with the code. */
	priceOverride?: Money;
	/** Identifies the device, food, drug or other product being charged either by type code or reference to an instance. */
	productCodeableConcept?: CodeableConcept;
	/** Identifies the device, food, drug or other product being charged either by type code or reference to an instance. */
	productReference?: Reference;
	/** Quantity of which the charge item has been serviced. */
	quantity?: Quantity;
	/** Describes why the event occurred in coded or textual form. */
	reason?: Array<CodeableConcept>;
	/** The organization performing the service. */
	requestingOrganization?: Reference;
	/** This is a ChargeItem resource. */
	resourceType: "ChargeItem";
	/** Indicated the rendered service that caused this charge. */
	service?: Array<Reference>;
	/** The current state of the ChargeItem. */
	status:
		| "aborted"
		| "billable"
		| "billed"
		| "entered-in-error"
		| "not-billable"
		| "planned"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The individual or set of individuals the action is being or was performed on. */
	subject: Reference;
	/** Further information supporting this charge. */
	supportingInformation?: Array<Reference>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getChargeItem_PerformerSchema = (): z.ZodType<ChargeItem_Performer> =>
	ChargeItem_PerformerSchemaInternal as z.ZodType<ChargeItem_Performer>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const ChargeItemSchemaInternal = DomainResourceSchemaInternal.extend({
	account: z.lazy(getReferenceSchema).array().optional(),
	bodysite: z.lazy(getCodeableConceptSchema).array().optional(),
	code: z.lazy(getCodeableConceptSchema),
	context: z.lazy(getReferenceSchema).optional(),
	costCenter: z.lazy(getReferenceSchema).optional(),
	definitionCanonical: z.string().regex(/\S*/).array().optional(),
	_definitionCanonical: z.lazy(getElementSchema).array().optional(),
	definitionUri: z.string().regex(/\S*/).array().optional(),
	_definitionUri: z.lazy(getElementSchema).array().optional(),
	enteredDate: fhirDateTime().optional(),
	_enteredDate: z.lazy(getElementSchema).optional(),
	enterer: z.lazy(getReferenceSchema).optional(),
	factorOverride: z.number().optional(),
	_factorOverride: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	occurrenceDateTime: fhirDateTime().optional(),
	_occurrenceDateTime: z.lazy(getElementSchema).optional(),
	occurrencePeriod: z.lazy(getPeriodSchema).optional(),
	occurrenceTiming: z.lazy(getTimingSchema).optional(),
	overrideReason: z
		.string()
		.regex(/[ \r\n\t\S]+/)
		.optional(),
	_overrideReason: z.lazy(getElementSchema).optional(),
	partOf: z.lazy(getReferenceSchema).array().optional(),
	performer: z.lazy(getChargeItem_PerformerSchema).array().optional(),
	performingOrganization: z.lazy(getReferenceSchema).optional(),
	priceOverride: z.lazy(getMoneySchema).optional(),
	productCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	productReference: z.lazy(getReferenceSchema).optional(),
	quantity: z.lazy(getQuantitySchema).optional(),
	reason: z.lazy(getCodeableConceptSchema).array().optional(),
	requestingOrganization: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("ChargeItem"),
	service: z.lazy(getReferenceSchema).array().optional(),
	status: z.enum([
		"aborted",
		"billable",
		"billed",
		"entered-in-error",
		"not-billable",
		"planned",
		"unknown",
	]),
	_status: z.lazy(getElementSchema).optional(),
	subject: z.lazy(getReferenceSchema),
	supportingInformation: z.lazy(getReferenceSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
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
		const product_x_Present = [
			"productCodeableConcept",
			"productReference",
		].filter((field) => record[field] !== undefined);
		if (product_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of productCodeableConcept, productReference may be present for product[x]",
				path: [product_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.account,
			"account",
			["http://hl7.org/fhir/StructureDefinition/Account"],
			["Account"],
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
			record.costCenter,
			"costCenter",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.enterer,
			"enterer",
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
			record.partOf,
			"partOf",
			["http://hl7.org/fhir/StructureDefinition/ChargeItem"],
			["ChargeItem"],
			ctx,
		);
		validateReferenceTarget(
			record.performingOrganization,
			"performingOrganization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.productReference,
			"productReference",
			[
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Medication",
				"http://hl7.org/fhir/StructureDefinition/Substance",
			],
			["Device", "Medication", "Substance"],
			ctx,
		);
		validateReferenceTarget(
			record.requestingOrganization,
			"requestingOrganization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.service,
			"service",
			[
				"http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
				"http://hl7.org/fhir/StructureDefinition/ImagingStudy",
				"http://hl7.org/fhir/StructureDefinition/Immunization",
				"http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
				"http://hl7.org/fhir/StructureDefinition/MedicationDispense",
				"http://hl7.org/fhir/StructureDefinition/Observation",
				"http://hl7.org/fhir/StructureDefinition/Procedure",
				"http://hl7.org/fhir/StructureDefinition/SupplyDelivery",
			],
			[
				"DiagnosticReport",
				"ImagingStudy",
				"Immunization",
				"MedicationAdministration",
				"MedicationDispense",
				"Observation",
				"Procedure",
				"SupplyDelivery",
			],
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

export const ChargeItemSchema =
	ChargeItemSchemaInternal as z.ZodType<ChargeItem>;
