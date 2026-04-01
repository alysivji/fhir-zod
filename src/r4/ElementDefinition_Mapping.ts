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

export const ElementDefinition_Mapping = z
	.object({
		_comment: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for comment"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_identity: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for identity"),
		_language: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for language"),
		_map: z.lazy(getElementSchema).optional().describe("Extensions for map"),
		comment: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"Comments that provide information about the mapping or its use.",
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
		identity: fhirId().describe(
			"An internal reference to the definition of a mapping.",
		),
		language: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"Identifies the computable language in which mapping.map is expressed.",
			),
		map: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.describe(
				"Expresses what part of the target specification corresponds to this element.",
			),
	})
	.strict();

export type ElementDefinition_Mapping = z.output<
	typeof ElementDefinition_Mapping
>;
