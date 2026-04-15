// Profile: http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Other claims which are related to this claim such as prior submissions or claims for related services or for the same event. */
export interface ExplanationOfBenefit_Related extends BackboneElement {
	/** Reference to a related claim. */
	claim?: Reference;
	/** An alternate organizational reference to the case or file to which this particular claim pertains. */
	reference?: Identifier;
	/** A code to convey how the claims are related. */
	relationship?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ExplanationOfBenefit_RelatedSchemaInternal =
	BackboneElementSchemaInternal.extend({
		claim: z.lazy(getReferenceSchema).optional(),
		reference: z.lazy(getIdentifierSchema).optional(),
		relationship: z.lazy(getCodeableConceptSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.claim,
				"claim",
				["http://hl7.org/fhir/StructureDefinition/Claim"],
				["Claim"],
				ctx,
			);
		});

export const ExplanationOfBenefit_RelatedSchema =
	ExplanationOfBenefit_RelatedSchemaInternal as z.ZodType<ExplanationOfBenefit_Related>;
