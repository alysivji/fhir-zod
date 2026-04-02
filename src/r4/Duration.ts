// Profile: http://hl7.org/fhir/StructureDefinition/Duration
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:00:24.609Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Quantity } from "./Quantity";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

/** Base StructureDefinition for Duration Type: A length of time. */
export interface Duration extends Quantity {}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const DurationSchemaInternal = z
	.object({
		code: z
			.string()
			.regex(/[^\s]+(\s[^\s]+)*/)
			.optional(),
		_code: z.lazy(getElementSchema).optional(),
		comparator: z.enum(["<", "<=", ">", ">="]).optional(),
		_comparator: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		system: z.string().regex(/\S*/).optional(),
		_system: z.lazy(getElementSchema).optional(),
		unit: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
		_unit: z.lazy(getElementSchema).optional(),
		value: z.number().optional(),
		_value: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const DurationSchema: z.ZodType<Duration> = DurationSchemaInternal;
