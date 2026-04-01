// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const ElementDefinition_Constraint = z
	.object({
		_expression: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for expression"),
		_human: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for human"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_key: z.lazy(getElementSchema).optional().describe("Extensions for key"),
		_requirements: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for requirements"),
		_severity: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for severity"),
		_source: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for source"),
		_xpath: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for xpath"),
		expression: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A [FHIRPath](fhirpath.html) expression of constraint that can be executed to see if this constraint is met.",
			),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		human: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"Text that can be used to describe the constraint in messages identifying that the constraint has been violated.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		key: fhirId().describe(
			"Allows identification of which elements have their cardinalities impacted by the constraint.  Will not be referenced for constraints that do not affect cardinality.",
		),
		requirements: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Description of why this constraint is necessary or appropriate.",
			),
		severity: z
			.enum(["error", "warning"])
			.describe(
				"Identifies the impact constraint violation has on the conformance of the instance.",
			),
		source: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"A reference to the original source of the constraint, for traceability purposes.",
			),
		xpath: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"An XPath expression of constraint that can be executed to see if this constraint is met.",
			),
	})
	.strict();

export type ElementDefinition_Constraint = z.output<
	typeof ElementDefinition_Constraint
>;
