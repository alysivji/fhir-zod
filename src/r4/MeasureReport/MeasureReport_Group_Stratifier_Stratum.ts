// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T01:45:47.034Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { MeasureReport_Group_Stratifier_Stratum_Component } from "./MeasureReport_Group_Stratifier_Stratum_Component";
import { MeasureReport_Group_Stratifier_Stratum_ComponentSchemaInternal } from "./MeasureReport_Group_Stratifier_Stratum_Component";
import type { MeasureReport_Group_Stratifier_Stratum_Population } from "./MeasureReport_Group_Stratifier_Stratum_Population";
import { MeasureReport_Group_Stratifier_Stratum_PopulationSchemaInternal } from "./MeasureReport_Group_Stratifier_Stratum_Population";

/** This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value. */
export interface MeasureReport_Group_Stratifier_Stratum
	extends BackboneElement {
	/** A stratifier component value. */
	component?: Array<MeasureReport_Group_Stratifier_Stratum_Component>;
	/** The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum. */
	measureScore?: Quantity;
	/** The populations that make up the stratum, one for each type of population appropriate to the measure. */
	population?: Array<MeasureReport_Group_Stratifier_Stratum_Population>;
	/** The value for this stratum, expressed as a CodeableConcept. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique. */
	value?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getMeasureReport_Group_Stratifier_Stratum_ComponentSchema =
	(): z.ZodType<MeasureReport_Group_Stratifier_Stratum_Component> =>
		MeasureReport_Group_Stratifier_Stratum_ComponentSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum_Component>;
const getMeasureReport_Group_Stratifier_Stratum_PopulationSchema =
	(): z.ZodType<MeasureReport_Group_Stratifier_Stratum_Population> =>
		MeasureReport_Group_Stratifier_Stratum_PopulationSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum_Population>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
	QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const MeasureReport_Group_Stratifier_StratumSchemaInternal =
	BackboneElementSchemaInternal.extend({
		component: z
			.lazy(getMeasureReport_Group_Stratifier_Stratum_ComponentSchema)
			.array()
			.optional(),
		measureScore: z.lazy(getQuantitySchema).optional(),
		population: z
			.lazy(getMeasureReport_Group_Stratifier_Stratum_PopulationSchema)
			.array()
			.optional(),
		value: z.lazy(getCodeableConceptSchema).optional(),
	}).strict();

export const MeasureReport_Group_Stratifier_StratumSchema =
	MeasureReport_Group_Stratifier_StratumSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum>;
