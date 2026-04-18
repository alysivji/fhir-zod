// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** An "outcome measure", "endpoint", "effect measure" or "measure of effect" is a specific measurement or observation used to quantify the effect of experimental variables on the participants in a study, or for observational studies, to describe patterns of diseases or traits or associations with exposures, risk factors or treatment. */
export interface ResearchStudy_OutcomeMeasure extends BackboneElement {
	/** Description of the outcome. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Label for the outcome. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** Structured outcome definition. */
	reference?: Reference;
	/** The parameter or characteristic being assessed as one of the values by which the study is assessed. */
	type?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ResearchStudy_OutcomeMeasureSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		reference: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.reference,
				"reference",
				["http://hl7.org/fhir/StructureDefinition/EvidenceVariable"],
				["EvidenceVariable"],
				ctx,
			);
		});

export const ResearchStudy_OutcomeMeasureSchema =
	ResearchStudy_OutcomeMeasureSchemaInternal as z.ZodType<ResearchStudy_OutcomeMeasure>;
