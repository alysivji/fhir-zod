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

export const ElementDefinition_Slicing = z
	.object({
		_description: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for description"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_ordered: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for ordered"),
		_rules: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for rules"),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated.",
			),
		discriminator: z
			.unknown()
			.array()
			.optional()
			.describe(
				"Designates which child elements are used to discriminate between the slices when processing an instance. If one or more discriminators are provided, the value of the child elements in the instance data SHALL completely distinguish which slice the element in the resource matches based on the allowed values for those elements in each of the slices.",
			),
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
		ordered: z
			.boolean()
			.optional()
			.describe(
				"If the matching elements have to occur in the same order as defined in the profile.",
			),
		rules: z
			.enum(["closed", "open", "openAtEnd"])
			.describe(
				"Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end.",
			),
	})
	.strict();

export type ElementDefinition_Slicing = z.output<
	typeof ElementDefinition_Slicing
>;
