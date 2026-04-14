// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** 4.9.13.8.1 Hybrid species maternal organism ID (Optional). */
export interface SubstanceSourceMaterial_Organism_Hybrid
	extends BackboneElement {
	/** The hybrid type of an organism shall be specified. */
	hybridType?: CodeableConcept;
	/** The identifier of the maternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal. */
	maternalOrganismId?: string;
	/** Extensions for maternalOrganismId */
	_maternalOrganismId?: Element;
	/** The name of the maternal species constituting the hybrid organism shall be specified. For plants, the parents aren’t always known, and it is unlikely that it will be known which is maternal and which is paternal. */
	maternalOrganismName?: string;
	/** Extensions for maternalOrganismName */
	_maternalOrganismName?: Element;
	/** The identifier of the paternal species constituting the hybrid organism shall be specified based on a controlled vocabulary. */
	paternalOrganismId?: string;
	/** Extensions for paternalOrganismId */
	_paternalOrganismId?: Element;
	/** The name of the paternal species constituting the hybrid organism shall be specified. */
	paternalOrganismName?: string;
	/** Extensions for paternalOrganismName */
	_paternalOrganismName?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const SubstanceSourceMaterial_Organism_HybridSchemaInternal =
	BackboneElementSchemaInternal.extend({
		hybridType: z.lazy(getCodeableConceptSchema).optional(),
		maternalOrganismId: fhirString().optional(),
		_maternalOrganismId: z.lazy(getElementSchema).optional(),
		maternalOrganismName: fhirString().optional(),
		_maternalOrganismName: z.lazy(getElementSchema).optional(),
		paternalOrganismId: fhirString().optional(),
		_paternalOrganismId: z.lazy(getElementSchema).optional(),
		paternalOrganismName: fhirString().optional(),
		_paternalOrganismName: z.lazy(getElementSchema).optional(),
	}).strict();

export const SubstanceSourceMaterial_Organism_HybridSchema =
	SubstanceSourceMaterial_Organism_HybridSchemaInternal as z.ZodType<SubstanceSourceMaterial_Organism_Hybrid>;
