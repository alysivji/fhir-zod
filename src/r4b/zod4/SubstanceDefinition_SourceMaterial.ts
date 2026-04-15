// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

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
