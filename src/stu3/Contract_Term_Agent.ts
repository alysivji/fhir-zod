// Profile: http://hl7.org/fhir/StructureDefinition/Contract
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-17T23:33:01.916Z

import * as z from "zod";
import { validateReferenceTarget } from "../shared/fhir-reference-validation";
import type { BackboneElement } from "./BackboneElement";
import { BackboneElementSchemaInternal } from "./BackboneElement";
import type { CodeableConcept } from "./CodeableConcept";
import { CodeableConceptSchemaInternal } from "./CodeableConcept";
import type { Reference } from "./Reference";
import { ReferenceSchemaInternal } from "./Reference";

/** An actor taking a role in an activity for which it can be assigned some degree of responsibility for the activity taking place. */
export interface Contract_Term_Agent extends BackboneElement {
  /** The agent assigned a role in this Contract Provision. */
  actor: Reference;
  /** Role played by the agent assigned this role in the execution of this Contract Provision. */
  role?: Array<CodeableConcept>;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Contract_Term_AgentSchemaInternal =
  BackboneElementSchemaInternal.extend({
    actor: z.lazy(getReferenceSchema),
    role: z.lazy(getCodeableConceptSchema).array().optional(),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.actor,
        "actor",
        [
          "http://hl7.org/fhir/StructureDefinition/Contract",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Substance",
        ],
        [
          "Contract",
          "Device",
          "Group",
          "Location",
          "Organization",
          "Patient",
          "Practitioner",
          "RelatedPerson",
          "Substance",
        ],
        ctx,
      );
    });

export const Contract_Term_AgentSchema =
  Contract_Term_AgentSchemaInternal as z.ZodType<Contract_Term_Agent>;
