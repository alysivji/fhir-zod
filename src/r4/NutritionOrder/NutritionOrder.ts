// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import {
	fhirCanonical,
	fhirDateTime,
	fhirUri,
} from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
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
import type { NutritionOrder_EnteralFormula } from "./NutritionOrder_EnteralFormula";
import { NutritionOrder_EnteralFormulaSchemaInternal } from "./NutritionOrder_EnteralFormula";
import type { NutritionOrder_OralDiet } from "./NutritionOrder_OralDiet";
import { NutritionOrder_OralDietSchemaInternal } from "./NutritionOrder_OralDiet";
import type { NutritionOrder_Supplement } from "./NutritionOrder_Supplement";
import { NutritionOrder_SupplementSchemaInternal } from "./NutritionOrder_Supplement";

/** A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident. */
export interface NutritionOrder extends DomainResource {
	/** A link to a record of allergies or intolerances  which should be included in the nutrition order. */
	allergyIntolerance?: Array<Reference>;
	/** The date and time that this nutrition order was requested. */
	dateTime: string;
	/** Extensions for dateTime */
	_dateTime?: Element;
	/** An encounter that provides additional information about the healthcare context in which this request is made. */
	encounter?: Reference;
	/** Feeding provided through the gastrointestinal tract via a tube, catheter, or stoma that delivers nutrition distal to the oral cavity. */
	enteralFormula?: NutritionOrder_EnteralFormula;
	/** This modifier is used to convey Order-specific modifier about the type of oral food or oral fluids that should not be given. These can be derived from patient allergies, intolerances, or preferences such as No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not be necessary to repeat allergy or intolerance information captured in the referenced AllergyIntolerance resource in the excludeFoodModifier, this element may be used to convey additional specificity related to foods that should be eliminated from the patient’s diet for any reason.  This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings. */
	excludeFoodModifier?: Array<CodeableConcept>;
	/** This modifier is used to convey order-specific modifiers about the type of food that should be given. These can be derived from patient allergies, intolerances, or preferences such as Halal, Vegan or Kosher. This modifier applies to the entire nutrition order inclusive of the oral diet, nutritional supplements and enteral formula feedings. */
	foodPreferenceModifier?: Array<CodeableConcept>;
	/** Identifiers assigned to this order by the order sender or by the order receiver. */
	identifier?: Array<Identifier>;
	/** The URL pointing to a protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder. */
	instantiates?: Array<string | null>;
	/** Extensions for instantiates */
	_instantiates?: Array<Element | null>;
	/** The URL pointing to a FHIR-defined protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder. */
	instantiatesCanonical?: Array<string | null>;
	/** Extensions for instantiatesCanonical */
	_instantiatesCanonical?: Array<Element | null>;
	/** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this NutritionOrder. */
	instantiatesUri?: Array<string | null>;
	/** Extensions for instantiatesUri */
	_instantiatesUri?: Array<Element | null>;
	/** Indicates the level of authority/intentionality associated with the NutrionOrder and where the request fits into the workflow chain. */
	intent:
		| "directive"
		| "filler-order"
		| "instance-order"
		| "option"
		| "order"
		| "original-order"
		| "plan"
		| "proposal"
		| "reflex-order";
	/** Extensions for intent */
	_intent?: Element;
	/** Comments made about the {{title}} by the requester, performer, subject or other participants. */
	note?: Array<Annotation>;
	/** Diet given orally in contrast to enteral (tube) feeding. */
	oralDiet?: NutritionOrder_OralDiet;
	/** The practitioner that holds legal responsibility for ordering the diet, nutritional supplement, or formula feedings. */
	orderer?: Reference;
	/** The person (patient) who needs the nutrition order for an oral diet, nutritional supplement and/or enteral or formula feeding. */
	patient: Reference;
	/** This is a NutritionOrder resource. */
	resourceType: "NutritionOrder";
	/** The workflow status of the nutrition order/request. */
	status:
		| "active"
		| "completed"
		| "draft"
		| "entered-in-error"
		| "on-hold"
		| "revoked"
		| "unknown";
	/** Extensions for status */
	_status?: Element;
	/** Oral nutritional products given in order to add further nutritional value to the patient's diet. */
	supplement?: Array<NutritionOrder_Supplement>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getNutritionOrder_EnteralFormulaSchema =
	(): z.ZodType<NutritionOrder_EnteralFormula> =>
		NutritionOrder_EnteralFormulaSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula>;
const getNutritionOrder_OralDietSchema =
	(): z.ZodType<NutritionOrder_OralDiet> =>
		NutritionOrder_OralDietSchemaInternal as z.ZodType<NutritionOrder_OralDiet>;
const getNutritionOrder_SupplementSchema =
	(): z.ZodType<NutritionOrder_Supplement> =>
		NutritionOrder_SupplementSchemaInternal as z.ZodType<NutritionOrder_Supplement>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const NutritionOrderSchemaInternal = DomainResourceSchemaInternal.extend(
	{
		allergyIntolerance: z.lazy(getReferenceSchema).array().optional(),
		dateTime: fhirDateTime(),
		_dateTime: z.lazy(getElementSchema).optional(),
		encounter: z.lazy(getReferenceSchema).optional(),
		enteralFormula: z.lazy(getNutritionOrder_EnteralFormulaSchema).optional(),
		excludeFoodModifier: z.lazy(getCodeableConceptSchema).array().optional(),
		foodPreferenceModifier: z.lazy(getCodeableConceptSchema).array().optional(),
		identifier: z.lazy(getIdentifierSchema).array().optional(),
		instantiates: fhirUri().nullable().array().optional(),
		_instantiates: z.lazy(getElementSchema).nullable().array().optional(),
		instantiatesCanonical: fhirCanonical().nullable().array().optional(),
		_instantiatesCanonical: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		instantiatesUri: fhirUri().nullable().array().optional(),
		_instantiatesUri: z.lazy(getElementSchema).nullable().array().optional(),
		intent: z.enum([
			"directive",
			"filler-order",
			"instance-order",
			"option",
			"order",
			"original-order",
			"plan",
			"proposal",
			"reflex-order",
		]),
		_intent: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		oralDiet: z.lazy(getNutritionOrder_OralDietSchema).optional(),
		orderer: z.lazy(getReferenceSchema).optional(),
		patient: z.lazy(getReferenceSchema),
		resourceType: z.literal("NutritionOrder"),
		status: z.enum([
			"active",
			"completed",
			"draft",
			"entered-in-error",
			"on-hold",
			"revoked",
			"unknown",
		]),
		_status: z.lazy(getElementSchema).optional(),
		supplement: z.lazy(getNutritionOrder_SupplementSchema).array().optional(),
	},
)
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(
			record.instantiates,
			record._instantiates,
			"instantiates",
			"_instantiates",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.instantiatesCanonical,
			record._instantiatesCanonical,
			"instantiatesCanonical",
			"_instantiatesCanonical",
			ctx,
		);
		validatePrimitiveArrayPair(
			record.instantiatesUri,
			record._instantiatesUri,
			"instantiatesUri",
			"_instantiatesUri",
			ctx,
		);
		validateReferenceTarget(
			record.allergyIntolerance,
			"allergyIntolerance",
			["http://hl7.org/fhir/StructureDefinition/AllergyIntolerance"],
			["AllergyIntolerance"],
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
			record.orderer,
			"orderer",
			[
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
			],
			["Practitioner", "PractitionerRole"],
			ctx,
		);
		validateReferenceTarget(
			record.patient,
			"patient",
			["http://hl7.org/fhir/StructureDefinition/Patient"],
			["Patient"],
			ctx,
		);
	});

export const NutritionOrderSchema =
	NutritionOrderSchemaInternal as z.ZodType<NutritionOrder>;
