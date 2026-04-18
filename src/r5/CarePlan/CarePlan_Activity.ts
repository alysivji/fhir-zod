// Profile: http://hl7.org/fhir/StructureDefinition/CarePlan
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T03:47:50.212Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { Annotation } from "../Annotation";
import { AnnotationSchemaInternal } from "../Annotation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableReference } from "../CodeableReference";
import { CodeableReferenceSchemaInternal } from "../CodeableReference";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Identifies an action that has occurred or is a planned action to occur as part of the plan. For example, a medication to be used, lab tests to perform, self-monitoring that has occurred, education etc. */
export interface CarePlan_Activity extends BackboneElement {
	/** Identifies the activity that was performed. For example, an activity could be patient education, exercise, or a medication administration. The reference to an "event" resource, such as Procedure or Encounter or Observation, represents the activity that was performed. The requested activity can be conveyed using the CarePlan.activity.plannedActivityReference (a reference to a “request” resource). */
	performedActivity?: Array<CodeableReference>;
	/** The details of the proposed activity represented in a specific resource. */
	plannedActivityReference?: Reference;
	/** Notes about the adherence/status/progress of the activity. */
	progress?: Array<Annotation>;
}

const getAnnotationSchema = (): z.ZodType<Annotation> =>
	AnnotationSchemaInternal as z.ZodType<Annotation>;
const getCodeableReferenceSchema = (): z.ZodType<CodeableReference> =>
	CodeableReferenceSchemaInternal as z.ZodType<CodeableReference>;
const getReferenceSchema = (): z.ZodType<Reference> =>
	ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const CarePlan_ActivitySchemaInternal =
	BackboneElementSchemaInternal.extend({
		performedActivity: z.lazy(getCodeableReferenceSchema).array().optional(),
		plannedActivityReference: z.lazy(getReferenceSchema).optional(),
		progress: z.lazy(getAnnotationSchema).array().optional(),
	})
		.strict()
		.superRefine((value, ctx) => {
			const record = value as Record<string, unknown>;
			validateReferenceTarget(
				record.plannedActivityReference,
				"plannedActivityReference",
				[
					"http://hl7.org/fhir/StructureDefinition/Appointment",
					"http://hl7.org/fhir/StructureDefinition/CommunicationRequest",
					"http://hl7.org/fhir/StructureDefinition/DeviceRequest",
					"http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
					"http://hl7.org/fhir/StructureDefinition/MedicationRequest",
					"http://hl7.org/fhir/StructureDefinition/NutritionOrder",
					"http://hl7.org/fhir/StructureDefinition/RequestOrchestration",
					"http://hl7.org/fhir/StructureDefinition/ServiceRequest",
					"http://hl7.org/fhir/StructureDefinition/SupplyRequest",
					"http://hl7.org/fhir/StructureDefinition/Task",
					"http://hl7.org/fhir/StructureDefinition/VisionPrescription",
				],
				[
					"Appointment",
					"CommunicationRequest",
					"DeviceRequest",
					"ImmunizationRecommendation",
					"MedicationRequest",
					"NutritionOrder",
					"RequestOrchestration",
					"ServiceRequest",
					"SupplyRequest",
					"Task",
					"VisionPrescription",
				],
				ctx,
			);
		});

export const CarePlan_ActivitySchema =
	CarePlan_ActivitySchemaInternal as z.ZodType<CarePlan_Activity>;
