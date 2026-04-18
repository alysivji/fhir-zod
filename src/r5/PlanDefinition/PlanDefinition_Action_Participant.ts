// Source: https://hl7.org/fhir/R5/plandefinition-definitions.html#PlanDefinition.action.participant
// Profile: http://hl7.org/fhir/StructureDefinition/PlanDefinition
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { fhirCanonical, fhirString } from "../../shared/fhir-primitives";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Indicates who should participate in performing the action described. */
export interface PlanDefinition_Action_Participant extends BackboneElement {
  /** A reference to the id element of the actor who will participate in this action. */
  actorId?: string;
  /** Extensions for actorId */
  _actorId?: Element;
  /** Indicates how the actor will be involved in the action - author, reviewer, witness, etc. */
  function?: CodeableConcept;
  /** The role the participant should play in performing the described action. */
  role?: CodeableConcept;
  /** The type of participant in the action. */
  type?:
    | "careteam"
    | "device"
    | "group"
    | "healthcareservice"
    | "location"
    | "organization"
    | "patient"
    | "practitioner"
    | "practitionerrole"
    | "relatedperson";
  /** Extensions for type */
  _type?: Element;
  /** The type of participant in the action. */
  typeCanonical?: string;
  /** Extensions for typeCanonical */
  _typeCanonical?: Element;
  /** The type of participant in the action. */
  typeReference?: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const PlanDefinition_Action_ParticipantSchemaInternal =
  BackboneElementSchemaInternal.extend({
    actorId: fhirString().optional(),
    _actorId: z.lazy(getElementSchema).optional(),
    function: z.lazy(getCodeableConceptSchema).optional(),
    role: z.lazy(getCodeableConceptSchema).optional(),
    type: z
      .enum([
        "careteam",
        "device",
        "group",
        "healthcareservice",
        "location",
        "organization",
        "patient",
        "practitioner",
        "practitionerrole",
        "relatedperson",
      ])
      .optional(),
    _type: z.lazy(getElementSchema).optional(),
    typeCanonical: fhirCanonical().optional(),
    _typeCanonical: z.lazy(getElementSchema).optional(),
    typeReference: z.lazy(getReferenceSchema).optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.typeReference,
        "typeReference",
        [
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
          "http://hl7.org/fhir/StructureDefinition/Endpoint",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "CareTeam",
          "Device",
          "DeviceDefinition",
          "Endpoint",
          "Group",
          "HealthcareService",
          "Location",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
    });

export const PlanDefinition_Action_ParticipantSchema =
  PlanDefinition_Action_ParticipantSchemaInternal as z.ZodType<PlanDefinition_Action_Participant>;
