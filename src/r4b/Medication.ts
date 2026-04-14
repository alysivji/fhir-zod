// Profile: http://hl7.org/fhir/StructureDefinition/Medication
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

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
import type { Medication_Batch } from "./Medication_Batch";
import { Medication_BatchSchemaInternal } from "./Medication_Batch";
import type { Medication_Ingredient } from "./Medication_Ingredient";
import { Medication_IngredientSchemaInternal } from "./Medication_Ingredient";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface Medication extends DomainResource {
	/** Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.). */
	amount?: Ratio;
	/** Information that only applies to packages (not products). */
	batch?: Medication_Batch;
	/** A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems. */
	code?: CodeableConcept;
	/** Describes the form of the item.  Powder; tablets; capsule. */
	form?: CodeableConcept;
	/** Business identifier for this medication. */
	identifier?: Array<Identifier>;
	/** Identifies a particular constituent of interest in the product. */
	ingredient?: Array<Medication_Ingredient>;
	/** Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product. */
	manufacturer?: Reference;
	/** This is a Medication resource. */
	resourceType: "Medication";
	/** A code to indicate if the medication is in active use. */
	status?: "active" | "entered-in-error" | "inactive";
	/** Extensions for status */
	_status?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMedication_BatchSchema = (): z.ZodType<Medication_Batch> =>
	Medication_BatchSchemaInternal as z.ZodType<Medication_Batch>;
const getMedication_IngredientSchema = (): z.ZodType<Medication_Ingredient> =>
	Medication_IngredientSchemaInternal as z.ZodType<Medication_Ingredient>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationSchemaInternal = DomainResourceSchemaInternal.extend({
	amount: z.lazy(getRatioSchema).optional(),
	batch: z.lazy(getMedication_BatchSchema).optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	form: z.lazy(getCodeableConceptSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	ingredient: z.lazy(getMedication_IngredientSchema).array().optional(),
	manufacturer: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("Medication"),
	status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
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

export const MedicationSchema =
	MedicationSchemaInternal as z.ZodType<Medication>;
