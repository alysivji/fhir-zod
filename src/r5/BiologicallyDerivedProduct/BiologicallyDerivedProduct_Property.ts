// Profile: http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { Attachment } from "../Attachment";
import { AttachmentSchemaInternal } from "../Attachment";
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

/** A property that is specific to this BiologicallyDerviedProduct instance. */
export interface BiologicallyDerivedProduct_Property extends BackboneElement {
	/** Code that specifies the property. It should reference an established coding system. */
	type: CodeableConcept;
	/** Property values. */
	valueAttachment?: Attachment;
	/** Property values. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** Property values. */
	valueCodeableConcept?: CodeableConcept;
	/** Property values. */
	valueInteger?: number;
	/** Extensions for valueInteger */
	_valueInteger?: Element;
	/** Property values. */
	valuePeriod?: Period;
	/** Property values. */
	valueQuantity?: Quantity;
	/** Property values. */
	valueRange?: Range;
	/** Property values. */
	valueRatio?: Ratio;
	/** Property values. */
	valueString?: string;
	/** Extensions for valueString */
	_valueString?: Element;
}

const getAttachmentSchema = (): z.ZodType<Attachment> =>
	AttachmentSchemaInternal as z.ZodType<Attachment>;
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
export const BiologicallyDerivedProduct_PropertySchemaInternal =
	BackboneElementSchemaInternal.extend({
		type: z.lazy(getCodeableConceptSchema),
		valueAttachment: z.lazy(getAttachmentSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueInteger: z.number().int().optional(),
		_valueInteger: z.lazy(getElementSchema).optional(),
		valuePeriod: z.lazy(getPeriodSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueRange: z.lazy(getRangeSchema).optional(),
		valueRatio: z.lazy(getRatioSchema).optional(),
		valueString: fhirString().optional(),
		_valueString: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = [
				"valueAttachment",
				"valueBoolean",
				"valueCodeableConcept",
				"valueInteger",
				"valuePeriod",
				"valueQuantity",
				"valueRange",
				"valueRatio",
				"valueString",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueAttachment, valueBoolean, valueCodeableConcept, valueInteger, valuePeriod, valueQuantity, valueRange, valueRatio, valueString must be present for value[x]",
					path: ["valueAttachment"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueAttachment, valueBoolean, valueCodeableConcept, valueInteger, valuePeriod, valueQuantity, valueRange, valueRatio, valueString may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const BiologicallyDerivedProduct_PropertySchema =
	BiologicallyDerivedProduct_PropertySchemaInternal as z.ZodType<BiologicallyDerivedProduct_Property>;
