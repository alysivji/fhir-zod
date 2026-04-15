// Profile: http://hl7.org/fhir/StructureDefinition/TriggerDefinition
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import {
	fhirDate,
	fhirDateTime,
	fhirId,
	fhirString,
} from "../shared/fhir-primitives";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { DataRequirement } from "./DataRequirement";
import { DataRequirementSchemaInternal } from "./DataRequirement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Expression } from "./Expression";
import { ExpressionSchemaInternal } from "./Expression";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";
import type { Timing } from "./Timing";
import { TimingSchemaInternal } from "./Timing";

/** Base StructureDefinition for TriggerDefinition Type: A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element. */
export interface TriggerDefinition extends Element {
	/** A boolean-valued expression that is evaluated in the context of the container of the trigger definition and returns whether or not the trigger fires. */
	condition?: Expression;
	/** The triggering data of the event (if this is a data trigger). If more than one data is requirement is specified, then all the data requirements must be true. */
	data?: Array<DataRequirement>;
	/** A formal name for the event. This may be an absolute URI that identifies the event formally (e.g. from a trigger registry), or a simple relative URI that identifies the event in a local context. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** The timing of the event (if this is a periodic trigger). */
	timingDate?: string;
	/** Extensions for timingDate */
	_timingDate?: Element;
	/** The timing of the event (if this is a periodic trigger). */
	timingDateTime?: string;
	/** Extensions for timingDateTime */
	_timingDateTime?: Element;
	/** The timing of the event (if this is a periodic trigger). */
	timingReference?: Reference;
	/** The timing of the event (if this is a periodic trigger). */
	timingTiming?: Timing;
	/** The type of triggering event. */
	type:
		| "data-access-ended"
		| "data-accessed"
		| "data-added"
		| "data-changed"
		| "data-modified"
		| "data-removed"
		| "named-event"
		| "periodic";
	/** Extensions for type */
	_type?: Element;
}

const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
	DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExpressionSchema = (): z.ZodType<Expression> =>
	ExpressionSchemaInternal as z.ZodType<Expression>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;
const getTimingSchema = (): z.ZodType<Timing> =>
	TimingSchemaInternal as z.ZodType<Timing>;

/** @internal */
export const TriggerDefinitionSchemaInternal = z
	.object({
		condition: z.lazy(getExpressionSchema).optional(),
		data: z.lazy(getDataRequirementSchema).array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		timingDate: fhirDate().optional(),
		_timingDate: z.lazy(getElementSchema).optional(),
		timingDateTime: fhirDateTime().optional(),
		_timingDateTime: z.lazy(getElementSchema).optional(),
		timingReference: z.lazy(getReferenceSchema).optional(),
		timingTiming: z.lazy(getTimingSchema).optional(),
		type: z.enum([
			"data-access-ended",
			"data-accessed",
			"data-added",
			"data-changed",
			"data-modified",
			"data-removed",
			"named-event",
			"periodic",
		]),
		_type: z.lazy(getElementSchema).optional(),
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

export const TriggerDefinitionSchema =
	TriggerDefinitionSchemaInternal as z.ZodType<TriggerDefinition>;
