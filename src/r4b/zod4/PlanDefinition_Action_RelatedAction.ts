// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirId } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** A relationship to another action such as "before" or "30-60 minutes after start of". */
export interface PlanDefinition_Action_RelatedAction extends BackboneElement {
	/** The element id of the related action. */
	actionId: string;
	/** Extensions for actionId */
	_actionId?: Element;
	/** A duration or range of durations to apply to the relationship. For example, 30-60 minutes before. */
	offsetDuration?: Duration;
	/** A duration or range of durations to apply to the relationship. For example, 30-60 minutes before. */
	offsetRange?: Range;
	/** The relationship of this action to the related action. */
	relationship:
		| "after"
		| "after-end"
		| "after-start"
		| "before"
		| "before-end"
		| "before-start"
		| "concurrent"
		| "concurrent-with-end"
		| "concurrent-with-start";
	/** Extensions for relationship */
	_relationship?: Element;
}

const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const PlanDefinition_Action_RelatedActionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		actionId: fhirId(),
		_actionId: z.lazy(getElementSchema).optional(),
		offsetDuration: z.lazy(getDurationSchema).optional(),
		offsetRange: z.lazy(getRangeSchema).optional(),
		relationship: z.enum([
			"after",
			"after-end",
			"after-start",
			"before",
			"before-end",
			"before-start",
			"concurrent",
			"concurrent-with-end",
			"concurrent-with-start",
		]),
		_relationship: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const offset_x_Present = ["offsetDuration", "offsetRange"].filter(
				(field) => record[field] !== undefined,
			);
			if (offset_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of offsetDuration, offsetRange may be present for offset[x]",
					path: [offset_x_Present[0]],
				});
			}
		});

export const PlanDefinition_Action_RelatedActionSchema =
	PlanDefinition_Action_RelatedActionSchemaInternal as z.ZodType<PlanDefinition_Action_RelatedAction>;
