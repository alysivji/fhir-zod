// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A population criteria for the measure. */
export interface Measure_Group_Population extends BackboneElement {
	/** Specifies which method should be used to aggregate measure observation values. For most scoring types, this is implied by scoring (e.g. a proportion measure counts members of the populations). For continuous variables, however, this information must be specified to ensure correct calculation. */
	aggregateMethod?: CodeableConcept;
	/** The type of population criteria. */
	code?: CodeableConcept;
	/** An expression that specifies the criteria for the population, typically the name of an expression in a library. */
	criteria?: Expression;
	/** The human readable description of this population criteria. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A Group resource that defines this population as a set of characteristics. */
	groupDefinition?: Reference;
	/** The id of a population element in this measure that provides the input for this population criteria. In most cases, the scoring structure of the measure implies specific relationships (e.g. the Numerator uses the Denominator as the source in a proportion scoring). In some cases, however, multiple possible choices exist and must be resolved explicitly. For example in a ratio measure with multiple initial populations, the denominator must specify which population should be used as the starting point. */
	inputPopulationId?: string;
	/** Extensions for inputPopulationId */
	_inputPopulationId?: Element;
	/** An identifier that is unique within the Measure allowing linkage to the equivalent population in a MeasureReport resource. */
	linkId?: string;
	/** Extensions for linkId */
	_linkId?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Measure_Group_PopulationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		aggregateMethod: z.lazy(getCodeableConceptSchema).optional(),
		code: z.lazy(getCodeableConceptSchema).optional(),
		criteria: z.lazy(getExpressionSchema).optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		groupDefinition: z.lazy(getReferenceSchema).optional(),
		inputPopulationId: fhirString().optional(),
		_inputPopulationId: z.lazy(getElementSchema).optional(),
		linkId: fhirString().optional(),
		_linkId: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.groupDefinition,
				"groupDefinition",
				["http://hl7.org/fhir/StructureDefinition/Group"],
				["Group"],
				ctx,
			);
		});

export const Measure_Group_PopulationSchema =
	Measure_Group_PopulationSchemaInternal as z.ZodType<Measure_Group_Population>;
