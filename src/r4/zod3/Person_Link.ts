// Profile: http://hl7.org/fhir/StructureDefinition/Person
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Link to a resource that concerns the same actual person. */
export interface Person_Link extends BackboneElement {
	/** Level of assurance that this link is associated with the target resource. */
	assurance?: "level1" | "level2" | "level3" | "level4";
	/** Extensions for assurance */
	_assurance?: Element;
	/** The resource to which this actual person is associated. */
	target: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Person_LinkSchemaInternal = BackboneElementSchemaInternal.extend({
	assurance: z.enum(["level1", "level2", "level3", "level4"]).optional(),
	_assurance: z.lazy(getElementSchema).optional(),
	target: z.lazy(getReferenceSchema),
})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validateReferenceTarget(
			record.target,
			"target",
			[
				"http://hl7.org/fhir/StructureDefinition/Patient",
				"http://hl7.org/fhir/StructureDefinition/Person",
				"http://hl7.org/fhir/StructureDefinition/Practitioner",
				"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
			],
			["Patient", "Person", "Practitioner", "RelatedPerson"],
			ctx,
		);
	});

export const Person_LinkSchema =
	Person_LinkSchemaInternal as z.ZodType<Person_Link>;
