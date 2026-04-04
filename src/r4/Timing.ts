// Profile: http://hl7.org/fhir/StructureDefinition/Timing
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T20:28:54.953Z

import * as z from "zod";
import { fhirDateTime, fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Timing_Repeat } from "./Timing_Repeat";
import { Timing_RepeatSchemaInternal } from "./Timing_Repeat";

/** Base StructureDefinition for Timing Type: Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
export interface Timing extends BackboneElement {
	/** A code for the timing schedule (or just text in code.text). Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code). */
	code?: CodeableConcept;
	/** Identifies specific times when the event occurs. */
	event?: Array<string>;
	/** Extensions for event */
	_event?: Array<Element>;
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
		event: fhirDateTime().array().optional(),
		_event: z.lazy(getElementSchema).array().optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
		modifierExtension: z.lazy(getExtensionSchema).array().optional(),
		repeat: z.lazy(getTiming_RepeatSchema).optional(),
	})
	.strict();

export const TimingSchema = TimingSchemaInternal as z.ZodType<Timing>;
