// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import type { Element } from "./Element";
import type { Reference } from "./Reference";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import { ElementSchemaInternal } from "./Element";
import { ReferenceSchemaInternal } from "./Reference";

export interface Patient_Link extends BackboneElement {
	other: Reference;
	type: "refer" | "replaced-by" | "replaces" | "seealso";
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getReferenceSchema = (): z.ZodType<Reference> => ReferenceSchemaInternal;

/** @internal */
export const Patient_LinkSchemaInternal = BackboneElementSchemaInternal.extend({
	other: z
		.lazy(getReferenceSchema)
		.describe("The other patient resource that the link refers to."),
	type: z
		.enum(["refer", "replaced-by", "replaces", "seealso"])
		.describe(
			"The type of link between this patient resource and another patient resource.",
		),
	_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
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

export const Patient_LinkSchema: z.ZodType<Patient_Link> =
	Patient_LinkSchemaInternal;
