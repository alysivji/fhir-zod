// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";

/** Material or taxonomic/anatomical source for the substance. */
export interface SubstanceDefinition_SourceMaterial extends BackboneElement {
	/** The country or countries where the material is harvested. */
	countryOfOrigin?: Array<CodeableConcept>;
	/** The genus of an organism, typically referring to the Latin epithet of the genus element of the plant/animal scientific name. */
	genus?: CodeableConcept;
	/** An anatomical origin of the source material within an organism. */
	part?: CodeableConcept;
	/** The species of an organism, typically referring to the Latin epithet of the species of the plant/animal. */
	species?: CodeableConcept;
	/** A classification that provides the origin of the raw material. Example: cat hair would be an Animal source type. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const SubstanceDefinition_SourceMaterialSchemaInternal =
	BackboneElementSchemaInternal.extend({
		countryOfOrigin: z.lazy(getCodeableConceptSchema).array().optional(),
		genus: z.lazy(getCodeableConceptSchema).optional(),
		part: z.lazy(getCodeableConceptSchema).optional(),
		species: z.lazy(getCodeableConceptSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstanceDefinition_SourceMaterialSchema =
	SubstanceDefinition_SourceMaterialSchemaInternal as z.ZodType<SubstanceDefinition_SourceMaterial>;
