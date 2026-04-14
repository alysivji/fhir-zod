// Profile: http://hl7.org/fhir/StructureDefinition/InventoryItem
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDateTime, fhirString, fhirUrl } from "../shared/fhir-primitives";
import type { Address } from "./Address";
import { AddressSchemaInternal } from "./Address";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";

/** The descriptive or identifying characteristics of the item. */
export interface InventoryItem_Characteristic extends BackboneElement {
	/** The type of characteristic that is being defined. */
	characteristicType: CodeableConcept;
	/** The value of the attribute. */
	valueAddress?: Address;
	/** The value of the attribute. */
	valueAnnotation?: Annotation;
	/** The value of the attribute. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The value of the attribute. */
	valueCodeableConcept?: CodeableConcept;
	/** The value of the attribute. */
	valueDateTime?: string;
	/** Extensions for valueDateTime */
	_valueDateTime?: Element;
	/** The value of the attribute. */
	valueDecimal?: number;
	/** Extensions for valueDecimal */
	_valueDecimal?: Element;
	/** The value of the attribute. */
	valueDuration?: Duration;
	/** The value of the attribute. */
	valueInteger?: number;
	/** Extensions for valueInteger */
	_valueInteger?: Element;
	/** The value of the attribute. */
	valueQuantity?: Quantity;
	/** The value of the attribute. */
	valueRange?: Range;
	/** The value of the attribute. */
	valueRatio?: Ratio;
	/** The value of the attribute. */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
	/** The value of the attribute. */
	valueUrl?: string;
	/** Extensions for valueUrl */
	_valueUrl?: Element;
}

const getAddressSchema = (): z.ZodType<Address> =>
	AddressSchemaInternal as z.ZodType<Address>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const InventoryItem_CharacteristicSchemaInternal =
	BackboneElementSchemaInternal.extend({
		characteristicType: z.lazy(getCodeableConceptSchema),
		valueAddress: z.lazy(getAddressSchema).optional(),
		valueAnnotation: z.lazy(getAnnotationSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueDateTime: fhirDateTime().optional(),
		_valueDateTime: z.lazy(getElementSchema).optional(),
		valueDecimal: z.number().optional(),
		_valueDecimal: z.lazy(getElementSchema).optional(),
		valueDuration: z.lazy(getDurationSchema).optional(),
		valueInteger: z.number().int().optional(),
		_valueInteger: z.lazy(getElementSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueRange: z.lazy(getRangeSchema).optional(),
		valueRatio: z.lazy(getRatioSchema).optional(),
		valueString: fhirString().optional(),
		_valueString: z.lazy(getElementSchema).optional(),
		valueUrl: fhirUrl().optional(),
		_valueUrl: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = [
				"valueAddress",
				"valueAnnotation",
				"valueBoolean",
				"valueCodeableConcept",
				"valueDateTime",
				"valueDecimal",
				"valueDuration",
				"valueInteger",
				"valueQuantity",
				"valueRange",
				"valueRatio",
				"valueString",
				"valueUrl",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueAddress, valueAnnotation, valueBoolean, valueCodeableConcept, valueDateTime, valueDecimal, valueDuration, valueInteger, valueQuantity, valueRange, valueRatio, valueString, valueUrl must be present for value[x]",
					path: ["valueAddress"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueAddress, valueAnnotation, valueBoolean, valueCodeableConcept, valueDateTime, valueDecimal, valueDuration, valueInteger, valueQuantity, valueRange, valueRatio, valueString, valueUrl may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const InventoryItem_CharacteristicSchema =
	InventoryItem_CharacteristicSchemaInternal as z.ZodType<InventoryItem_Characteristic>;
