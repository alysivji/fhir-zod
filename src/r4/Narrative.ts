// Profile: http://hl7.org/fhir/StructureDefinition/Narrative
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { Element } from "./Element";

const getElementSchema = (): z.ZodType<unknown> => Element;

export const Narrative = Element.extend({
	_div: z.lazy(getElementSchema).optional(),
	_status: z.lazy(getElementSchema).optional(),
	div: z.string(),
	status: z.enum(["additional", "empty", "extensions", "generated"]),
}).strict();

export type Narrative = z.output<typeof Narrative>;
