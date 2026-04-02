// Profile: http://hl7.org/fhir/StructureDefinition/Distance
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T14:11:40.945Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";

/** Base StructureDefinition for Distance Type: A length - a value with a unit that is a physical distance. */
export interface Distance extends Quantity {}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const DistanceSchemaInternal = z
	.object({
		code: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		_code: z.lazy(getElementSchema).optional(),
		comparator: z.enum(["<", "<=", ">", ">="]).optional(),
		_comparator: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_id: z.lazy(getElementSchema).optional(),
		system: z.string().regex(/\S*/).optional(),
		_system: z.lazy(getElementSchema).optional(),
		unit: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_unit: z.lazy(getElementSchema).optional(),
		value: z.number().optional(),
		_value: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const DistanceSchema = DistanceSchemaInternal as z.ZodType<Distance>;
