// Profile: http://hl7.org/fhir/StructureDefinition/SampledData
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import {
	fhirCanonical,
	fhirCode,
	fhirId,
	fhirString,
} from "../shared/fhir-primitives";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** SampledData Type: A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data. */
export interface SampledData extends DataType {
	/** Reference to ConceptMap that defines the codes used in the data. */
	codeMap?: string;
	/** Extensions for codeMap */
	_codeMap?: Element;
	/** A series of data points which are decimal values or codes separated by a single space (character u20). The special codes "E" (error), "L" (below detection limit) and "U" (above detection limit) are also defined for used in place of decimal values. */
	data?: string;
	/** Extensions for data */
	_data?: Element;
	/** The number of sample points at each time point. If this value is greater than one, then the dimensions will be interlaced - all the sample points for a point in time will be recorded at once. */
	dimensions: number;
	/** Extensions for dimensions */
	_dimensions?: Element;
	/** A correction factor that is applied to the sampled data points before they are added to the origin. */
	factor?: number;
	/** Extensions for factor */
	_factor?: Element;
	/** Amount of intervalUnits between samples, e.g. milliseconds for time-based sampling. */
	interval?: number;
	/** Extensions for interval */
	_interval?: Element;
	/** The measurement unit in which the sample interval is expressed. */
	intervalUnit: string;
	/** Extensions for intervalUnit */
	_intervalUnit?: Element;
	/** The lower limit of detection of the measured points. This is needed if any of the data points have the value "L" (lower than detection limit). */
	lowerLimit?: number;
	/** Extensions for lowerLimit */
	_lowerLimit?: Element;
	/** A series of data points which are decimal values separated by a single space (character u20).  The units in which the offsets are expressed are found in intervalUnit.  The absolute point at which the measurements begin SHALL be conveyed outside the scope of this datatype, e.g. Observation.effectiveDateTime for a timing offset. */
	offsets?: string;
	/** Extensions for offsets */
	_offsets?: Element;
	/** The base quantity that a measured value of zero represents. In addition, this provides the units of the entire measurement series. */
	origin: Quantity;
	/** The upper limit of detection of the measured points. This is needed if any of the data points have the value "U" (higher than detection limit). */
	upperLimit?: number;
	/** Extensions for upperLimit */
	_upperLimit?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const SampledDataSchemaInternal = z
	.object({
		codeMap: fhirCanonical().optional(),
		_codeMap: z.lazy(getElementSchema).optional(),
		data: fhirString().optional(),
		_data: z.lazy(getElementSchema).optional(),
		dimensions: z.number().int().positive(),
		_dimensions: z.lazy(getElementSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		factor: z.number().optional(),
		_factor: z.lazy(getElementSchema).optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		interval: z.number().optional(),
		_interval: z.lazy(getElementSchema).optional(),
		intervalUnit: fhirCode(),
		_intervalUnit: z.lazy(getElementSchema).optional(),
		lowerLimit: z.number().optional(),
		_lowerLimit: z.lazy(getElementSchema).optional(),
		offsets: fhirString().optional(),
		_offsets: z.lazy(getElementSchema).optional(),
		origin: z.lazy(getQuantitySchema),
		upperLimit: z.number().optional(),
		_upperLimit: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const SampledDataSchema =
	SampledDataSchemaInternal as z.ZodType<SampledData>;
