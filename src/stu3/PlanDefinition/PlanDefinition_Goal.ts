// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T03:47:44.174Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";
import type { PlanDefinition_Goal_Target } from "./PlanDefinition_Goal_Target";
import { PlanDefinition_Goal_TargetSchemaInternal } from "./PlanDefinition_Goal_Target";

/** Goals that describe what the activities within the plan are intended to achieve. For example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc. */
export interface PlanDefinition_Goal extends BackboneElement {
	/** Identifies problems, conditions, issues, or concerns the goal is intended to address. */
	addresses?: Array<CodeableConcept>;
	/** Indicates a category the goal falls within. */
	category?: CodeableConcept;
	/** Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding". */
	description: CodeableConcept;
	/** Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources. */
	documentation?: Array<RelatedArtifact>;
	/** Identifies the expected level of importance associated with reaching/sustaining the defined goal. */
	priority?: CodeableConcept;
	/** The event after which the goal should begin being pursued. */
	start?: CodeableConcept;
	/** Indicates what should be done and within what timeframe. */
	target?: Array<PlanDefinition_Goal_Target>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
	CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getPlanDefinition_Goal_TargetSchema =
	(): z.ZodType<PlanDefinition_Goal_Target> =>
		PlanDefinition_Goal_TargetSchemaInternal as z.ZodType<PlanDefinition_Goal_Target>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
	RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;

/** @internal */
export const PlanDefinition_GoalSchemaInternal =
	BackboneElementSchemaInternal.extend({
		addresses: z.lazy(getCodeableConceptSchema).array().optional(),
		category: z.lazy(getCodeableConceptSchema).optional(),
		description: z.lazy(getCodeableConceptSchema),
		documentation: z.lazy(getRelatedArtifactSchema).array().optional(),
		priority: z.lazy(getCodeableConceptSchema).optional(),
		start: z.lazy(getCodeableConceptSchema).optional(),
		target: z.lazy(getPlanDefinition_Goal_TargetSchema).array().optional(),
	}).strict();

export const PlanDefinition_GoalSchema =
	PlanDefinition_GoalSchemaInternal as z.ZodType<PlanDefinition_Goal>;
