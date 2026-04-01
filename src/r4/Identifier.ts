// Profile: http://hl7.org/fhir/StructureDefinition/Identifier
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:08:32.363Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Period } from "./Period";
import { Reference } from "./Reference";

const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getPeriodSchema = (): z.ZodType<unknown> => Period;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;

export const Identifier = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		_system: z.lazy(getElementSchema).optional(),
		_use: z.lazy(getElementSchema).optional(),
		_value: z.lazy(getElementSchema).optional(),
		assigner: z.lazy(getReferenceSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		period: z.lazy(getPeriodSchema).optional(),
		system: z.string().regex(/\S*/).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		use: z.enum(["official", "old", "secondary", "temp", "usual"]).optional(),
		value: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional(),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record["assigner"],
			"assigner",
			["http://hl7.org/fhir/StructureDefinition/Organization"],
			["Organization"],
			ctx,
		);
	});

export type Identifier = z.output<typeof Identifier>;
