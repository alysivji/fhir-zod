// Profile: http://hl7.org/fhir/StructureDefinition/Transport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v4";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** If the Transport.focus is a request resource and the transport is seeking fulfillment (i.e. is asking for the request to be actioned), this element identifies any limitations on what parts of the referenced request should be actioned. */
export interface Transport_Restriction extends BackboneElement {
	/** Over what time-period is fulfillment sought. */
	period?: Period;
	/** For requests that are targeted to more than one potential recipient/target, to identify who is fulfillment is sought for. */
	recipient?: Array<Reference>;
	/** Indicates the number of times the requested action should occur. */
	repetitions?: number;
	/** Extensions for repetitions */
	_repetitions?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Transport_RestrictionSchemaInternal =
	BackboneElementSchemaInternal.extend({
		period: z.lazy(getPeriodSchema).optional(),
		recipient: z.lazy(getReferenceSchema).array().optional(),
		repetitions: z.number().int().positive().optional(),
		_repetitions: z.lazy(getElementSchema).optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.recipient,
				"recipient",
				[
					"http://hl7.org/fhir/StructureDefinition/Group",
					"http://hl7.org/fhir/StructureDefinition/Organization",
					"http://hl7.org/fhir/StructureDefinition/Patient",
					"http://hl7.org/fhir/StructureDefinition/Practitioner",
					"http://hl7.org/fhir/StructureDefinition/PractitionerRole",
					"http://hl7.org/fhir/StructureDefinition/RelatedPerson",
				],
				[
					"Group",
					"Organization",
					"Patient",
					"Practitioner",
					"PractitionerRole",
					"RelatedPerson",
				],
				ctx,
			);
		});

export const Transport_RestrictionSchema =
	Transport_RestrictionSchemaInternal as z.ZodType<Transport_Restriction>;
