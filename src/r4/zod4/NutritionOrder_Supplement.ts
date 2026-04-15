// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-15T06:47:56.782Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** Oral nutritional products given in order to add further nutritional value to the patient's diet. */
export interface NutritionOrder_Supplement extends BackboneElement {
	/** Free text or additional instructions or information pertaining to the oral supplement. */
	instruction?: string;
	/** Extensions for instruction */
	_instruction?: Element;
	/** The product or brand name of the nutritional supplement such as "Acme Protein Shake". */
	productName?: string;
	/** Extensions for productName */
	_productName?: Element;
	/** The amount of the nutritional supplement to be given. */
	quantity?: Quantity;
	/** The time period and frequency at which the supplement(s) should be given.  The supplement should be given for the combination of all schedules if more than one schedule is present. */
	schedule?: Array<Timing>;
	/** The kind of nutritional supplement product required such as a high protein or pediatric clear liquid supplement. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const NutritionOrder_SupplementSchemaInternal =
	BackboneElementSchemaInternal.extend({
		instruction: fhirString().optional(),
		_instruction: z.lazy(getElementSchema).optional(),
		productName: fhirString().optional(),
		_productName: z.lazy(getElementSchema).optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		schedule: z.lazy(getTimingSchema).array().optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const NutritionOrder_SupplementSchema =
	NutritionOrder_SupplementSchemaInternal as z.ZodType<NutritionOrder_Supplement>;
