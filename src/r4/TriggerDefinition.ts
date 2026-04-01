// Profile: http://hl7.org/fhir/StructureDefinition/TriggerDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirDate, fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { DataRequirement } from "./DataRequirement";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Reference } from "./Reference";
import { Timing } from "./Timing";

const getDataRequirementSchema = (): z.ZodType<unknown> => DataRequirement;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getReferenceSchema = (): z.ZodType<unknown> => Reference;
const getTimingSchema = (): z.ZodType<unknown> => Timing;

export const TriggerDefinition = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_name: z.lazy(getElementSchema).optional().describe("Extensions for name"),
		_timingDate: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for timingDate"),
		_timingDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for timingDateTime"),
		_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
		condition: z
			.unknown()
			.optional()
			.describe(
				"A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires.",
			),
		data: z
			.lazy(getDataRequirementSchema)
			.array()
			.optional()
			.describe(
				"The triggering data of the event (if this is a data trigger). If more than one data is requirement is specified, then all the data requirements must be true.",
			),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		name: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context.",
			),
		timingDate: fhirDate()
			.optional()
			.describe("The timing of the event (if this is a periodic trigger)."),
		timingDateTime: fhirDateTime()
			.optional()
			.describe("The timing of the event (if this is a periodic trigger)."),
		timingReference: z
			.lazy(getReferenceSchema)
			.optional()
			.describe("The timing of the event (if this is a periodic trigger)."),
		timingTiming: z
			.lazy(getTimingSchema)
			.optional()
			.describe("The timing of the event (if this is a periodic trigger)."),
		type: z
			.enum([
				"data-access-ended",
				"data-accessed",
				"data-added",
				"data-changed",
				"data-modified",
				"data-removed",
				"named-event",
				"periodic",
			])
			.describe("The type of triggering event."),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		const timing_x_Present = [
			"timingDate",
			"timingDateTime",
			"timingReference",
			"timingTiming",
		].filter((field) => record[field] !== undefined);
		if (timing_x_Present.length > 1) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message:
					"Only one of timingDate, timingDateTime, timingReference, timingTiming may be present for timing[x]",
				path: [timing_x_Present[0]],
			});
		}
		validateReferenceTarget(
			record.timingReference,
			"timingReference",
			["http://hl7.org/fhir/StructureDefinition/Schedule"],
			["Schedule"],
			ctx,
		);
	});

export type TriggerDefinition = z.output<typeof TriggerDefinition>;
