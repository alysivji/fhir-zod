// Profile: http://hl7.org/fhir/StructureDefinition/HealthcareService
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** The HealthcareService is not available during this period of time due to the provided reason. */
export interface HealthcareService_NotAvailable extends BackboneElement {
	/** The reason that can be presented to the user as to why this time is not available. */
	description: string;
	/** Extensions for description */
	_description?: Element;
	/** Service is not available (seasonally or for a public holiday) from this date. */
	during?: Period;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const HealthcareService_NotAvailableSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString(),
		_description: z.lazy(getElementSchema).optional(),
		during: z.lazy(getPeriodSchema).optional(),
	}).strict();

export const HealthcareService_NotAvailableSchema =
	HealthcareService_NotAvailableSchemaInternal as z.ZodType<HealthcareService_NotAvailable>;
