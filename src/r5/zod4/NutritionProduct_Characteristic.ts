// Profile: http://hl7.org/fhir/StructureDefinition/NutritionProduct
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import {
	fhirBase64Binary,
	fhirString,
} from "../../shared/fhir-primitives-zod4";
import type { Attachment } from "./Attachment";
import { AttachmentSchemaInternal } from "./Attachment";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** Specifies descriptive properties of the nutrition product. */
export interface NutritionProduct_Characteristic extends BackboneElement {
	/** A code specifying which characteristic of the product is being described (for example, colour, shape). */
	type: CodeableConcept;
	/** The actual characteristic value corresponding to the type. */
	valueAttachment?: Attachment;
	/** The actual characteristic value corresponding to the type. */
	valueBase64Binary?: string;
	/** Extensions for valueBase64Binary */
	_valueBase64Binary?: Element;
	/** The actual characteristic value corresponding to the type. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The actual characteristic value corresponding to the type. */
	valueCodeableConcept?: CodeableConcept;
	/** The actual characteristic value corresponding to the type. */
	valueQuantity?: Quantity;
	/** The actual characteristic value corresponding to the type. */
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
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const NutritionProduct_CharacteristicSchemaInternal =
	BackboneElementSchemaInternal.extend({
		type: z.lazy(getCodeableConceptSchema),
		valueAttachment: z.lazy(getAttachmentSchema).optional(),
		valueBase64Binary: fhirBase64Binary().optional(),
		_valueBase64Binary: z.lazy(getElementSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueString: fhirString().optional(),
		_valueString: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = [
				"valueAttachment",
				"valueBase64Binary",
				"valueBoolean",
				"valueCodeableConcept",
				"valueQuantity",
				"valueString",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueAttachment, valueBase64Binary, valueBoolean, valueCodeableConcept, valueQuantity, valueString must be present for value[x]",
					path: ["valueAttachment"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueAttachment, valueBase64Binary, valueBoolean, valueCodeableConcept, valueQuantity, valueString may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const NutritionProduct_CharacteristicSchema =
	NutritionProduct_CharacteristicSchemaInternal as z.ZodType<NutritionProduct_Characteristic>;
