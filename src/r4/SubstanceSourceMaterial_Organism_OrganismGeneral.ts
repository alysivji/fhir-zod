// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** 4.9.13.7.1 Kingdom (Conditional). */
export interface SubstanceSourceMaterial_Organism_OrganismGeneral
	extends BackboneElement {
	/** The class of an organism shall be specified. */
	class?: CodeableConcept;
	/** The kingdom of an organism shall be specified. */
	kingdom?: CodeableConcept;
	/** The order of an organism shall be specified,. */
	order?: CodeableConcept;
	/** The phylum of an organism shall be specified. */
	phylum?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const SubstanceSourceMaterial_Organism_OrganismGeneralSchemaInternal =
	BackboneElementSchemaInternal.extend({
		class: z.lazy(getCodeableConceptSchema).optional(),
		kingdom: z.lazy(getCodeableConceptSchema).optional(),
		order: z.lazy(getCodeableConceptSchema).optional(),
		phylum: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstanceSourceMaterial_Organism_OrganismGeneralSchema =
	SubstanceSourceMaterial_Organism_OrganismGeneralSchemaInternal as z.ZodType<SubstanceSourceMaterial_Organism_OrganismGeneral>;
