// Profile: http://hl7.org/fhir/StructureDefinition/ActivityDefinition
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:00:56.233Z

import * as z from "zod";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Element } from "../Element";
import { ElementSchemaInternal } from "../Element";

/** Indicates who should participate in performing the action described. */
export interface ActivityDefinition_Participant extends BackboneElement {
  /** The role the participant should play in performing the described action. */
  role?: CodeableConcept;
  /** The type of participant in the action. */
  type: "patient" | "practitioner" | "related-person";
  /** Extensions for type */
  _type?: Element;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getElementSchema = (): z.ZodType<Element> =>
  ElementSchemaInternal as z.ZodType<Element>;

/** @internal */
export const ActivityDefinition_ParticipantSchemaInternal =
  BackboneElementSchemaInternal.extend({
    role: z.lazy(getCodeableConceptSchema).optional(),
    type: z.enum(["patient", "practitioner", "related-person"]),
    _type: z.lazy(getElementSchema).optional(),
  }).strict();

export const ActivityDefinition_ParticipantSchema =
  ActivityDefinition_ParticipantSchemaInternal as z.ZodType<ActivityDefinition_Participant>;
