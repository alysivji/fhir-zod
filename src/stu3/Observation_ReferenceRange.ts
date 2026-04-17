// Profile: http://hl7.org/fhir/StructureDefinition/Observation
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { fhirString } from "../shared/fhir-primitives";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Element } from "./Element";
import { ElementSchemaInternal } from "./Element";
import type { Quantity } from "./Quantity";
import { QuantitySchemaInternal } from "./Quantity";
import type { Range } from "./Range";
import { RangeSchemaInternal } from "./Range";

/** Guidance on how to interpret the value by comparison to a normal or recommended range. */
export interface Observation_ReferenceRange extends BackboneElement {
  /** The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so. */
  age?: Range;
  /** Codes to indicate the target population this reference range applies to.  For example, a reference range may be based on the normal population or a particular sex or race. */
  appliesTo?: Array<CodeableConcept>;
  /** The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is >= 2.3). */
  high?: Quantity;
  /** The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is >=5 - <=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is <=2.3). */
  low?: Quantity;
  /** Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of 'normals'. */
  text?: string;
  /** Extensions for text */
  _text?: Element;
  /** Codes to indicate the what part of the targeted reference population it applies to. For example, the normal or therapeutic range. */
  type?: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const Observation_ReferenceRangeSchemaInternal =
  BackboneElementSchemaInternal.extend({
    age: z.lazy(getRangeSchema).optional(),
    appliesTo: z.lazy(getCodeableConceptSchema).array().optional(),
    high: z.lazy(getQuantitySchema).optional(),
    low: z.lazy(getQuantitySchema).optional(),
    text: fhirString().optional(),
    _text: z.lazy(getElementSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const Observation_ReferenceRangeSchema =
  Observation_ReferenceRangeSchemaInternal as z.ZodType<Observation_ReferenceRange>;
