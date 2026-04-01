// Profile: http://hl7.org/fhir/StructureDefinition/Patient
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { CodeableConcept } from "./CodeableConcept";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getCodeableConceptSchema = (): z.ZodType<unknown> => CodeableConcept;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const Patient_Communication = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_preferred: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for preferred"),
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
		language: z
			.lazy(getCodeableConceptSchema)
			.describe(
				'The ISO-639-1 alpha 2 code in lower case for the language, optionally followed by a hyphen and the ISO-3166-1 alpha 2 code for the region in upper case; e.g. "en" for English, or "en-US" for American English versus "en-EN" for England English.',
			),
		modifierExtension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.\n\nModifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).",
			),
		preferred: z
			.boolean()
			.optional()
			.describe(
				"Indicates whether or not the patient prefers this language (over other languages he masters up a certain level).",
			),
	})
	.strict();

export type Patient_Communication = z.output<typeof Patient_Communication>;
