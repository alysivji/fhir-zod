// Profile: http://hl7.org/fhir/StructureDefinition/Narrative
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

export interface Narrative extends Element {
	div: string;
	_div?: Element;
	status: "additional" | "empty" | "extensions" | "generated";
	_status?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;

/** @internal */
export const NarrativeSchemaInternal = ElementSchemaInternal.extend({
	div: z
		.string()
		.describe(
			"The actual narrative content, a stripped down version of XHTML.",
		),
	_div: z.lazy(getElementSchema).optional().describe("Extensions for div"),
	status: z
		.enum(["additional", "empty", "extensions", "generated"])
		.describe(
			"The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data.",
		),
	_status: z
		.lazy(getElementSchema)
		.optional()
		.describe("Extensions for status"),
}).strict();

export const NarrativeSchema: z.ZodType<Narrative> = NarrativeSchemaInternal;
