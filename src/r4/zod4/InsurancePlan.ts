// Profile: http://hl7.org/fhir/StructureDefinition/InsurancePlan
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { InsurancePlan_Contact } from "./InsurancePlan_Contact";
import { InsurancePlan_ContactSchemaInternal } from "./InsurancePlan_Contact";
import type { InsurancePlan_Coverage } from "./InsurancePlan_Coverage";
import { InsurancePlan_CoverageSchemaInternal } from "./InsurancePlan_Coverage";
import type { InsurancePlan_Plan } from "./InsurancePlan_Plan";
import { InsurancePlan_PlanSchemaInternal } from "./InsurancePlan_Plan";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlan extends DomainResource {
	/** An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner. */
	administeredBy?: Reference;
	/** A list of alternate names that the product is known as, or was known as in the past. */
	alias?: Array<string | null>;
	/** Extensions for alias */
	_alias?: Array<Element | null>;
	/** The contact for the health insurance product for a certain purpose. */
	contact?: Array<InsurancePlan_Contact>;
	/** Details about the coverage offered by the insurance product. */
	coverage?: Array<InsurancePlan_Coverage>;
	/** The geographic region in which a health insurance product's benefits apply. */
	coverageArea?: Array<Reference>;
	/** The technical endpoints providing access to services operated for the health insurance product. */
	endpoint?: Array<Reference>;
	/** Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server. */
	identifier?: Array<Identifier>;
	/** Official name of the health insurance product as designated by the owner. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Reference to the network included in the health insurance product. */
	network?: Array<Reference>;
	/** The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'. */
	ownedBy?: Reference;
	/** The period of time that the health insurance product is available. */
	period?: Period;
	/** Details about an insurance plan. */
	plan?: Array<InsurancePlan_Plan>;
	/** This is a InsurancePlan resource. */
	resourceType: "InsurancePlan";
	/** The current state of the health insurance product. */
	status?: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The kind of health insurance product. */
	type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getInsurancePlan_ContactSchema = (): z.ZodType<InsurancePlan_Contact> =>
	InsurancePlan_ContactSchemaInternal as z.ZodType<InsurancePlan_Contact>;
const getInsurancePlan_CoverageSchema = (): z.ZodType<InsurancePlan_Coverage> =>
	InsurancePlan_CoverageSchemaInternal as z.ZodType<InsurancePlan_Coverage>;
const getInsurancePlan_PlanSchema = (): z.ZodType<InsurancePlan_Plan> =>
	InsurancePlan_PlanSchemaInternal as z.ZodType<InsurancePlan_Plan>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const InsurancePlanSchemaInternal = DomainResourceSchemaInternal.extend({
	administeredBy: z.lazy(getReferenceSchema).optional(),
	alias: fhirString().nullable().array().optional(),
	_alias: z.lazy(getElementSchema).nullable().array().optional(),
	contact: z.lazy(getInsurancePlan_ContactSchema).array().optional(),
	coverage: z.lazy(getInsurancePlan_CoverageSchema).array().optional(),
	coverageArea: z.lazy(getReferenceSchema).array().optional(),
	endpoint: z.lazy(getReferenceSchema).array().optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	name: fhirString().optional(),
	_name: z.lazy(getElementSchema).optional(),
	network: z.lazy(getReferenceSchema).array().optional(),
	ownedBy: z.lazy(getReferenceSchema).optional(),
	period: z.lazy(getPeriodSchema).optional(),
	plan: z.lazy(getInsurancePlan_PlanSchema).array().optional(),
	resourceType: z.literal("InsurancePlan"),
	status: z.enum(["active", "draft", "retired", "unknown"]).optional(),
	_status: z.lazy(getElementSchema).optional(),
	type: z.lazy(getCodeableConceptSchema).array().optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(
			record.alias,
			record._alias,
			"alias",
			"_alias",
			ctx,
		);
		validateReferenceTarget(
			record.administeredBy,
			"administeredBy",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.coverageArea,
			"coverageArea",
			["http://hl7.org/fhir/StructureDefinition/Location"],
			["Location"],
			ctx,
		);
		validateReferenceTarget(
			record.endpoint,
			"endpoint",
			["http://hl7.org/fhir/StructureDefinition/Endpoint"],
			["Endpoint"],
			ctx,
		);
		validateReferenceTarget(
			record.network,
			"network",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
		validateReferenceTarget(
			record.ownedBy,
			"ownedBy",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export const InsurancePlanSchema =
	InsurancePlanSchemaInternal as z.ZodType<InsurancePlan>;
