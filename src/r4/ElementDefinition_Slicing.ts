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

export const ElementDefinition_Slicing = z
	.object({
		_description: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_ordered: z.lazy(getElementSchema).optional(),
		_rules: z.lazy(getElementSchema).optional(),
		description: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		discriminator: z.unknown().array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		ordered: z.boolean().optional(),
		rules: z.enum(["closed", "open", "openAtEnd"]),
	})
	.strict();

export type ElementDefinition_Slicing = z.output<
	typeof ElementDefinition_Slicing
>;
