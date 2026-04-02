// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";

export interface ElementDefinition_Constraint extends Element {
	expression?: string;
	_expression?: Element;
	human: string;
	_human?: Element;
	key: string;
	_key?: Element;
	requirements?: string;
	_requirements?: Element;
	severity: "error" | "warning";
	_severity?: Element;
	source?: string;
	_source?: Element;
	xpath?: string;
	_xpath?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;

/** @internal */
export const ElementDefinition_ConstraintSchemaInternal =
	ElementSchemaInternal.extend({
		expression: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A [FHIRPath](fhirpath.html) expression of constraint that can be executed to see if this constraint is met.",
			),
		_expression: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for expression"),
		human: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"Text that can be used to describe the constraint in messages identifying that the constraint has been violated.",
			),
		_human: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for human"),
		key: fhirId().describe(
			"Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.",
		),
		_key: z.lazy(getElementSchema).optional().describe("Extensions for key"),
		requirements: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Description of why this constraint is necessary or appropriate.",
			),
		_requirements: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for requirements"),
		severity: z
			.enum(["error", "warning"])
			.describe(
				"Identifies the impact constraint violation has on the conformance of the instance.",
			),
		_severity: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for severity"),
		source: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"A reference to the original source of the constraint, for traceability purposes.",
			),
		_source: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for source"),
		xpath: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"An XPath expression of constraint that can be executed to see if this constraint is met.",
			),
		_xpath: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for xpath"),
	}).strict();

export const ElementDefinition_ConstraintSchema: z.ZodType<ElementDefinition_Constraint> =
	ElementDefinition_ConstraintSchemaInternal;
