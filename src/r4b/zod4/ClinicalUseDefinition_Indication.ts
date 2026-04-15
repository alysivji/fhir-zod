// Profile: http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Specifics for when this is an indication. */
export interface ClinicalUseDefinition_Indication extends BackboneElement {
	/** A comorbidity (concurrent condition) or coinfection as part of the indication. */
	comorbidity?: Array<CodeableReference>;
	/** The status of the disease or symptom for the indication, for example "chronic" or "metastatic". */
	diseaseStatus?: CodeableReference;
	/** The situation that is being documented as an indicaton for this item. */
	diseaseSymptomProcedure?: CodeableReference;
	/** Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months). */
	durationRange?: Range;
	/** Timing or duration information, that may be associated with use with the indicated condition e.g. Adult patients suffering from myocardial infarction (from a few days until less than 35 days), ischaemic stroke (from 7 days until less than 6 months). */
	durationString?: string;
	/** Extensions for durationString */
	_durationString?: Element;
	/** The intended effect, aim or strategy to be achieved. */
	intendedEffect?: CodeableReference;
	/** Information about the use of the medicinal product in relation to other therapies described as part of the indication. */
	otherTherapy?: Array<unknown>;
	/** An unwanted side effect or negative outcome that may happen if you use the drug (or other subject of this resource) for this indication. */
	undesirableEffect?: Array<Reference>;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ClinicalUseDefinition_IndicationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		comorbidity: z.lazy(getCodeableReferenceSchema).array().optional(),
		diseaseStatus: z.lazy(getCodeableReferenceSchema).optional(),
		diseaseSymptomProcedure: z.lazy(getCodeableReferenceSchema).optional(),
		durationRange: z.lazy(getRangeSchema).optional(),
		durationString: fhirString().optional(),
		_durationString: z.lazy(getElementSchema).optional(),
		intendedEffect: z.lazy(getCodeableReferenceSchema).optional(),
		otherTherapy: z.unknown().array().optional(),
		undesirableEffect: z.lazy(getReferenceSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const duration_x_Present = ["durationRange", "durationString"].filter(
				(field) => record[field] !== undefined,
			);
			if (duration_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of durationRange, durationString may be present for duration[x]",
					path: [duration_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.undesirableEffect,
				"undesirableEffect",
				["http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition"],
				["ClinicalUseDefinition"],
				ctx,
			);
		});

export const ClinicalUseDefinition_IndicationSchema =
	ClinicalUseDefinition_IndicationSchemaInternal as z.ZodType<ClinicalUseDefinition_Indication>;
