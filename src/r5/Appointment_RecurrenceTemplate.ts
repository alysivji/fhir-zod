// Profile: http://hl7.org/fhir/StructureDefinition/Appointment
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T00:02:33.197Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../shared/fhir-primitive-array-validation";
import { fhirDate } from "../shared/fhir-primitives";
import type { Appointment_RecurrenceTemplate_MonthlyTemplate } from "./Appointment_RecurrenceTemplate_MonthlyTemplate";
import { Appointment_RecurrenceTemplate_MonthlyTemplateSchemaInternal } from "./Appointment_RecurrenceTemplate_MonthlyTemplate";
import type { Appointment_RecurrenceTemplate_WeeklyTemplate } from "./Appointment_RecurrenceTemplate_WeeklyTemplate";
import { Appointment_RecurrenceTemplate_WeeklyTemplateSchemaInternal } from "./Appointment_RecurrenceTemplate_WeeklyTemplate";
import type { Appointment_RecurrenceTemplate_YearlyTemplate } from "./Appointment_RecurrenceTemplate_YearlyTemplate";
import { Appointment_RecurrenceTemplate_YearlyTemplateSchemaInternal } from "./Appointment_RecurrenceTemplate_YearlyTemplate";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The details of the recurrence pattern or template that is used to generate recurring appointments. */
export interface Appointment_RecurrenceTemplate extends BackboneElement {
	/** Any dates, such as holidays, that should be excluded from the recurrence. */
	excludingDate?: Array<string | null>;
	/** Extensions for excludingDate */
	_excludingDate?: Array<Element | null>;
	/** Any dates, such as holidays, that should be excluded from the recurrence. */
	excludingRecurrenceId?: Array<number | null>;
	/** Extensions for excludingRecurrenceId */
	_excludingRecurrenceId?: Array<Element | null>;
	/** Recurring appointments will not occur after this date. */
	lastOccurrenceDate?: string;
	/** Extensions for lastOccurrenceDate */
	_lastOccurrenceDate?: Element;
	/** Information about monthly recurring appointments. */
	monthlyTemplate?: Appointment_RecurrenceTemplate_MonthlyTemplate;
	/** How many appointments are planned in the recurrence. */
	occurrenceCount?: number;
	/** Extensions for occurrenceCount */
	_occurrenceCount?: Element;
	/** The list of specific dates that will have appointments generated. */
	occurrenceDate?: Array<string | null>;
	/** Extensions for occurrenceDate */
	_occurrenceDate?: Array<Element | null>;
	/** How often the appointment series should recur. */
	recurrenceType: CodeableConcept;
	/** The timezone of the recurring appointment occurrences. */
	timezone?: CodeableConcept;
	/** Information about weekly recurring appointments. */
	weeklyTemplate?: Appointment_RecurrenceTemplate_WeeklyTemplate;
	/** Information about yearly recurring appointments. */
	yearlyTemplate?: Appointment_RecurrenceTemplate_YearlyTemplate;
}

const getAppointment_RecurrenceTemplate_MonthlyTemplateSchema =
	(): z.ZodType<Appointment_RecurrenceTemplate_MonthlyTemplate> =>
		Appointment_RecurrenceTemplate_MonthlyTemplateSchemaInternal as z.ZodType<Appointment_RecurrenceTemplate_MonthlyTemplate>;
const getAppointment_RecurrenceTemplate_WeeklyTemplateSchema =
	(): z.ZodType<Appointment_RecurrenceTemplate_WeeklyTemplate> =>
		Appointment_RecurrenceTemplate_WeeklyTemplateSchemaInternal as z.ZodType<Appointment_RecurrenceTemplate_WeeklyTemplate>;
const getAppointment_RecurrenceTemplate_YearlyTemplateSchema =
	(): z.ZodType<Appointment_RecurrenceTemplate_YearlyTemplate> =>
		Appointment_RecurrenceTemplate_YearlyTemplateSchemaInternal as z.ZodType<Appointment_RecurrenceTemplate_YearlyTemplate>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Appointment_RecurrenceTemplateSchemaInternal =
	BackboneElementSchemaInternal.extend({
		excludingDate: fhirDate().nullable().array().optional(),
		_excludingDate: z.lazy(getElementSchema).nullable().array().optional(),
		excludingRecurrenceId: z
			.number()
			.int()
			.positive()
			.nullable()
			.array()
			.optional(),
		_excludingRecurrenceId: z
			.lazy(getElementSchema)
			.nullable()
			.array()
			.optional(),
		lastOccurrenceDate: fhirDate().optional(),
		_lastOccurrenceDate: z.lazy(getElementSchema).optional(),
		monthlyTemplate: z
			.lazy(getAppointment_RecurrenceTemplate_MonthlyTemplateSchema)
			.optional(),
		occurrenceCount: z.number().int().positive().optional(),
		_occurrenceCount: z.lazy(getElementSchema).optional(),
		occurrenceDate: fhirDate().nullable().array().optional(),
		_occurrenceDate: z.lazy(getElementSchema).nullable().array().optional(),
		recurrenceType: z.lazy(getCodeableConceptSchema),
		timezone: z.lazy(getCodeableConceptSchema).optional(),
		weeklyTemplate: z
			.lazy(getAppointment_RecurrenceTemplate_WeeklyTemplateSchema)
			.optional(),
		yearlyTemplate: z
			.lazy(getAppointment_RecurrenceTemplate_YearlyTemplateSchema)
			.optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validatePrimitiveArrayPair(
				record.excludingDate,
				record._excludingDate,
				"excludingDate",
				"_excludingDate",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.excludingRecurrenceId,
				record._excludingRecurrenceId,
				"excludingRecurrenceId",
				"_excludingRecurrenceId",
				ctx,
			);
			validatePrimitiveArrayPair(
				record.occurrenceDate,
				record._occurrenceDate,
				"occurrenceDate",
				"_occurrenceDate",
				ctx,
			);
		});

export const Appointment_RecurrenceTemplateSchema =
	Appointment_RecurrenceTemplateSchemaInternal as z.ZodType<Appointment_RecurrenceTemplate>;
