// Profile: http://hl7.org/fhir/StructureDefinition/Permission
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Explicit FHIR Resource references. */
export interface Permission_Rule_Data_Resource extends BackboneElement {
	/** How the resource reference is interpreted when testing consent restrictions. */
	meaning: "authoredby" | "dependents" | "instance" | "related";
	/** Extensions for meaning */
	_meaning?: Element;
	/** A reference to a specific resource that defines which resources are covered by this consent. */
	reference: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Permission_Rule_Data_ResourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		meaning: z.enum(["authoredby", "dependents", "instance", "related"]),
		_meaning: z.lazy(getElementSchema).optional(),
		reference: z.lazy(getReferenceSchema),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.reference,
				"reference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const Permission_Rule_Data_ResourceSchema =
	Permission_Rule_Data_ResourceSchemaInternal as z.ZodType<Permission_Rule_Data_Resource>;
