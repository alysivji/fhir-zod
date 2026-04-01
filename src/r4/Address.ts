// Profile: http://hl7.org/fhir/StructureDefinition/Address
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

export const Address = z
	.object({
		_city: z.lazy(getElementSchema).optional(),
		_country: z.lazy(getElementSchema).optional(),
		_district: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_line: z.lazy(getElementSchema).optional(),
		_postalCode: z.lazy(getElementSchema).optional(),
		_state: z.lazy(getElementSchema).optional(),
		_text: z.lazy(getElementSchema).optional(),
		_type: z.lazy(getElementSchema).optional(),
		_use: z.lazy(getElementSchema).optional(),
		city: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		country: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		district: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		line: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.array()
			.optional(),
		period: z.lazy(getPeriodSchema).optional(),
		postalCode: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		state: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		type: z.enum(["both", "physical", "postal"]).optional(),
		use: z.enum(["billing", "home", "old", "temp", "work"]).optional(),
	})
	.strict();

export type Address = z.output<typeof Address>;
