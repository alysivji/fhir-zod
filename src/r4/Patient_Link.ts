// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T17:47:10.063Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Reference } from "./Reference";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;

export const Patient_Link = z
	.object({
		_id: z.lazy(getElementSchema).optional(),
		_type: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		modifierExtension: z.lazy(getExtensionSchema).array().optional(),
		other: z.lazy(getReferenceSchema),
		type: z.enum(["refer", "replaced-by", "replaces", "seealso"]),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.other,
			"other",
			[
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Patient", "RelatedPerson"],
			ctx,
		);
	});

export type Patient_Link = z.output<typeof Patient_Link>;
