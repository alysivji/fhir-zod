// Profile: http://hl7.org/fhir/StructureDefinition/Immunization
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
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
	/** Nominal position in a series. */
	doseNumberPositiveInt?: number;
	/** Extensions for doseNumberPositiveInt */
	_doseNumberPositiveInt?: Element;
	/** Nominal position in a series. */
	doseNumberString?: string;
	/** Extensions for doseNumberString */
	_doseNumberString?: Element;
	/** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
	series?: string;
	/** Extensions for series */
	_series?: Element;
	/** The recommended number of doses to achieve immunity. */
	seriesDosesPositiveInt?: number;
	/** Extensions for seriesDosesPositiveInt */
	_seriesDosesPositiveInt?: Element;
	/** The recommended number of doses to achieve immunity. */
	seriesDosesString?: string;
	/** Extensions for seriesDosesString */
	_seriesDosesString?: Element;
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
		doseNumberPositiveInt: z.number().int().positive().optional(),
		_doseNumberPositiveInt: z.lazy(getElementSchema).optional(),
		doseNumberString: fhirString().optional(),
		_doseNumberString: z.lazy(getElementSchema).optional(),
		series: fhirString().optional(),
		_series: z.lazy(getElementSchema).optional(),
		seriesDosesPositiveInt: z.number().int().positive().optional(),
		_seriesDosesPositiveInt: z.lazy(getElementSchema).optional(),
		seriesDosesString: fhirString().optional(),
		_seriesDosesString: z.lazy(getElementSchema).optional(),
		targetDisease: z.lazy(getCodeableConceptSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const doseNumber_x_Present = [
				"doseNumberPositiveInt",
				"doseNumberString",
			].filter((field) => record[field] !== undefined);
			if (doseNumber_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of doseNumberPositiveInt, doseNumberString must be present for doseNumber[x]",
					path: ["doseNumberPositiveInt"],
				});
			}
			if (doseNumber_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of doseNumberPositiveInt, doseNumberString may be present for doseNumber[x]",
					path: [doseNumber_x_Present[0]],
				});
			}
			const seriesDoses_x_Present = [
				"seriesDosesPositiveInt",
				"seriesDosesString",
			].filter((field) => record[field] !== undefined);
			if (seriesDoses_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of seriesDosesPositiveInt, seriesDosesString may be present for seriesDoses[x]",
					path: [seriesDoses_x_Present[0]],
				});
			}
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
