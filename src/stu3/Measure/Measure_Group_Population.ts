// Source: https://hl7.org/fhir/STU3/measure-definitions.html#Measure.group.population
// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Identifier } from "../Identifier";
import { IdentifierSchemaInternal } from "../Identifier";

/** A population criteria for the measure. */
export interface Measure_Group_Population extends BackboneElement {
  /** The type of population criteria. */
  code?: CodeableConcept;
  /** The name of a valid referenced CQL expression (may be namespaced) that defines this population criteria. */
  criteria: string;
  /** Extensions for criteria */
  _criteria?: Element;
  /** The human readable description of this population criteria. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A unique identifier for the population criteria. This identifier is used to report data against this criteria within the measure report. */
  identifier?: Identifier;
  /** Optional name or short description of this population. */
  name?: string;
  /** Extensions for name */
  _name?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getIdentifierSchema = (): z.ZodType<Identifier> =>
  IdentifierSchemaInternal as z.ZodType<Identifier>;

/** @internal */
export const Measure_Group_PopulationSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema).optional(),
    criteria: fhirString(),
    _criteria: z.lazy(getElementSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    identifier: z.lazy(getIdentifierSchema).optional(),
    name: fhirString().optional(),
    _name: z.lazy(getElementSchema).optional(),
  }).strict();

export const Measure_Group_PopulationSchema =
  Measure_Group_PopulationSchemaInternal as z.ZodType<Measure_Group_Population>;
