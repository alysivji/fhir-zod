// Profile: http://hl7.org/fhir/StructureDefinition/SubstanceDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { fhirDate } from "../../shared/fhir-primitives";
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

/** General specifications for this substance. */
export interface SubstanceDefinition_Property extends BackboneElement {
	/** A code expressing the type of property. */
	type: CodeableConcept;
	/** A value for the property. */
	valueAttachment?: Attachment;
	/** A value for the property. */
	valueBoolean?: boolean;
	/** Extensions for valueBoolean */
	_valueBoolean?: Element;
	/** A value for the property. */
	valueCodeableConcept?: CodeableConcept;
	/** A value for the property. */
	valueDate?: string;
	/** Extensions for valueDate */
	_valueDate?: Element;
	/** A value for the property. */
	valueQuantity?: Quantity;
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
export const SubstanceDefinition_PropertySchemaInternal =
	BackboneElementSchemaInternal.extend({
		type: z.lazy(getCodeableConceptSchema),
		valueAttachment: z.lazy(getAttachmentSchema).optional(),
		valueBoolean: z.boolean().optional(),
		_valueBoolean: z.lazy(getElementSchema).optional(),
		valueCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		valueDate: fhirDate().optional(),
		_valueDate: z.lazy(getElementSchema).optional(),
		valueQuantity: z.lazy(getQuantitySchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const value_x_Present = [
				"valueAttachment",
				"valueBoolean",
				"valueCodeableConcept",
				"valueDate",
				"valueQuantity",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueAttachment, valueBoolean, valueCodeableConcept, valueDate, valueQuantity may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const SubstanceDefinition_PropertySchema =
	SubstanceDefinition_PropertySchemaInternal as z.ZodType<SubstanceDefinition_Property>;
