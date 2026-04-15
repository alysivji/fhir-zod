// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { ExplanationOfBenefit_Item_Detail_SubDetail } from "./ExplanationOfBenefit_Item_Detail_SubDetail";
import { ExplanationOfBenefit_Item_Detail_SubDetailSchemaInternal } from "./ExplanationOfBenefit_Item_Detail_SubDetail";
import type { Money } from "./Money";
import { MoneySchemaInternal } from "./Money";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Second tier of goods and services. */
export interface ExplanationOfBenefit_Item_Detail extends BackboneElement {
	/** The adjudications results. */
	adjudication?: Array<unknown>;
	/** Health Care Service Type Codes  to identify the classification of service or benefits. */
	category?: CodeableConcept;
	/** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount. */
	factor?: number;
	/** Extensions for factor */
	_factor?: Element;
	/** Item typification or modifiers codes, eg for Oral whether the treatment is cosmetic or associated with TMJ, or for medical whether the treatment was outside the clinic or out of office hours. */
	modifier?: Array<CodeableConcept>;
	/** The quantity times the unit price for an addittional service or product or charge. For example, the formula: unit Quantity * unit Price (Cost per Point) * factor Number  * points = net Amount. Quantity, factor and points are assumed to be 1 if not supplied. */
	net?: Money;
	/** A list of note references to the notes provided below. */
	noteNumber?: Array<number | null>;
	/** Extensions for noteNumber */
	_noteNumber?: Array<Element | null>;
	/** For programs which require reson codes for the inclusion, covering, of this billed item under the program or sub-program. */
	programCode?: Array<CodeableConcept>;
	/** The number of repetitions of a service or product. */
	quantity?: Quantity;
	/** The type of reveneu or cost center providing the product and/or service. */
	revenue?: CodeableConcept;
	/** A service line number. */
	sequence: number;
	/** Extensions for sequence */
	_sequence?: Element;
	/** If this is an actual service or product line, ie. not a Group, then use code to indicate the Professional Service or Product supplied (eg. CTP, HCPCS,USCLS,ICD10, NCPDP,DIN,ACHI,CCI). If a grouping item then use a group code to indicate the type of thing being grouped eg. 'glasses' or 'compound'. */
	service?: CodeableConcept;
	/** Third tier of goods and services. */
	subDetail?: Array<ExplanationOfBenefit_Item_Detail_SubDetail>;
	/** The type of product or service. */
	type: CodeableConcept;
	/** List of Unique Device Identifiers associated with this line item. */
	udi?: Array<Reference>;
	/** If the item is a node then this is the fee for the product or service, otherwise this is the total of the fees for the children of the group. */
	unitPrice?: Money;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExplanationOfBenefit_Item_Detail_SubDetailSchema =
	(): z.ZodType<ExplanationOfBenefit_Item_Detail_SubDetail> =>
		ExplanationOfBenefit_Item_Detail_SubDetailSchemaInternal as z.ZodType<ExplanationOfBenefit_Item_Detail_SubDetail>;
const getMoneySchema = (): z.ZodType<Money> =>
	MoneySchemaInternal as z.ZodType<Money>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_Item_DetailSchemaInternal =
	BackboneElementSchemaInternal.extend({
		adjudication: z.unknown().array().optional(),
		category: z.lazy(getCodeableConceptSchema).optional(),
		factor: z.number().optional(),
		_factor: z.lazy(getElementSchema).optional(),
		modifier: z.lazy(getCodeableConceptSchema).array().optional(),
		net: z.lazy(getMoneySchema).optional(),
		noteNumber: z.number().int().positive().nullable().array().optional(),
		_noteNumber: z.lazy(getElementSchema).nullable().array().optional(),
		programCode: z.lazy(getCodeableConceptSchema).array().optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		revenue: z.lazy(getCodeableConceptSchema).optional(),
		sequence: z.number().int().positive(),
		_sequence: z.lazy(getElementSchema).optional(),
		service: z.lazy(getCodeableConceptSchema).optional(),
		subDetail: z
			.lazy(getExplanationOfBenefit_Item_Detail_SubDetailSchema)
			.array()
			.optional(),
		type: z.lazy(getCodeableConceptSchema),
		udi: z.lazy(getReferenceSchema).array().optional(),
		unitPrice: z.lazy(getMoneySchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.noteNumber,
				record._noteNumber,
				"noteNumber",
				"_noteNumber",
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

export const ExplanationOfBenefit_Item_DetailSchema =
	ExplanationOfBenefit_Item_DetailSchemaInternal as z.ZodType<ExplanationOfBenefit_Item_Detail>;
