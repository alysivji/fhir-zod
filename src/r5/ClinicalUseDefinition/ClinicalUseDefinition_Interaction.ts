// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { ClinicalUseDefinition_Interaction_Interactant } from "./ClinicalUseDefinition_Interaction_Interactant";
import { ClinicalUseDefinition_Interaction_InteractantSchemaInternal } from "./ClinicalUseDefinition_Interaction_Interactant";

/** Specifics for when this is an interaction. */
export interface ClinicalUseDefinition_Interaction extends BackboneElement {
	/** The effect of the interaction, for example "reduced gastric absorption of primary medication". */
	effect?: CodeableReference;
	/** The incidence of the interaction, e.g. theoretical, observed. */
	incidence?: CodeableConcept;
	/** The specific medication, product, food, substance etc. or laboratory test that interacts. */
	interactant?: Array<ClinicalUseDefinition_Interaction_Interactant>;
	/** Actions for managing the interaction. */
	management?: Array<CodeableConcept>;
	/** The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction. */
	type?: CodeableConcept;
}

const getClinicalUseDefinition_Interaction_InteractantSchema =
	(): z.ZodType<ClinicalUseDefinition_Interaction_Interactant> =>
		ClinicalUseDefinition_Interaction_InteractantSchemaInternal as z.ZodType<ClinicalUseDefinition_Interaction_Interactant>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const ClinicalUseDefinition_InteractionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		effect: z.lazy(getCodeableReferenceSchema).optional(),
		incidence: z.lazy(getCodeableConceptSchema).optional(),
		interactant: z
			.lazy(getClinicalUseDefinition_Interaction_InteractantSchema)
			.array()
			.optional(),
		management: z.lazy(getCodeableConceptSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const ClinicalUseDefinition_InteractionSchema =
	ClinicalUseDefinition_InteractionSchemaInternal as z.ZodType<ClinicalUseDefinition_Interaction>;
