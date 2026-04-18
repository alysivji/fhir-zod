// Source: https://hl7.org/fhir/STU3/consent-definitions.html#Consent.except.actor
// Profile: http://hl7.org/fhir/StructureDefinition/Consent
// Release: STU3
// Version: 3.0.2
// Last generated: 2026-04-18T17:27:29.190Z

import * as z from "zod";
import { validateReferenceTarget } from "../../shared/fhir-reference-validation";
import type { BackboneElement } from "../BackboneElement";
import { BackboneElementSchemaInternal } from "../BackboneElement";
import type { CodeableConcept } from "../CodeableConcept";
import { CodeableConceptSchemaInternal } from "../CodeableConcept";
import type { Reference } from "../Reference";
import { ReferenceSchemaInternal } from "../Reference";

/** Who or what is controlled by this Exception. Use group to identify a set of actors by some property they share (e.g. 'admitting officers'). */
export interface Consent_Except_Actor extends BackboneElement {
  /** The resource that identifies the actor. To identify a actors by type, use group to identify a set of actors by some property they share (e.g. 'admitting officers'). */
  reference: Reference;
  /** How the individual is involved in the resources content that is described in the exception. */
  role: CodeableConcept;
}

const getCodeableConceptSchema = (): z.ZodType<CodeableConcept> =>
  CodeableConceptSchemaInternal as z.ZodType<CodeableConcept>;
const getReferenceSchema = (): z.ZodType<Reference> =>
  ReferenceSchemaInternal as z.ZodType<Reference>;

/** @internal */
export const Consent_Except_ActorSchemaInternal =
  BackboneElementSchemaInternal.extend({
    reference: z.lazy(getReferenceSchema),
    role: z.lazy(getCodeableConceptSchema),
  })
    .strict()
    .superRefine((value, ctx) => {
      const record = value as Record<string, unknown>;
      validateReferenceTarget(
        record.reference,
        "reference",
        [
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
        [
          "CareTeam",
          "Device",
          "Group",
          "Organization",
          "Patient",
          "Practitioner",
          "RelatedPerson",
        ],
        ctx,
      );
    });

export const Consent_Except_ActorSchema =
  Consent_Except_ActorSchemaInternal as z.ZodType<Consent_Except_Actor>;
