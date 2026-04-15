// Profile: http://hl7.org/fhir/StructureDefinition/MedicationRequest
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done. */
export interface MedicationRequest_Substitution extends BackboneElement {
	/** True if the prescriber allows a different drug to be dispensed from what was prescribed. */
	allowedBoolean?: boolean;
	/** Extensions for allowedBoolean */
	_allowedBoolean?: Element;
	/** True if the prescriber allows a different drug to be dispensed from what was prescribed. */
	allowedCodeableConcept?: CodeableConcept;
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
		allowedBoolean: z.boolean().optional(),
		_allowedBoolean: z.lazy(getElementSchema).optional(),
		allowedCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		reason: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const allowed_x_Present = [
				"allowedBoolean",
				"allowedCodeableConcept",
			].filter((field) => record[field] !== undefined);
			if (allowed_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of allowedBoolean, allowedCodeableConcept must be present for allowed[x]",
					path: ["allowedBoolean"],
				});
			}
			if (allowed_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of allowedBoolean, allowedCodeableConcept may be present for allowed[x]",
					path: [allowed_x_Present[0]],
				});
			}
		});

export const MedicationRequest_SubstitutionSchema =
	MedicationRequest_SubstitutionSchemaInternal as z.ZodType<MedicationRequest_Substitution>;
