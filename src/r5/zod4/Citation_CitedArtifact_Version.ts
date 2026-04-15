// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The defined version of the cited artifact. */
export interface Citation_CitedArtifact_Version extends BackboneElement {
	/** Citation for the main version of the cited artifact. */
	baseCitation?: Reference;
	/** The version number or other version identifier. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Citation_CitedArtifact_VersionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		baseCitation: z.lazy(getReferenceSchema).optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.baseCitation,
				"baseCitation",
				["http://hl7.org/fhir/StructureDefinition/Citation"],
				["Citation"],
				ctx,
			);
		});

export const Citation_CitedArtifact_VersionSchema =
	Citation_CitedArtifact_VersionSchemaInternal as z.ZodType<Citation_CitedArtifact_Version>;
