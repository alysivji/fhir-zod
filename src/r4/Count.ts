// Profile: http://hl7.org/fhir/StructureDefinition/Count
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Quantity } from "./Quantity";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

export interface Count extends Quantity {}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const CountSchemaInternal = z
	.object({
		code: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional()
			.describe(
				"A computer processable form of the unit in some unit representation system.",
			),
		_code: z.lazy(getElementSchema).optional().describe("Extensions for code"),
		comparator: z
			.enum(["<", "<=", ">", ">="])
			.optional()
			.describe(
				'How the value should be understood and represented - whether the actual value is greater or less than the stated value due to measurement issues; e.g. if the comparator is "<" , then the real value is < stated value.',
			),
		_comparator: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for comparator"),
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
				"The identification of the system that provides the coded form of the unit.",
			),
		_system: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for system"),
		unit: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe("A human-readable form of the unit."),
		_unit: z.lazy(getElementSchema).optional().describe("Extensions for unit"),
		value: z
			.number()
			.optional()
			.describe(
				"The value of the measured amount. The value includes an implicit precision in the presentation of the value.",
			),
		_value: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for value"),
	})
	.strict();

export const CountSchema: z.ZodType<Count> = CountSchemaInternal;
