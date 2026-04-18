// Profile: http://hl7.org/fhir/StructureDefinition/Composition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";

/** The clinical service, such as a colonoscopy or an appendectomy, being documented. */
export interface Composition_Event extends BackboneElement {
	/** Represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a "History and Physical Report" in which case the procedure being documented is necessarily a "History and Physical" act. The events may be included as a code or as a reference to an other resource. */
	detail?: Array<CodeableReference>;
	/** The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time. */
	period?: Period;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const Composition_EventSchemaInternal =
	BackboneElementSchemaInternal.extend({
		detail: z.lazy(getCodeableReferenceSchema).array().optional(),
		period: z.lazy(getPeriodSchema).optional(),
	}).strict();

export const Composition_EventSchema =
	Composition_EventSchemaInternal as z.ZodType<Composition_Event>;
