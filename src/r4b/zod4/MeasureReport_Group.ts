// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-15T06:48:00.815Z

import * as z from "zod/v4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { MeasureReport_Group_Population } from "./MeasureReport_Group_Population";
import { MeasureReport_Group_PopulationSchemaInternal } from "./MeasureReport_Group_Population";
import type { MeasureReport_Group_Stratifier } from "./MeasureReport_Group_Stratifier";
import { MeasureReport_Group_StratifierSchemaInternal } from "./MeasureReport_Group_Stratifier";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";

/** The results of the calculation, one for each population group in the measure. */
export interface MeasureReport_Group extends BackboneElement {
	/** The meaning of the population group as defined in the measure definition. */
	code?: CodeableConcept;
	/** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group. */
	measureScore?: Quantity;
	/** The populations that make up the population group, one for each type of population appropriate for the measure. */
	population?: Array<MeasureReport_Group_Population>;
	/** When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure. */
	stratifier?: Array<MeasureReport_Group_Stratifier>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMeasureReport_Group_PopulationSchema =
	(): z.ZodType<MeasureReport_Group_Population> =>
		MeasureReport_Group_PopulationSchemaInternal as z.ZodType<MeasureReport_Group_Population>;
const getMeasureReport_Group_StratifierSchema =
	(): z.ZodType<MeasureReport_Group_Stratifier> =>
		MeasureReport_Group_StratifierSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const MeasureReport_GroupSchemaInternal =
	BackboneElementSchemaInternal.extend({
		code: z.lazy(getCodeableConceptSchema).optional(),
		measureScore: z.lazy(getQuantitySchema).optional(),
		population: z
			.lazy(getMeasureReport_Group_PopulationSchema)
			.array()
			.optional(),
		stratifier: z
			.lazy(getMeasureReport_Group_StratifierSchema)
			.array()
			.optional(),
	}).strict();

export const MeasureReport_GroupSchema =
	MeasureReport_GroupSchemaInternal as z.ZodType<MeasureReport_Group>;
