// Profile: http://hl7.org/fhir/StructureDefinition/Measure
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
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";

/** The supplemental data criteria for the measure report, specified as either the name of a valid CQL expression within a referenced library, or a valid FHIR Resource Path. */
export interface Measure_SupplementalData extends BackboneElement {
	/** Indicates a meaning for the supplemental data. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing supplemental data to be correlated across measures. */
	code?: CodeableConcept;
	/** The criteria for the supplemental data. This is typically the name of a valid expression defined within a referenced library, but it may also be a path to a specific data element. The criteria defines the data to be returned for this element. */
	criteria: Expression;
	/** The human readable description of this supplemental data. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** An indicator of the intended usage for the supplemental data element. Supplemental data indicates the data is additional information requested to augment the measure information. Risk adjustment factor indicates the data is additional information used to calculate risk adjustment factors when applying a risk model to the measure calculation. */
	usage?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;

/** @internal */
export const Measure_SupplementalDataSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		criteria: z.lazy(getExpressionSchema),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		usage: z.lazy(getCodeableConceptSchema).array().optional(),
	}).strict();

export const Measure_SupplementalDataSchema =
	Measure_SupplementalDataSchemaInternal as z.ZodType<Measure_SupplementalData>;
