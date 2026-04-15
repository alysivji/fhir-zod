// Profile: http://hl7.org/fhir/StructureDefinition/Permission
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Coding } from "./Coding";
import { CodingSchemaInternal } from "./Coding";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Permission_Rule_Data_Resource } from "./Permission_Rule_Data_Resource";
import { Permission_Rule_Data_ResourceSchemaInternal } from "./Permission_Rule_Data_Resource";

/** A description or definition of which activities are allowed to be done on the data. */
export interface Permission_Rule_Data extends BackboneElement {
	/** Used when other data selection elements are insufficient. */
	expression?: Expression;
	/** Clinical or Operational Relevant period of time that bounds the data controlled by this rule. */
	period?: Array<Period>;
	/** Explicit FHIR Resource references. */
	resource?: Array<Permission_Rule_Data_Resource>;
	/** The data in scope are those with the given codes present in that data .meta.security element. */
	security?: Array<Coding>;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getPermission_Rule_Data_ResourceSchema =
	(): z.ZodType<Permission_Rule_Data_Resource> =>
		Permission_Rule_Data_ResourceSchemaInternal as z.ZodType<Permission_Rule_Data_Resource>;

/** @internal */
export const Permission_Rule_DataSchemaInternal =
	BackboneElementSchemaInternal.extend({
		expression: z.lazy(getExpressionSchema).optional(),
		period: z.lazy(getPeriodSchema).array().optional(),
		resource: z.lazy(getPermission_Rule_Data_ResourceSchema).array().optional(),
		security: z.lazy(getCodingSchema).array().optional(),
	}).strict();

export const Permission_Rule_DataSchema =
	Permission_Rule_DataSchemaInternal as z.ZodType<Permission_Rule_Data>;
