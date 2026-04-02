// Profile: http://hl7.org/fhir/StructureDefinition/Substance
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T05:26:21.962Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A substance can be composed of other substances. */
export interface Substance_Ingredient extends BackboneElement {
	/** The amount of the ingredient in the substance - a concentration ratio. */
	quantity?: Ratio;
	/** Another substance that is a component of this substance. */
	substanceCodeableConcept?: CodeableConcept;
	/** Another substance that is a component of this substance. */
	substanceReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Substance_IngredientSchemaInternal =
	BackboneElementSchemaInternal.extend({
		quantity: z.lazy(getRatioSchema).optional(),
		substanceCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		substanceReference: z.lazy(getReferenceSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const substance_x_Present = [
				"substanceCodeableConcept",
				"substanceReference",
			].filter((field) => record[field] !== undefined);
			if (substance_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of substanceCodeableConcept, substanceReference must be present for substance[x]",
					path: ["substanceCodeableConcept"],
				});
			}
			if (substance_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of substanceCodeableConcept, substanceReference may be present for substance[x]",
					path: [substance_x_Present[0]],
				});
			}
			validateReferenceTarget(
				record.substanceReference,
				"substanceReference",
				["http://hl7.org/fhir/StructureDefinition/Substance"],
				["Substance"],
				ctx,
			);
		});

export const Substance_IngredientSchema =
	Substance_IngredientSchemaInternal as z.ZodType<Substance_Ingredient>;
