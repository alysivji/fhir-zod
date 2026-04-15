// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The component of the article or artifact. */
export interface Citation_CitedArtifact_Part extends BackboneElement {
	/** The citation for the full article or artifact. */
	baseCitation?: Reference;
	/** The kind of component. */
	type?: CodeableConcept;
	/** The specification of the component. */
	value?: string;
	/** Extensions for value */
	_value?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Citation_CitedArtifact_PartSchemaInternal =
	BackboneElementSchemaInternal.extend({
		baseCitation: z.lazy(getReferenceSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
		value: fhirString().optional(),
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

export const Citation_CitedArtifact_PartSchema =
	Citation_CitedArtifact_PartSchemaInternal as z.ZodType<Citation_CitedArtifact_Part>;
