// Profile: http://hl7.org/fhir/StructureDefinition/SupplyRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

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
import type { SupplyRequest_OrderedItem } from "./SupplyRequest_OrderedItem";
import { SupplyRequest_OrderedItemSchemaInternal } from "./SupplyRequest_OrderedItem";
import type { SupplyRequest_Requester } from "./SupplyRequest_Requester";
import { SupplyRequest_RequesterSchemaInternal } from "./SupplyRequest_Requester";

/** Base StructureDefinition for SupplyRequest Resource */
export interface SupplyRequest extends DomainResource {
	/** When the request was made. */
	authoredOn?: string;
	/** Extensions for authoredOn */
	_authoredOn?: Element;
	/** Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process. */
	category?: CodeableConcept;
	/** Where the supply is expected to come from. */
	deliverFrom?: Reference;
	/** Where the supply is destined to go. */
	deliverTo?: Reference;
	/** Unique identifier for this supply request. */
	identifier?: Identifier;
	/** When the request should be fulfilled. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** When the request should be fulfilled. */
	occurrencePeriod?: Period;
	/** When the request should be fulfilled. */
	occurrenceTiming?: Timing;
	/** The item being requested. */
	orderedItem?: SupplyRequest_OrderedItem;
	/** Indicates how quickly this SupplyRequest should be addressed with respect to other requests. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** Why the supply item was requested. */
	reasonCodeableConcept?: CodeableConcept;
	/** Why the supply item was requested. */
	reasonReference?: Reference;
	/** The individual who initiated the request and has responsibility for its activation. */
	requester?: SupplyRequest_Requester;
	/** This is a SupplyRequest resource. */
	resourceType: "SupplyRequest";
	/** Status of the supply request. */
	status?:
		| "active"
		| "cancelled"
		| "completed"
		| "draft"
		| "entered-in-error"
		| "suspended"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Who is intended to fulfill the request. */
	supplier?: Array<Reference>;
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
const getSupplyRequest_OrderedItemSchema =
	(): z.ZodType<SupplyRequest_OrderedItem> =>
		SupplyRequest_OrderedItemSchemaInternal as z.ZodType<SupplyRequest_OrderedItem>;
const getSupplyRequest_RequesterSchema =
	(): z.ZodType<SupplyRequest_Requester> =>
		SupplyRequest_RequesterSchemaInternal as z.ZodType<SupplyRequest_Requester>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const SupplyRequestSchemaInternal = DomainResourceSchemaInternal.extend({
	authoredOn: fhirDateTime().optional(),
	_authoredOn: z.lazy(getElementSchema).optional(),
	category: z.lazy(getCodeableConceptSchema).optional(),
	deliverFrom: z.lazy(getReferenceSchema).optional(),
	deliverTo: z.lazy(getReferenceSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).optional(),
	occurrenceDateTime: fhirDateTime().optional(),
	_occurrenceDateTime: z.lazy(getElementSchema).optional(),
	occurrencePeriod: z.lazy(getPeriodSchema).optional(),
	occurrenceTiming: z.lazy(getTimingSchema).optional(),
	orderedItem: z.lazy(getSupplyRequest_OrderedItemSchema).optional(),
	priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
	_priority: z.lazy(getElementSchema).optional(),
	reasonCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	reasonReference: z.lazy(getReferenceSchema).optional(),
	requester: z.lazy(getSupplyRequest_RequesterSchema).optional(),
	resourceType: z.literal("SupplyRequest"),
	status: z
		.enum([
			"active",
			"cancelled",
			"completed",
			"draft",
			"entered-in-error",
			"suspended",
			"unknown",
		])
		.optional(),
	_status: z.lazy(getElementSchema).optional(),
	supplier: z.lazy(getReferenceSchema).array().optional(),
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
		const reason_x_Present = [
			"reasonCodeableConcept",
			"reasonReference",
		].filter((field) => record[field] !== undefined);
		if (reason_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of reasonCodeableConcept, reasonReference may be present for reason[x]",
				path: [reason_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.deliverFrom,
			"deliverFrom",
			[
				"http://hl7.org/fhir/StructureDefinition/Location",
				"http://hl7.org/fhir/StructureDefinition/Organization",
			],
			["Location", "Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.deliverTo,
			"deliverTo",
			[
				"http://hl7.org/fhir/StructureDefinition/Location",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
			],
			["Location", "Organization", "Patient"],
			ctx,
		);
		validateReferenceTarget(
			record.reasonReference,
			"reasonReference",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.supplier,
			"supplier",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export const SupplyRequestSchema =
	SupplyRequestSchemaInternal as z.ZodType<SupplyRequest>;
