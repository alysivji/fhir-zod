// Profile: http://hl7.org/fhir/StructureDefinition/Observation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T01:26:20.392Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** A  reference to another resource (usually another Observation) whose relationship is defined by the relationship type code. */
export interface Observation_Related extends BackboneElement {
	/** A reference to the observation or [QuestionnaireResponse](questionnaireresponse.html#) resource that is related to this observation. */
	target: Reference;
	/** A code specifying the kind of relationship that exists with the target resource. */
	type?:
		| "derived-from"
		| "has-member"
		| "interfered-by"
		| "qualified-by"
		| "replaces"
		| "sequel-to";
	/** Extensions for type */
	_type?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Observation_RelatedSchemaInternal =
	BackboneElementSchemaInternal.extend({
		target: z.lazy(getReferenceSchema),
		type: z
			.enum([
				"derived-from",
				"has-member",
				"interfered-by",
				"qualified-by",
				"replaces",
				"sequel-to",
			])
			.optional(),
		_type: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.target,
				"target",
				[
					"http://hl7.org/fhir/StructureDefinition/Observation",
					"http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
					"http://hl7.org/fhir/StructureDefinition/Sequence",
				],
				["Observation", "QuestionnaireResponse", "Sequence"],
				ctx,
			);
		});

export const Observation_RelatedSchema =
	Observation_RelatedSchemaInternal as z.ZodType<Observation_Related>;
