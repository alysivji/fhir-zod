// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirDateTime } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Categorical data indicating that an adverse event is associated in time to an immunization. */
export interface Immunization_Reaction extends BackboneElement {
	/** Date of reaction to the immunization. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Details of the reaction. */
	detail?: Reference;
	/** Self-reported indicator. */
	reported?: boolean;
	/** Extensions for reported */
	_reported?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Immunization_ReactionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		detail: z.lazy(getReferenceSchema).optional(),
		reported: z.boolean().optional(),
		_reported: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.detail,
				"detail",
				["http://hl7.org/fhir/StructureDefinition/Observation"],
				["Observation"],
				ctx,
			);
		});

export const Immunization_ReactionSchema =
	Immunization_ReactionSchemaInternal as z.ZodType<Immunization_Reaction>;
