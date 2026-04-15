// Profile: http://hl7.org/fhir/StructureDefinition/NutritionProduct
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { NutritionProduct_Characteristic } from "./NutritionProduct_Characteristic";
import { NutritionProduct_CharacteristicSchemaInternal } from "./NutritionProduct_Characteristic";
import type { NutritionProduct_Ingredient } from "./NutritionProduct_Ingredient";
import { NutritionProduct_IngredientSchemaInternal } from "./NutritionProduct_Ingredient";
import type { NutritionProduct_Instance } from "./NutritionProduct_Instance";
import { NutritionProduct_InstanceSchemaInternal } from "./NutritionProduct_Instance";
import type { NutritionProduct_Nutrient } from "./NutritionProduct_Nutrient";
import { NutritionProduct_NutrientSchemaInternal } from "./NutritionProduct_Nutrient";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A food or supplement that is consumed by patients. */
export interface NutritionProduct extends DomainResource {
	/** Nutrition products can have different classifications - according to its nutritional properties, preparation methods, etc. */
	category?: Array<CodeableConcept>;
	/** Specifies descriptive properties of the nutrition product. */
	characteristic?: Array<NutritionProduct_Characteristic>;
	/** The code assigned to the product, for example a USDA NDB number, a USDA FDC ID number, or a Langual code. */
	code?: CodeableConcept;
	/** Ingredients contained in this product. */
	ingredient?: Array<NutritionProduct_Ingredient>;
	/** Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product. */
	instance?: Array<NutritionProduct_Instance>;
	/** Allergens that are known or suspected to be a part of this nutrition product. */
	knownAllergen?: Array<CodeableReference>;
	/** The organisation (manufacturer, representative or legal authorization holder) that is responsible for the device. */
	manufacturer?: Array<Reference>;
	/** Comments made about the product. */
	note?: Array<Annotation>;
	/** The product's nutritional information expressed by the nutrients. */
	nutrient?: Array<NutritionProduct_Nutrient>;
	/** This is a NutritionProduct resource. */
	resourceType: "NutritionProduct";
	/** The current state of the product. */
	status: "active" | "entered-in-error" | "inactive";
	/** Extensions for status */
	_status?: Element;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getNutritionProduct_CharacteristicSchema =
	(): z.ZodType<NutritionProduct_Characteristic> =>
		NutritionProduct_CharacteristicSchemaInternal as z.ZodType<NutritionProduct_Characteristic>;
const getNutritionProduct_IngredientSchema =
	(): z.ZodType<NutritionProduct_Ingredient> =>
		NutritionProduct_IngredientSchemaInternal as z.ZodType<NutritionProduct_Ingredient>;
const getNutritionProduct_InstanceSchema =
	(): z.ZodType<NutritionProduct_Instance> =>
		NutritionProduct_InstanceSchemaInternal as z.ZodType<NutritionProduct_Instance>;
const getNutritionProduct_NutrientSchema =
	(): z.ZodType<NutritionProduct_Nutrient> =>
		NutritionProduct_NutrientSchemaInternal as z.ZodType<NutritionProduct_Nutrient>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const NutritionProductSchemaInternal =
	DomainResourceSchemaInternal.extend({
		category: z.lazy(getCodeableConceptSchema).array().optional(),
		characteristic: z
			.lazy(getNutritionProduct_CharacteristicSchema)
			.array()
			.optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		ingredient: z.lazy(getNutritionProduct_IngredientSchema).array().optional(),
		instance: z.lazy(getNutritionProduct_InstanceSchema).array().optional(),
		knownAllergen: z.lazy(getCodeableReferenceSchema).array().optional(),
		manufacturer: z.lazy(getReferenceSchema).array().optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		nutrient: z.lazy(getNutritionProduct_NutrientSchema).array().optional(),
		resourceType: z.literal("NutritionProduct"),
		status: z.enum(["active", "entered-in-error", "inactive"]),
		_status: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.manufacturer,
				"manufacturer",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const NutritionProductSchema =
	NutritionProductSchemaInternal as z.ZodType<NutritionProduct>;
