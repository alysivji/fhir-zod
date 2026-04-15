// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";

/** A population criteria for the measure. */
export interface Measure_Group_Population extends BackboneElement {
	/** The type of population criteria. */
	code?: CodeableConcept;
	/** An expression that specifies the criteria for the population, typically the name of an expression in a library. */
	criteria: Expression;
	/** The human readable description of this population criteria. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;

/** @internal */
export const Measure_Group_PopulationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		criteria: z.lazy(getExpressionSchema),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
	}).strict();

export const Measure_Group_PopulationSchema =
	Measure_Group_PopulationSchemaInternal as z.ZodType<Measure_Group_Population>;
