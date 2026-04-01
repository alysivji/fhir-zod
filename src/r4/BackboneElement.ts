// Profile: http://hl7.org/fhir/StructureDefinition/BackboneElement
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const BackboneElement = Element.extend({
	modifierExtension: z.lazy(getExtensionSchema).array().optional(),
}).strict();

export type BackboneElement = z.output<typeof BackboneElement>;
