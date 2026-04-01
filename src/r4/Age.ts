// Profile: http://hl7.org/fhir/StructureDefinition/Age
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Age = z
	.object({
		_code: z.lazy(getElementSchema).optional(),
		_comparator: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_system: z.lazy(getElementSchema).optional(),
		_unit: z.lazy(getElementSchema).optional(),
		_value: z.lazy(getElementSchema).optional(),
		code: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		comparator: z.enum(["<", "<=", ">", ">="]).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		system: z.string().regex(/\S*/).optional(),
		unit: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		value: z.number().optional(),
	})
	.strict();

export type Age = z.output<typeof Age>;
