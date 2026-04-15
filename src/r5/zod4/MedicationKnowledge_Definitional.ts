// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { MedicationKnowledge_Definitional_DrugCharacteristic } from "./MedicationKnowledge_Definitional_DrugCharacteristic";
import { MedicationKnowledge_Definitional_DrugCharacteristicSchemaInternal } from "./MedicationKnowledge_Definitional_DrugCharacteristic";
import type { MedicationKnowledge_Definitional_Ingredient } from "./MedicationKnowledge_Definitional_Ingredient";
import { MedicationKnowledge_Definitional_IngredientSchemaInternal } from "./MedicationKnowledge_Definitional_Ingredient";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Along with the link to a Medicinal Product Definition resource, this information provides common definitional elements that are needed to understand the specific medication that is being described. */
export interface MedicationKnowledge_Definitional extends BackboneElement {
	/** Associated definitions for this medication. */
	definition?: Array<Reference>;
	/** Describes the form of the item.  Powder; tablets; capsule. */
	doseForm?: CodeableConcept;
	/** Specifies descriptive properties of the medicine, such as color, shape, imprints, etc. */
	drugCharacteristic?: Array<MedicationKnowledge_Definitional_DrugCharacteristic>;
	/** Identifies a particular constituent of interest in the product. */
	ingredient?: Array<MedicationKnowledge_Definitional_Ingredient>;
	/** The intended or approved route of administration. */
	intendedRoute?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMedicationKnowledge_Definitional_DrugCharacteristicSchema =
	(): z.ZodType<MedicationKnowledge_Definitional_DrugCharacteristic> =>
		MedicationKnowledge_Definitional_DrugCharacteristicSchemaInternal as z.ZodType<MedicationKnowledge_Definitional_DrugCharacteristic>;
const getMedicationKnowledge_Definitional_IngredientSchema =
	(): z.ZodType<MedicationKnowledge_Definitional_Ingredient> =>
		MedicationKnowledge_Definitional_IngredientSchemaInternal as z.ZodType<MedicationKnowledge_Definitional_Ingredient>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const MedicationKnowledge_DefinitionalSchemaInternal =
	BackboneElementSchemaInternal.extend({
		definition: z.lazy(getReferenceSchema).array().optional(),
		doseForm: z.lazy(getCodeableConceptSchema).optional(),
		drugCharacteristic: z
			.lazy(getMedicationKnowledge_Definitional_DrugCharacteristicSchema)
			.array()
			.optional(),
		ingredient: z
			.lazy(getMedicationKnowledge_Definitional_IngredientSchema)
			.array()
			.optional(),
		intendedRoute: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.definition,
				"definition",
				["http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition"],
				["MedicinalProductDefinition"],
				ctx,
			);
		});

export const MedicationKnowledge_DefinitionalSchema =
	MedicationKnowledge_DefinitionalSchemaInternal as z.ZodType<MedicationKnowledge_Definitional>;
