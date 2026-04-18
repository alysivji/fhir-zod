// Source: https://hl7.org/fhir/R5/familymemberhistory-definitions.html#FamilyMemberHistory.condition
// Profile: http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirString } from "../../shared/fhir-primitives";
import type { Age } from "../Age";
import { AgeSchemaInternal } from "../Age";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";

/** The significant Conditions (or condition) that the family member had. This is a repeating section to allow a system to represent more than one condition per resource, though there is nothing stopping multiple resources - one per condition. */
export interface FamilyMemberHistory_Condition extends BackboneElement {
  /** The actual condition specified. Could be a coded condition (like MI or Diabetes) or a less specific string like 'cancer' depending on how much is known about the condition and the capabilities of the creating system. */
  code: CodeableConcept;
  /** This condition contributed to the cause of death of the related person. If contributedToDeath is not populated, then it is unknown. */
  contributedToDeath?: boolean;
  /** Extensions for contributedToDeath */
  _contributedToDeath?: Element;
  /** An area where general notes can be placed about this specific condition. */
  note?: Array<Annotation>;
  /** Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence. */
  onsetAge?: Age;
  /** Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence. */
  onsetPeriod?: Period;
  /** Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence. */
  onsetRange?: Range;
  /** Either the age of onset, range of approximate age or descriptive string can be recorded.  For conditions with multiple occurrences, this describes the first known occurrence. */
  onsetString?: string;
  /** Extensions for onsetString */
  _onsetString?: Element;
  /** Indicates what happened following the condition.  If the condition resulted in death, deceased date is captured on the relation. */
  outcome?: CodeableConcept;
}

const getAgeSchema = (): z.ZodType<Age> => AgeSchemaInternal as z.ZodType<Age>;
const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;

/** @internal */
export const FamilyMemberHistory_ConditionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    code: z.lazy(getCodeableConceptSchema),
    contributedToDeath: z.boolean().optional(),
    _contributedToDeath: z.lazy(getElementSchema).optional(),
    note: z.lazy(getAnnotationSchema).array().optional(),
    onsetAge: z.lazy(getAgeSchema).optional(),
    onsetPeriod: z.lazy(getPeriodSchema).optional(),
    onsetRange: z.lazy(getRangeSchema).optional(),
    onsetString: fhirString().optional(),
    _onsetString: z.lazy(getElementSchema).optional(),
    outcome: z.lazy(getCodeableConceptSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const onset_x_Present = [
        "onsetAge",
        "onsetPeriod",
        "onsetRange",
        "onsetString",
      ].filter((field) => record[field] !== undefined);
      if (onset_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of onsetAge, onsetPeriod, onsetRange, onsetString may be present for onset[x]",
          path: [onset_x_Present[0]],
        });
      }
    });

export const FamilyMemberHistory_ConditionSchema =
  FamilyMemberHistory_ConditionSchemaInternal as z.ZodType<FamilyMemberHistory_Condition>;
