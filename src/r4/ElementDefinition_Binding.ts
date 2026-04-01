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

export const ElementDefinition_Binding = z
	.object({
		_description: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for description"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_strength: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for strength"),
		_valueSet: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for valueSet"),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("Describes the intended use of this particular set of codes."),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		strength: z
			.enum(["example", "extensible", "preferred", "required"])
			.describe(
				"Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.",
			),
		valueSet: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"Refers to the value set that identifies the set of codes the binding refers to.",
			),
	})
	.strict();

export type ElementDefinition_Binding = z.output<
	typeof ElementDefinition_Binding
>;
