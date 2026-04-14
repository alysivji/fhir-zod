// Profile: http://hl7.org/fhir/StructureDefinition/SupplyRequest
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
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
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { SupplyRequest_Parameter } from "./SupplyRequest_Parameter";
import { SupplyRequest_ParameterSchemaInternal } from "./SupplyRequest_Parameter";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** A record of a non-patient specific request for a medication, substance, device, certain types of biologically derived product, and nutrition product used in the healthcare setting. */
export interface SupplyRequest extends DomainResource {
	/** When the request was made. */
	authoredOn?: string;
	/** Extensions for authoredOn */
	_authoredOn?: Element;
	/** Plan/proposal/order fulfilled by this request. */
	basedOn?: Array<Reference>;
	/** Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process. */
	category?: CodeableConcept;
	/** The patient to whom the supply will be given or for whom they will be used. */
	deliverFor?: Reference;
	/** Where the supply is expected to come from. */
	deliverFrom?: Reference;
	/** Where the supply is destined to go. */
	deliverTo?: Reference;
	/** Business identifiers assigned to this SupplyRequest by the author and/or other systems. These identifiers remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** The item that is requested to be supplied. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list. */
	item: CodeableReference;
	/** When the request should be fulfilled. */
	occurrenceDateTime?: string;
	/** Extensions for occurrenceDateTime */
	_occurrenceDateTime?: Element;
	/** When the request should be fulfilled. */
	occurrencePeriod?: Period;
	/** When the request should be fulfilled. */
	occurrenceTiming?: Timing;
	/** Specific parameters for the ordered item.  For example, the size of the indicated item. */
	parameter?: Array<SupplyRequest_Parameter>;
	/** Indicates how quickly this SupplyRequest should be addressed with respect to other requests. */
	priority?: "asap" | "routine" | "stat" | "urgent";
	/** Extensions for priority */
	_priority?: Element;
	/** The amount that is being ordered of the indicated item. */
	quantity: Quantity;
	/** The reason why the supply item was requested. */
	reason?: Array<CodeableReference>;
	/** The device, practitioner, etc. who initiated the request. */
	requester?: Reference;
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
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getSupplyRequest_ParameterSchema =
	(): z.ZodType<SupplyRequest_Parameter> =>
		SupplyRequest_ParameterSchemaInternal as z.ZodType<SupplyRequest_Parameter>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const SupplyRequestSchemaInternal = DomainResourceSchemaInternal.extend({
	authoredOn: fhirDateTime().optional(),
	_authoredOn: z.lazy(getElementSchema).optional(),
	basedOn: z.lazy(getReferenceSchema).array().optional(),
	category: z.lazy(getCodeableConceptSchema).optional(),
	deliverFor: z.lazy(getReferenceSchema).optional(),
	deliverFrom: z.lazy(getReferenceSchema).optional(),
	deliverTo: z.lazy(getReferenceSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	item: z.lazy(getCodeableReferenceSchema),
	occurrenceDateTime: fhirDateTime().optional(),
	_occurrenceDateTime: z.lazy(getElementSchema).optional(),
	occurrencePeriod: z.lazy(getPeriodSchema).optional(),
	occurrenceTiming: z.lazy(getTimingSchema).optional(),
	parameter: z.lazy(getSupplyRequest_ParameterSchema).array().optional(),
	priority: z.enum(["asap", "routine", "stat", "urgent"]).optional(),
	_priority: z.lazy(getElementSchema).optional(),
	quantity: z.lazy(getQuantitySchema),
	reason: z.lazy(getCodeableReferenceSchema).array().optional(),
	requester: z.lazy(getReferenceSchema).optional(),
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
		validateReferenceTarget(
			record.basedOn,
			"basedOn",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.deliverFor,
			"deliverFor",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
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
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Location", "Organization", "Patient", "RelatedPerson"],
			ctx,
		);
		validateReferenceTarget(
			record.requester,
			"requester",
			[
				"http://hl7.org/fhir/StructureDefinition/CareTeam",
				"http://hl7.org/fhir/StructureDefinition/Device",
				"http://hl7.org/fhir/StructureDefinition/Organization",
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			[
				"CareTeam",
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
			record.supplier,
			"supplier",
			[
				"http://hl7.org/fhir/StructureDefinition/HealthcareService",
				"http://hl7.org/fhir/StructureDefinition/Organization",
			],
			["HealthcareService", "Organization"],
			ctx,
		);
	});

export const SupplyRequestSchema =
	SupplyRequestSchemaInternal as z.ZodType<SupplyRequest>;
