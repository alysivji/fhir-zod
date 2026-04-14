// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceVariable
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-14T20:21:27.277Z

import * as z from "zod";
import { fhirDateTime, fhirId } from "../shared/fhir-primitives";
import type { Annotation } from "./Annotation";
import { AnnotationSchemaInternal } from "./Annotation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** Timing in which the characteristic is determined. */
export interface EvidenceVariable_Characteristic_TimeFromEvent
	extends BackboneElement {
	/** Human readable description. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** The event used as a base point (reference point) in time. */
	eventCodeableConcept?: CodeableConcept;
	/** The event used as a base point (reference point) in time. */
	eventDateTime?: string;
	/** Extensions for eventDateTime */
	_eventDateTime?: Element;
	/** The event used as a base point (reference point) in time. */
	eventId?: string;
	/** Extensions for eventId */
	_eventId?: Element;
	/** The event used as a base point (reference point) in time. */
	eventReference?: Reference;
	/** A human-readable string to clarify or explain concepts about the timeFromEvent. */
	note?: Array<Annotation>;
	/** Used to express the observation at a defined amount of time before or after the event. */
	quantity?: Quantity;
	/** Used to express the observation within a period before and/or after the event. */
	range?: Range;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
	RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const EvidenceVariable_Characteristic_TimeFromEventSchemaInternal =
	BackboneElementSchemaInternal.extend({
		description: z
			.string()
			.regex(/^[\s\S]+$/)
			.optional(),
		_description: z.lazy(getElementSchema).optional(),
		eventCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
		eventDateTime: fhirDateTime().optional(),
		_eventDateTime: z.lazy(getElementSchema).optional(),
		eventId: fhirId().optional(),
		_eventId: z.lazy(getElementSchema).optional(),
		eventReference: z.lazy(getReferenceSchema).optional(),
		note: z.lazy(getAnnotationSchema).array().optional(),
		quantity: z.lazy(getQuantitySchema).optional(),
		range: z.lazy(getRangeSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			const event_x_Present = [
				"eventCodeableConcept",
				"eventDateTime",
				"eventId",
				"eventReference",
			].filter((field) => record[field] !== undefined);
			if (event_x_Present.length > 1) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message:
						"Only one of eventCodeableConcept, eventDateTime, eventId, eventReference may be present for event[x]",
					path: [event_x_Present[0]],
				});
			}
		});

export const EvidenceVariable_Characteristic_TimeFromEventSchema =
	EvidenceVariable_Characteristic_TimeFromEventSchemaInternal as z.ZodType<EvidenceVariable_Characteristic_TimeFromEvent>;
