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

export const ElementDefinition_Base = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_max: z.lazy(getElementSchema).optional().describe("Extensions for max"),
		_min: z.lazy(getElementSchema).optional().describe("Extensions for min"),
		_path: z.lazy(getElementSchema).optional().describe("Extensions for path"),
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
		max: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"Maximum cardinality of the base element identified by the path.",
			),
		min: z
			.number()
			.int()
			.nonnegative()
			.describe(
				"Minimum cardinality of the base element identified by the path.",
			),
		path: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"The Path that identifies the base element - this matches the ElementDefinition.path for that element. Across FHIR, there is only one base definition of any element - that is, an element definition on a [StructureDefinition](structuredefinition.html#) without a StructureDefinition.base.",
			),
	})
	.strict();

export type ElementDefinition_Base = z.output<typeof ElementDefinition_Base>;
