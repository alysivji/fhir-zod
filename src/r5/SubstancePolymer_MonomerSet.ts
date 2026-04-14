// Profile: http://hl7.org/fhir/StructureDefinition/SubstancePolymer
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { SubstancePolymer_MonomerSet_StartingMaterial } from "./SubstancePolymer_MonomerSet_StartingMaterial";
import { SubstancePolymer_MonomerSet_StartingMaterialSchemaInternal } from "./SubstancePolymer_MonomerSet_StartingMaterial";

/** Todo. */
export interface SubstancePolymer_MonomerSet extends BackboneElement {
	/** Captures the type of ratio to the entire polymer, e.g. Monomer/Polymer ratio, SRU/Polymer Ratio. */
	ratioType?: CodeableConcept;
	/** The starting materials - monomer(s) used in the synthesis of the polymer. */
	startingMaterial?: Array<SubstancePolymer_MonomerSet_StartingMaterial>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getSubstancePolymer_MonomerSet_StartingMaterialSchema =
	(): z.ZodType<SubstancePolymer_MonomerSet_StartingMaterial> =>
		SubstancePolymer_MonomerSet_StartingMaterialSchemaInternal as z.ZodType<SubstancePolymer_MonomerSet_StartingMaterial>;

/** @internal */
export const SubstancePolymer_MonomerSetSchemaInternal =
	BackboneElementSchemaInternal.extend({
		ratioType: z.lazy(getCodeableConceptSchema).optional(),
		startingMaterial: z
			.lazy(getSubstancePolymer_MonomerSet_StartingMaterialSchema)
			.array()
			.optional(),
	}).strict();

export const SubstancePolymer_MonomerSetSchema =
	SubstancePolymer_MonomerSetSchemaInternal as z.ZodType<SubstancePolymer_MonomerSet>;
