// Profile: http://hl7.org/fhir/StructureDefinition/ResearchStudy
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Target or actual group of participants enrolled in study. */
export interface ResearchStudy_Recruitment extends BackboneElement {
	/** Group of participants who were enrolled in study. */
	actualGroup?: Reference;
	/** Actual total number of participants enrolled in study. */
	actualNumber?: number;
	/** Extensions for actualNumber */
	_actualNumber?: Element;
	/** Inclusion and exclusion criteria. */
	eligibility?: Reference;
	/** Estimated total number of participants to be enrolled. */
	targetNumber?: number;
	/** Extensions for targetNumber */
	_targetNumber?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ResearchStudy_RecruitmentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		actualGroup: z.lazy(getReferenceSchema).optional(),
		actualNumber: z.number().int().nonnegative().optional(),
		_actualNumber: z.lazy(getElementSchema).optional(),
		eligibility: z.lazy(getReferenceSchema).optional(),
		targetNumber: z.number().int().nonnegative().optional(),
		_targetNumber: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.actualGroup,
				"actualGroup",
				["http://hl7.org/fhir/StructureDefinition/Group"],
				["Group"],
				ctx,
			);
			validateReferenceTarget(
				record.eligibility,
				"eligibility",
				[
					"http://hl7.org/fhir/StructureDefinition/EvidenceVariable",
					"http://hl7.org/fhir/StructureDefinition/Group",
				],
				["EvidenceVariable", "Group"],
				ctx,
			);
		});

export const ResearchStudy_RecruitmentSchema =
	ResearchStudy_RecruitmentSchemaInternal as z.ZodType<ResearchStudy_Recruitment>;
