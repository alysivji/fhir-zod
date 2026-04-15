// Profile: http://hl7.org/fhir/StructureDefinition/EpisodeOfCare
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-15T06:48:04.891Z

import * as z from "zod/v3";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Period } from "./Period";
import { PeriodSchemaInternal } from "./Period";

/** The history of statuses that the EpisodeOfCare has been through (without requiring processing the history of the resource). */
export interface EpisodeOfCare_StatusHistory extends BackboneElement {
	/** The period during this EpisodeOfCare that the specific status applied. */
	period: Period;
	/** planned | waitlist | active | onhold | finished | cancelled. */
	status:
		| "active"
		| "cancelled"
		| "entered-in-error"
		| "finished"
		| "onhold"
		| "planned"
		| "waitlist";
	/** Extensions for status */
	_status?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const EpisodeOfCare_StatusHistorySchemaInternal =
	BackboneElementSchemaInternal.extend({
		period: z.lazy(getPeriodSchema),
		status: z.enum([
			"active",
			"cancelled",
			"entered-in-error",
			"finished",
			"onhold",
			"planned",
			"waitlist",
		]),
		_status: z.lazy(getElementSchema).optional(),
	}).strict();

export const EpisodeOfCare_StatusHistorySchema =
	EpisodeOfCare_StatusHistorySchemaInternal as z.ZodType<EpisodeOfCare_StatusHistory>;
