// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDateTime } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableReference } from "./CodeableReference";
import { CodeableReferenceSchemaInternal } from "./CodeableReference";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** Categorical data indicating that an adverse event is associated in time to an immunization. */
export interface Immunization_Reaction extends BackboneElement {
	/** Date of reaction to the immunization. */
	date?: string;
	/** Extensions for date */
	_date?: Element;
	/** Details of the reaction. */
	manifestation?: CodeableReference;
	/** Self-reported indicator. */
	reported?: boolean;
	/** Extensions for reported */
	_reported?: Element;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Immunization_ReactionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		date: fhirDateTime().optional(),
		_date: z.lazy(getElementSchema).optional(),
		manifestation: z.lazy(getCodeableReferenceSchema).optional(),
		reported: z.boolean().optional(),
		_reported: z.lazy(getElementSchema).optional(),
	}).strict();

export const Immunization_ReactionSchema =
	Immunization_ReactionSchemaInternal as z.ZodType<Immunization_Reaction>;
