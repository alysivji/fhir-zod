// Profile: http://hl7.org/fhir/StructureDefinition/Medication
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { DomainResource } from "../DomainResource";
import { DomainResourceSchemaInternal } from "../DomainResource";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { Medication_Ingredient } from "./Medication_Ingredient";
import { Medication_IngredientSchemaInternal } from "./Medication_Ingredient";
import type { Medication_Package } from "./Medication_Package";
import { Medication_PackageSchemaInternal } from "./Medication_Package";

/** Base StructureDefinition for Medication Resource */
export interface Medication extends DomainResource {
	/** A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems. */
	code?: CodeableConcept;
	/** Describes the form of the item.  Powder; tablets; capsule. */
	form?: CodeableConcept;
	/** Photo(s) or graphic representation(s) of the medication. */
	image?: Array<Attachment>;
	/** Identifies a particular constituent of interest in the product. */
	ingredient?: Array<Medication_Ingredient>;
	/** Set to true if the item is attributable to a specific manufacturer. */
	isBrand?: boolean;
	/** Extensions for isBrand */
	_isBrand?: Element;
	/** Set to true if the medication can be obtained without an order from a prescriber. */
	isOverTheCounter?: boolean;
	/** Extensions for isOverTheCounter */
	_isOverTheCounter?: Element;
	/** Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product. */
	manufacturer?: Reference;
	/** Information that only applies to packages (not products). */
	package?: Medication_Package;
	/** This is a Medication resource. */
	resourceType: "Medication";
	/** A code to indicate if the medication is in active use. */
	status?: "active" | "entered-in-error" | "inactive";
	/** Extensions for status */
	_status?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMedication_IngredientSchema = (): z.ZodType<Medication_Ingredient> =>
	Medication_IngredientSchemaInternal as z.ZodType<Medication_Ingredient>;
const getMedication_PackageSchema = (): z.ZodType<Medication_Package> =>
	Medication_PackageSchemaInternal as z.ZodType<Medication_Package>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationSchemaInternal = DomainResourceSchemaInternal.extend({
	code: z.lazy(getCodeableConceptSchema).optional(),
	form: z.lazy(getCodeableConceptSchema).optional(),
	image: z.lazy(getAttachmentSchema).array().optional(),
	ingredient: z.lazy(getMedication_IngredientSchema).array().optional(),
	isBrand: z.boolean().optional(),
	_isBrand: z.lazy(getElementSchema).optional(),
	isOverTheCounter: z.boolean().optional(),
	_isOverTheCounter: z.lazy(getElementSchema).optional(),
	manufacturer: z.lazy(getReferenceSchema).optional(),
	package: z.lazy(getMedication_PackageSchema).optional(),
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
