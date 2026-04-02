// Profile: http://hl7.org/fhir/StructureDefinition/TriggerDefinition
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { DataRequirement } from "./DataRequirement";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Reference } from "./Reference";
import type { Timing } from "./Timing";
import { fhirDate, fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import { DataRequirementSchemaInternal } from "./DataRequirement";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { ReferenceSchemaInternal } from "./Reference";
import { TimingSchemaInternal } from "./Timing";

export interface TriggerDefinition extends Element {
	condition?: unknown;
	data?: Array<DataRequirement>;
	name?: string;
	_name?: Element;
	timingDate?: string;
	_timingDate?: Element;
	timingDateTime?: string;
	_timingDateTime?: Element;
	timingReference?: Reference;
	timingTiming?: Timing;
	type:
		| "data-access-ended"
		| "data-accessed"
		| "data-added"
		| "data-changed"
		| "data-modified"
		| "data-removed"
		| "named-event"
		| "periodic";
	_type?: Element;
}

const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
	DataRequirementSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getReferenceSchema = (): z.ZodType<Reference> => ReferenceSchemaInternal;
const getTimingSchema = (): z.ZodType<Timing> => TimingSchemaInternal;

/** @internal */
export const TriggerDefinitionSchemaInternal = z
	.object({
		condition: z
			.any()
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
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		name: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context.",
			),
		_name: z.lazy(getElementSchema).optional().describe("Extensions for name"),
		timingDate: fhirDate()
			.optional()
			.describe("The timing of the event (if this is a periodic trigger)."),
		_timingDate: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for timingDate"),
		timingDateTime: fhirDateTime()
			.optional()
			.describe("The timing of the event (if this is a periodic trigger)."),
		_timingDateTime: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for timingDateTime"),
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
		_type: z.lazy(getElementSchema).optional().describe("Extensions for type"),
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

export const TriggerDefinitionSchema: z.ZodType<TriggerDefinition> =
	TriggerDefinitionSchemaInternal;
