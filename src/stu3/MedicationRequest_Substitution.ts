// Profile: http://hl7.org/fhir/StructureDefinition/MedicationRequest
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Indicates whether or not substitution can or should be part of the dispense. In some cases substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done. */
export interface MedicationRequest_Substitution extends BackboneElement {
	/** True if the prescriber allows a different drug to be dispensed from what was prescribed. */
	allowed: boolean;
	/** Extensions for allowed */
	_allowed?: Element;
	/** Indicates the reason for the substitution, or why substitution must or must not be performed. */
	reason?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MedicationRequest_SubstitutionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		allowed: z.boolean(),
		_allowed: z.lazy(getElementSchema).optional(),
		reason: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const MedicationRequest_SubstitutionSchema =
	MedicationRequest_SubstitutionSchemaInternal as z.ZodType<MedicationRequest_Substitution>;
