// Profile: http://hl7.org/fhir/StructureDefinition/Period
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Period = z
	.object({
		_end: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_start: z.lazy(getElementSchema).optional(),
		end: fhirDateTime().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		start: fhirDateTime().optional(),
	})
	.strict();

export type Period = z.output<typeof Period>;
