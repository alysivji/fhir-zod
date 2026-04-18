// Profile: http://hl7.org/fhir/StructureDefinition/Encounter
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T03:47:47.070Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";

/** The class history permits the tracking of the encounters transitions without needing to go  through the resource history.  This would be used for a case where an admission starts of as an emergency encounter, then transitions into an inpatient scenario. Doing this and not restarting a new encounter ensures that any lab/diagnostic results can more easily follow the patient and not require re-processing and not get lost or cancelled during a kind of discharge from emergency to inpatient. */
export interface Encounter_ClassHistory extends BackboneElement {
	/** inpatient | outpatient | ambulatory | emergency +. */
	class: Coding;
	/** The time that the episode was in the specified class. */
	period: Period;
}

const getCodingSchema = (): z.ZodType<Coding> =>
	CodingSchemaInternal as z.ZodType<Coding>;
const getPeriodSchema = (): z.ZodType<Period> =>
	PeriodSchemaInternal as z.ZodType<Period>;

/** @internal */
export const Encounter_ClassHistorySchemaInternal =
	BackboneElementSchemaInternal.extend({
		class: z.lazy(getCodingSchema),
		period: z.lazy(getPeriodSchema),
	}).strict();

export const Encounter_ClassHistorySchema =
	Encounter_ClassHistorySchemaInternal as z.ZodType<Encounter_ClassHistory>;
