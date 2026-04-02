// Profile: http://hl7.org/fhir/StructureDefinition/Coding
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

export interface Coding extends Element {
	code?: string;
	_code?: Element;
	display?: string;
	_display?: Element;
	system?: string;
	_system?: Element;
	userSelected?: boolean;
	_userSelected?: Element;
	version?: string;
	_version?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const CodingSchemaInternal = z
	.object({
		code: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).",
			),
		_code: z.lazy(getElementSchema).optional().describe("Extensions for code"),
		display: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A representation of the meaning of the code in the system, following the rules of the system.",
			),
		_display: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for display"),
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
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		system: z
			.string()
			.regex(/\S*/)
			.optional()
			.describe(
				"The identification of the code system that defines the meaning of the symbol in the code.",
			),
		_system: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for system"),
		userSelected: z
			.boolean()
			.optional()
			.describe(
				"Indicates that this coding was chosen by a user directly - e.g. off a pick list of available items (codes or displays).",
			),
		_userSelected: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for userSelected"),
		version: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured, and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.",
			),
		_version: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for version"),
	})
	.strict();

export const CodingSchema: z.ZodType<Coding> = CodingSchemaInternal;
