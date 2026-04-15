// Profile: http://hl7.org/fhir/StructureDefinition/ConditionDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Questionnaire for this condition. */
export interface ConditionDefinition_Questionnaire extends BackboneElement {
	/** Use of the questionnaire. */
	purpose: "diff-diagnosis" | "outcome" | "preadmit";
	/** Extensions for purpose */
	_purpose?: Element;
	/** Specific Questionnaire. */
	reference: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ConditionDefinition_QuestionnaireSchemaInternal =
	BackboneElementSchemaInternal.extend({
		purpose: z.enum(["diff-diagnosis", "outcome", "preadmit"]),
		_purpose: z.lazy(getElementSchema).optional(),
		reference: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.reference,
				"reference",
				["http://hl7.org/fhir/StructureDefinition/Questionnaire"],
				["Questionnaire"],
				ctx,
			);
		});

export const ConditionDefinition_QuestionnaireSchema =
	ConditionDefinition_QuestionnaireSchemaInternal as z.ZodType<ConditionDefinition_Questionnaire>;
