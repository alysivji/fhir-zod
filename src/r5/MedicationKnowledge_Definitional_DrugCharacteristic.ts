// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirBase64Binary, fhirString } from "../shared/fhir-primitives";
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

/** Specifies descriptive properties of the medicine, such as color, shape, imprints, etc. */
export interface MedicationKnowledge_Definitional_DrugCharacteristic
	extends BackboneElement {
	/** A code specifying which characteristic of the medicine is being described (for example, colour, shape, imprint). */
	type?: CodeableConcept;
	/** Description of the characteristic. */
	valueAttachment?: Attachment;
	/** Description of the characteristic. */
	valueBase64Binary?: string;
	/** Extensions for valueBase64Binary */
	_valueBase64Binary?: Element;
	/** Description of the characteristic. */
	valueCodeableConcept?: CodeableConcept;
	/** Description of the characteristic. */
	valueQuantity?: Quantity;
	/** Description of the characteristic. */
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
export const MedicationKnowledge_Definitional_DrugCharacteristicSchemaInternal =
	BackboneElementSchemaInternal.extend({
		type: z.lazy(getCodeableConceptSchema).optional(),
		valueAttachment: z.lazy(getAttachmentSchema).optional(),
		valueBase64Binary: fhirBase64Binary().optional(),
		_valueBase64Binary: z.lazy(getElementSchema).optional(),
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
				"valueCodeableConcept",
				"valueQuantity",
				"valueString",
			].filter((field) => record[field] !== undefined);
			if (value_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of valueAttachment, valueBase64Binary, valueCodeableConcept, valueQuantity, valueString may be present for value[x]",
					path: [value_x_Present[0]],
				});
			}
		});

export const MedicationKnowledge_Definitional_DrugCharacteristicSchema =
	MedicationKnowledge_Definitional_DrugCharacteristicSchemaInternal as z.ZodType<MedicationKnowledge_Definitional_DrugCharacteristic>;
