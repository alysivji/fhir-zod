// Profile: http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { fhirDateTime, fhirString } from "../../shared/fhir-primitives-zod4";
import type { Age } from "./Age";
import { AgeSchemaInternal } from "./Age";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** The significant Procedures (or procedure) that the family member had. This is a repeating section to allow a system to represent more than one procedure per resource, though there is nothing stopping multiple resources - one per procedure. */
export interface FamilyMemberHistory_Procedure extends BackboneElement {
	/** The actual procedure specified. Could be a coded procedure or a less specific string depending on how much is known about the procedure and the capabilities of the creating system. */
	code: CodeableConcept;
	/** This procedure contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown. */
	contributedToDeath?: boolean;
	/** Extensions for contributedToDeath */
	_contributedToDeath?: Element;
	/** An area where general notes can be placed about this specific procedure. */
	note?: Array<Annotation>;
	/** Indicates what happened following the procedure. If the procedure resulted in death, deceased date is captured on the relation. */
	outcome?: CodeableConcept;
	/** Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedAge?: Age;
	/** Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedDateTime?: string;
	/** Extensions for performedDateTime */
	_performedDateTime?: Element;
	/** Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedPeriod?: Period;
	/** Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedRange?: Range;
	/** Estimated or actual date, date-time, period, or age when the procedure was performed. Allows a period to support complex procedures that span more than one date, and also allows for the length of the procedure to be captured. */
	performedString?: string;
	/** Extensions for performedString */
	_performedString?: Element;
}

const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const FamilyMemberHistory_ProcedureSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema),
		contributedToDeath: z.boolean().optional(),
		_contributedToDeath: z.lazy(getElementSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		outcome: z.lazy(getCodeableConceptSchema).optional(),
		performedAge: z.lazy(getAgeSchema).optional(),
		performedDateTime: fhirDateTime().optional(),
		_performedDateTime: z.lazy(getElementSchema).optional(),
		performedPeriod: z.lazy(getPeriodSchema).optional(),
		performedRange: z.lazy(getRangeSchema).optional(),
		performedString: fhirString().optional(),
		_performedString: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const performed_x_Present = [
				"performedAge",
				"performedDateTime",
				"performedPeriod",
				"performedRange",
				"performedString",
			].filter((field) => record[field] !== undefined);
			if (performed_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of performedAge, performedDateTime, performedPeriod, performedRange, performedString may be present for performed[x]",
					path: [performed_x_Present[0]],
				});
			}
		});

export const FamilyMemberHistory_ProcedureSchema =
	FamilyMemberHistory_ProcedureSchemaInternal as z.ZodType<FamilyMemberHistory_Procedure>;
