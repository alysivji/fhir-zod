// Profile: http://hl7.org/fhir/StructureDefinition/Appointment
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Information about yearly recurring appointments. */
export interface Appointment_RecurrenceTemplate_YearlyTemplate
	extends BackboneElement {
	/** Appointment recurs every nth year. */
	yearInterval: number;
	/** Extensions for yearInterval */
	_yearInterval?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Appointment_RecurrenceTemplate_YearlyTemplateSchemaInternal =
	BackboneElementSchemaInternal.extend({
		yearInterval: z.number().int().positive(),
		_yearInterval: z.lazy(getElementSchema).optional(),
	}).strict();

export const Appointment_RecurrenceTemplate_YearlyTemplateSchema =
	Appointment_RecurrenceTemplate_YearlyTemplateSchemaInternal as z.ZodType<Appointment_RecurrenceTemplate_YearlyTemplate>;
