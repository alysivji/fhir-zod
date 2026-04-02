// Profile: http://hl7.org/fhir/StructureDefinition/SampledData
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-02T03:53:33.727Z

import * as z from "zod";
import type { Element } from "./Element";
import type { Extension } from "./Extension";
import type { Quantity } from "./Quantity";
import { fhirId } from "../shared/fhir-primitives";
import { ElementSchemaInternal } from "./Element";
import { ExtensionSchemaInternal } from "./Extension";
import { QuantitySchemaInternal } from "./Quantity";

export interface SampledData extends Element {
	data?: string;
	_data?: Element;
	dimensions: number;
	_dimensions?: Element;
	factor?: number;
	_factor?: Element;
	lowerLimit?: number;
	_lowerLimit?: Element;
	origin: Quantity;
	period: number;
	_period?: Element;
	upperLimit?: number;
	_upperLimit?: Element;
}

const getElementSchema = (): z.ZodType<Element> => ElementSchemaInternal;
const getExtensionSchema = (): z.ZodType<Extension> => ExtensionSchemaInternal;
const getQuantitySchema = (): z.ZodType<Quantity> => QuantitySchemaInternal;

/** @internal */
export const SampledDataSchemaInternal = z
	.object({
		data: z
			.string()
			.regex(/[ \r\n\t\S]+/)
			.optional()
			.describe(
				'A series of data points which are decimal values separated by a single space (character u20). The special values "E" (error), "L" (below detection limit) and "U" (above detection limit) can also be used in place of a decimal value.',
			),
		_data: z.lazy(getElementSchema).optional().describe("Extensions for data"),
		dimensions: z
			.number()
			.int()
			.positive()
			.describe(
				"The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once.",
			),
		_dimensions: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for dimensions"),
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
		_factor: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for factor"),
		id: fhirId()
			.optional()
			.describe(
				"Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.",
			),
		_id: z.lazy(getElementSchema).optional().describe("Extensions for id"),
		lowerLimit: z
			.number()
			.optional()
			.describe(
				'The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit).',
			),
		_lowerLimit: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for lowerLimit"),
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
		_period: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for period"),
		upperLimit: z
			.number()
			.optional()
			.describe(
				'The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit).',
			),
		_upperLimit: z
			.lazy(getElementSchema)
			.optional()
			.describe("Extensions for upperLimit"),
	})
	.strict();

export const SampledDataSchema: z.ZodType<SampledData> =
	SampledDataSchemaInternal;
