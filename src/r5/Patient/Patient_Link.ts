// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Link to a Patient or RelatedPerson resource that concerns the same actual individual. */
export interface Patient_Link extends BackboneElement {
	/** Link to a Patient or RelatedPerson resource that concerns the same actual individual. */
	other: Reference;
	/** The type of link between this patient resource and another patient resource. */
	type: "refer" | "replaced-by" | "replaces" | "seealso";
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

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

export const Patient_LinkSchema =
	Patient_LinkSchemaInternal as z.ZodType<Patient_Link>;
