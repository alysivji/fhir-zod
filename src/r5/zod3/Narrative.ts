// Profile: http://hl7.org/fhir/StructureDefinition/Narrative
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { DataType } from "./DataType";
import { DataTypeSchemaInternal } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Narrative Type: A human-readable summary of the resource conveying the essential clinical and business information for the resource. */
export interface Narrative extends DataType {
	/** The actual narrative content, a stripped down version of XHTML. */
	div: string;
	/** Extensions for div */
	_div?: Element;
	/** The status of the narrative - whether it's entirely generated (from just the defined data or the extensions too), or whether a human authored it and it may contain additional data. */
	status: "additional" | "empty" | "extensions" | "generated";
	/** Extensions for status */
	_status?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const NarrativeSchemaInternal = DataTypeSchemaInternal.extend({
	div: z.string(),
	_div: z.lazy(getElementSchema).optional(),
	status: z.enum(["additional", "empty", "extensions", "generated"]),
	_status: z.lazy(getElementSchema).optional(),
}).strict();

export const NarrativeSchema = NarrativeSchemaInternal as z.ZodType<Narrative>;
