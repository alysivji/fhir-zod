// Source: https://hl7.org/fhir/R4/provenance-definitions.html#Provenance.agent
// Release: R4
// Version: 4.0.1
// Last generated: 2026-04-18T17:41:32.609Z

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
  /** The individual, device, or organization for whom the change was made. */
  onBehalfOf?: Reference;
  /** The function of the agent with respect to the activity. The security role enabling the agent with respect to the activity. */
  role?: Array<CodeableConcept>;
  /** The participation the agent had with respect to the activity. */
  type?: CodeableConcept;
  /** The individual, device or organization that participated in the event. */
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
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "Device",
          "Organization",
          "Patient",
          "Practitioner",
          "PractitionerRole",
          "RelatedPerson",
        ],
        ctx,
      );
      validateReferenceTarget(
        record.who,
        "who",
        [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
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
