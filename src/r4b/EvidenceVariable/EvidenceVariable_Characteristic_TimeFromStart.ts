// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceVariable
// Release: R4B
// Version: 4.3.0
// Last generated: 2026-04-18T17:00:58.420Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";

/** Indicates duration, period, or point of observation from the participant's study entry. */
export interface EvidenceVariable_Characteristic_TimeFromStart
  extends BackboneElement {
  /** A short, natural language description. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** A human-readable string to clarify or explain concepts about the resource. */
  note?: Array<Annotation>;
  /** Used to express the observation at a defined amount of time after the study start. */
  quantity?: Quantity;
  /** Used to express the observation within a period after the study start. */
  range?: Range;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const EvidenceVariable_Characteristic_TimeFromStartSchemaInternal =
  BackboneElementSchemaInternal.extend({
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
    range: z.lazy(getRangeSchema).optional(),
  }).strict();

export const EvidenceVariable_Characteristic_TimeFromStartSchema =
  EvidenceVariable_Characteristic_TimeFromStartSchemaInternal as z.ZodType<EvidenceVariable_Characteristic_TimeFromStart>;
