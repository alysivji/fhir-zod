// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** The protocol (set of recommendations) being followed by the provider who administered the dose. */
export interface Immunization_ProtocolApplied extends BackboneElement {
	/** Indicates the authority who published the protocol (e.g. ACIP) that is being followed. */
	authority?: Reference;
	/** Nominal position in a series as intended by the practitioner administering the dose. */
	doseNumber: string;
	/** Extensions for doseNumber */
	_doseNumber?: Element;
	/** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
	series?: string;
	/** Extensions for series */
	_series?: Element;
	/** The recommended number of doses to achieve immunity as intended by the practitioner administering the dose. */
	seriesDoses?: string;
	/** Extensions for seriesDoses */
	_seriesDoses?: Element;
	/** The vaccine preventable disease the dose is being administered against. */
	targetDisease?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Immunization_ProtocolAppliedSchemaInternal =
	BackboneElementSchemaInternal.extend({
		authority: z.lazy(getReferenceSchema).optional(),
		doseNumber: fhirString(),
		_doseNumber: z.lazy(getElementSchema).optional(),
		series: fhirString().optional(),
		_series: z.lazy(getElementSchema).optional(),
		seriesDoses: fhirString().optional(),
		_seriesDoses: z.lazy(getElementSchema).optional(),
		targetDisease: z.lazy(getCodeableConceptSchema).array().optional(),
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

export const Immunization_ProtocolAppliedSchema =
	Immunization_ProtocolAppliedSchemaInternal as z.ZodType<Immunization_ProtocolApplied>;
