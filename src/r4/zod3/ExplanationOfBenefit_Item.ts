// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDate } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ExplanationOfBenefit_Item_Adjudication } from "./ExplanationOfBenefit_Item_Adjudication";
import { ExplanationOfBenefit_Item_AdjudicationSchemaInternal } from "./ExplanationOfBenefit_Item_Adjudication";
import type { ExplanationOfBenefit_Item_Detail } from "./ExplanationOfBenefit_Item_Detail";
import { ExplanationOfBenefit_Item_DetailSchemaInternal } from "./ExplanationOfBenefit_Item_Detail";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A claim line. Either a simple (a product or service) or a 'group' of details which can also be a simple items or groups of sub-details. */
export interface ExplanationOfBenefit_Item extends BackboneElement {
	/** If this item is a group then the values here are a summary of the adjudication of the detail items. If this item is a simple product or service then this is the result of the adjudication of this item. */
	adjudication?: Array<ExplanationOfBenefit_Item_Adjudication>;
	/** Physical service site on the patient (limb, tooth, etc.). */
	bodySite?: CodeableConcept;
	/** Care team members related to this service or product. */
	careTeamSequence?: Array<number | null>;
	/** Extensions for careTeamSequence */
	_careTeamSequence?: Array<Element | null>;
	/** Code to identify the general type of benefits under which products and services are provided. */
	category?: CodeableConcept;
	/** Second-tier of goods and services. */
	detail?: Array<ExplanationOfBenefit_Item_Detail>;
	/** Diagnoses applicable for this service or product. */
	diagnosisSequence?: Array<number | null>;
	/** Extensions for diagnosisSequence */
	_diagnosisSequence?: Array<Element | null>;
	/** A billed item may include goods or services provided in multiple encounters. */
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
	/** The quantity times the unit price for an additional service or product or charge. */
	net?: Money;
	/** The numbers associated with notes below which apply to the adjudication of this item. */
	noteNumber?: Array<number | null>;
	/** Extensions for noteNumber */
	_noteNumber?: Array<Element | null>;
	/** Procedures applicable for this service or product. */
	procedureSequence?: Array<number | null>;
	/** Extensions for procedureSequence */
	_procedureSequence?: Array<Element | null>;
	/** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item. */
	productOrService: CodeableConcept;
	/** Identifies the program under which this may be recovered. */
	programCode?: Array<CodeableConcept>;
	/** The number of repetitions of a service or product. */
	quantity?: Quantity;
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
	/** A region or surface of the bodySite, e.g. limb region or tooth surface(s). */
	subSite?: Array<CodeableConcept>;
	/** Unique Device Identifiers associated with this line item. */
	udi?: Array<Reference>;
	/** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group. */
	unitPrice?: Money;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExplanationOfBenefit_Item_AdjudicationSchema =
	(): z.ZodType<ExplanationOfBenefit_Item_Adjudication> =>
		ExplanationOfBenefit_Item_AdjudicationSchemaInternal as z.ZodType<ExplanationOfBenefit_Item_Adjudication>;
const getExplanationOfBenefit_Item_DetailSchema =
	(): z.ZodType<ExplanationOfBenefit_Item_Detail> =>
		ExplanationOfBenefit_Item_DetailSchemaInternal as z.ZodType<ExplanationOfBenefit_Item_Detail>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_ItemSchemaInternal =
	BackboneElementSchemaInternal.extend({
		adjudication: z
			.lazy(getExplanationOfBenefit_Item_AdjudicationSchema)
			.array()
			.optional(),
		bodySite: z.lazy(getCodeableConceptSchema).optional(),
		careTeamSequence: z.number().int().positive().nullable().array().optional(),
		_careTeamSequence: z.lazy(getElementSchema).nullable().array().optional(),
		category: z.lazy(getCodeableConceptSchema).optional(),
		detail: z
			.lazy(getExplanationOfBenefit_Item_DetailSchema)
			.array()
			.optional(),
		diagnosisSequence: z
			.number()
			.int()
			.positive()
			.nullable()
			.array()
			.optional(),
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
		_informationSequence: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		locationAddress: z.lazy(getAddressSchema).optional(),
		locationCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		locationReference: z.lazy(getReferenceSchema).optional(),
		modifier: z.lazy(getCodeableConceptSchema).array().optional(),
		net: z.lazy(getMoneySchema).optional(),
		noteNumber: z.number().int().positive().nullable().array().optional(),
		_noteNumber: z.lazy(getElementSchema).nullable().array().optional(),
		procedureSequence: z
			.number()
			.int()
			.positive()
			.nullable()
			.array()
			.optional(),
		_procedureSequence: z.lazy(getElementSchema).nullable().array().optional(),
		productOrService: z.lazy(getCodeableConceptSchema),
		programCode: z.lazy(getCodeableConceptSchema).array().optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		revenue: z.lazy(getCodeableConceptSchema).optional(),
		sequence: z.number().int().positive(),
		_sequence: z.lazy(getElementSchema).optional(),
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
				record.noteNumber,
				record._noteNumber,
				"noteNumber",
				"_noteNumber",
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
				record.udi,
				"udi",
				["http://hl7.org/fhir/StructureDefinition/Device"],
				["Device"],
				ctx,
			);
		});

export const ExplanationOfBenefit_ItemSchema =
	ExplanationOfBenefit_ItemSchemaInternal as z.ZodType<ExplanationOfBenefit_Item>;
