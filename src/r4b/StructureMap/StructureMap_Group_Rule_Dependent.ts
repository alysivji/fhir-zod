// Profile: http://hl7.org/fhir/StructureDefinition/StructureMap
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirId, fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Which other rules to apply in the context of this rule. */
export interface StructureMap_Group_Rule_Dependent extends BackboneElement {
	/** Name of a rule or group to apply. */
	name: string;
	/** Extensions for name */
	_name?: Element;
	/** Variable to pass to the rule or group. */
	variable: Array<string | null>;
	/** Extensions for variable */
	_variable?: Array<Element | null>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const StructureMap_Group_Rule_DependentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		name: fhirId(),
		_name: z.lazy(getElementSchema).optional(),
		variable: fhirString().nullable().array(),
		_variable: z.lazy(getElementSchema).nullable().array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.variable,
				record._variable,
				"variable",
				"_variable",
				ctx,
			);
		});

export const StructureMap_Group_Rule_DependentSchema =
	StructureMap_Group_Rule_DependentSchemaInternal as z.ZodType<StructureMap_Group_Rule_Dependent>;
