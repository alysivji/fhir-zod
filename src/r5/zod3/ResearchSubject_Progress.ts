// Profile: http://hl7.org/fhir/StructureDefinition/ResearchSubject
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import { fhirDateTime } from "../../shared/fhir-primitives-zod3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";

/** The current state (status) of the subject and resons for status change where appropriate. */
export interface ResearchSubject_Progress extends BackboneElement {
	/** The date when the state ended. */
	endDate?: string;
	/** Extensions for endDate */
	_endDate?: Element;
	/** The milestones the subject has passed through. */
	milestone?: CodeableConcept;
	/** The reason for the state change.  If coded it should follow the formal subject state model. */
	reason?: CodeableConcept;
	/** The date when the new status started. */
	startDate?: string;
	/** Extensions for startDate */
	_startDate?: Element;
	/** The current state of the subject. */
	subjectState?: CodeableConcept;
	/** Identifies the aspect of the subject's journey that the state refers to. */
	type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ResearchSubject_ProgressSchemaInternal =
	BackboneElementSchemaInternal.extend({
		endDate: fhirDateTime().optional(),
		_endDate: z.lazy(getElementSchema).optional(),
		milestone: z.lazy(getCodeableConceptSchema).optional(),
		reason: z.lazy(getCodeableConceptSchema).optional(),
		startDate: fhirDateTime().optional(),
		_startDate: z.lazy(getElementSchema).optional(),
		subjectState: z.lazy(getCodeableConceptSchema).optional(),
		type: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const ResearchSubject_ProgressSchema =
	ResearchSubject_ProgressSchemaInternal as z.ZodType<ResearchSubject_Progress>;
