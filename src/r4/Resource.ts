// Profile: http://hl7.org/fhir/StructureDefinition/Resource
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Meta } from "./Meta";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getMetaSchema = (): z.ZodType<unknown> => Meta;

export const Resource = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		_implicitRules: z.lazy(getElementSchema).optional(),
		_language: z.lazy(getElementSchema).optional(),
		id: fhirId().optional(),
		implicitRules: z.string().regex(/\S*/).optional(),
		language: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		meta: z.lazy(getMetaSchema).optional(),
	})
	.strict();

export type Resource = z.output<typeof Resource>;
