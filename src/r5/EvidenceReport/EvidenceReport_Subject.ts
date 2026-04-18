// Profile: http://hl7.org/fhir/StructureDefinition/EvidenceReport
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:01:01.100Z

import * as z from "zod";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { EvidenceReport_Subject_Characteristic } from "./EvidenceReport_Subject_Characteristic";
import { EvidenceReport_Subject_CharacteristicSchemaInternal } from "./EvidenceReport_Subject_Characteristic";

/** Specifies the subject or focus of the report. Answers "What is this report about?". */
export interface EvidenceReport_Subject extends BackboneElement {
  /** Characteristic. */
  characteristic?: Array<EvidenceReport_Subject_Characteristic>;
  /** Used for general notes and annotations not coded elsewhere. */
  note?: Array<Annotation>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getEvidenceReport_Subject_CharacteristicSchema =
  (): z.ZodType<EvidenceReport_Subject_Characteristic> =>
    EvidenceReport_Subject_CharacteristicSchemaInternal as z.ZodType<EvidenceReport_Subject_Characteristic>;

/** @internal */
export const EvidenceReport_SubjectSchemaInternal =
  BackboneElementSchemaInternal.extend({
    characteristic: z
      .lazy(getEvidenceReport_Subject_CharacteristicSchema)
      .array()
      .optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
  }).strict();

export const EvidenceReport_SubjectSchema =
  EvidenceReport_SubjectSchemaInternal as z.ZodType<EvidenceReport_Subject>;
