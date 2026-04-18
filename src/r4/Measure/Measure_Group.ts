// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Measure_Group_Population } from "./Measure_Group_Population";
import { Measure_Group_PopulationSchemaInternal } from "./Measure_Group_Population";
import type { Measure_Group_Stratifier } from "./Measure_Group_Stratifier";
import { Measure_Group_StratifierSchemaInternal } from "./Measure_Group_Stratifier";

/** A group of population criteria for the measure. */
export interface Measure_Group extends BackboneElement {
  /** Indicates a meaning for the group. This can be as simple as a unique identifier, or it can establish meaning in a broader context by drawing from a terminology, allowing groups to be correlated across measures. */
  code?: CodeableConcept;
  /** The human readable description of this population group. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A population criteria for the measure. */
  population?: Array<Measure_Group_Population>;
  /** The stratifier criteria for the measure report, specified as either the name of a valid CQL expression defined within a referenced library or a valid FHIR Resource Path. */
  stratifier?: Array<Measure_Group_Stratifier>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMeasure_Group_PopulationSchema =
  (): z.ZodType<Measure_Group_Population> =>
    Measure_Group_PopulationSchemaInternal as z.ZodType<Measure_Group_Population>;
const getMeasure_Group_StratifierSchema =
  (): z.ZodType<Measure_Group_Stratifier> =>
    Measure_Group_StratifierSchemaInternal as z.ZodType<Measure_Group_Stratifier>;

/** @internal */
export const Measure_GroupSchemaInternal = BackboneElementSchemaInternal.extend(
  {
    code: z.lazy(getCodeableConceptSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    population: z.lazy(getMeasure_Group_PopulationSchema).array().optional(),
    stratifier: z.lazy(getMeasure_Group_StratifierSchema).array().optional(),
  },
).strict();

export const Measure_GroupSchema =
  Measure_GroupSchemaInternal as z.ZodType<Measure_Group>;
