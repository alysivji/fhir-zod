// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
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

/** A component of the stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path. */
export interface Measure_Group_Stratifier_Component extends BackboneElement {
	/** Indicates a meaning for the stratifier component. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing stratifiers to be correlated across measures. */
	code?: CodeableConcept;
	/** An expression that specifies the criteria for this component of the stratifier. This is typically the name of an expression defined within a referenced library, but it may also be a path to a stratifier element. */
	criteria?: Expression;
	/** The human readable description of this stratifier criteria component. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A Group resource that defines this population as a set of characteristics. */
	groupDefinition?: Reference;
	/** An identifier that is unique within the Measure allowing linkage to the equivalent item in a MeasureReport resource. */
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
export const Measure_Group_Stratifier_ComponentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		criteria: z.lazy(getExpressionSchema).optional(),
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		groupDefinition: z.lazy(getReferenceSchema).optional(),
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

export const Measure_Group_Stratifier_ComponentSchema =
	Measure_Group_Stratifier_ComponentSchemaInternal as z.ZodType<Measure_Group_Stratifier_Component>;
