// Profile: http://hl7.org/fhir/StructureDefinition/Ratio
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-01T18:09:54.499Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import { Element } from "./Element";
import { Extension } from "./Extension";
import { Quantity } from "./Quantity";

const getElementSchema = (): z.ZodType<unknown> => Element;
const getExtensionSchema = (): z.ZodType<unknown> => Extension;
const getQuantitySchema = (): z.ZodType<unknown> => Quantity;

export const Ratio = z
	.object({
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		denominator: z
			.lazy(getQuantitySchema)
			.optional()
			.describe("The value of the denominator."),
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
		numerator: z
			.lazy(getQuantitySchema)
			.optional()
			.describe("The value of the numerator."),
	})
	.strict();

export type Ratio = z.output<typeof Ratio>;
