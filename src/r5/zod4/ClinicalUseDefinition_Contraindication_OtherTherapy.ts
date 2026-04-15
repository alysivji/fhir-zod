// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";

/** Information about the use of the medicinal product in relation to other therapies described as part of the contraindication. */
export interface ClinicalUseDefinition_Contraindication_OtherTherapy
	extends BackboneElement {
	/** The type of relationship between the medicinal product indication or contraindication and another therapy. */
	relationshipType: CodeableConcept;
	/** Reference to a specific medication (active substance, medicinal product or class of products, biological, food etc.) as part of an indication or contraindication. */
	treatment: CodeableReference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;

/** @internal */
export const ClinicalUseDefinition_Contraindication_OtherTherapySchemaInternal =
	BackboneElementSchemaInternal.extend({
		relationshipType: z.lazy(getCodeableConceptSchema),
		treatment: z.lazy(getCodeableReferenceSchema),
	}).strict();

export const ClinicalUseDefinition_Contraindication_OtherTherapySchema =
	ClinicalUseDefinition_Contraindication_OtherTherapySchemaInternal as z.ZodType<ClinicalUseDefinition_Contraindication_OtherTherapy>;
