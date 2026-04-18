// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDate } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Address } from "../Address";
import { AddressSchemaInternal } from "../Address";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Money } from "../Money";
import { MoneySchemaInternal } from "../Money";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Claim_Item_BodySite } from "./Claim_Item_BodySite";
import { Claim_Item_BodySiteSchemaInternal } from "./Claim_Item_BodySite";
import type { Claim_Item_Detail } from "./Claim_Item_Detail";
import { Claim_Item_DetailSchemaInternal } from "./Claim_Item_Detail";

/** A claim line. Either a simple  product or service or a 'group' of details which can each be a simple items or groups of sub-details. */
export interface Claim_Item extends BackboneElement {
	/** Physical location where the service is performed or applies. */
	bodySite?: Array<Claim_Item_BodySite>;
	/** CareTeam members related to this service or product. */
	careTeamSequence?: Array<number | null>;
	/** Extensions for careTeamSequence */
	_careTeamSequence?: Array<Element | null>;
	/** Code to identify the general type of benefits under which products and services are provided. */
	category?: CodeableConcept;
	/** A claim detail line. Either a simple (a product or service) or a 'group' of sub-details which are simple items. */
	detail?: Array<Claim_Item_Detail>;
	/** Diagnosis applicable for this service or product. */
	diagnosisSequence?: Array<number | null>;
	/** Extensions for diagnosisSequence */
	_diagnosisSequence?: Array<Element | null>;
	/** Healthcare encounters related to this claim. */
	encounter?: Array<Reference>;
	/** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount. */
	factor?: number;
	/** Extensions for factor */
	_factor?: Element;
	/** Exceptions, special conditions and supporting information applicable for this service or product. */
	informationSequence?: Array<number | null>;
	/** Extensions for informationSequence */
	_informationSequence?: Array<Element | null>;
	/** Where the product or service was provided. */
	locationAddress?: Address;
	/** Where the product or service was provided. */
	locationCodeableConcept?: CodeableConcept;
	/** Where the product or service was provided. */
	locationReference?: Reference;
	/** Item typification or modifiers codes to convey additional context for the product or service. */
	modifier?: Array<CodeableConcept>;
	/** The total amount claimed for the group (if a grouper) or the line item. Net = unit price * quantity * factor. */
	net?: Money;
	/** The amount paid by the patient, in total at the claim claim level or specifically for the item and detail level, to the provider for goods and services. */
	patientPaid?: Money;
	/** Procedures applicable for this service or product. */
	procedureSequence?: Array<number | null>;
	/** Extensions for procedureSequence */
	_procedureSequence?: Array<Element | null>;
	/** When the value is a group code then this item collects a set of related item details, otherwise this contains the product, service, drug or other billing code for the item. This element may be the start of a range of .productOrService codes used in conjunction with .productOrServiceEnd or it may be a solo element where .productOrServiceEnd is not used. */
	productOrService?: CodeableConcept;
	/** This contains the end of a range of product, service, drug or other billing codes for the item. This element is not used when the .productOrService is a group code. This value may only be present when a .productOfService code has been provided to convey the start of the range. Typically this value may be used only with preauthorizations and not with claims. */
	productOrServiceEnd?: CodeableConcept;
	/** Identifies the program under which this may be recovered. */
	programCode?: Array<CodeableConcept>;
	/** The number of repetitions of a service or product. */
	quantity?: Quantity;
	/** Request or Referral for Goods or Service to be rendered. */
	request?: Array<Reference>;
	/** The type of revenue or cost center providing the product and/or service. */
	revenue?: CodeableConcept;
	/** A number to uniquely identify item entries. */
	sequence: number;
	/** Extensions for sequence */
	_sequence?: Element;
	/** The date or dates when the service or product was supplied, performed or completed. */
	servicedDate?: string;
	/** Extensions for servicedDate */
	_servicedDate?: Element;
	/** The date or dates when the service or product was supplied, performed or completed. */
	servicedPeriod?: Period;
	/** The total of taxes applicable for this product or service. */
	tax?: Money;
	/** Trace number for tracking purposes. May be defined at the jurisdiction level or between trading partners. */
	traceNumber?: Array<Identifier>;
	/** Unique Device Identifiers associated with this line item. */
	udi?: Array<Reference>;
	/** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group. */
	unitPrice?: Money;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getClaim_Item_BodySiteSchema = (): z.ZodType<Claim_Item_BodySite> =>
	Claim_Item_BodySiteSchemaInternal as z.ZodType<Claim_Item_BodySite>;
const getClaim_Item_DetailSchema = (): z.ZodType<Claim_Item_Detail> =>
	Claim_Item_DetailSchemaInternal as z.ZodType<Claim_Item_Detail>;
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

/** @internal */
export const Claim_ItemSchemaInternal = BackboneElementSchemaInternal.extend({
	bodySite: z.lazy(getClaim_Item_BodySiteSchema).array().optional(),
	careTeamSequence: z.number().int().positive().nullable().array().optional(),
	_careTeamSequence: z.lazy(getElementSchema).nullable().array().optional(),
	category: z.lazy(getCodeableConceptSchema).optional(),
	detail: z.lazy(getClaim_Item_DetailSchema).array().optional(),
	diagnosisSequence: z.number().int().positive().nullable().array().optional(),
	_diagnosisSequence: z.lazy(getElementSchema).nullable().array().optional(),
	encounter: z.lazy(getReferenceSchema).array().optional(),
	factor: z.number().optional(),
	_factor: z.lazy(getElementSchema).optional(),
	informationSequence: z
		.number()
		.int()
		.positive()
		.nullable()
		.array()
		.optional(),
	_informationSequence: z.lazy(getElementSchema).nullable().array().optional(),
	locationAddress: z.lazy(getAddressSchema).optional(),
	locationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	locationReference: z.lazy(getReferenceSchema).optional(),
	modifier: z.lazy(getCodeableConceptSchema).array().optional(),
	net: z.lazy(getMoneySchema).optional(),
	patientPaid: z.lazy(getMoneySchema).optional(),
	procedureSequence: z.number().int().positive().nullable().array().optional(),
	_procedureSequence: z.lazy(getElementSchema).nullable().array().optional(),
	productOrService: z.lazy(getCodeableConceptSchema).optional(),
	productOrServiceEnd: z.lazy(getCodeableConceptSchema).optional(),
	programCode: z.lazy(getCodeableConceptSchema).array().optional(),
	quantity: z.lazy(getQuantitySchema).optional(),
	request: z.lazy(getReferenceSchema).array().optional(),
	revenue: z.lazy(getCodeableConceptSchema).optional(),
	sequence: z.number().int().positive(),
	_sequence: z.lazy(getElementSchema).optional(),
	servicedDate: fhirDate().optional(),
	_servicedDate: z.lazy(getElementSchema).optional(),
	servicedPeriod: z.lazy(getPeriodSchema).optional(),
	tax: z.lazy(getMoneySchema).optional(),
	traceNumber: z.lazy(getIdentifierSchema).array().optional(),
	udi: z.lazy(getReferenceSchema).array().optional(),
	unitPrice: z.lazy(getMoneySchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const location_x_Present = [
			"locationAddress",
			"locationCodeableConcept",
			"locationReference",
		].filter((field) => record[field] !== undefined);
		if (location_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of locationAddress, locationCodeableConcept, locationReference may be present for location[x]",
				path: [location_x_Present[0]],
			});
		}
		const serviced_x_Present = ["servicedDate", "servicedPeriod"].filter(
			(field) => record[field] !== undefined,
		);
		if (serviced_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of servicedDate, servicedPeriod may be present for serviced[x]",
				path: [serviced_x_Present[0]],
			});
		}
		validatePrimitiveArrayPair(
			record.careTeamSequence,
			record._careTeamSequence,
			"careTeamSequence",
			"_careTeamSequence",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.diagnosisSequence,
			record._diagnosisSequence,
			"diagnosisSequence",
			"_diagnosisSequence",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.informationSequence,
			record._informationSequence,
			"informationSequence",
			"_informationSequence",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.procedureSequence,
			record._procedureSequence,
			"procedureSequence",
			"_procedureSequence",
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
			record.locationReference,
			"locationReference",
			["http://hl7.org/fhir/StructureDefinition/Location"],
			["Location"],
			ctx,
		);
		validateReferenceTarget(
			record.request,
			"request",
			[
				"http://hl7.org/fhir/StructureDefinition/DeviceRequest",
				"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
				"http://hl7.org/fhir/StructureDefinition/NutritionOrder",
				"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
				"http://hl7.org/fhir/StructureDefinition/SupplyRequest",
				"http://hl7.org/fhir/StructureDefinition/VisionPrescription",
			],
			[
				"DeviceRequest",
				"MedicationRequest",
				"NutritionOrder",
				"ServiceRequest",
				"SupplyRequest",
				"VisionPrescription",
			],
			ctx,
		);
		validateReferenceTarget(
			record.udi,
			"udi",
			["http://hl7.org/fhir/StructureDefinition/Device"],
			["Device"],
			ctx,
		);
	});

export const Claim_ItemSchema =
	Claim_ItemSchemaInternal as z.ZodType<Claim_Item>;
