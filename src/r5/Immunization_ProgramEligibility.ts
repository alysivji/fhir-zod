// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";

/** Indicates a patient's eligibility for a funding program. */
export interface Immunization_ProgramEligibility extends BackboneElement {
	/** Indicates which program the patient had their eligility evaluated for. */
	program: CodeableConcept;
	/** Indicates the patient's eligility status for for a specific payment program. */
	programStatus: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;

/** @internal */
export const Immunization_ProgramEligibilitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		program: z.lazy(getCodeableConceptSchema),
		programStatus: z.lazy(getCodeableConceptSchema),
	}).strict();

export const Immunization_ProgramEligibilitySchema =
	Immunization_ProgramEligibilitySchemaInternal as z.ZodType<Immunization_ProgramEligibility>;
