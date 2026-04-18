// Profile: http://hl7.org/fhir/StructureDefinition/Evidence
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";

/** A statistical attribute of the statistic such as a measure of heterogeneity. */
export interface Evidence_Statistic_AttributeEstimate extends BackboneElement {
  /** A nested attribute estimate; which is the attribute estimate of an attribute estimate. */
  attributeEstimate?: Array<unknown>;
  /** Human-readable summary of the estimate. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Use 95 for a 95% confidence interval. */
  level?: number;
  /** Extensions for level */
  _level?: Element;
  /** Footnote or explanatory note about the estimate. */
  note?: Array<Annotation>;
  /** The singular quantity of the attribute estimate, for attribute estimates represented as single values; also used to report unit of measure. */
  quantity?: Quantity;
  /** Lower bound of confidence interval. */
  range?: Range;
  /** The type of attribute estimate, eg confidence interval or p value. */
  type?: CodeableConcept;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const Evidence_Statistic_AttributeEstimateSchemaInternal =
  BackboneElementSchemaInternal.extend({
    attributeEstimate: z.unknown().array().optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    level: z.number().optional(),
    _level: z.lazy(getElementSchema).optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    range: z.lazy(getRangeSchema).optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
  }).strict();

export const Evidence_Statistic_AttributeEstimateSchema =
  Evidence_Statistic_AttributeEstimateSchemaInternal as z.ZodType<Evidence_Statistic_AttributeEstimate>;
