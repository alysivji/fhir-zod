// Profile: http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Expression } from "../Expression";
import { ExpressionSchemaInternal } from "../Expression";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";

/** Expressions that describe applicability criteria for the billing code. */
export interface ChargeItemDefinition_Applicability extends BackboneElement {
	/** An expression that returns true or false, indicating whether the condition is satisfied. When using FHIRPath expressions, the %context environment variable must be replaced at runtime with the ChargeItem resource to which this definition is applied. */
	condition?: Expression;
	/** The period during which the charge item definition content was or is planned to be in active use. */
	effectivePeriod?: Period;
	/** Reference to / quotation of the external source of the group of properties. */
	relatedArtifact?: RelatedArtifact;
}

const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;

/** @internal */
export const ChargeItemDefinition_ApplicabilitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		condition: z.lazy(getExpressionSchema).optional(),
		effectivePeriod: z.lazy(getPeriodSchema).optional(),
		relatedArtifact: z.lazy(getRelatedArtifactSchema).optional(),
	}).strict();

export const ChargeItemDefinition_ApplicabilitySchema =
	ChargeItemDefinition_ApplicabilitySchemaInternal as z.ZodType<ChargeItemDefinition_Applicability>;
