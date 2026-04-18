// Profile: http://hl7.org/fhir/StructureDefinition/ProductShelfLife
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneType } from "./BackboneType";
import { BackboneTypeSchemaInternal } from "./BackboneType";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** ProductShelfLife Type: The shelf-life and storage information for a medicinal product item or container can be described using this class. */
export interface ProductShelfLife extends BackboneType {
	/** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used. */
	periodDuration?: Duration;
	/** The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used. */
	periodString?: string;
	/** Extensions for periodString */
	_periodString?: Element;
	/** Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified. */
	specialPrecautionsForStorage?: Array<CodeableConcept>;
	/** This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ProductShelfLifeSchemaInternal = BackboneTypeSchemaInternal.extend(
	{
		periodDuration: z.lazy(getDurationSchema).optional(),
		periodString: fhirString().optional(),
		_periodString: z.lazy(getElementSchema).optional(),
		specialPrecautionsForStorage: z
			.lazy(getCodeableConceptSchema)
			.array()
			.optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	},
)
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const period_x_Present = ["periodDuration", "periodString"].filter(
			(field) => record[field] !== undefined,
		);
		if (period_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of periodDuration, periodString may be present for period[x]",
				path: [period_x_Present[0]],
			});
		}
	});

export const ProductShelfLifeSchema =
	ProductShelfLifeSchemaInternal as z.ZodType<ProductShelfLife>;
