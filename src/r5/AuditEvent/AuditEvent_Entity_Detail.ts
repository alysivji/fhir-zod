// Profile: http://hl7.org/fhir/StructureDefinition/AuditEvent
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import {
	fhirBase64Binary,
	fhirDateTime,
	fhirString,
	fhirTime,
} from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Ratio } from "../Ratio";
import { RatioSchemaInternal } from "../Ratio";

/** Tagged value pairs for conveying additional information about the entity. */
export interface AuditEvent_Entity_Detail extends BackboneElement {
	/** The type of extra detail provided in the value. */
	type: CodeableConcept;
	/** The  value of the extra detail. */
	valueBase64Binary?: string;
	/** Extensions for valueBase64Binary */
	_valueBase64Binary?: Element;
	/** The  value of the extra detail. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The  value of the extra detail. */
	valueCodeableConcept?: CodeableConcept;
	/** The  value of the extra detail. */
	valueDateTime?: string;
	/** Extensions for valueDateTime */
	_valueDateTime?: Element;
	/** The  value of the extra detail. */
	valueInteger?: number;
	/** Extensions for valueInteger */
	_valueInteger?: Element;
	/** The  value of the extra detail. */
	valuePeriod?: Period;
	/** The  value of the extra detail. */
	valueQuantity?: Quantity;
	/** The  value of the extra detail. */
	valueRange?: Range;
	/** The  value of the extra detail. */
	valueRatio?: Ratio;
	/** The  value of the extra detail. */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
	/** The  value of the extra detail. */
	valueTime?: string;
	/** Extensions for valueTime */
	_valueTime?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const AuditEvent_Entity_DetailSchemaInternal =
	BackboneElementSchemaInternal.extend({
		type: z.lazy(getCodeableConceptSchema),
		valueBase64Binary: fhirBase64Binary().optional(),
		_valueBase64Binary: z.lazy(getElementSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueDateTime: fhirDateTime().optional(),
		_valueDateTime: z.lazy(getElementSchema).optional(),
		valueInteger: z.number().int().optional(),
		_valueInteger: z.lazy(getElementSchema).optional(),
		valuePeriod: z.lazy(getPeriodSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueRange: z.lazy(getRangeSchema).optional(),
		valueRatio: z.lazy(getRatioSchema).optional(),
		valueString: fhirString().optional(),
		_valueString: z.lazy(getElementSchema).optional(),
		valueTime: fhirTime().optional(),
		_valueTime: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = [
				"valueBase64Binary",
				"valueBoolean",
				"valueCodeableConcept",
				"valueDateTime",
				"valueInteger",
				"valuePeriod",
				"valueQuantity",
				"valueRange",
				"valueRatio",
				"valueString",
				"valueTime",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueBase64Binary, valueBoolean, valueCodeableConcept, valueDateTime, valueInteger, valuePeriod, valueQuantity, valueRange, valueRatio, valueString, valueTime must be present for value[x]",
					path: ["valueBase64Binary"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueBase64Binary, valueBoolean, valueCodeableConcept, valueDateTime, valueInteger, valuePeriod, valueQuantity, valueRange, valueRatio, valueString, valueTime may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const AuditEvent_Entity_DetailSchema =
	AuditEvent_Entity_DetailSchemaInternal as z.ZodType<AuditEvent_Entity_Detail>;
