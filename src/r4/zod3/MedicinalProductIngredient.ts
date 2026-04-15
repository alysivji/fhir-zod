// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { DomainResource } from "./DomainResource";
import { DomainResourceSchemaInternal } from "./DomainResource";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { MedicinalProductIngredient_SpecifiedSubstance } from "./MedicinalProductIngredient_SpecifiedSubstance";
import { MedicinalProductIngredient_SpecifiedSubstanceSchemaInternal } from "./MedicinalProductIngredient_SpecifiedSubstance";
import type { MedicinalProductIngredient_Substance } from "./MedicinalProductIngredient_Substance";
import { MedicinalProductIngredient_SubstanceSchemaInternal } from "./MedicinalProductIngredient_Substance";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An ingredient of a manufactured item or pharmaceutical product. */
export interface MedicinalProductIngredient extends DomainResource {
	/** If the ingredient is a known or suspected allergen. */
	allergenicIndicator?: boolean;
	/** Extensions for allergenicIndicator */
	_allergenicIndicator?: Element;
	/** The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. */
	identifier?: Identifier;
	/** Manufacturer of this Ingredient. */
	manufacturer?: Array<Reference>;
	/** This is a MedicinalProductIngredient resource. */
	resourceType: "MedicinalProductIngredient";
	/** Ingredient role e.g. Active ingredient, excipient. */
	role: CodeableConcept;
	/** A specified substance that comprises this ingredient. */
	specifiedSubstance?: Array<MedicinalProductIngredient_SpecifiedSubstance>;
	/** The ingredient substance. */
	substance?: MedicinalProductIngredient_Substance;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMedicinalProductIngredient_SpecifiedSubstanceSchema =
	(): z.ZodType<MedicinalProductIngredient_SpecifiedSubstance> =>
		MedicinalProductIngredient_SpecifiedSubstanceSchemaInternal as z.ZodType<MedicinalProductIngredient_SpecifiedSubstance>;
const getMedicinalProductIngredient_SubstanceSchema =
	(): z.ZodType<MedicinalProductIngredient_Substance> =>
		MedicinalProductIngredient_SubstanceSchemaInternal as z.ZodType<MedicinalProductIngredient_Substance>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicinalProductIngredientSchemaInternal =
	DomainResourceSchemaInternal.extend({
		allergenicIndicator: z.boolean().optional(),
		_allergenicIndicator: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		manufacturer: z.lazy(getReferenceSchema).array().optional(),
		resourceType: z.literal("MedicinalProductIngredient"),
		role: z.lazy(getCodeableConceptSchema),
		specifiedSubstance: z
			.lazy(getMedicinalProductIngredient_SpecifiedSubstanceSchema)
			.array()
			.optional(),
		substance: z.lazy(getMedicinalProductIngredient_SubstanceSchema).optional(),
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

export const MedicinalProductIngredientSchema =
	MedicinalProductIngredientSchemaInternal as z.ZodType<MedicinalProductIngredient>;
