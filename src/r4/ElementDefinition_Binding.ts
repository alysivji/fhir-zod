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

export const ElementDefinition_Binding = z
	.object({
		_description: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_strength: z.lazy(getElementSchema).optional(),
		_valueSet: z.lazy(getElementSchema).optional(),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		strength: z.enum(["example", "extensible", "preferred", "required"]),
		valueSet: z.string().regex(/\S*/).optional(),
	})
	.strict();

export type ElementDefinition_Binding = z.output<
	typeof ElementDefinition_Binding
>;
