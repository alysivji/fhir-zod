// Profile: http://hl7.org/fhir/StructureDefinition/Timing
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Timing_Repeat } from "./Timing_Repeat";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { Timing_RepeatSchemaInternal } from "./Timing_Repeat";

export interface Timing extends BackboneElement {
	code?: CodeableConcept;
	event?: Array<string>;
	_event?: Element;
	repeat?: Timing_Repeat;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal;
const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getTiming_RepeatSchema = (): z.ZodType<Timing_Repeat> =>
	Timing_RepeatSchemaInternal;

/** @internal */
export const TimingSchemaInternal = z
	.object({
		code: z
			.lazy(getCodeableConceptSchema)
			.optional()
			.describe(
				"A code for the timing schedule (or just text in code.text). Some codes such as BID are ubiquitous, but many institutions define their own additional codes. If a code is provided, the code is understood to be a complete statement of whatever is specified in the structured timing data, and either the code or the data may be used to interpret the Timing, with the exception that .repeat.bounds still applies over the code (and is not contained in the code).",
			),
		event: fhirDateTime()
			.array()
			.optional()
			.describe("Identifies specific times when the event occurs."),
		_event: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for event"),
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
		modifierExtension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
			),
		repeat: z
			.lazy(getTiming_RepeatSchema)
			.optional()
			.describe("A set of rules that describe when the event is scheduled."),
	})
	.strict();

export const TimingSchema: z.ZodType<Timing> = TimingSchemaInternal;
