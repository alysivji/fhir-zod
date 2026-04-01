// Profile: http://hl7.org/fhir/StructureDefinition/DomainResource
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { Extension } from "./Extension";
import { Narrative } from "./Narrative";
import { Resource } from "./Resource";

const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getNarrativeSchema = (): z.ZodType<unknown> => Narrative;
const getResourceSchema = (): z.ZodType<unknown> => Resource;

export const DomainResource = Resource.extend({
	contained: z.lazy(getResourceSchema).array().optional(),
	extension: z.lazy(getExtensionSchema).array().optional(),
	modifierExtension: z.lazy(getExtensionSchema).array().optional(),
	text: z.lazy(getNarrativeSchema).optional(),
}).strict();

export type DomainResource = z.output<typeof DomainResource>;
