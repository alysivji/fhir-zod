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

export const ElementDefinition_Base = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		_max: z.lazy(getElementSchema).optional(),
		_min: z.lazy(getElementSchema).optional(),
		_path: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		max: z.string().regex(/[ \r\n\t\S]+/),
		min: z.number().int().nonnegative(),
		path: z.string().regex(/[ \r\n\t\S]+/),
	})
	.strict();

export type ElementDefinition_Base = z.output<typeof ElementDefinition_Base>;
