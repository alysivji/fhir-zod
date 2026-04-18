// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Todo. */
export interface SubstanceReferenceInformation_GeneElement
	extends BackboneElement {
	/** Todo. */
	element?: Identifier;
	/** Todo. */
	source?: Array<Reference>;
	/** Todo. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const SubstanceReferenceInformation_GeneElementSchemaInternal =
	BackboneElementSchemaInternal.extend({
		element: z.lazy(getIdentifierSchema).optional(),
		source: z.lazy(getReferenceSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.source,
				"source",
				["http://hl7.org/fhir/StructureDefinition/DocumentReference"],
				["DocumentReference"],
				ctx,
			);
		});

export const SubstanceReferenceInformation_GeneElementSchema =
	SubstanceReferenceInformation_GeneElementSchemaInternal as z.ZodType<SubstanceReferenceInformation_GeneElement>;
