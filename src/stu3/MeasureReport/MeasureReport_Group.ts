// Source: https://hl7.org/fhir/STU3/measurereport-definitions.html#MeasureReport.group
// Profile: http://hl7.org/fhir/StructureDefinition/MeasureReport
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";
import type { MeasureReport_Group_Population } from "./MeasureReport_Group_Population";
import { MeasureReport_Group_PopulationSchemaInternal } from "./MeasureReport_Group_Population";
import type { MeasureReport_Group_Stratifier } from "./MeasureReport_Group_Stratifier";
import { MeasureReport_Group_StratifierSchemaInternal } from "./MeasureReport_Group_Stratifier";

/** The results of the calculation, one for each population group in the measure. */
export interface MeasureReport_Group extends BackboneElement {
  /** The identifier of the population group as defined in the measure definition. */
  identifier: Identifier;
  /** The measure score for this population group, calculated as appropriate for the measure type and scoring method, and based on the contents of the populations defined in the group. */
  measureScore?: number;
  /** Extensions for measureScore */
  _measureScore?: Element;
  /** The populations that make up the population group, one for each type of population appropriate for the measure. */
  population?: Array<MeasureReport_Group_Population>;
  /** When a measure includes multiple stratifiers, there will be a stratifier group for each stratifier defined by the measure. */
  stratifier?: Array<MeasureReport_Group_Stratifier>;
}

const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;
const getMeasureReport_Group_PopulationSchema =
  (): z.ZodType<MeasureReport_Group_Population> =>
    MeasureReport_Group_PopulationSchemaInternal as z.ZodType<MeasureReport_Group_Population>;
const getMeasureReport_Group_StratifierSchema =
  (): z.ZodType<MeasureReport_Group_Stratifier> =>
    MeasureReport_Group_StratifierSchemaInternal as z.ZodType<MeasureReport_Group_Stratifier>;

/** @internal */
export const MeasureReport_GroupSchemaInternal =
  BackboneElementSchemaInternal.extend({
    identifier: z.lazy(getIdentifierSchema),
    measureScore: z.number().optional(),
    _measureScore: z.lazy(getElementSchema).optional(),
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
