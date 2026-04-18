// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff. */
export interface MolecularSequence_Quality_Roc extends BackboneElement {
	/** Calculated fScore if the GQ score threshold was set to "score" field value. */
	fMeasure?: Array<number | null>;
	/** Extensions for fMeasure */
	_fMeasure?: Array<Element | null>;
	/** The number of false negatives if the GQ score threshold was set to "score" field value. */
	numFN?: Array<number | null>;
	/** Extensions for numFN */
	_numFN?: Array<Element | null>;
	/** The number of false positives if the GQ score threshold was set to "score" field value. */
	numFP?: Array<number | null>;
	/** Extensions for numFP */
	_numFP?: Array<Element | null>;
	/** The number of true positives if the GQ score threshold was set to "score" field value. */
	numTP?: Array<number | null>;
	/** Extensions for numTP */
	_numTP?: Array<Element | null>;
	/** Calculated precision if the GQ score threshold was set to "score" field value. */
	precision?: Array<number | null>;
	/** Extensions for precision */
	_precision?: Array<Element | null>;
	/** Invidual data point representing the GQ (genotype quality) score threshold. */
	score?: Array<number | null>;
	/** Extensions for score */
	_score?: Array<Element | null>;
	/** Calculated sensitivity if the GQ score threshold was set to "score" field value. */
	sensitivity?: Array<number | null>;
	/** Extensions for sensitivity */
	_sensitivity?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MolecularSequence_Quality_RocSchemaInternal =
	BackboneElementSchemaInternal.extend({
		fMeasure: z.number().nullable().array().optional(),
		_fMeasure: z.lazy(getElementSchema).nullable().array().optional(),
		numFN: z.number().int().nullable().array().optional(),
		_numFN: z.lazy(getElementSchema).nullable().array().optional(),
		numFP: z.number().int().nullable().array().optional(),
		_numFP: z.lazy(getElementSchema).nullable().array().optional(),
		numTP: z.number().int().nullable().array().optional(),
		_numTP: z.lazy(getElementSchema).nullable().array().optional(),
		precision: z.number().nullable().array().optional(),
		_precision: z.lazy(getElementSchema).nullable().array().optional(),
		score: z.number().int().nullable().array().optional(),
		_score: z.lazy(getElementSchema).nullable().array().optional(),
		sensitivity: z.number().nullable().array().optional(),
		_sensitivity: z.lazy(getElementSchema).nullable().array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.fMeasure,
				record._fMeasure,
				"fMeasure",
				"_fMeasure",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.numFN,
				record._numFN,
				"numFN",
				"_numFN",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.numFP,
				record._numFP,
				"numFP",
				"_numFP",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.numTP,
				record._numTP,
				"numTP",
				"_numTP",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.precision,
				record._precision,
				"precision",
				"_precision",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.score,
				record._score,
				"score",
				"_score",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.sensitivity,
				record._sensitivity,
				"sensitivity",
				"_sensitivity",
				ctx,
			);
		});

export const MolecularSequence_Quality_RocSchema =
	MolecularSequence_Quality_RocSchemaInternal as z.ZodType<MolecularSequence_Quality_Roc>;
