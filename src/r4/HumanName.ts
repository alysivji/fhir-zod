// Profile: http://hl7.org/fhir/StructureDefinition/HumanName
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getPeriodSchema = (): z.ZodType<unknown> => Period;

export const HumanName = z
	.object({
		_family: z.lazy(getElementSchema).optional(),
		_given: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_prefix: z.lazy(getElementSchema).optional(),
		_suffix: z.lazy(getElementSchema).optional(),
		_text: z.lazy(getElementSchema).optional(),
		_use: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		family: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		given: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional(),
		id: fhirId().optional(),
		period: z.lazy(getPeriodSchema).optional(),
		prefix: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional(),
		suffix: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional(),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		use: z
			.enum([
				"anonymous",
				"maiden",
				"nickname",
				"official",
				"old",
				"temp",
				"usual",
			])
			.optional(),
	})
	.strict();

export type HumanName = z.output<typeof HumanName>;
