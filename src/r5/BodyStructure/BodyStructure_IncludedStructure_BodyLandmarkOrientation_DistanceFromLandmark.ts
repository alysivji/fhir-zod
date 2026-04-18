// Profile: http://hl7.org/fhir/StructureDefinition/BodyStructure
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";

/** The distance in centimeters a certain observation is made from a body landmark. */
export interface BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmark
  extends BackboneElement {
  /** An instrument, tool, analyzer, etc. used in the measurement. */
  device?: Array<CodeableReference>;
  /** The measured distance (e.g., in cm) from a body landmark. */
  value?: Array<Quantity>;
}

const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
  CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;

/** @internal */
export const BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmarkSchemaInternal =
  BackboneElementSchemaInternal.extend({
    device: z.lazy(getCodeableReferenceSchema).array().optional(),
    value: z.lazy(getQuantitySchema).array().optional(),
  }).strict();

export const BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmarkSchema =
  BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmarkSchemaInternal as z.ZodType<BodyStructure_IncludedStructure_BodyLandmarkOrientation_DistanceFromLandmark>;
