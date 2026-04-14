// Profile: http://hl7.org/fhir/StructureDefinition/Ingredient
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Ingredient_Manufacturer } from "./Ingredient_Manufacturer";
import { Ingredient_ManufacturerSchemaInternal } from "./Ingredient_Manufacturer";
import type { Ingredient_Substance } from "./Ingredient_Substance";
import { Ingredient_SubstanceSchemaInternal } from "./Ingredient_Substance";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface Ingredient extends DomainResource {
	/** If the ingredient is a known or suspected allergen. Note that this is a property of the substance, so if a reference to a SubstanceDefinition is used to decribe that (rather than just a code), the allergen information should go there, not here. */
	allergenicIndicator?: boolean;
	/** Extensions for allergenicIndicator */
	_allergenicIndicator?: Element;
	/** A place for providing any notes that are relevant to the component, e.g. removed during process, adjusted for loss on drying. */
	comment?: string;
	/** Extensions for comment */
	_comment?: Element;
	/** The product which this ingredient is a constituent part of. */
	for?: Array<Reference>;
	/** A classification of the ingredient identifying its precise purpose(s) in the drug product. This extends the Ingredient.role to add more detail. Example: antioxidant, alkalizing agent. */
	function?: Array<CodeableConcept>;
	/** A classification of the ingredient according to where in the physical item it tends to be used, such the outer shell of a tablet, inner body or ink. */
	group?: CodeableConcept;
	/** The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. */
	identifier?: Identifier;
	/** The organization(s) that manufacture this ingredient. Can be used to indicate:         1) Organizations we are aware of that manufacture this ingredient         2) Specific Manufacturer(s) currently being used         3) Set of organisations allowed to manufacture this ingredient for this product         Users must be clear on the application of context relevant to their use case. */
	manufacturer?: Array<Ingredient_Manufacturer>;
	/** This is a Ingredient resource. */
	resourceType: "Ingredient";
	/** A classification of the ingredient identifying its purpose within the product, e.g. active, inactive. */
	role: CodeableConcept;
	/** The status of this ingredient. Enables tracking the life-cycle of the content. */
	status: "active" | "draft" | "retired" | "unknown";
	/** Extensions for status */
	_status?: Element;
	/** The substance that comprises this ingredient. */
	substance: Ingredient_Substance;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getIngredient_ManufacturerSchema =
	(): z.ZodType<Ingredient_Manufacturer> =>
		Ingredient_ManufacturerSchemaInternal as z.ZodType<Ingredient_Manufacturer>;
const getIngredient_SubstanceSchema = (): z.ZodType<Ingredient_Substance> =>
	Ingredient_SubstanceSchemaInternal as z.ZodType<Ingredient_Substance>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const IngredientSchemaInternal = DomainResourceSchemaInternal.extend({
	allergenicIndicator: z.boolean().optional(),
	_allergenicIndicator: z.lazy(getElementSchema).optional(),
	comment: z
		.string()
		.regex(/^[\s\S]+$/)
		.optional(),
	_comment: z.lazy(getElementSchema).optional(),
	for: z.lazy(getReferenceSchema).array().optional(),
	function: z.lazy(getCodeableConceptSchema).array().optional(),
	group: z.lazy(getCodeableConceptSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).optional(),
	manufacturer: z.lazy(getIngredient_ManufacturerSchema).array().optional(),
	resourceType: z.literal("Ingredient"),
	role: z.lazy(getCodeableConceptSchema),
	status: z.enum(["active", "draft", "retired", "unknown"]),
	_status: z.lazy(getElementSchema).optional(),
	substance: z.lazy(getIngredient_SubstanceSchema),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.for,
			"for",
			[
				"http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition",
				"http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition",
				"http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
			],
			[
				"AdministrableProductDefinition",
				"ManufacturedItemDefinition",
				"MedicinalProductDefinition",
			],
			ctx,
		);
	});

export const IngredientSchema =
	IngredientSchemaInternal as z.ZodType<Ingredient>;
