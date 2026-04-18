// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Duration } from "../Duration";
import { DurationSchemaInternal } from "../Duration";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** The maximum number of units of the medication that can be dispensed in a period. */
export interface MedicationKnowledge_Regulatory_MaxDispense
	extends BackboneElement {
	/** The period that applies to the maximum number of units. */
	period?: Duration;
	/** The maximum number of units of the medication that can be dispensed. */
	quantity: Quantity;
}

const getDurationSchema = (): z.ZodType<Duration> =>
	DurationSchemaInternal as z.ZodType<Duration>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const MedicationKnowledge_Regulatory_MaxDispenseSchemaInternal =
	BackboneElementSchemaInternal.extend({
		period: z.lazy(getDurationSchema).optional(),
		quantity: z.lazy(getQuantitySchema),
	}).strict();

export const MedicationKnowledge_Regulatory_MaxDispenseSchema =
	MedicationKnowledge_Regulatory_MaxDispenseSchemaInternal as z.ZodType<MedicationKnowledge_Regulatory_MaxDispense>;
