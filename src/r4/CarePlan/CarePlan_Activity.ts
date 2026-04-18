// Profile: http://hl7.org/fhir/StructureDefinition/CarePlan
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:00:42.795Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { CarePlan_Activity_Detail } from "./CarePlan_Activity_Detail";
import { CarePlan_Activity_DetailSchemaInternal } from "./CarePlan_Activity_Detail";

/** Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc. */
export interface CarePlan_Activity extends BackboneElement {
  /** A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc. */
  detail?: CarePlan_Activity_Detail;
  /** Identifies the outcome at the point when the status of the activity is assessed.  For example, the outcome of an education activity could be patient understands (or not). */
  outcomeCodeableConcept?: Array<CodeableConcept>;
  /** Details of the outcome or action resulting from the activity.  The reference to an "event" resource, such as Procedure or Encounter or Observation, is the result/outcome of the activity itself.  The activity can be conveyed using CarePlan.activity.detail OR using the CarePlan.activity.reference (a reference to a “request” resource). */
  outcomeReference?: Array<Reference>;
  /** Notes about the adherence/status/progress of the activity. */
  progress?: Array<Annotation>;
  /** The details of the proposed activity represented in a specific resource. */
  reference?: Reference;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
  AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCarePlan_Activity_DetailSchema =
  (): z.ZodType<CarePlan_Activity_Detail> =>
    CarePlan_Activity_DetailSchemaInternal as z.ZodType<CarePlan_Activity_Detail>;
const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CarePlan_ActivitySchemaInternal =
  BackboneElementSchemaInternal.extend({
    detail: z.lazy(getCarePlan_Activity_DetailSchema).optional(),
    outcomeCodeableConcept: z.lazy(getCodeableConceptSchema).array().optional(),
    outcomeReference: z.lazy(getReferenceSchema).array().optional(),
    progress: z.lazy(getAnnotationSchema).array().optional(),
    reference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.outcomeReference,
        "outcomeReference",
        ["http://hl7.org/fhir/StructureDefinition/Resource"],
        ["Resource"],
        ctx,
      );
      validateReferenceTarget(
        record.reference,
        "reference",
        [
          "http://hl7.org/fhir/StructureDefinition/Appointment",
          "http://hl7.org/fhir/StructureDefinition/CommunicationRequest",
          "http://hl7.org/fhir/StructureDefinition/DeviceRequest",
          "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
          "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
          "http://hl7.org/fhir/StructureDefinition/RequestGroup",
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
          "http://hl7.org/fhir/StructureDefinition/Task",
          "http://hl7.org/fhir/StructureDefinition/VisionPrescription",
        ],
        [
          "Appointment",
          "CommunicationRequest",
          "DeviceRequest",
          "MedicationRequest",
          "NutritionOrder",
          "RequestGroup",
          "ServiceRequest",
          "Task",
          "VisionPrescription",
        ],
        ctx,
      );
    });

export const CarePlan_ActivitySchema =
  CarePlan_ActivitySchemaInternal as z.ZodType<CarePlan_Activity>;
