// Profile: http://hl7.org/fhir/StructureDefinition/CodeableConcept
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getCodingSchema = (): z.ZodType<unknown> => Coding;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const CodeableConcept = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		_text: z.lazy(getElementSchema).optional(),
		coding: z.lazy(getCodingSchema).array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
	})
	.strict();

export type CodeableConcept = z.output<typeof CodeableConcept>;
