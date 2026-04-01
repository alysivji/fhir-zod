// Profile: http://hl7.org/fhir/StructureDefinition/CodeableConcept
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Coding } from "./Coding";
import { Element } from "./Element";
import { Extension } from "./Extension";

const getCodingSchema = (): z.ZodType<unknown> => Coding;
const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;

export const CodeableConcept = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_text: z.lazy(getElementSchema).optional().describe("Extensions for text"),
		coding: z
			.lazy(getCodingSchema)
			.array()
			.optional()
			.describe("A reference to a code defined by a terminology system."),
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
		text: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				"A human language representation of the concept as seen/selected/uttered by the user who entered the data and/or which represents the intended meaning of the user.",
			),
	})
	.strict();

export type CodeableConcept = z.output<typeof CodeableConcept>;
