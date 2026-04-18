// Profile: http://hl7.org/fhir/StructureDefinition/Availability
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirId } from "../shared/fhir-primitives";
import type { Availability_AvailableTime } from "./Availability_AvailableTime";
import { Availability_AvailableTimeSchemaInternal } from "./Availability_AvailableTime";
import type { Availability_NotAvailableTime } from "./Availability_NotAvailableTime";
import { Availability_NotAvailableTimeSchemaInternal } from "./Availability_NotAvailableTime";
import type { DataType } from "./DataType";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";

/** Availability Type: Availability data for an {item}. */
export interface Availability extends DataType {
	/** Times the {item} is available. */
	availableTime?: Array<Availability_AvailableTime>;
	/** Not available during this time due to provided reason. */
	notAvailableTime?: Array<Availability_NotAvailableTime>;
}

const getAvailability_AvailableTimeSchema =
	(): z.ZodType<Availability_AvailableTime> =>
		Availability_AvailableTimeSchemaInternal as z.ZodType<Availability_AvailableTime>;
const getAvailability_NotAvailableTimeSchema =
	(): z.ZodType<Availability_NotAvailableTime> =>
		Availability_NotAvailableTimeSchemaInternal as z.ZodType<Availability_NotAvailableTime>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;

/** @internal */
export const AvailabilitySchemaInternal = z
	.object({
		availableTime: z
			.lazy(getAvailability_AvailableTimeSchema)
			.array()
			.optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirId().optional(),
		_id: z.lazy(getElementSchema).optional(),
		notAvailableTime: z
			.lazy(getAvailability_NotAvailableTimeSchema)
			.array()
			.optional(),
	})
	.strict();

export const AvailabilitySchema =
	AvailabilitySchemaInternal as z.ZodType<Availability>;
