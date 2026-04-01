// Profile: http://hl7.org/fhir/StructureDefinition/Timing
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Timing_Repeat } from "./Timing_Repeat";

const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getTiming_RepeatSchema = (): z.ZodType<unknown> => Timing_Repeat;

export const Timing = z
	.object({
		_event: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for event"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
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

export type Timing = z.output<typeof Timing>;
