// Source: https://hl7.org/fhir/R5/provenance-definitions.html#Provenance.agent
// Profile: http://hl7.org/fhir/StructureDefinition/Provenance
// Release: R5
// Version: 5.0.0
// Last generated: 2026-04-18T17:27:36.849Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** An actor taking a role in an activity  for which it can be assigned some degree of responsibility for the activity taking place. */
export interface Provenance_Agent extends BackboneElement {
  /** The agent that delegated authority to perform the activity performed by the agent.who element. */
  onBehalfOf?: Reference;
  /** The structural roles of the agent indicating the agent's competency. The security role enabling the agent with respect to the activity. */
  role?: Array<CodeableConcept>;
  /** The Functional Role of the agent with respect to the activity. */
  type?: CodeableConcept;
  /** Indicates who or what performed in the event. */
  who: Reference;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Provenance_AgentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    onBehalfOf: z.lazy(getReferenceSchema).optional(),
    role: z.lazy(getCodeableConceptSchema).array().optional(),
    type: z.lazy(getCodeableConceptSchema).optional(),
    who: z.lazy(getReferenceSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.onBehalfOf,
        "onBehalfOf",
        [
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
        [
          "CareTeam",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
        ],
        ctx,
      );
      validateReferenceTarget(
        record.who,
        "who",
        [
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "CareTeam",
          "Device",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
    });

export const Provenance_AgentSchema =
  Provenance_AgentSchemaInternal as z.ZodType<Provenance_Agent>;
