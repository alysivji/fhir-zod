// Profile: http://hl7.org/fhir/StructureDefinition/ProcessRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { ProcessRequest_Item } from "./ProcessRequest_Item";
import { ProcessRequest_ItemSchemaInternal } from "./ProcessRequest_Item";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Base StructureDefinition for ProcessRequest Resource */
export interface ProcessRequest extends DomainResource {
	/** The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest. */
	action?: "cancel" | "poll" | "reprocess" | "status";
	/** Extensions for action */
	_action?: Element;
	/** The date when this resource was created. */
	created?: string;
	/** Extensions for created */
	_created?: Element;
	/** Names of resource types to exclude. */
	exclude?: Array<string | null>;
	/** Extensions for exclude */
	_exclude?: Array<Element | null>;
	/** The ProcessRequest business identifier. */
	identifier?: Array<Identifier>;
	/** Names of resource types to include. */
	include?: Array<string | null>;
	/** Extensions for include */
	_include?: Array<Element | null>;
	/** List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated. */
	item?: Array<ProcessRequest_Item>;
	/** If true remove all history excluding audit. */
	nullify?: boolean;
	/** Extensions for nullify */
	_nullify?: Element;
	/** The organization which is responsible for the action speccified in this request. */
	organization?: Reference;
	/** A period of time during which the fulfilling resources would have been created. */
	period?: Period;
	/** The practitioner who is responsible for the action specified in this request. */
	provider?: Reference;
	/** A reference to supply which authenticates the process. */
	reference?: string;
	/** Extensions for reference */
	_reference?: Element;
	/** Reference of resource which is the target or subject of this action. */
	request?: Reference;
	/** This is a ProcessRequest resource. */
	resourceType: "ProcessRequest";
	/** Reference of a prior response to resource which is the target or subject of this action. */
	response?: Reference;
	/** The status of the resource instance. */
	status?: "active" | "cancelled" | "draft" | "entered-in-error";
	/** Extensions for status */
	_status?: Element;
	/** The organization which is the target of the request. */
	target?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getProcessRequest_ItemSchema = (): z.ZodType<ProcessRequest_Item> =>
	ProcessRequest_ItemSchemaInternal as z.ZodType<ProcessRequest_Item>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ProcessRequestSchemaInternal = DomainResourceSchemaInternal.extend(
	{
		action: z.enum(["cancel", "poll", "reprocess", "status"]).optional(),
		_action: z.lazy(getElementSchema).optional(),
		created: fhirDateTime().optional(),
		_created: z.lazy(getElementSchema).optional(),
		exclude: fhirString().nullable().array().optional(),
		_exclude: z.lazy(getElementSchema).nullable().array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		include: fhirString().nullable().array().optional(),
		_include: z.lazy(getElementSchema).nullable().array().optional(),
		item: z.lazy(getProcessRequest_ItemSchema).array().optional(),
		nullify: z.boolean().optional(),
		_nullify: z.lazy(getElementSchema).optional(),
		organization: z.lazy(getReferenceSchema).optional(),
		period: z.lazy(getPeriodSchema).optional(),
		provider: z.lazy(getReferenceSchema).optional(),
		reference: fhirString().optional(),
		_reference: z.lazy(getElementSchema).optional(),
		request: z.lazy(getReferenceSchema).optional(),
		resourceType: z.literal("ProcessRequest"),
		response: z.lazy(getReferenceSchema).optional(),
		status: z
			.enum(["active", "cancelled", "draft", "entered-in-error"])
			.optional(),
		_status: z.lazy(getElementSchema).optional(),
		target: z.lazy(getReferenceSchema).optional(),
	},
)
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(
			record.exclude,
			record._exclude,
			"exclude",
			"_exclude",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.include,
			record._include,
			"include",
			"_include",
			ctx,
		);
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

export const ProcessRequestSchema =
	ProcessRequestSchemaInternal as z.ZodType<ProcessRequest>;
