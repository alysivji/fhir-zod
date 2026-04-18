// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** Indicates modular components to be provided in addition or mixed with the base formula. */
export interface NutritionOrder_EnteralFormula_Additive
	extends BackboneElement {
	/** The product or brand name of the type of modular component to be added to the formula. */
	productName?: string;
	/** Extensions for productName */
	_productName?: Element;
	/** The amount of additive to be given in addition or to be mixed in with the base formula. */
	quantity?: Quantity;
	/** Indicates the type of modular component such as protein, carbohydrate, fat or fiber to be provided in addition to or mixed with the base formula. */
	type?: CodeableReference;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const NutritionOrder_EnteralFormula_AdditiveSchemaInternal =
	BackboneElementSchemaInternal.extend({
		productName: fhirString().optional(),
		_productName: z.lazy(getElementSchema).optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		type: z.lazy(getCodeableReferenceSchema).optional(),
	}).strict();

export const NutritionOrder_EnteralFormula_AdditiveSchema =
	NutritionOrder_EnteralFormula_AdditiveSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula_Additive>;
