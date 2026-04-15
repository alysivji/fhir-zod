// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { SubstanceSourceMaterial_Organism_Author } from "./SubstanceSourceMaterial_Organism_Author";
import { SubstanceSourceMaterial_Organism_AuthorSchemaInternal } from "./SubstanceSourceMaterial_Organism_Author";
import type { SubstanceSourceMaterial_Organism_Hybrid } from "./SubstanceSourceMaterial_Organism_Hybrid";
import { SubstanceSourceMaterial_Organism_HybridSchemaInternal } from "./SubstanceSourceMaterial_Organism_Hybrid";
import type { SubstanceSourceMaterial_Organism_OrganismGeneral } from "./SubstanceSourceMaterial_Organism_OrganismGeneral";
import { SubstanceSourceMaterial_Organism_OrganismGeneralSchemaInternal } from "./SubstanceSourceMaterial_Organism_OrganismGeneral";

/** This subclause describes the organism which the substance is derived from. For vaccines, the parent organism shall be specified based on these subclause elements. As an example, full taxonomy will be described for the Substance Name: ., Leaf. */
export interface SubstanceSourceMaterial_Organism extends BackboneElement {
	/** 4.9.13.6.1 Author type (Conditional). */
	author?: Array<SubstanceSourceMaterial_Organism_Author>;
	/** The family of an organism shall be specified. */
	family?: CodeableConcept;
	/** The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies. */
	genus?: CodeableConcept;
	/** 4.9.13.8.1 Hybrid species maternal organism ID (Optional). */
	hybrid?: SubstanceSourceMaterial_Organism_Hybrid;
	/** The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention. */
	intraspecificDescription?: string;
	/** Extensions for intraspecificDescription */
	_intraspecificDescription?: Element;
	/** The Intraspecific type of an organism shall be specified. */
	intraspecificType?: CodeableConcept;
	/** 4.9.13.7.1 Kingdom (Conditional). */
	organismGeneral?: SubstanceSourceMaterial_Organism_OrganismGeneral;
	/** The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies. */
	species?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getSubstanceSourceMaterial_Organism_AuthorSchema =
	(): z.ZodType<SubstanceSourceMaterial_Organism_Author> =>
		SubstanceSourceMaterial_Organism_AuthorSchemaInternal as z.ZodType<SubstanceSourceMaterial_Organism_Author>;
const getSubstanceSourceMaterial_Organism_HybridSchema =
	(): z.ZodType<SubstanceSourceMaterial_Organism_Hybrid> =>
		SubstanceSourceMaterial_Organism_HybridSchemaInternal as z.ZodType<SubstanceSourceMaterial_Organism_Hybrid>;
const getSubstanceSourceMaterial_Organism_OrganismGeneralSchema =
	(): z.ZodType<SubstanceSourceMaterial_Organism_OrganismGeneral> =>
		SubstanceSourceMaterial_Organism_OrganismGeneralSchemaInternal as z.ZodType<SubstanceSourceMaterial_Organism_OrganismGeneral>;

/** @internal */
export const SubstanceSourceMaterial_OrganismSchemaInternal =
	BackboneElementSchemaInternal.extend({
		author: z
			.lazy(getSubstanceSourceMaterial_Organism_AuthorSchema)
			.array()
			.optional(),
		family: z.lazy(getCodeableConceptSchema).optional(),
		genus: z.lazy(getCodeableConceptSchema).optional(),
		hybrid: z.lazy(getSubstanceSourceMaterial_Organism_HybridSchema).optional(),
		intraspecificDescription: fhirString().optional(),
		_intraspecificDescription: z.lazy(getElementSchema).optional(),
		intraspecificType: z.lazy(getCodeableConceptSchema).optional(),
		organismGeneral: z
			.lazy(getSubstanceSourceMaterial_Organism_OrganismGeneralSchema)
			.optional(),
		species: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const SubstanceSourceMaterial_OrganismSchema =
	SubstanceSourceMaterial_OrganismSchemaInternal as z.ZodType<SubstanceSourceMaterial_Organism>;
