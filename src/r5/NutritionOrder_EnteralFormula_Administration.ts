// Profile: http://hl7.org/fhir/StructureDefinition/NutritionOrder
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { NutritionOrder_EnteralFormula_Administration_Schedule } from "./NutritionOrder_EnteralFormula_Administration_Schedule";
import { NutritionOrder_EnteralFormula_Administration_ScheduleSchemaInternal } from "./NutritionOrder_EnteralFormula_Administration_Schedule";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Ratio } from "./Ratio";
import { RatioSchemaInternal } from "./Ratio";

/** Formula administration instructions as structured data.  This repeating structure allows for changing the administration rate or volume over time for both bolus and continuous feeding.  An example of this would be an instruction to increase the rate of continuous feeding every 2 hours. */
export interface NutritionOrder_EnteralFormula_Administration
	extends BackboneElement {
	/** The volume of formula to provide to the patient per the specified administration schedule. */
	quantity?: Quantity;
	/** The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule. */
	rateQuantity?: Quantity;
	/** The rate of administration of formula via a feeding pump, e.g. 60 mL per hour, according to the specified schedule. */
	rateRatio?: Ratio;
	/** Schedule information for an enteral formula. */
	schedule?: NutritionOrder_EnteralFormula_Administration_Schedule;
}

const getNutritionOrder_EnteralFormula_Administration_ScheduleSchema =
	(): z.ZodType<NutritionOrder_EnteralFormula_Administration_Schedule> =>
		NutritionOrder_EnteralFormula_Administration_ScheduleSchemaInternal as z.ZodType<NutritionOrder_EnteralFormula_Administration_Schedule>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRatioSchema = (): z.ZodType<Ratio> =>
	RatioSchemaInternal as z.ZodType<Ratio>;

/** @internal */
export const NutritionOrder_EnteralFormula_AdministrationSchemaInternal =
	BackboneElementSchemaInternal.extend({
		quantity: z.lazy(getQuantitySchema).optional(),
		rateQuantity: z.lazy(getQuantitySchema).optional(),
		rateRatio: z.lazy(getRatioSchema).optional(),
		schedule: z
			.lazy(getNutritionOrder_EnteralFormula_Administration_ScheduleSchema)
			.optional(),
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
