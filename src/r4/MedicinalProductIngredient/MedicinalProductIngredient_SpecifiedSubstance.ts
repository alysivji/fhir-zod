// Profile: http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { MedicinalProductIngredient_SpecifiedSubstance_Strength } from "./MedicinalProductIngredient_SpecifiedSubstance_Strength";
import { MedicinalProductIngredient_SpecifiedSubstance_StrengthSchemaInternal } from "./MedicinalProductIngredient_SpecifiedSubstance_Strength";

/** A specified substance that comprises this ingredient. */
export interface MedicinalProductIngredient_SpecifiedSubstance
	extends BackboneElement {
	/** The specified substance. */
	code: CodeableConcept;
	/** Confidentiality level of the specified substance as the ingredient. */
	confidentiality?: CodeableConcept;
	/** The group of specified substance, e.g. group 1 to 4. */
	group: CodeableConcept;
	/** Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product. */
	strength?: Array<MedicinalProductIngredient_SpecifiedSubstance_Strength>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMedicinalProductIngredient_SpecifiedSubstance_StrengthSchema =
	(): z.ZodType<MedicinalProductIngredient_SpecifiedSubstance_Strength> =>
		MedicinalProductIngredient_SpecifiedSubstance_StrengthSchemaInternal as z.ZodType<MedicinalProductIngredient_SpecifiedSubstance_Strength>;

/** @internal */
export const MedicinalProductIngredient_SpecifiedSubstanceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		confidentiality: z.lazy(getCodeableConceptSchema).optional(),
		group: z.lazy(getCodeableConceptSchema),
		strength: z
			.lazy(getMedicinalProductIngredient_SpecifiedSubstance_StrengthSchema)
			.array()
			.optional(),
	}).strict();

export const MedicinalProductIngredient_SpecifiedSubstanceSchema =
	MedicinalProductIngredient_SpecifiedSubstanceSchemaInternal as z.ZodType<MedicinalProductIngredient_SpecifiedSubstance>;
