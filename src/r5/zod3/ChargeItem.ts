// Profile: http://hl7.org/fhir/StructureDefinition/ChargeItem
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirUri,
} from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { ChargeItem_Performer } from "./ChargeItem_Performer";
import { ChargeItem_PerformerSchemaInternal } from "./ChargeItem_Performer";
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
import type { MonetaryComponent } from "./MonetaryComponent";
import { MonetaryComponentSchemaInternal } from "./MonetaryComponent";
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
	/** The financial cost center permits the tracking of charge attribution. */
	costCenter?: Reference;
	/** References the source of pricing information, rules of application for the code this ChargeItem uses. */
	definitionCanonical?: Array<string | null>;
	/** Extensions for definitionCanonical */
	_definitionCanonical?: Array<Element | null>;
	/** References the (external) source of pricing information, rules of application for the code this ChargeItem uses. */
	definitionUri?: Array<string | null>;
	/** Extensions for definitionUri */
	_definitionUri?: Array<Element | null>;
	/** This ChargeItem has the details of how the associated Encounter should be billed or otherwise be handled by finance systems. */
	encounter?: Reference;
	/** Date the charge item was entered. */
	enteredDate?: string;
	/** Extensions for enteredDate */
	_enteredDate?: Element;
	/** The device, practitioner, etc. who entered the charge item. */
	enterer?: Reference;
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
	overrideReason?: CodeableConcept;
	/** ChargeItems can be grouped to larger ChargeItems covering the whole set. */
	partOf?: Array<Reference>;
	/** Indicates who or what performed or participated in the charged service. */
	performer?: Array<ChargeItem_Performer>;
	/** The organization performing the service. */
	performingOrganization?: Reference;
	/** Identifies the device, food, drug or other product being charged either by type code or reference to an instance. */
	product?: Array<CodeableReference>;
	/** Quantity of which the charge item has been serviced. */
	quantity?: Quantity;
	/** Describes why the event occurred in coded or textual form. */
	reason?: Array<CodeableConcept>;
	/** The organization requesting the service. */
	requestingOrganization?: Reference;
	/** This is a ChargeItem resource. */
	resourceType: "ChargeItem";
	/** Indicated the rendered service that caused this charge. */
	service?: Array<CodeableReference>;
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
	/** The total price for the chargable item, accounting for the quantity. */
	totalPriceComponent?: MonetaryComponent;
	/** The unit price of the chargable item. */
	unitPriceComponent?: MonetaryComponent;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getChargeItem_PerformerSchema = (): z.ZodType<ChargeItem_Performer> =>
	ChargeItem_PerformerSchemaInternal as z.ZodType<ChargeItem_Performer>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMonetaryComponentSchema = (): z.ZodType<MonetaryComponent> =>
	MonetaryComponentSchemaInternal as z.ZodType<MonetaryComponent>;
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
	costCenter: z.lazy(getReferenceSchema).optional(),
	definitionCanonical: fhirCanonical().nullable().array().optional(),
	_definitionCanonical: z.lazy(getElementSchema).nullable().array().optional(),
	definitionUri: fhirUri().nullable().array().optional(),
	_definitionUri: z.lazy(getElementSchema).nullable().array().optional(),
	encounter: z.lazy(getReferenceSchema).optional(),
	enteredDate: fhirDateTime().optional(),
	_enteredDate: z.lazy(getElementSchema).optional(),
	enterer: z.lazy(getReferenceSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	note: z.lazy(getAnnotationSchema).array().optional(),
	occurrenceDateTime: fhirDateTime().optional(),
	_occurrenceDateTime: z.lazy(getElementSchema).optional(),
	occurrencePeriod: z.lazy(getPeriodSchema).optional(),
	occurrenceTiming: z.lazy(getTimingSchema).optional(),
	overrideReason: z.lazy(getCodeableConceptSchema).optional(),
	partOf: z.lazy(getReferenceSchema).array().optional(),
	performer: z.lazy(getChargeItem_PerformerSchema).array().optional(),
	performingOrganization: z.lazy(getReferenceSchema).optional(),
	product: z.lazy(getCodeableReferenceSchema).array().optional(),
	quantity: z.lazy(getQuantitySchema).optional(),
	reason: z.lazy(getCodeableConceptSchema).array().optional(),
	requestingOrganization: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("ChargeItem"),
	service: z.lazy(getCodeableReferenceSchema).array().optional(),
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
	totalPriceComponent: z.lazy(getMonetaryComponentSchema).optional(),
	unitPriceComponent: z.lazy(getMonetaryComponentSchema).optional(),
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
		validatePrimitiveArrayPair(
			record.definitionCanonical,
			record._definitionCanonical,
			"definitionCanonical",
			"_definitionCanonical",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.definitionUri,
			record._definitionUri,
			"definitionUri",
			"_definitionUri",
			ctx,
		);
		validateReferenceTarget(
			record.account,
			"account",
			["http://hl7.org/fhir/StructureDefinition/Account"],
			["Account"],
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
			record.encounter,
			"encounter",
			["http://hl7.org/fhir/StructureDefinition/Encounter"],
			["Encounter"],
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
			record.requestingOrganization,
			"requestingOrganization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
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
