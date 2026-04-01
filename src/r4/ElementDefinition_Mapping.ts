// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const ElementDefinition_Mapping = z
	.object({
		_comment: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_identity: z.lazy(getElementSchema).optional(),
		_language: z.lazy(getElementSchema).optional(),
		_map: z.lazy(getElementSchema).optional(),
		comment: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		identity: fhirId(),
		language: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		map: z.string().regex(/[ \r\n\t\S]+/),
	})
	.strict();

export type ElementDefinition_Mapping = z.output<
	typeof ElementDefinition_Mapping
>;
