// Profile: http://hl7.org/fhir/StructureDefinition/SampledData
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

export const SampledData = z
	.object({
		_data: z.lazy(getElementSchema).optional().describe("Extensions for data"),
		_dimensions: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for dimensions"),
		_factor: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for factor"),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		_lowerLimit: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for lowerLimit"),
		_period: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for period"),
		_upperLimit: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for upperLimit"),
		data: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				'A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.',
			),
		dimensions: z
			.number()
			.int()
			.positive()
			.describe(
				"The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.",
			),
		extension: z
			.lazy(getExtensionSchema)
			.array()
			.optional()
			.describe(
				"May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.",
			),
		factor: z
			.number()
			.optional()
			.describe(
				"A correction factor that is applied to the sampled data points before they are added to the origin.",
			),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		lowerLimit: z
			.number()
			.optional()
			.describe(
				'The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).',
			),
		origin: z
			.lazy(getQuantitySchema)
			.describe(
				"The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series.",
			),
		period: z
			.number()
			.describe(
				"The length of time between sampling times, measured in milliseconds.",
			),
		upperLimit: z
			.number()
			.optional()
			.describe(
				'The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).',
			),
	})
	.strict();

export type SampledData = z.output<typeof SampledData>;
