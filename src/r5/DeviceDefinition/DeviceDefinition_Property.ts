// Profile: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
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
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";

/** Static or essentially fixed characteristics or features of this kind of device that are otherwise not captured in more specific attributes, e.g., time or timing attributes, resolution, accuracy, and physical attributes. */
export interface DeviceDefinition_Property extends BackboneElement {
	/** Code that specifies the property such as a resolution or color being represented. */
	type: CodeableConcept;
	/** The value of the property specified by the associated property.type code. */
	valueAttachment?: Attachment;
	/** The value of the property specified by the associated property.type code. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** The value of the property specified by the associated property.type code. */
	valueCodeableConcept?: CodeableConcept;
	/** The value of the property specified by the associated property.type code. */
	valueInteger?: number;
	/** Extensions for valueInteger */
	_valueInteger?: Element;
	/** The value of the property specified by the associated property.type code. */
	valueQuantity?: Quantity;
	/** The value of the property specified by the associated property.type code. */
	valueRange?: Range;
	/** The value of the property specified by the associated property.type code. */
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
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const DeviceDefinition_PropertySchemaInternal =
	BackboneElementSchemaInternal.extend({
		type: z.lazy(getCodeableConceptSchema),
		valueAttachment: z.lazy(getAttachmentSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueInteger: z.number().int().optional(),
		_valueInteger: z.lazy(getElementSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
		valueRange: z.lazy(getRangeSchema).optional(),
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
				"valueQuantity",
				"valueRange",
				"valueString",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length === 0) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"One of valueAttachment, valueBoolean, valueCodeableConcept, valueInteger, valueQuantity, valueRange, valueString must be present for value[x]",
					path: ["valueAttachment"],
				});
			}
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueAttachment, valueBoolean, valueCodeableConcept, valueInteger, valueQuantity, valueRange, valueString may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const DeviceDefinition_PropertySchema =
	DeviceDefinition_PropertySchemaInternal as z.ZodType<DeviceDefinition_Property>;
