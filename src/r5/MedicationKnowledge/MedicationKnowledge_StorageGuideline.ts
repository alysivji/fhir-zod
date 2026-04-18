// Profile: http://hl7.org/fhir/StructureDefinition/MedicationKnowledge
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import { fhirUri } from "../../shared/fhir-primitives";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { Duration } from "../Duration";
import { DurationSchemaInternal } from "../Duration";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { MedicationKnowledge_StorageGuideline_EnvironmentalSetting } from "./MedicationKnowledge_StorageGuideline_EnvironmentalSetting";
import { MedicationKnowledge_StorageGuideline_EnvironmentalSettingSchemaInternal } from "./MedicationKnowledge_StorageGuideline_EnvironmentalSetting";

/** Information on how the medication should be stored, for example, refrigeration temperatures and length of stability at a given temperature. */
export interface MedicationKnowledge_StorageGuideline extends BackboneElement {
  /** Describes a setting/value on the environment for the adequate storage of the medication and other substances.  Environment settings may involve temperature, humidity, or exposure to light. */
  environmentalSetting?: Array<MedicationKnowledge_StorageGuideline_EnvironmentalSetting>;
  /** Additional notes about the storage. */
  note?: Array<Annotation>;
  /** Reference to additional information about the storage guidelines. */
  reference?: string;
  /** Extensions for reference */
  _reference?: Element;
  /** Duration that the medication remains stable if the environmentalSetting is respected. */
  stabilityDuration?: Duration;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getMedicationKnowledge_StorageGuideline_EnvironmentalSettingSchema =
  (): z.ZodType<MedicationKnowledge_StorageGuideline_EnvironmentalSetting> =>
    MedicationKnowledge_StorageGuideline_EnvironmentalSettingSchemaInternal as z.ZodType<MedicationKnowledge_StorageGuideline_EnvironmentalSetting>;

/** @internal */
export const MedicationKnowledge_StorageGuidelineSchemaInternal =
  BackboneElementSchemaInternal.extend({
    environmentalSetting: z
      .lazy(getMedicationKnowledge_StorageGuideline_EnvironmentalSettingSchema)
      .array()
      .optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    reference: fhirUri().optional(),
    _reference: z.lazy(getElementSchema).optional(),
    stabilityDuration: z.lazy(getDurationSchema).optional(),
  }).strict();

export const MedicationKnowledge_StorageGuidelineSchema =
  MedicationKnowledge_StorageGuidelineSchemaInternal as z.ZodType<MedicationKnowledge_StorageGuideline>;
