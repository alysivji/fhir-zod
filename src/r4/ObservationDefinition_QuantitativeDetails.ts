// Profile: http://hl7.org/fhir/StructureDefinition/ObservationDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:23:25.793Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Characteristics for quantitative results of this observation. */
export interface ObservationDefinition_QuantitativeDetails
	extends BackboneElement {
	/** Factor for converting value expressed with SI unit to value expressed with customary unit. */
	conversionFactor?: number;
	/** Extensions for conversionFactor */
	_conversionFactor?: Element;
	/** Customary unit used to report quantitative results of observations conforming to this ObservationDefinition. */
	customaryUnit?: CodeableConcept;
	/** Number of digits after decimal separator when the results of such observations are of type Quantity. */
	decimalPrecision?: number;
	/** Extensions for decimalPrecision */
	_decimalPrecision?: Element;
	/** SI unit used to report quantitative results of observations conforming to this ObservationDefinition. */
	unit?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ObservationDefinition_QuantitativeDetailsSchemaInternal =
	BackboneElementSchemaInternal.extend({
		conversionFactor: z.number().optional(),
		_conversionFactor: z.lazy(getElementSchema).optional(),
		customaryUnit: z.lazy(getCodeableConceptSchema).optional(),
		decimalPrecision: z.number().int().optional(),
		_decimalPrecision: z.lazy(getElementSchema).optional(),
		unit: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const ObservationDefinition_QuantitativeDetailsSchema =
	ObservationDefinition_QuantitativeDetailsSchemaInternal as z.ZodType<ObservationDefinition_QuantitativeDetails>;
