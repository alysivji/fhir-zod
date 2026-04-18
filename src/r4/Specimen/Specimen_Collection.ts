// Profile: http://hl7.org/fhir/StructureDefinition/Specimen
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { fhirDateTime } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Duration } from "../Duration";
import { DurationSchemaInternal } from "../Duration";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Quantity } from "../Quantity";
import { QuantitySchemaInternal } from "../Quantity";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Details concerning the specimen collection. */
export interface Specimen_Collection extends BackboneElement {
  /** Anatomical location from which the specimen was collected (if subject is a patient). This is the target site.  This element is not used for environmental specimens. */
  bodySite?: CodeableConcept;
  /** Time when specimen was collected from subject - the physiologically relevant time. */
  collectedDateTime?: string;
  /** Extensions for collectedDateTime */
  _collectedDateTime?: Element;
  /** Time when specimen was collected from subject - the physiologically relevant time. */
  collectedPeriod?: Period;
  /** Person who collected the specimen. */
  collector?: Reference;
  /** The span of time over which the collection of a specimen occurred. */
  duration?: Duration;
  /** Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection. */
  fastingStatusCodeableConcept?: CodeableConcept;
  /** Abstinence or reduction from some or all food, drink, or both, for a period of time prior to sample collection. */
  fastingStatusDuration?: Duration;
  /** A coded value specifying the technique that is used to perform the procedure. */
  method?: CodeableConcept;
  /** The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample. */
  quantity?: Quantity;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getQuantitySchema = (): z.ZodType<Quantity> =>
  QuantitySchemaInternal as z.ZodType<Quantity>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Specimen_CollectionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    bodySite: z.lazy(getCodeableConceptSchema).optional(),
    collectedDateTime: fhirDateTime().optional(),
    _collectedDateTime: z.lazy(getElementSchema).optional(),
    collectedPeriod: z.lazy(getPeriodSchema).optional(),
    collector: z.lazy(getReferenceSchema).optional(),
    duration: z.lazy(getDurationSchema).optional(),
    fastingStatusCodeableConcept: z.lazy(getCodeableConceptSchema).optional(),
    fastingStatusDuration: z.lazy(getDurationSchema).optional(),
    method: z.lazy(getCodeableConceptSchema).optional(),
    quantity: z.lazy(getQuantitySchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const collected_x_Present = [
        "collectedDateTime",
        "collectedPeriod",
      ].filter((field) => record[field] !== undefined);
      if (collected_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of collectedDateTime, collectedPeriod may be present for collected[x]",
          path: [collected_x_Present[0]],
        });
      }
      const fastingStatus_x_Present = [
        "fastingStatusCodeableConcept",
        "fastingStatusDuration",
      ].filter((field) => record[field] !== undefined);
      if (fastingStatus_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of fastingStatusCodeableConcept, fastingStatusDuration may be present for fastingStatus[x]",
          path: [fastingStatus_x_Present[0]],
        });
      }
      validateReferenceTarget(
        record.collector,
        "collector",
        [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        ["Practitioner", "PractitionerRole"],
        ctx,
      );
    });

export const Specimen_CollectionSchema =
  Specimen_CollectionSchemaInternal as z.ZodType<Specimen_Collection>;
