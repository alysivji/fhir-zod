// Source: https://hl7.org/fhir/R5/measure-definitions.html#Measure.term
// Profile: http://hl7.org/fhir/StructureDefinition/Measure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Provides a description of an individual term used within the measure. */
export interface Measure_Term extends BackboneElement {
  /** A codeable representation of the defined term. */
  code?: CodeableConcept;
  /** Provides a definition for the term as used within the measure. */
  definition?: string;
  /** Extensions for definition */
  _definition?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const Measure_TermSchemaInternal = BackboneElementSchemaInternal.extend({
  code: z.lazy(getCodeableConceptSchema).optional(),
  definition: z
    .string()
    .regex(/^[\s\S]+$/)
    .optional(),
  _definition: z.lazy(getElementSchema).optional(),
}).strict();

export const Measure_TermSchema =
  Measure_TermSchemaInternal as z.ZodType<Measure_Term>;
