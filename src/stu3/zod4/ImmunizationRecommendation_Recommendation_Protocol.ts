// Profile: http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Contains information about the protocol under which the vaccine was administered. */
export interface ImmunizationRecommendation_Recommendation_Protocol
	extends BackboneElement {
	/** Indicates the authority who published the protocol.  For example, ACIP. */
	authority?: Reference;
	/** Contains the description about the protocol under which the vaccine was administered. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol. */
	doseSequence?: number;
	/** Extensions for doseSequence */
	_doseSequence?: Element;
	/** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
	series?: string;
	/** Extensions for series */
	_series?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const ImmunizationRecommendation_Recommendation_ProtocolSchemaInternal =
	BackboneElementSchemaInternal.extend({
		authority: z.lazy(getReferenceSchema).optional(),
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		doseSequence: z.number().int().positive().optional(),
		_doseSequence: z.lazy(getElementSchema).optional(),
		series: fhirString().optional(),
		_series: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.authority,
				"authority",
				["http://hl7.org/fhir/StructureDefinition/Organization"],
				["Organization"],
				ctx,
			);
		});

export const ImmunizationRecommendation_Recommendation_ProtocolSchema =
	ImmunizationRecommendation_Recommendation_ProtocolSchemaInternal as z.ZodType<ImmunizationRecommendation_Recommendation_Protocol>;
