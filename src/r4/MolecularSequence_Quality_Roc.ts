// Profile: http://hl7.org/fhir/StructureDefinition/MolecularSequence
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:26:21.962Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Receiver Operator Characteristic (ROC) Curve  to give sensitivity/specificity tradeoff. */
export interface MolecularSequence_Quality_Roc extends BackboneElement {
	/** Calculated fScore if the GQ score threshold was set to "score" field value. */
	fMeasure?: Array<number>;
	/** Extensions for fMeasure */
	_fMeasure?: Array<Element>;
	/** The number of false negatives if the GQ score threshold was set to "score" field value. */
	numFN?: Array<number>;
	/** Extensions for numFN */
	_numFN?: Array<Element>;
	/** The number of false positives if the GQ score threshold was set to "score" field value. */
	numFP?: Array<number>;
	/** Extensions for numFP */
	_numFP?: Array<Element>;
	/** The number of true positives if the GQ score threshold was set to "score" field value. */
	numTP?: Array<number>;
	/** Extensions for numTP */
	_numTP?: Array<Element>;
	/** Calculated precision if the GQ score threshold was set to "score" field value. */
	precision?: Array<number>;
	/** Extensions for precision */
	_precision?: Array<Element>;
	/** Invidual data point representing the GQ (genotype quality) score threshold. */
	score?: Array<number>;
	/** Extensions for score */
	_score?: Array<Element>;
	/** Calculated sensitivity if the GQ score threshold was set to "score" field value. */
	sensitivity?: Array<number>;
	/** Extensions for sensitivity */
	_sensitivity?: Array<Element>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const MolecularSequence_Quality_RocSchemaInternal =
	BackboneElementSchemaInternal.extend({
		fMeasure: z.number().array().optional(),
		_fMeasure: z.lazy(getElementSchema).array().optional(),
		numFN: z.number().int().array().optional(),
		_numFN: z.lazy(getElementSchema).array().optional(),
		numFP: z.number().int().array().optional(),
		_numFP: z.lazy(getElementSchema).array().optional(),
		numTP: z.number().int().array().optional(),
		_numTP: z.lazy(getElementSchema).array().optional(),
		precision: z.number().array().optional(),
		_precision: z.lazy(getElementSchema).array().optional(),
		score: z.number().int().array().optional(),
		_score: z.lazy(getElementSchema).array().optional(),
		sensitivity: z.number().array().optional(),
		_sensitivity: z.lazy(getElementSchema).array().optional(),
	}).strict();

export const MolecularSequence_Quality_RocSchema =
	MolecularSequence_Quality_RocSchemaInternal as z.ZodType<MolecularSequence_Quality_Roc>;
