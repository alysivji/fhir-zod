// Profile: http://hl7.org/fhir/StructureDefinition/ValueSet
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import {
	fhirCode,
	fhirDateTime,
	fhirString,
} from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** A subproperty value for this concept. */
export interface ValueSet_Expansion_Contains_Property_SubProperty
	extends BackboneElement {
	/** A code that is a reference to ValueSet.expansion.property.code. */
	code: string;
	/** Extensions for code */
	_code?: Element;
	/** The value of this subproperty. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The value of this subproperty. */
	valueCode?: string;
	/** Extensions for valueCode */
	_valueCode?: Element;
	/** The value of this subproperty. */
	valueCoding?: Coding;
	/** The value of this subproperty. */
	valueDateTime?: string;
	/** Extensions for valueDateTime */
	_valueDateTime?: Element;
	/** The value of this subproperty. */
	valueDecimal?: number;
	/** Extensions for valueDecimal */
	_valueDecimal?: Element;
	/** The value of this subproperty. */
	valueInteger?: number;
	/** Extensions for valueInteger */
	_valueInteger?: Element;
	/** The value of this subproperty. */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ValueSet_Expansion_Contains_Property_SubPropertySchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: fhirCode(),
		_code: z.lazy(getElementSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCode: fhirCode().optional(),
		_valueCode: z.lazy(getElementSchema).optional(),
		valueCoding: z.lazy(getCodingSchema).optional(),
		valueDateTime: fhirDateTime().optional(),
		_valueDateTime: z.lazy(getElementSchema).optional(),
		valueDecimal: z.number().optional(),
		_valueDecimal: z.lazy(getElementSchema).optional(),
		valueInteger: z.number().int().optional(),
		_valueInteger: z.lazy(getElementSchema).optional(),
		valueString: fhirString().optional(),
		_valueString: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = [
				"valueBoolean",
				"valueCode",
				"valueCoding",
				"valueDateTime",
				"valueDecimal",
				"valueInteger",
				"valueString",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueBoolean, valueCode, valueCoding, valueDateTime, valueDecimal, valueInteger, valueString must be present for value[x]",
					path: ["valueBoolean"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueBoolean, valueCode, valueCoding, valueDateTime, valueDecimal, valueInteger, valueString may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const ValueSet_Expansion_Contains_Property_SubPropertySchema =
	ValueSet_Expansion_Contains_Property_SubPropertySchemaInternal as z.ZodType<ValueSet_Expansion_Contains_Property_SubProperty>;
