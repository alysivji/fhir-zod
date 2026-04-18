// Profile: http://hl7.org/fhir/StructureDefinition/PaymentNotice
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirDate, fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Base StructureDefinition for PaymentNotice Resource */
export interface PaymentNotice extends DomainResource {
	/** The date when this resource was created. */
	created?: string;
	/** Extensions for created */
	_created?: Element;
	/** The notice business identifier. */
	identifier?: Array<Identifier>;
	/** The organization which is responsible for the services rendered to the patient. */
	organization?: Reference;
	/** The payment status, typically paid: payment sent, cleared: payment received. */
	paymentStatus?: CodeableConcept;
	/** The practitioner who is responsible for the services rendered to the patient. */
	provider?: Reference;
	/** Reference of resource for which payment is being made. */
	request?: Reference;
	/** This is a PaymentNotice resource. */
	resourceType: "PaymentNotice";
	/** Reference of response to resource for which payment is being made. */
	response?: Reference;
	/** The status of the resource instance. */
	status?: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
	/** The date when the above payment action occurrred. */
	statusDate?: string;
	/** Extensions for statusDate */
	_statusDate?: Element;
	/** The Insurer who is target  of the request. */
	target?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PaymentNoticeSchemaInternal = DomainResourceSchemaInternal.extend({
	created: fhirDateTime().optional(),
	_created: z.lazy(getElementSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	organization: z.lazy(getReferenceSchema).optional(),
	paymentStatus: z.lazy(getCodeableConceptSchema).optional(),
	provider: z.lazy(getReferenceSchema).optional(),
	request: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("PaymentNotice"),
	response: z.lazy(getReferenceSchema).optional(),
	status: z
		.enum(["active", "cancelled", "draft", "entered-in-error"])
		.optional(),
	_status: z.lazy(getElementSchema).optional(),
	statusDate: fhirDate().optional(),
	_statusDate: z.lazy(getElementSchema).optional(),
	target: z.lazy(getReferenceSchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.organization,
			"organization",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.provider,
			"provider",
			["http://hl7.org/fhir/StructureDefinition/Practitioner"],
			["Practitioner"],
			ctx,
		);
		validateReferenceTarget(
			record.request,
			"request",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.response,
			"response",
			["http://hl7.org/fhir/StructureDefinition/Resource"],
			["Resource"],
			ctx,
		);
		validateReferenceTarget(
			record.target,
			"target",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export const PaymentNoticeSchema =
	PaymentNoticeSchemaInternal as z.ZodType<PaymentNotice>;
