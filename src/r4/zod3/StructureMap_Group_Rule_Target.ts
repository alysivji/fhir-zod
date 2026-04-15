// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirId, fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { StructureMap_Group_Rule_Target_Parameter } from "./StructureMap_Group_Rule_Target_Parameter";
import { StructureMap_Group_Rule_Target_ParameterSchemaInternal } from "./StructureMap_Group_Rule_Target_Parameter";

/** Content to create because of this mapping rule. */
export interface StructureMap_Group_Rule_Target extends BackboneElement {
	/** Type or variable this rule applies to. */
	context?: string;
	/** Extensions for context */
	_context?: Element;
	/** How to interpret the context. */
	contextType?: "type" | "variable";
	/** Extensions for contextType */
	_contextType?: Element;
	/** Field to create in the context. */
	element?: string;
	/** Extensions for element */
	_element?: Element;
	/** If field is a list, how to manage the list. */
	listMode?: Array<"collate" | "first" | "last" | "share" | null>;
	/** Extensions for listMode */
	_listMode?: Array<Element | null>;
	/** Internal rule reference for shared list items. */
	listRuleId?: string;
	/** Extensions for listRuleId */
	_listRuleId?: Element;
	/** Parameters to the transform. */
	parameter?: Array<StructureMap_Group_Rule_Target_Parameter>;
	/** How the data is copied / created. */
	transform?:
		| "append"
		| "c"
		| "cast"
		| "cc"
		| "copy"
		| "cp"
		| "create"
		| "dateOp"
		| "escape"
		| "evaluate"
		| "id"
		| "pointer"
		| "qty"
		| "reference"
		| "translate"
		| "truncate"
		| "uuid";
	/** Extensions for transform */
	_transform?: Element;
	/** Named context for field, if desired, and a field is specified. */
	variable?: string;
	/** Extensions for variable */
	_variable?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getStructureMap_Group_Rule_Target_ParameterSchema =
	(): z.ZodType<StructureMap_Group_Rule_Target_Parameter> =>
		StructureMap_Group_Rule_Target_ParameterSchemaInternal as z.ZodType<StructureMap_Group_Rule_Target_Parameter>;

/** @internal */
export const StructureMap_Group_Rule_TargetSchemaInternal =
	BackboneElementSchemaInternal.extend({
		context: fhirId().optional(),
		_context: z.lazy(getElementSchema).optional(),
		contextType: z.enum(["type", "variable"]).optional(),
		_contextType: z.lazy(getElementSchema).optional(),
		element: fhirString().optional(),
		_element: z.lazy(getElementSchema).optional(),
		listMode: z
			.enum(["collate", "first", "last", "share"])
			.nullable()
			.array()
			.optional(),
		_listMode: z.lazy(getElementSchema).nullable().array().optional(),
		listRuleId: fhirId().optional(),
		_listRuleId: z.lazy(getElementSchema).optional(),
		parameter: z
			.lazy(getStructureMap_Group_Rule_Target_ParameterSchema)
			.array()
			.optional(),
		transform: z
			.enum([
				"append",
				"c",
				"cast",
				"cc",
				"copy",
				"cp",
				"create",
				"dateOp",
				"escape",
				"evaluate",
				"id",
				"pointer",
				"qty",
				"reference",
				"translate",
				"truncate",
				"uuid",
			])
			.optional(),
		_transform: z.lazy(getElementSchema).optional(),
		variable: fhirId().optional(),
		_variable: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.listMode,
				record._listMode,
				"listMode",
				"_listMode",
				ctx,
			);
		});

export const StructureMap_Group_Rule_TargetSchema =
	StructureMap_Group_Rule_TargetSchemaInternal as z.ZodType<StructureMap_Group_Rule_Target>;
