// Profile: http://hl7.org/fhir/StructureDefinition/Availability
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-17T23:33:08.008Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Extension } from "./Extension";
import { ExtensionSchemaInternal } from "./Extension";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** Not available during this time due to provided reason. */
export interface Availability_NotAvailableTime extends Element {
	/** Reason presented to the user explaining why time not available. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** Service not available during this period. */
	during?: Period;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getExtensionSchema = (): z.ZodType<Extension> =>
	ExtensionSchemaInternal as z.ZodType<Extension>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const Availability_NotAvailableTimeSchemaInternal = z
	.object({
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		during: z.lazy(getPeriodSchema).optional(),
		extension: z.lazy(getExtensionSchema).array().optional(),
		id: fhirString().optional(),
		_id: z.lazy(getElementSchema).optional(),
	})
	.strict();

export const Availability_NotAvailableTimeSchema =
	Availability_NotAvailableTimeSchemaInternal as z.ZodType<Availability_NotAvailableTime>;
