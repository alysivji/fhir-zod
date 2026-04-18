// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Ratio } from "../Ratio";
import { RatioSchemaInternal } from "../Ratio";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";

/** Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours. */
export interface NutritionOrder_EnteralFormula_Administration
	extends BackboneElement {
	/** The volume of formula to provide to the patient per the specified administration schedule. */
	quantity?: Quantity;
	/** The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule. */
	rateQuantity?: Quantity;
	/** The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule. */
	rateRatio?: Ratio;
	/** The time period and frequency at which the enteral formula should be delivered to the patient. */
	schedule?: Timing;
}

const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const NutritionOrder_EnteralFormula_AdministrationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		quantity: z.lazy(getQuantitySchema).optional(),
		rateQuantity: z.lazy(getQuantitySchema).optional(),
		rateRatio: z.lazy(getRatioSchema).optional(),
		schedule: z.lazy(getTimingSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const rate_x_Present = ["rateQuantity", "rateRatio"].filter(
				(field) => record[field] !== undefined,
			);
			if (rate_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of rateQuantity, rateRatio may be present for rate[x]",
					path: [rate_x_Present[0]],
				});
			}
		});

export const NutritionOrder_EnteralFormula_AdministrationSchema =
	NutritionOrder_EnteralFormula_AdministrationSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula_Administration>;
