// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { MeasureReport_Group_Stratifier_Stratum } from "./MeasureReport_Group_Stratifier_Stratum";
import { MeasureReport_Group_Stratifier_StratumSchemaInternal } from "./MeasureReport_Group_Stratifier_Stratum";

/** When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure. */
export interface MeasureReport_Group_Stratifier extends BackboneElement {
	/** The identifier of this stratifier, as defined in the measure definition. */
	identifier?: Identifier;
	/** This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value. */
	stratum?: Array<MeasureReport_Group_Stratifier_Stratum>;
}

const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMeasureReport_Group_Stratifier_StratumSchema =
	(): z.ZodType<MeasureReport_Group_Stratifier_Stratum> =>
		MeasureReport_Group_Stratifier_StratumSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum>;

/** @internal */
export const MeasureReport_Group_StratifierSchemaInternal =
	BackboneElementSchemaInternal.extend({
		identifier: z.lazy(getIdentifierSchema).optional(),
		stratum: z
			.lazy(getMeasureReport_Group_Stratifier_StratumSchema)
			.array()
			.optional(),
	}).strict();

export const MeasureReport_Group_StratifierSchema =
	MeasureReport_Group_StratifierSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier>;
