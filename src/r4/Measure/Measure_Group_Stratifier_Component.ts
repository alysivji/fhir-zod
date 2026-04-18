// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Expression } from "../Expression";
import { ExpressionSchemaInternal } from "../Expression";

/** A component of the stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path. */
export interface Measure_Group_Stratifier_Component extends BackboneElement {
	/** Indicates a meaning for the stratifier component. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing stratifiers to be correlated across measures. */
	code?: CodeableConcept;
	/** An expression that specifies the criteria for this component of the stratifier. This is typically the name of an expression defined within a referenced library, but it may also be a path to a stratifier element. */
	criteria: Expression;
	/** The human readable description of this stratifier criteria component. */
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
export const Measure_Group_Stratifier_ComponentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		criteria: z.lazy(getExpressionSchema),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
	}).strict();

export const Measure_Group_Stratifier_ComponentSchema =
	Measure_Group_Stratifier_ComponentSchemaInternal as z.ZodType<Measure_Group_Stratifier_Component>;
