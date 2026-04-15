// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Provenance and copyright of classification. */
export interface Citation_CitedArtifact_Classification_WhoClassified
	extends BackboneElement {
	/** Rights management statement for the classification. */
	classifierCopyright?: string;
	/** Extensions for classifierCopyright */
	_classifierCopyright?: Element;
	/** Acceptable to re-use the classification. */
	freeToShare?: boolean;
	/** Extensions for freeToShare */
	_freeToShare?: Element;
	/** Organization who created the classification. */
	organization?: Reference;
	/** Person who created the classification. */
	person?: Reference;
	/** The publisher of the classification, not the publisher of the article or artifact being cited. */
	publisher?: Reference;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Citation_CitedArtifact_Classification_WhoClassifiedSchemaInternal =
	BackboneElementSchemaInternal.extend({
		classifierCopyright: fhirString().optional(),
		_classifierCopyright: z.lazy(getElementSchema).optional(),
		freeToShare: z.boolean().optional(),
		_freeToShare: z.lazy(getElementSchema).optional(),
		organization: z.lazy(getReferenceSchema).optional(),
		person: z.lazy(getReferenceSchema).optional(),
		publisher: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.organization,
				"organization",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
			validateReferenceTarget(
				record.person,
				"person",
				[
					"http://hl7.org/fhir/StructureDefinition/Person",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
				],
				["Person", "Practitioner"],
				ctx,
			);
			validateReferenceTarget(
				record.publisher,
				"publisher",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const Citation_CitedArtifact_Classification_WhoClassifiedSchema =
	Citation_CitedArtifact_Classification_WhoClassifiedSchemaInternal as z.ZodType<Citation_CitedArtifact_Classification_WhoClassified>;
