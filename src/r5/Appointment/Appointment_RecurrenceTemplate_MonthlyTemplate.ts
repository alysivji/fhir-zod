// Profile: http://hl7.org/fhir/StructureDefinition/Appointment
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Information about monthly recurring appointments. */
export interface Appointment_RecurrenceTemplate_MonthlyTemplate
  extends BackboneElement {
  /** Indicates that appointments in the series of recurring appointments should occur on a specific day of the month. */
  dayOfMonth?: number;
  /** Extensions for dayOfMonth */
  _dayOfMonth?: Element;
  /** Indicates which day of the week the recurring appointments should occur each nth week. */
  dayOfWeek?: Coding;
  /** Indicates that recurring appointments should occur every nth month. */
  monthInterval: number;
  /** Extensions for monthInterval */
  _monthInterval?: Element;
  /** Indicates which week within a month the appointments in the series of recurring appointments should occur on. */
  nthWeekOfMonth?: Coding;
}

const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Appointment_RecurrenceTemplate_MonthlyTemplateSchemaInternal =
  BackboneElementSchemaInternal.extend({
    dayOfMonth: z.number().int().positive().optional(),
    _dayOfMonth: z.lazy(getElementSchema).optional(),
    dayOfWeek: z.lazy(getCodingSchema).optional(),
    monthInterval: z.number().int().positive(),
    _monthInterval: z.lazy(getElementSchema).optional(),
    nthWeekOfMonth: z.lazy(getCodingSchema).optional(),
  }).strict();

export const Appointment_RecurrenceTemplate_MonthlyTemplateSchema =
  Appointment_RecurrenceTemplate_MonthlyTemplateSchemaInternal as z.ZodType<Appointment_RecurrenceTemplate_MonthlyTemplate>;
