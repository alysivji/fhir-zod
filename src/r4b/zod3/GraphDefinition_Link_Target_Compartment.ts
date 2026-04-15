// Profile: http://hl7.org/fhir/StructureDefinition/GraphDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Compartment Consistency Rules. */
export interface GraphDefinition_Link_Target_Compartment
	extends BackboneElement {
	/** Identifies the compartment. */
	code: "Device" | "Encounter" | "Patient" | "Practitioner" | "RelatedPerson";
	/** Extensions for code */
	_code?: Element;
	/** Documentation for FHIRPath expression. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Custom rule, as a FHIRPath expression. */
	expression?: string;
	/** Extensions for expression */
	_expression?: Element;
	/** identical | matching | different | no-rule | custom. */
	rule: "custom" | "different" | "identical" | "matching";
	/** Extensions for rule */
	_rule?: Element;
	/** Defines how the compartment rule is used - whether it it is used to test whether resources are subject to the rule, or whether it is a rule that must be followed. */
	use: "condition" | "requirement";
	/** Extensions for use */
	_use?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const GraphDefinition_Link_Target_CompartmentSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.enum([
			"Device",
			"Encounter",
			"Patient",
			"Practitioner",
			"RelatedPerson",
		]),
		_code: z.lazy(getElementSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		expression: fhirString().optional(),
		_expression: z.lazy(getElementSchema).optional(),
		rule: z.enum(["custom", "different", "identical", "matching"]),
		_rule: z.lazy(getElementSchema).optional(),
		use: z.enum(["condition", "requirement"]),
		_use: z.lazy(getElementSchema).optional(),
	}).strict();

export const GraphDefinition_Link_Target_CompartmentSchema =
	GraphDefinition_Link_Target_CompartmentSchemaInternal as z.ZodType<GraphDefinition_Link_Target_Compartment>;
