// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import { validatePrimitiveArrayPair } from "../../shared/fhir-primitive-array-validation";
import { fhirDateTime, fhirId, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Coding } from "../Coding";
import { CodingSchemaInternal } from "../Coding";
import type { DataRequirement } from "../DataRequirement";
import { DataRequirementSchemaInternal } from "../DataRequirement";
import type { Duration } from "../Duration";
import { DurationSchemaInternal } from "../Duration";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Period } from "../Period";
import { PeriodSchemaInternal } from "../Period";
import type { Range } from "../Range";
import { RangeSchemaInternal } from "../Range";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";
import type { RelatedArtifact } from "../RelatedArtifact";
import { RelatedArtifactSchemaInternal } from "../RelatedArtifact";
import type { Timing } from "../Timing";
import { TimingSchemaInternal } from "../Timing";
import type { TriggerDefinition } from "../TriggerDefinition";
import { TriggerDefinitionSchemaInternal } from "../TriggerDefinition";
import type { PlanDefinition_Action_Condition } from "./PlanDefinition_Action_Condition";
import { PlanDefinition_Action_ConditionSchemaInternal } from "./PlanDefinition_Action_Condition";
import type { PlanDefinition_Action_DynamicValue } from "./PlanDefinition_Action_DynamicValue";
import { PlanDefinition_Action_DynamicValueSchemaInternal } from "./PlanDefinition_Action_DynamicValue";
import type { PlanDefinition_Action_Participant } from "./PlanDefinition_Action_Participant";
import { PlanDefinition_Action_ParticipantSchemaInternal } from "./PlanDefinition_Action_Participant";
import type { PlanDefinition_Action_RelatedAction } from "./PlanDefinition_Action_RelatedAction";
import { PlanDefinition_Action_RelatedActionSchemaInternal } from "./PlanDefinition_Action_RelatedAction";

