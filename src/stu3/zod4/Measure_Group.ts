// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-15T06:47:52.729Z

import * as z from "zod/v4";
import { fhirString } from "../../shared/fhir-primitives-zod4";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Identifier } from "./Identifier";
import { IdentifierSchemaInternal } from "./Identifier";
import type { Measure_Group_Population } from "./Measure_Group_Population";
import { Measure_Group_PopulationSchemaInternal } from "./Measure_Group_Population";
import type { Measure_Group_Stratifier } from "./Measure_Group_Stratifier";
import { Measure_Group_StratifierSchemaInternal } from "./Measure_Group_Stratifier";

/** A group of population criteria for the measure. */
export interface Measure_Group extends BackboneElement {
	/** The human readable description of this population group. */
	description?: string;
	/** Extensions for description */
	_description?: Element;
	/** A unique identifier for the group. This identifier will used to report data for the group in the measure report. */
	identifier: Identifier;
	/** Optional name or short description of this group. */
	name?: string;
	/** Extensions for name */
	_name?: Element;
	/** A population criteria for the measure. */
	population?: Array<Measure_Group_Population>;
	/** The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library, or a valid FHIR Resource Path. */
	stratifier?: Array<Measure_Group_Stratifier>;
}

const getElementSchema = (): z.ZodType<Element> =>
	ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
	IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMeasure_Group_PopulationSchema =
	(): z.ZodType<Measure_Group_Population> =>
		Measure_Group_PopulationSchemaInternal as z.ZodType<Measure_Group_Population>;
const getMeasure_Group_StratifierSchema =
	(): z.ZodType<Measure_Group_Stratifier> =>
		Measure_Group_StratifierSchemaInternal as z.ZodType<Measure_Group_Stratifier>;

/** @internal */
export const Measure_GroupSchemaInternal = BackboneElementSchemaInternal.extend(
	{
		description: fhirString().optional(),
		_description: z.lazy(getElementSchema).optional(),
		identifier: z.lazy(getIdentifierSchema),
		name: fhirString().optional(),
		_name: z.lazy(getElementSchema).optional(),
		population: z.lazy(getMeasure_Group_PopulationSchema).array().optional(),
		stratifier: z.lazy(getMeasure_Group_StratifierSchema).array().optional(),
	},
).strict();

export const Measure_GroupSchema =
	Measure_GroupSchemaInternal as z.ZodType<Measure_Group>;
