// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T04:42:40.346Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Link to another patient resource that concerns the same actual patient. */
export interface Patient_Link extends BackboneElement {
	/** The other patient resource that the link refers to. */
	other: Reference;
	/** The type of link between this patient resource and another patient resource. */
	type: "refer" | "replaced-by" | "replaces" | "seealso";
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getReferenceSchema = (): z.ZodType<Reference> => ReferenceSchemaInternal;

/** @internal */
export const Patient_LinkSchemaInternal = BackboneElementSchemaInternal.extend({
	other: z.lazy(getReferenceSchema),
	type: z.enum(["refer", "replaced-by", "replaces", "seealso"]),
	_type: z.lazy(getElementSchema).optional(),
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
