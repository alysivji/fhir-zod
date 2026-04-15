// Profile: http://hl7.org/fhir/StructureDefinition/PractitionerRole
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v3";
import { fhirString } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** The HealthcareService is not available during this period of time due to the provided reason. */
export interface PractitionerRole_NotAvailable extends BackboneElement {
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
export const PractitionerRole_NotAvailableSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: fhirString(),
		_description: z.lazy(getElementSchema).optional(),
		during: z.lazy(getPeriodSchema).optional(),
	}).strict();

export const PractitionerRole_NotAvailableSchema =
	PractitionerRole_NotAvailableSchemaInternal as z.ZodType<PractitionerRole_NotAvailable>;
