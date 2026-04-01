// Profile: http://hl7.org/fhir/StructureDefinition/Ratio
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

export const Ratio = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		denominator: z.lazy(getQuantitySchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		numerator: z.lazy(getQuantitySchema).optional(),
	})
	.strict();

export type Ratio = z.output<typeof Ratio>;
