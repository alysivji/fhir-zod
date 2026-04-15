// Profile: http://hl7.org/fhir/StructureDefinition/Timing
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod4";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Timing_Repeat } from "./Timing_Repeat";
import { Timing_RepeatSchemaInternal } from "./Timing_Repeat";

/** Base StructureDefinition for Timing Type */
export interface Timing extends Element {
	/** A code for the timing schedule. Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code). */
	code?: CodeableConcept;
	/** Identifies specific times when the event occurs. */
	event?: Array<string | null>;
	/** Extensions for event */
	_event?: Array<Element | null>;
	/** A set of rules that describe when the event is scheduled. */
	repeat?: Timing_Repeat;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getTiming_RepeatSchema = (): z.ZodType<Timing_Repeat> =>
	Timing_RepeatSchemaInternal as z.ZodType<Timing_Repeat>;

/** @internal */
export const TimingSchemaInternal = z
	.object({
		code: z.lazy(getCodeableConceptSchema).optional(),
		event: fhirDateTime().nullable().array().optional(),
		_event: z.lazy(getElementSchema).nullable().array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		repeat: z.lazy(getTiming_RepeatSchema).optional(),
	})
	.strict()
	.superRefine((value, ctx) => {
		const record = value as Record<string, unknown>;
		validatePrimitiveArrayPair(
			record.event,
			record._event,
			"event",
			"_event",
			ctx,
		);
	});

export const TimingSchema = TimingSchemaInternal as z.ZodType<Timing>;
