// Profile: http://hl7.org/fhir/StructureDefinition/Reference
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Identifier } from "./Identifier";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getIdentifierSchema = (): z.ZodType<unknown> => Identifier;

export const Reference = z
	.object({
		_display: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_reference: z.lazy(getElementSchema).optional(),
		_type: z.lazy(getElementSchema).optional(),
		display: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		identifier: z.lazy(getIdentifierSchema).optional(),
		reference: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		type: z.string().regex(/\S*/).optional(),
	})
	.strict();

export type Reference = z.output<typeof Reference>;
