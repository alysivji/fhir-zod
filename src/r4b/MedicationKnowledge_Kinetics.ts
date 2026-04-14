// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-14T22:22:34.384Z

import * as z from "zod";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Duration } from "./Duration";
import { DurationSchemaInternal } from "./Duration";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** The time course of drug absorption, distribution, metabolism and excretion of a medication from the body. */
export interface MedicationKnowledge_Kinetics extends BackboneElement {
	/** The drug concentration measured at certain discrete points in time. */
	areaUnderCurve?: Array<Quantity>;
	/** The time required for any specified property (e.g., the concentration of a substance in the body) to decrease by half. */
	halfLifePeriod?: Duration;
	/** The median lethal dose of a drug. */
	lethalDose50?: Array<Quantity>;
}

const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const MedicationKnowledge_KineticsSchemaInternal =
	BackboneElementSchemaInternal.extend({
		areaUnderCurve: z.lazy(getQuantitySchema).array().optional(),
		halfLifePeriod: z.lazy(getDurationSchema).optional(),
		lethalDose50: z.lazy(getQuantitySchema).array().optional(),
	}).strict();

export const MedicationKnowledge_KineticsSchema =
	MedicationKnowledge_KineticsSchemaInternal as z.ZodType<MedicationKnowledge_Kinetics>;
