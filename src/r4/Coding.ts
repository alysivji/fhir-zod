// Profile: http://hl7.org/fhir/StructureDefinition/Coding
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Coding = z
	.object({
		_code: z.lazy(getElementSchema).optional().describe("Extensions for code"),
		_display: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for display"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_system: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for system"),
		_userSelected: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for userSelected"),
		_version: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for version"),
		code: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
			),
		display: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A representation of the meaning of the code in the system, following the rules of the system.",
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
		system: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"The identification of the code system that defines the meaning of the symbol in the code.",
			),
		userSelected: z
			.boolean()
			.optional()
			.describe(
				"Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
			),
		version: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
			),
	})
	.strict();

export type Coding = z.output<typeof Coding>;
