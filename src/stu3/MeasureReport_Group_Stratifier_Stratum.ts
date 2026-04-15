// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T00:32:01.048Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { MeasureReport_Group_Stratifier_Stratum_Population } from "./MeasureReport_Group_Stratifier_Stratum_Population";
import { MeasureReport_Group_Stratifier_Stratum_PopulationSchemaInternal } from "./MeasureReport_Group_Stratifier_Stratum_Population";

/** This element contains the results for a single stratum within the stratifier. For example, when stratifying on administrative gender, there will be four strata, one for each possible gender value. */
export interface MeasureReport_Group_Stratifier_Stratum
	extends BackboneElement {
	/** The measure score for this stratum, calculated as appropriate for the measure type and scoring method, and based on only the members of this stratum. */
	measureScore?: number;
	/** Extensions for measureScore */
	_measureScore?: Element;
	/** The populations that make up the stratum, one for each type of population appropriate to the measure. */
	population?: Array<MeasureReport_Group_Stratifier_Stratum_Population>;
	/** The value for this stratum, expressed as a string. When defining stratifiers on complex values, the value must be rendered such that the value for each stratum within the stratifier is unique. */
	value: string;
	/** Extensions for value */
	_value?: Element;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getMeasureReport_Group_Stratifier_Stratum_PopulationSchema =
	(): z.ZodType<MeasureReport_Group_Stratifier_Stratum_Population> =>
		MeasureReport_Group_Stratifier_Stratum_PopulationSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum_Population>;

/** @internal */
export const MeasureReport_Group_Stratifier_StratumSchemaInternal =
	BackboneElementSchemaInternal.extend({
		measureScore: z.number().optional(),
		_measureScore: z.lazy(getElementSchema).optional(),
		population: z
			.lazy(getMeasureReport_Group_Stratifier_Stratum_PopulationSchema)
			.array()
			.optional(),
		value: fhirString(),
		_value: z.lazy(getElementSchema).optional(),
	}).strict();

export const MeasureReport_Group_Stratifier_StratumSchema =
	MeasureReport_Group_Stratifier_StratumSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier_Stratum>;
