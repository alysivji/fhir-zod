// Profile: http://hl7.org/fhir/StructureDefinition/EffectEvidenceSynthesis
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A description of the results for each exposure considered in the effect estimate. */
export interface EffectEvidenceSynthesis_ResultsByExposure
	extends BackboneElement {
	/** Human-readable summary of results by exposure state. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Whether these results are for the exposure state or alternative exposure state. */
	exposureState?: "exposure" | "exposure-alternative";
	/** Extensions for exposureState */
	_exposureState?: Element;
	/** Reference to a RiskEvidenceSynthesis resource. */
	riskEvidenceSynthesis: Reference;
	/** Used to define variant exposure states such as low-risk state. */
	variantState?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EffectEvidenceSynthesis_ResultsByExposureSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		exposureState: z.enum(["exposure", "exposure-alternative"]).optional(),
		_exposureState: z.lazy(getElementSchema).optional(),
		riskEvidenceSynthesis: z.lazy(getReferenceSchema),
		variantState: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.riskEvidenceSynthesis,
				"riskEvidenceSynthesis",
				["http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis"],
				["RiskEvidenceSynthesis"],
				ctx,
			);
		});

export const EffectEvidenceSynthesis_ResultsByExposureSchema =
	EffectEvidenceSynthesis_ResultsByExposureSchemaInternal as z.ZodType<EffectEvidenceSynthesis_ResultsByExposure>;
