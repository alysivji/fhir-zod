// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:00:24.609Z

import * as z from "zod";
import type { Element } from "./Element";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";

/** Formal constraints such as co-occurrence and other constraints that can be computationally evaluated within the context of the instance. */
export interface ElementDefinition_Constraint extends Element {
	/** A [FHIRPath](fhirpath.html) expression of constraint that can be executed to see if this constraint is met. */
	expression?: string;
	/** Extensions for expression */
	_expression?: Element;
	/** Text that can be used to describe the constraint in messages identifying that the constraint has been violated. */
	human: string;
	/** Extensions for human */
	_human?: Element;
	/** Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality. */
	key: string;
	/** Extensions for key */
	_key?: Element;
	/** Description of why this constraint is necessary or appropriate. */
	requirements?: string;
	/** Extensions for requirements */
	_requirements?: Element;
	/** Identifies the impact constraint violation has on the conformance of the instance. */
	severity: "error" | "warning";
	/** Extensions for severity */
	_severity?: Element;
	/** A reference to the original source of the constraint, for traceability purposes. */
	source?: string;
	/** Extensions for source */
	_source?: Element;
	/** An XPath expression of constraint that can be executed to see if this constraint is met. */
	xpath?: string;
	/** Extensions for xpath */
	_xpath?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;

/** @internal */
export const ElementDefinition_ConstraintSchemaInternal =
	ElementSchemaInternal.extend({
		expression: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_expression: z.lazy(getElementSchema).optional(),
		human: z.string().regex(/[ \r\n\t\S]+/),
		_human: z.lazy(getElementSchema).optional(),
		key: fhirId(),
		_key: z.lazy(getElementSchema).optional(),
		requirements: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_requirements: z.lazy(getElementSchema).optional(),
		severity: z.enum(["error", "warning"]),
		_severity: z.lazy(getElementSchema).optional(),
		source: z.string().regex(/\S*/).optional(),
		_source: z.lazy(getElementSchema).optional(),
		xpath: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_xpath: z.lazy(getElementSchema).optional(),
	}).strict();

export const ElementDefinition_ConstraintSchema: z.ZodType<ElementDefinition_Constraint> =
	ElementDefinition_ConstraintSchemaInternal;
