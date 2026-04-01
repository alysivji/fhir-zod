// Profile: http://hl7.org/fhir/StructureDefinition/Coding
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Coding = z
	.object({
		_code: z.lazy(getElementSchema).optional(),
		_display: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_system: z.lazy(getElementSchema).optional(),
		_userSelected: z.lazy(getElementSchema).optional(),
		_version: z.lazy(getElementSchema).optional(),
		code: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		display: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		system: z.string().regex(/\S*/).optional(),
		userSelected: z.boolean().optional(),
		version: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
	})
	.strict();

export type Coding = z.output<typeof Coding>;
