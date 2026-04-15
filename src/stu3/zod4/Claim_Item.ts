// Profile: http://hl7.org/fhir/StructureDefinition/Claim
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDate } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Claim_Item_Detail } from "./Claim_Item_Detail";
import { Claim_Item_DetailSchemaInternal } from "./Claim_Item_Detail";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** First tier of goods and services. */
export interface Claim_Item extends BackboneElement {
	/** Physical service site on the patient (limb, tooth, etc). */
	bodySite?: CodeableConcept;
	/** CareTeam applicable for this service or product line. */
	careTeamLinkId?: Array<number | null>;
	/** Extensions for careTeamLinkId */
	_careTeamLinkId?: Array<Element | null>;
	/** Health Care Service Type Codes  to identify the classification of service or benefits. */
	category?: CodeableConcept;
	/** Second tier of goods and services. */
	detail?: Array<Claim_Item_Detail>;
	/** Diagnosis applicable for this service or product line. */
	diagnosisLinkId?: Array<number | null>;
	/** Extensions for diagnosisLinkId */
	_diagnosisLinkId?: Array<Element | null>;
	/** A billed item may include goods or services provided in multiple encounters. */
	encounter?: Array<Reference>;
	/** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount. */
	factor?: number;
	/** Extensions for factor */
	_factor?: Element;
	/** Exceptions, special conditions and supporting information pplicable for this service or product line. */
	informationLinkId?: Array<number | null>;
	/** Extensions for informationLinkId */
	_informationLinkId?: Array<Element | null>;
	/** Where the service was provided. */
	locationAddress?: Address;
	/** Where the service was provided. */
	locationCodeableConcept?: CodeableConcept;
	/** Where the service was provided. */
	locationReference?: Reference;
	/** Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours. */
	modifier?: Array<CodeableConcept>;
	/** The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied. */
	net?: Money;
	/** Procedures applicable for this service or product line. */
	procedureLinkId?: Array<number | null>;
	/** Extensions for procedureLinkId */
	_procedureLinkId?: Array<Element | null>;
	/** For programs which require reason codes for the inclusion or covering of this billed item under the program or sub-program. */
	programCode?: Array<CodeableConcept>;
	/** The number of repetitions of a service or product. */
	quantity?: Quantity;
	/** The type of reveneu or cost center providing the product and/or service. */
	revenue?: CodeableConcept;
	/** A service line number. */
	sequence: number;
	/** Extensions for sequence */
	_sequence?: Element;
	/** If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,RXNorm,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'. */
	service?: CodeableConcept;
	/** The date or dates when the enclosed suite of services were performed or completed. */
	servicedDate?: string;
	/** Extensions for servicedDate */
	_servicedDate?: Element;
	/** The date or dates when the enclosed suite of services were performed or completed. */
	servicedPeriod?: Period;
	/** A region or surface of the site, eg. limb region or tooth surface(s). */
	subSite?: Array<CodeableConcept>;
	/** List of Unique Device Identifiers associated with this line item. */
	udi?: Array<Reference>;
	/** If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group. */
	unitPrice?: Money;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getClaim_Item_DetailSchema = (): z.ZodType<Claim_Item_Detail> =>
	Claim_Item_DetailSchemaInternal as z.ZodType<Claim_Item_Detail>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
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
	bodySite: z.lazy(getCodeableConceptSchema).optional(),
	careTeamLinkId: z.number().int().positive().nullable().array().optional(),
	_careTeamLinkId: z.lazy(getElementSchema).nullable().array().optional(),
	category: z.lazy(getCodeableConceptSchema).optional(),
	detail: z.lazy(getClaim_Item_DetailSchema).array().optional(),
	diagnosisLinkId: z.number().int().positive().nullable().array().optional(),
	_diagnosisLinkId: z.lazy(getElementSchema).nullable().array().optional(),
	encounter: z.lazy(getReferenceSchema).array().optional(),
	factor: z.number().optional(),
	_factor: z.lazy(getElementSchema).optional(),
	informationLinkId: z.number().int().positive().nullable().array().optional(),
	_informationLinkId: z.lazy(getElementSchema).nullable().array().optional(),
	locationAddress: z.lazy(getAddressSchema).optional(),
	locationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
	locationReference: z.lazy(getReferenceSchema).optional(),
	modifier: z.lazy(getCodeableConceptSchema).array().optional(),
	net: z.lazy(getMoneySchema).optional(),
	procedureLinkId: z.number().int().positive().nullable().array().optional(),
	_procedureLinkId: z.lazy(getElementSchema).nullable().array().optional(),
	programCode: z.lazy(getCodeableConceptSchema).array().optional(),
	quantity: z.lazy(getQuantitySchema).optional(),
	revenue: z.lazy(getCodeableConceptSchema).optional(),
	sequence: z.number().int().positive(),
	_sequence: z.lazy(getElementSchema).optional(),
	service: z.lazy(getCodeableConceptSchema).optional(),
	servicedDate: fhirDate().optional(),
	_servicedDate: z.lazy(getElementSchema).optional(),
	servicedPeriod: z.lazy(getPeriodSchema).optional(),
	subSite: z.lazy(getCodeableConceptSchema).array().optional(),
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
			record.careTeamLinkId,
			record._careTeamLinkId,
			"careTeamLinkId",
			"_careTeamLinkId",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.diagnosisLinkId,
			record._diagnosisLinkId,
			"diagnosisLinkId",
			"_diagnosisLinkId",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.informationLinkId,
			record._informationLinkId,
			"informationLinkId",
			"_informationLinkId",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.procedureLinkId,
			record._procedureLinkId,
			"procedureLinkId",
			"_procedureLinkId",
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
			record.udi,
			"udi",
			["http://hl7.org/fhir/StructureDefinition/Device"],
			["Device"],
			ctx,
		);
	});

export const Claim_ItemSchema =
	Claim_ItemSchemaInternal as z.ZodType<Claim_Item>;
