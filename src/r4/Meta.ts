// Profile: http://hl7.org/fhir/StructureDefinition/Meta
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId, fhirInstant } from "../shared/fhir-primitives";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getCodingSchema = (): z.ZodType<unknown> => Coding;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Meta = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		_lastUpdated: z.lazy(getElementSchema).optional(),
		_profile: z.lazy(getElementSchema).optional(),
		_source: z.lazy(getElementSchema).optional(),
		_versionId: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		lastUpdated: fhirInstant().optional(),
		profile: z.string().regex(/\S*/).array().optional(),
		security: z.lazy(getCodingSchema).array().optional(),
		source: z.string().regex(/\S*/).optional(),
		tag: z.lazy(getCodingSchema).array().optional(),
		versionId: fhirId().optional(),
	})
	.strict();

export type Meta = z.output<typeof Meta>;
