// Profile: http://hl7.org/fhir/StructureDefinition/Period
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";

export interface Period extends Element {
	end?: string;
	_end?: Element;
	start?: string;
	_start?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;

/** @internal */
export const PeriodSchemaInternal = z
	.object({
		end: fhirDateTime()
			.optional()
			.describe(
				"The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.",
			),
		_end: z.lazy(getElementSchema).optional().describe("Extensions for end"),
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
		start: fhirDateTime()
			.optional()
			.describe("The start of the period. The boundary is inclusive."),
		_start: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for start"),
	})
	.strict();

export const PeriodSchema: z.ZodType<Period> = PeriodSchemaInternal;