/** An action to be taken as part of the plan. */
export interface PlanDefinition_Action extends BackboneElement {
  /** Sub actions that are contained within the action. The behavior of this action determines the functionality of the sub-actions. For example, a selection behavior of at-most-one indicates that of the sub-actions, at most one may be chosen as part of realizing the action definition. */
  action?: Array<unknown>;
  /** Defines whether the action can be selected multiple times. */
  cardinalityBehavior?: "multiple" | "single";
  /** Extensions for cardinalityBehavior */
  _cardinalityBehavior?: Element;
  /** A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a the section of a documentation template. */
  code?: Array<CodeableConcept>;
  /** An expression that describes applicability criteria, or start/stop conditions for the action. */
  condition?: Array<PlanDefinition_Action_Condition>;
  /** A reference to an ActivityDefinition that describes the action to be taken in detail, or a PlanDefinition that describes a series of actions to be taken. */
  definition?: Reference;
  /** A short description of the action used to provide a summary to display to the user. */
  description?: string;
  /** Extensions for description */
  _description?: Element;
  /** Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources. */
  documentation?: Array<RelatedArtifact>;
  /** Customizations that should be applied to the statically defined resource. For example, if the dosage of a medication must be computed based on the patient's weight, a customization would be used to specify an expression that calculated the weight, and the path on the resource that would contain the result. */
  dynamicValue?: Array<PlanDefinition_Action_DynamicValue>;
  /** Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition. */
  goalId?: Array<string | null>;
  /** Extensions for goalId */
  _goalId?: Array<Element | null>;
  /** Defines the grouping behavior for the action and its children. */
  groupingBehavior?: "logical-group" | "sentence-group" | "visual-group";
  /** Extensions for groupingBehavior */
  _groupingBehavior?: Element;
  /** Defines input data requirements for the action. */
  input?: Array<DataRequirement>;
  /** A user-visible label for the action. */
  label?: string;
  /** Extensions for label */
  _label?: Element;
  /** Defines the outputs of the action, if any. */
  output?: Array<DataRequirement>;
  /** Indicates who should participate in performing the action described. */
  participant?: Array<PlanDefinition_Action_Participant>;
  /** Defines whether the action should usually be preselected. */
  precheckBehavior?: "no" | "yes";
  /** Extensions for precheckBehavior */
  _precheckBehavior?: Element;
  /** A description of why this action is necessary or appropriate. */
  reason?: Array<CodeableConcept>;
  /** A relationship to another action such as "before" or "30-60 minutes after start of". */
  relatedAction?: Array<PlanDefinition_Action_RelatedAction>;
  /** Defines the requiredness behavior for the action. */
  requiredBehavior?: "could" | "must" | "must-unless-documented";
  /** Extensions for requiredBehavior */
  _requiredBehavior?: Element;
  /** Defines the selection behavior for the action and its children. */
  selectionBehavior?:
    | "all"
    | "all-or-none"
    | "any"
    | "at-most-one"
    | "exactly-one"
    | "one-or-more";
  /** Extensions for selectionBehavior */
  _selectionBehavior?: Element;
  /** A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that may not be capable of interpreting it dynamically. */
  textEquivalent?: string;
  /** Extensions for textEquivalent */
  _textEquivalent?: Element;
  /** An optional value describing when the action should be performed. */
  timingDateTime?: string;
  /** Extensions for timingDateTime */
  _timingDateTime?: Element;
  /** An optional value describing when the action should be performed. */
  timingDuration?: Duration;
  /** An optional value describing when the action should be performed. */
  timingPeriod?: Period;
  /** An optional value describing when the action should be performed. */
  timingRange?: Range;
  /** An optional value describing when the action should be performed. */
  timingTiming?: Timing;
  /** The title of the action displayed to a user. */
  title?: string;
  /** Extensions for title */
  _title?: Element;
  /** A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input. */
  transform?: Reference;
  /** A description of when the action should be triggered. */
  triggerDefinition?: Array<TriggerDefinition>;
  /** The type of action to perform (create, update, remove). */
  type?: Coding;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getCodingSchema = (): z.ZodType<Coding> =>
  CodingSchemaInternal as z.ZodType<Coding>;
const getDataRequirementSchema = (): z.ZodType<DataRequirement> =>
  DataRequirementSchemaInternal as z.ZodType<DataRequirement>;
const getDurationSchema = (): z.ZodType<Duration> =>
  DurationSchemaInternal as z.ZodType<Duration>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getPeriodSchema = (): z.ZodType<Period> =>
  PeriodSchemaInternal as z.ZodType<Period>;
const getPlanDefinition_Action_ConditionSchema =
  (): z.ZodType<PlanDefinition_Action_Condition> =>
    PlanDefinition_Action_ConditionSchemaInternal as z.ZodType<PlanDefinition_Action_Condition>;
const getPlanDefinition_Action_DynamicValueSchema =
  (): z.ZodType<PlanDefinition_Action_DynamicValue> =>
    PlanDefinition_Action_DynamicValueSchemaInternal as z.ZodType<PlanDefinition_Action_DynamicValue>;
const getPlanDefinition_Action_ParticipantSchema =
  (): z.ZodType<PlanDefinition_Action_Participant> =>
    PlanDefinition_Action_ParticipantSchemaInternal as z.ZodType<PlanDefinition_Action_Participant>;
const getPlanDefinition_Action_RelatedActionSchema =
  (): z.ZodType<PlanDefinition_Action_RelatedAction> =>
    PlanDefinition_Action_RelatedActionSchemaInternal as z.ZodType<PlanDefinition_Action_RelatedAction>;
const getRangeSchema = (): z.ZodType<Range> =>
  RangeSchemaInternal as z.ZodType<Range>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;
const getRelatedArtifactSchema = (): z.ZodType<RelatedArtifact> =>
  RelatedArtifactSchemaInternal as z.ZodType<RelatedArtifact>;
const getTimingSchema = (): z.ZodType<Timing> =>
  TimingSchemaInternal as z.ZodType<Timing>;
const getTriggerDefinitionSchema = (): z.ZodType<TriggerDefinition> =>
  TriggerDefinitionSchemaInternal as z.ZodType<TriggerDefinition>;

/** @internal */
export const PlanDefinition_ActionSchemaInternal =
  BackboneElementSchemaInternal.extend({
    action: z.unknown().array().optional(),
    cardinalityBehavior: z.enum(["multiple", "single"]).optional(),
    _cardinalityBehavior: z.lazy(getElementSchema).optional(),
    code: z.lazy(getCodeableConceptSchema).array().optional(),
    condition: z
      .lazy(getPlanDefinition_Action_ConditionSchema)
      .array()
      .optional(),
    definition: z.lazy(getReferenceSchema).optional(),
    description: fhirString().optional(),
    _description: z.lazy(getElementSchema).optional(),
    documentation: z.lazy(getRelatedArtifactSchema).array().optional(),
    dynamicValue: z
      .lazy(getPlanDefinition_Action_DynamicValueSchema)
      .array()
      .optional(),
    goalId: fhirId().nullable().array().optional(),
    _goalId: z.lazy(getElementSchema).nullable().array().optional(),
    groupingBehavior: z
      .enum(["logical-group", "sentence-group", "visual-group"])
      .optional(),
    _groupingBehavior: z.lazy(getElementSchema).optional(),
    input: z.lazy(getDataRequirementSchema).array().optional(),
    label: fhirString().optional(),
    _label: z.lazy(getElementSchema).optional(),
    output: z.lazy(getDataRequirementSchema).array().optional(),
    participant: z
      .lazy(getPlanDefinition_Action_ParticipantSchema)
      .array()
      .optional(),
    precheckBehavior: z.enum(["no", "yes"]).optional(),
    _precheckBehavior: z.lazy(getElementSchema).optional(),
    reason: z.lazy(getCodeableConceptSchema).array().optional(),
    relatedAction: z
      .lazy(getPlanDefinition_Action_RelatedActionSchema)
      .array()
      .optional(),
    requiredBehavior: z
      .enum(["could", "must", "must-unless-documented"])
      .optional(),
    _requiredBehavior: z.lazy(getElementSchema).optional(),
    selectionBehavior: z
      .enum([
        "all",
        "all-or-none",
        "any",
        "at-most-one",
        "exactly-one",
        "one-or-more",
      ])
      .optional(),
    _selectionBehavior: z.lazy(getElementSchema).optional(),
    textEquivalent: fhirString().optional(),
    _textEquivalent: z.lazy(getElementSchema).optional(),
    timingDateTime: fhirDateTime().optional(),
    _timingDateTime: z.lazy(getElementSchema).optional(),
    timingDuration: z.lazy(getDurationSchema).optional(),
    timingPeriod: z.lazy(getPeriodSchema).optional(),
    timingRange: z.lazy(getRangeSchema).optional(),
    timingTiming: z.lazy(getTimingSchema).optional(),
    title: fhirString().optional(),
    _title: z.lazy(getElementSchema).optional(),
    transform: z.lazy(getReferenceSchema).optional(),
    triggerDefinition: z.lazy(getTriggerDefinitionSchema).array().optional(),
    type: z.lazy(getCodingSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      const timing_x_Present = [
        "timingDateTime",
        "timingDuration",
        "timingPeriod",
        "timingRange",
        "timingTiming",
      ].filter((field) => record[field] !== undefined);
      if (timing_x_Present.length > 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Only one of timingDateTime, timingDuration, timingPeriod, timingRange, timingTiming may be present for timing[x]",
          path: [timing_x_Present[0]],
        });
      }
      validatePrimitiveArrayPair(
        record.goalId,
        record._goalId,
        "goalId",
        "_goalId",
        ctx,
      );
      validateReferenceTarget(
        record.definition,
        "definition",
        [
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
        ],
        ["ActivityDefinition", "PlanDefinition"],
        ctx,
      );
      validateReferenceTarget(
        record.transform,
        "transform",
        ["http://hl7.org/fhir/StructureDefinition/StructureMap"],
        ["StructureMap"],
        ctx,
      );
    });

export const PlanDefinition_ActionSchema =
  PlanDefinition_ActionSchemaInternal as z.ZodType<PlanDefinition_Action>;
