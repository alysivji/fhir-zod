// Profile: http://hl7.org/fhir/StructureDefinition/ImplementationGuide
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirCanonical, fhirUrl } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource. */
export interface ImplementationGuide_Manifest_Resource extends BackboneElement {
	/** If true, indicates the resource is an example instance. */
	isExample?: boolean;
	/** Extensions for isExample */
	_isExample?: Element;
	/** If present, indicates profile(s) the instance is valid against. */
	profile?: Array<string | null>;
	/** Extensions for profile */
	_profile?: Array<Element | null>;
	/** Where this resource is found. */
	reference: Reference;
	/** The relative path for primary page for this resource within the IG. */
	relativePath?: string;
	/** Extensions for relativePath */
	_relativePath?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImplementationGuide_Manifest_ResourceSchemaInternal =
	BackboneElementSchemaInternal.extend({
		isExample: z.boolean().optional(),
		_isExample: z.lazy(getElementSchema).optional(),
		profile: fhirCanonical().nullable().array().optional(),
		_profile: z.lazy(getElementSchema).nullable().array().optional(),
		reference: z.lazy(getReferenceSchema),
		relativePath: fhirUrl().optional(),
		_relativePath: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.profile,
				record._profile,
				"profile",
				"_profile",
				ctx,
			);
			validateReferenceTarget(
				record.reference,
				"reference",
				["http://hl7.org/fhir/StructureDefinition/Resource"],
				["Resource"],
				ctx,
			);
		});

export const ImplementationGuide_Manifest_ResourceSchema =
	ImplementationGuide_Manifest_ResourceSchemaInternal as z.ZodType<ImplementationGuide_Manifest_Resource>;
