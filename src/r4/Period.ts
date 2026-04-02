// Profile: http://hl7.org/fhir/StructureDefinition/Period
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:42:40.346Z

import * as z from "zod";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Period Type: A time period defined by a start and end date and optionally time. */
export interface Period extends Element {
	/** The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time. */
	end?: string;
	/** Extensions for end */
	_end?: Element;
	/** The start of the period. The boundary is inclusive. */
	start?: string;
	/** Extensions for start */
	_start?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const PeriodSchemaInternal = z
	.object({
		end: fhirDateTime().optional(),
		_end: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		start: fhirDateTime().optional(),
		_start: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const PeriodSchema: z.ZodType<Period> = PeriodSchemaInternal;
