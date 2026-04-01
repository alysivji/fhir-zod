// Profile: http://hl7.org/fhir/StructureDefinition/Narrative
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { Element } from "./Element";

const getElementSchema = (): z.ZodType<unknown> => Element;

export const Narrative = Element.extend({
	_div: z.lazy(getElementSchema).optional().describe("Extensions for div"),
	_status: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for status"),
	div: z
		.string()
		.describe(
			"The actual narrative content, a stripped down version of XHTML.",
		),
	status: z
		.enum(["additional", "empty", "extensions", "generated"])
		.describe(
			"The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.",
		),
}).strict();

export type Narrative = z.output<typeof Narrative>;
