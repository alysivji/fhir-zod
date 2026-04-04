// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Specifies if changes are allowed when dispensing a medication from a regulatory perspective. */
export interface MedicationKnowledge_Regulatory_Substitution
	extends BackboneElement {
	/** Specifies if regulation allows for changes in the medication when dispensing. */
	allowed: boolean;
	/** Extensions for allowed */
	_allowed?: Element;
	/** Specifies the type of substitution allowed. */
	type: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MedicationKnowledge_Regulatory_SubstitutionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		allowed: z.boolean(),
		_allowed: z.lazy(getElementSchema).optional(),
		type: z.lazy(getCodeableConceptSchema),
	}).strict();

export const MedicationKnowledge_Regulatory_SubstitutionSchema =
	MedicationKnowledge_Regulatory_SubstitutionSchemaInternal as z.ZodType<MedicationKnowledge_Regulatory_Substitution>;
