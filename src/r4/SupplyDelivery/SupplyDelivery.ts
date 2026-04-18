// Profile: http://hl7.org/fhir/StructureDefinition/SupplyDelivery
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
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
import type { SupplyDelivery_SuppliedItem } from "./SupplyDelivery_SuppliedItem";
import { SupplyDelivery_SuppliedItemSchemaInternal } from "./SupplyDelivery_SuppliedItem";

/** Record of delivery of what is supplied. */
export interface SupplyDelivery extends DomainResource {
	/** A plan, proposal or order that is fulfilled in whole or in part by this event. */
	basedOn?: Array<Reference>;
	/** Identification of the facility/location where the Supply was shipped to, as part of the dispense event. */
	destination?: Reference;
	/** Identifier for the supply delivery event that is used to identify it across multiple disparate systems. */
	identifier?: Array<Identifier>;
	/** The date or time(s) the activity occurred. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** The date or time(s) the activity occurred. */
	occurrencePeriod?: Period;
	/** The date or time(s) the activity occurred. */
	occurrenceTiming?: Timing;
	/** A larger event of which this particular event is a component or step. */
	partOf?: Array<Reference>;
	/** A link to a resource representing the person whom the delivered item is for. */
	patient?: Reference;
	/** Identifies the person who picked up the Supply. */
	receiver?: Array<Reference>;
	/** This is a SupplyDelivery resource. */
	resourceType: "SupplyDelivery";
	/** A code specifying the state of the dispense event. */
	status?: "abandoned" | "completed" | "entered-in-error" | "in-progress";
	/** Extensions for status */
	_status?: Element;
	/** The item that is being delivered or has been supplied. */
	suppliedItem?: SupplyDelivery_SuppliedItem;
	/** The individual responsible for dispensing the medication, supplier or device. */
	supplier?: Reference;
	/** Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc. */
	type?: CodeableConcept;
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
const getSupplyDelivery_SuppliedItemSchema =
	(): z.ZodType<SupplyDelivery_SuppliedItem> =>
		SupplyDelivery_SuppliedItemSchemaInternal as z.ZodType<SupplyDelivery_SuppliedItem>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const SupplyDeliverySchemaInternal = DomainResourceSchemaInternal.extend(
	{
		basedOn: z.lazy(getReferenceSchema).array().optional(),
		destination: z.lazy(getReferenceSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		occurrenceDateTime: fhirDateTime().optional(),
		_occurrenceDateTime: z.lazy(getElementSchema).optional(),
		occurrencePeriod: z.lazy(getPeriodSchema).optional(),
		occurrenceTiming: z.lazy(getTimingSchema).optional(),
		partOf: z.lazy(getReferenceSchema).array().optional(),
		patient: z.lazy(getReferenceSchema).optional(),
		receiver: z.lazy(getReferenceSchema).array().optional(),
		resourceType: z.literal("SupplyDelivery"),
		status: z
			.enum(["abandoned", "completed", "entered-in-error", "in-progress"])
			.optional(),
		_status: z.lazy(getElementSchema).optional(),
		suppliedItem: z.lazy(getSupplyDelivery_SuppliedItemSchema).optional(),
		supplier: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	},
)
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
		validateReferenceTarget(
			record.basedOn,
			"basedOn",
			["http://hl7.org/fhir/StructureDefinition/SupplyRequest"],
			["SupplyRequest"],
			ctx,
		);
		validateReferenceTarget(
			record.destination,
			"destination",
			["http://hl7.org/fhir/StructureDefinition/Location"],
			["Location"],
			ctx,
		);
		validateReferenceTarget(
			record.partOf,
			"partOf",
			[
				"http://hl7.org/fhir/StructureDefinition/Contract",
				"http://hl7.org/fhir/StructureDefinition/SupplyDelivery",
			],
			["Contract", "SupplyDelivery"],
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
			record.receiver,
			"receiver",
			[
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Practitioner", "PractitionerRole"],
			ctx,
		);
		validateReferenceTarget(
			record.supplier,
			"supplier",
			[
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Organization", "Practitioner", "PractitionerRole"],
			ctx,
		);
	});

export const SupplyDeliverySchema =
	SupplyDeliverySchemaInternal as z.ZodType<SupplyDelivery>;
