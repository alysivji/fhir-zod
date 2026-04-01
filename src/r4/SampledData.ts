// Profile: http://hl7.org/fhir/StructureDefinition/SampledData
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getQuantitySchema = (): z.ZodType<unknown> => Quantity;

export const SampledData = z
	.object({
		_data: z.lazy(getElementSchema).optional(),
		_dimensions: z.lazy(getElementSchema).optional(),
		_factor: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_lowerLimit: z.lazy(getElementSchema).optional(),
		_period: z.lazy(getElementSchema).optional(),
		_upperLimit: z.lazy(getElementSchema).optional(),
		data: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		dimensions: z.number().int().positive(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		factor: z.number().optional(),
		id: fhirId().optional(),
		lowerLimit: z.number().optional(),
		origin: z.lazy(getQuantitySchema),
		period: z.number(),
		upperLimit: z.number().optional(),
	})
	.strict();

export type SampledData = z.output<typeof SampledData>;
