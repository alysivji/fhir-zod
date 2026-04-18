// Profile: http://hl7.org/fhir/StructureDefinition/Questionnaire
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import { fhirDate, fhirString, fhirTime } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** One of the permitted answers for a "choice" or "open-choice" question. */
export interface Questionnaire_Item_Option extends BackboneElement {
	/** A potential answer that's allowed as the answer to this question. */
	valueCoding?: Coding;
	/** A potential answer that's allowed as the answer to this question. */
	valueDate?: string;
	/** Extensions for valueDate */
	_valueDate?: Element;
	/** A potential answer that's allowed as the answer to this question. */
	valueInteger?: number;
	/** Extensions for valueInteger */
	_valueInteger?: Element;
	/** A potential answer that's allowed as the answer to this question. */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
	/** A potential answer that's allowed as the answer to this question. */
	valueTime?: string;
	/** Extensions for valueTime */
	_valueTime?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Questionnaire_Item_OptionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		valueCoding: z.lazy(getCodingSchema).optional(),
		valueDate: fhirDate().optional(),
		_valueDate: z.lazy(getElementSchema).optional(),
		valueInteger: z.number().int().optional(),
		_valueInteger: z.lazy(getElementSchema).optional(),
		valueString: fhirString().optional(),
		_valueString: z.lazy(getElementSchema).optional(),
		valueTime: fhirTime().optional(),
		_valueTime: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = [
				"valueCoding",
				"valueDate",
				"valueInteger",
				"valueString",
				"valueTime",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueCoding, valueDate, valueInteger, valueString, valueTime must be present for value[x]",
					path: ["valueCoding"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueCoding, valueDate, valueInteger, valueString, valueTime may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const Questionnaire_Item_OptionSchema =
	Questionnaire_Item_OptionSchemaInternal as z.ZodType<Questionnaire_Item_Option>;
