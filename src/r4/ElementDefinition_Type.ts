// Profile: http://hl7.org/fhir/StructureDefinition/ElementDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const ElementDefinition_Type = z
	.object({
		_aggregation: z.lazy(getElementSchema).optional(),
		_code: z.lazy(getElementSchema).optional(),
		_id: z.lazy(getElementSchema).optional(),
		_profile: z.lazy(getElementSchema).optional(),
		_targetProfile: z.lazy(getElementSchema).optional(),
		_versioning: z.lazy(getElementSchema).optional(),
		aggregation: z
			.enum(["bundled", "contained", "referenced"])
			.array()
			.optional(),
		code: z.string().regex(/\S*/),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		profile: z.string().regex(/\S*/).array().optional(),
		targetProfile: z.string().regex(/\S*/).array().optional(),
		versioning: z.enum(["either", "independent", "specific"]).optional(),
	})
	.strict();

export type ElementDefinition_Type = z.output<typeof ElementDefinition_Type>;
