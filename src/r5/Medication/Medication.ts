// Profile: http://hl7.org/fhir/StructureDefinition/Medication
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Medication_Batch } from "./Medication_Batch";
import { Medication_BatchSchemaInternal } from "./Medication_Batch";
import type { Medication_Ingredient } from "./Medication_Ingredient";
import { Medication_IngredientSchemaInternal } from "./Medication_Ingredient";

/** This resource is primarily used for the identification and definition of a medication, including ingredients, for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface Medication extends DomainResource {
	/** Information that only applies to packages (not products). */
	batch?: Medication_Batch;
	/** A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems. */
	code?: CodeableConcept;
	/** A reference to a knowledge resource that provides more information about this medication. */
	definition?: Reference;
	/** Describes the form of the item.  Powder; tablets; capsule. */
	doseForm?: CodeableConcept;
	/** Business identifier for this medication. */
	identifier?: Array<Identifier>;
	/** Identifies a particular constituent of interest in the product. */
	ingredient?: Array<Medication_Ingredient>;
	/** The company or other legal entity that has authorization, from the appropriate drug regulatory authority,  to market a medicine in one or more jurisdictions.  Typically abbreviated MAH.Note:  The MAH may manufacture the product and may also contract the manufacturing of the product to one or more companies (organizations). */
	marketingAuthorizationHolder?: Reference;
	/** This is a Medication resource. */
	resourceType: "Medication";
	/** A code to indicate if the medication is in active use. */
	status?: "active" | "entered-in-error" | "inactive";
	/** Extensions for status */
	_status?: Element;
	/** When the specified product code does not infer a package size, this is the specific amount of drug in the product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.). */
	totalVolume?: Quantity;
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
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationSchemaInternal = DomainResourceSchemaInternal.extend({
	batch: z.lazy(getMedication_BatchSchema).optional(),
	code: z.lazy(getCodeableConceptSchema).optional(),
	definition: z.lazy(getReferenceSchema).optional(),
	doseForm: z.lazy(getCodeableConceptSchema).optional(),
	identifier: z.lazy(getIdentifierSchema).array().optional(),
	ingredient: z.lazy(getMedication_IngredientSchema).array().optional(),
	marketingAuthorizationHolder: z.lazy(getReferenceSchema).optional(),
	resourceType: z.literal("Medication"),
	status: z.enum(["active", "entered-in-error", "inactive"]).optional(),
	_status: z.lazy(getElementSchema).optional(),
	totalVolume: z.lazy(getQuantitySchema).optional(),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.definition,
			"definition",
			["http://hl7.org/fhir/StructureDefinition/MedicationKnowledge"],
			["MedicationKnowledge"],
			ctx,
		);
		validateReferenceTarget(
			record.marketingAuthorizationHolder,
			"marketingAuthorizationHolder",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export const MedicationSchema =
	MedicationSchemaInternal as z.ZodType<Medication>;
