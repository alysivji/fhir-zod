// Profile: http://hl7.org/fhir/StructureDefinition/Citation
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";

/** An effective date or period for a status of the citation. */
export interface Citation_StatusDate extends BackboneElement {
	/** Classification of the status. */
	activity: CodeableConcept;
	/** Either occurred or expected. */
	actual?: boolean;
	/** Extensions for actual */
	_actual?: Element;
	/** When the status started and/or ended. */
	period: Period;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const Citation_StatusDateSchemaInternal =
	BackboneElementSchemaInternal.extend({
		activity: z.lazy(getCodeableConceptSchema),
		actual: z.boolean().optional(),
		_actual: z.lazy(getElementSchema).optional(),
		period: z.lazy(getPeriodSchema),
	}).strict();

export const Citation_StatusDateSchema =
	Citation_StatusDateSchemaInternal as z.ZodType<Citation_StatusDate>;
