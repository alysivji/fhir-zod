// Profile: http://hl7.org/fhir/StructureDefinition/Evidence
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Evidence_Statistic_AttributeEstimate } from "./Evidence_Statistic_AttributeEstimate";
import { Evidence_Statistic_AttributeEstimateSchemaInternal } from "./Evidence_Statistic_AttributeEstimate";
import type { Evidence_Statistic_ModelCharacteristic } from "./Evidence_Statistic_ModelCharacteristic";
import { Evidence_Statistic_ModelCharacteristicSchemaInternal } from "./Evidence_Statistic_ModelCharacteristic";
import type { Evidence_Statistic_SampleSize } from "./Evidence_Statistic_SampleSize";
import { Evidence_Statistic_SampleSizeSchemaInternal } from "./Evidence_Statistic_SampleSize";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Values and parameters for a single statistic. */
export interface Evidence_Statistic extends BackboneElement {
	/** A statistical attribute of the statistic such as a measure of heterogeneity. */
	attributeEstimate?: Array<Evidence_Statistic_AttributeEstimate>;
	/** When the measured variable is handled categorically, the category element is used to define which category the statistic is reporting. */
	category?: CodeableConcept;
	/** A description of the content value of the statistic. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A component of the method to generate the statistic. */
	modelCharacteristic?: Array<Evidence_Statistic_ModelCharacteristic>;
	/** Footnotes and/or explanatory notes. */
	note?: Array<Annotation>;
	/** The number of participants affected where the unit of analysis is the same as sampleSize.knownDataCount and sampleSize.numberOfParticipants. */
	numberAffected?: number;
	/** Extensions for numberAffected */
	_numberAffected?: Element;
	/** The number of events associated with the statistic, where the unit of analysis is different from numberAffected, sampleSize.knownDataCount and sampleSize.numberOfParticipants. */
	numberOfEvents?: number;
	/** Extensions for numberOfEvents */
	_numberOfEvents?: Element;
	/** Statistic value. */
	quantity?: Quantity;
	/** Number of samples in the statistic. */
	sampleSize?: Evidence_Statistic_SampleSize;
	/** Type of statistic, e.g., relative risk. */
	statisticType?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getEvidence_Statistic_AttributeEstimateSchema =
	(): z.ZodType<Evidence_Statistic_AttributeEstimate> =>
		Evidence_Statistic_AttributeEstimateSchemaInternal as z.ZodType<Evidence_Statistic_AttributeEstimate>;
const getEvidence_Statistic_ModelCharacteristicSchema =
	(): z.ZodType<Evidence_Statistic_ModelCharacteristic> =>
		Evidence_Statistic_ModelCharacteristicSchemaInternal as z.ZodType<Evidence_Statistic_ModelCharacteristic>;
const getEvidence_Statistic_SampleSizeSchema =
	(): z.ZodType<Evidence_Statistic_SampleSize> =>
		Evidence_Statistic_SampleSizeSchemaInternal as z.ZodType<Evidence_Statistic_SampleSize>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const Evidence_StatisticSchemaInternal =
	BackboneElementSchemaInternal.extend({
		attributeEstimate: z
			.lazy(getEvidence_Statistic_AttributeEstimateSchema)
			.array()
			.optional(),
		category: z.lazy(getCodeableConceptSchema).optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		modelCharacteristic: z
			.lazy(getEvidence_Statistic_ModelCharacteristicSchema)
			.array()
			.optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		numberAffected: z.number().int().nonnegative().optional(),
		_numberAffected: z.lazy(getElementSchema).optional(),
		numberOfEvents: z.number().int().nonnegative().optional(),
		_numberOfEvents: z.lazy(getElementSchema).optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		sampleSize: z.lazy(getEvidence_Statistic_SampleSizeSchema).optional(),
		statisticType: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const Evidence_StatisticSchema =
	Evidence_StatisticSchemaInternal as z.ZodType<Evidence_Statistic>;
